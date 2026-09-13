# Agent Development Log

## Coaster Carnage — Game Design from Everyday Life

---

### \[RAW INTERACTION LOG\] — Session 001

**Date:** 2026-06-11 **Stage:** Project Initialization & Core Systems Scaffold

**What happened:**

- Designer uploaded the initial game design document: a diagram titled "Coaster Carnage" including game world flow, player input mappings, game resources, life experience narrative, and data definitions.  
- AI read and interpreted the full design doc:  
  - Life experience: the fear and adrenaline of riding a rollercoaster for the first time; the "what if the worst happened?" fantasy.  
  - Core loop: survive a coaster ride (3-min timer), collect 10 points, don't lose all 5 HP → unlock next (harder) coaster.  
  - Three data variables: HP (int), PT (int), RT (float).  
  - Player inputs: `D` \= Dodge (HP \+0), `Space` \= Collect coin (PT \+N).  
  - Events: obstacle/vomit/bird hits player (HP \-1).  
  - Win: HP \>= goal AND RT \> 0\. Lose: HP \<= 0 OR RT \<= 0\.  
- Platform selected: Unity C\#.

**Files created:** | File | Purpose | |---|---| | `GameManager.cs` | Singleton. Owns HP/PT/RT. Enforces win/lose/restart logic each frame. | | `PlayerController.cs` | Handles D (dodge) and Space (collect) input. Collision with Obstacle tag → HP \-1. | | `Obstacle.cs` | Hazard behaviour: Straight, Homing (birds), Static. Deals damage on contact. | | `UIManager.cs` | HUD: heart display, point counter, countdown timer, win/lose screens. | | `ObstacleSpawner.cs` | Spawns obstacles and coins on timer. Scales difficulty by coasterLevel. |

**Design decisions made / assumptions:**

- Dodge grants a brief invincibility window (not in original diagram — added for game feel; easy to remove).  
- Coin collection is auto-collect on touch; Space-key model is noted as an alternative in code comments.  
- ObstacleSpawner supports multiple obstacle prefab types so birds, vomit, and debris can all be assigned.  
- Difficulty scaling: each coaster level reduces spawn interval by 15% (tuneable in Inspector).

**Open questions for next session:**

- Should the player move freely (2D top-down) or ride a fixed track (side-scroll runner)?  
- How many coaster levels total?  
- Is the Space key for collecting coins auto-collect-on-touch, or must the player press Space near a coin?

---

### \[RAW INTERACTION LOG\] — Session 002

**Date:** 2026-06-11 **Stage:** Bug Fix — Class Name Conflict

**Error reported:**

CS0101: The namespace '\<global namespace\>' already contains a definition for 'PlayerController'

CS0111: Type 'PlayerController' already defines a member called 'Update' with the same parameter types

Assets/Settings/PlayerController.cs(15,14) and (41,10)

**Cause:** Unity's project already contained a `PlayerController` class (auto-generated in `Assets/Settings/`). C\# does not allow two classes with the same name in the same global namespace.

**Fix:** Renamed class from `PlayerController` → `CoasterPlayerController` in `PlayerController.cs`.

**Action required from designer:**

- Delete old `PlayerController.cs` from `Assets/Scripts/`  
- Replace with updated file (class is now `CoasterPlayerController`)  
- Re-attach script to Player GameObject in the Inspector

---


### \[RAW INTERACTION LOG\] — Session 003

**Date:** 2026-06-16  **Stage:** Bug Investigation — Heart Animation & Coin/Points Display

**What happened:**

- Designer reported two active bugs in the Unity C# project:
  1. Heart animation is not being deleted after the player gets hit (HP -1 event).
  2. Coins/points are not appearing on screen during gameplay.
- AI provided debugging analysis for both issues.

**Bug 1: Heart animation not deleting after player is hit**

Likely causes identified:
- The `Destroy()` call is never reached — a failed condition check (wrong variable, wrong object reference) silently skips deletion.
- Deletion is being called on a copy/clone of the heart object rather than the original instance.
- The animation plays to completion but the GameObject is never despawned — animation state and object lifetime are managed separately and not linked.
- A null or broken reference causes the script to error out before reaching the destroy logic.

Recommended checks:
- Confirm `UIManager.cs` holds a direct reference to each heart GameObject (e.g., a `List<GameObject> hearts`).
- Ensure `hearts[currentIndex]` is the actual scene instance, not a prefab reference.
- Call `Destroy(hearts[HP])` (or equivalent) immediately after HP is decremented in `GameManager.cs`.
- Add a `Debug.Log()` before the Destroy call to confirm the code path is being reached.

**Bug 2: Coins/points not showing during gameplay**

Likely causes identified:
- The UI Canvas is rendering behind the game world (incorrect Sort Order or Layer assignment).
- The score variable (`PT`) is updated in `GameManager.cs` but `UIManager.cs` is not refreshing the display text each frame or on change.
- The font or TextMeshPro asset failed to load silently, so the text component renders nothing.
- The HUD GameObject is inactive or the Canvas is disabled during the gameplay scene.

Recommended checks:
- In the Inspector, confirm the Canvas `Render Mode` is set to **Screen Space — Overlay**.
- Verify `UIManager.cs` calls `pointsText.text = GameManager.Instance.PT.ToString()` every `Update()` or via an event when PT changes.
- Check that the TextMeshPro or UI Text component has a valid font asset assigned.
- Confirm the HUD Canvas GameObject is active in the scene hierarchy during play mode.

**Open questions for next session:**

- Which specific script handles heart removal — `UIManager.cs` or `GameManager.cs`?
- Is the points display using Unity UI (Text) or TextMeshPro?
- Has the designer confirmed whether `Debug.Log` output appears when a hit is registered?

---
