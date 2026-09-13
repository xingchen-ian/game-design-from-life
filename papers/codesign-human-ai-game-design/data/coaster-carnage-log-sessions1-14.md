# Agent Development Log
## Coaster Carnage — Game Design from Everyday Life

---

### [RAW INTERACTION LOG] — Session 001
**Date:** 2026-06-11
**Stage:** Project Initialization & Core Systems Scaffold

**What happened:**
- Designer uploaded the initial game design document: a diagram titled "Coaster Carnage" including game world flow, player input mappings, game resources, life experience narrative, and data definitions.
- AI read and interpreted the full design doc:
  - Life experience: the fear and adrenaline of riding a rollercoaster for the first time; the "what if the worst happened?" fantasy.
  - Core loop: survive a coaster ride (3-min timer), collect 10 points, don't lose all 5 HP → unlock next (harder) coaster.
  - Three data variables: HP (int), PT (int), RT (float).
  - Player inputs: `D` = Dodge (HP +0), `Space` = Collect coin (PT +N).
  - Events: obstacle/vomit/bird hits player (HP -1).
  - Win: HP >= goal AND RT > 0. Lose: HP <= 0 OR RT <= 0.
- Platform selected: Unity C#.

**Files created:**
| File | Purpose |
|---|---|
| `GameManager.cs` | Singleton. Owns HP/PT/RT. Enforces win/lose/restart logic each frame. |
| `PlayerController.cs` | Handles D (dodge) and Space (collect) input. Collision with Obstacle tag → HP -1. |
| `Obstacle.cs` | Hazard behaviour: Straight, Homing (birds), Static. Deals damage on contact. |
| `UIManager.cs` | HUD: heart display, point counter, countdown timer, win/lose screens. |
| `ObstacleSpawner.cs` | Spawns obstacles and coins on timer. Scales difficulty by coasterLevel. |

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

### [RAW INTERACTION LOG] — Session 002
**Date:** 2026-06-11
**Stage:** Bug Fix — Class Name Conflict

**Error reported:**
```
CS0101: The namespace '<global namespace>' already contains a definition for 'PlayerController'
CS0111: Type 'PlayerController' already defines a member called 'Update' with the same parameter types
Assets/Settings/PlayerController.cs(15,14) and (41,10)
```

**Cause:** Unity's project already contained a `PlayerController` class (auto-generated in `Assets/Settings/`). C# does not allow two classes with the same name in the same global namespace.

**Fix:** Renamed class from `PlayerController` → `CoasterPlayerController` in `PlayerController.cs`.

**Action required from designer:**
- Delete old `PlayerController.cs` from `Assets/Scripts/`
- Replace with updated file (class is now `CoasterPlayerController`)
- Re-attach script to Player GameObject in the Inspector

---

### [RAW INTERACTION LOG] — Session 003
**Date:** 2026-06-11
**Stage:** Major Architecture Change — Spawner Removed, Cart-Forward Model Adopted

**What changed:**
Designer made a significant design decision: instead of obstacles moving toward a stationary player, the **cart now moves forward through a pre-built track**. Coins and obstacles are placed directly in the Unity scene editor by the designer. No procedural spawning.

**Design decisions:**
- Camera follows the cart (not fixed)
- Track is one long level designed manually in the scene editor
- Player presses Space to collect coins on overlap (not auto-collect)
- D key still dodges with a brief invincibility window

**Files removed:**
- `ObstacleSpawner.cs` — no longer needed

**Files replaced / added:**
| File | Change |
|---|---|
| `CartController.cs` | Replaces `PlayerController.cs`. Cart moves forward automatically. Player steers laterally and dodges. |
| `CoinPickup.cs` | New. Attach to every coin in the scene. Collected on Space press overlap. |
| `CameraFollow.cs` | New. Attach to Main Camera. Smoothly follows the cart. |
| `Obstacle.cs` | Simplified. Obstacles are now static — no movement logic needed. |

**Unity setup changes required:**
- Delete `ObstacleSpawner.cs` from project
- Replace `PlayerController.cs` with `CartController.cs` on the Cart GameObject
- Attach `CameraFollow.cs` to Main Camera, drag Cart into the Target field
- Place Coin and Obstacle GameObjects directly in the scene editor
- Tag coins as `Coin`, obstacles as `Obstacle`

---

### [RAW INTERACTION LOG] — Session 004
**Date:** 2026-06-11
**Stage:** Bug Fix — Cart Flying Off Screen (Wrong Axis)

**Bug reported:** Cart was flying away immediately on Play.

**Cause:** `CartController.cs` was applying forward speed on the **Y axis** (`new Vector2(lateralVel, currentSpeed)`), but the track runs **left to right**, so forward should be the **X axis**.

**Fix:**
- `CartController.cs`: swapped velocity to `new Vector2(currentSpeed, lateralVel)` — X is now forward, Y is lateral dodge
- `CartController.cs`: changed lateral clamp from `startX` to `startY` so up/down sway stays within track bounds
- `CameraFollow.cs`: updated to only follow on X axis, keeping Y fixed so camera doesn't bounce vertically

---

### [REFLECTION LOG] — Bug Fix Stage
**Date:** 2026-06-11
**Covering:** Sessions 002 & 004

---

**What happened technically:**

Two bugs were caught and fixed in the early coding stage:

**Bug 1 — Class Name Conflict (Session 002)**
The first error hit immediately after importing scripts into Unity. Unity's auto-generated project files already contained a class called `PlayerController`, so our script clashed with it at compile time. The fix was straightforward — rename our class to `CoasterPlayerController` — but it revealed an important workflow note: Unity projects come with pre-existing code in `Assets/Settings/` that can silently conflict with new scripts. Going forward, all new classes in this project should use a `Coaster` prefix if there's any risk of collision with Unity built-ins.

**Bug 2 — Cart Flying Off Screen (Session 004)**
After the architecture shift to a cart-forward model, the cart immediately flew off screen on Play. The cause was an axis mismatch: the script was pushing the cart on the Y axis (upward), but the track runs left to right on the X axis. The fix was swapping the velocity vector from `new Vector2(lateralVel, currentSpeed)` to `new Vector2(currentSpeed, lateralVel)`. The lateral clamp and `CameraFollow` script were also updated to match the correct axis.

---

**Does the game still express the original life experience?**

The core fear of the rollercoaster — rushing forward with no control over speed, only able to react — is intact. Both bugs were purely technical and didn't compromise the design intent. The cart-forward model actually strengthens the emotional core: the player is not steering the ride, the ride is taking them. That feeling of being carried along, slightly out of control, is exactly what the original life experience description was about.

---

### [RAW INTERACTION LOG] — Session 005
**Date:** 2026-06-11
**Stage:** Level 2 Mechanics — Bird Poop Drop & Jumping Crab

**What happened:**
Designer reported Level 1 is complete and Level 2 is nearly done. Two new mechanics needed for Level 2:
1. Bird poop drops from above — player must duck to avoid it
2. Crab bounces on track — player must dodge sideways to avoid it

**Files created:**
| File | Purpose |
|---|---|
| `BirdPoopDropper.cs` | Attach to Bird GameObject above track. Detects cart approaching, waits a beat, then drops poop projectile downward. |
| `PoopProjectile.cs` | Attach to Poop prefab. Deals HP -1 only if player is NOT ducking. Checks `CartController.IsDucking`. |
| `JumpingCrab.cs` | Attach to Crab GameObject on track. Bounces up/down in place using sine wave. Player dodges with D key. |

**Files updated:**
| File | Change |
|---|---|
| `CartController.cs` | Added duck mechanic: hold S or Down Arrow to duck. Cart sprite squashes visually. Exposes `IsDucking` and `IsInvincible` as public properties for other scripts to read. Poop collision skipped here — handled by `PoopProjectile` directly. |

**New player controls:**
- `S` / `Down Arrow` : Duck (hold) — avoids bird poop
- `D` : Dodge — avoids crabs and obstacles
- `Space` : Collect coin

**Levels in progress:**
- Level 1: ✅ Complete
- Level 2: 🔧 Nearly done (bird poop + crab mechanics added)
- Level 3: 🔲 Bats, jumping spiders, fly between tracks
- Level 4: 🔲 Rat + cheese throw animation, trash, flying between tracks

---

### [RAW INTERACTION LOG] — Session 006
**Date:** 2026-06-11
**Stage:** Script Sync — Designer Uploaded Current Project State

**What happened:**
Designer shared the actual current versions of all scripts in the project. These differ from the AI-generated originals — the designer made several independent changes and improvements during development. Log updated to reflect the true current state of the codebase.

**Current scripts and what changed from originals:**

| File | Key Changes from Original |
|---|---|
| `GameManager.cs` | `pointGoal` changed from 10 → 5. Timer update now calls `UIManager.UpdateTimerDisplay()` directly each frame instead of via `RefreshHUD()`. Cleaner null checks throughout. |
| `UIManager.cs` | Hearts now hide/show (`SetActive`) instead of swapping sprites. Split into three separate update methods: `UpdateTimerDisplay()`, `UpdateHeartsDisplay()`, `UpdatePointsDisplay()`. Added null warning for `pointsText`. |
| `CoinPickup.cs` | Added spin + scale-down collect animation via coroutine. Added `AudioClip` support for collect sound. Much more polished than original. |
| `CartController.cs` | Dodge now has a two-phase sprite animation (`spriteAnimation1` → `spriteAnimation2`). Hit feedback uses a flicker coroutine (sprite toggles on/off). `TakeHit()` is now a public method called by `Obstacle.cs` directly instead of via collision tag check. Removed duck mechanic (designer chose not to use it). `IsDodging()` exposed as a method. |
| `CameraFollow.cs` | Added `offsetX` (camera sits behind cart), `offsetY`, smooth speed, and orthographic size control. Much more tunable than original. |
| `Obstacle.cs` | Now calls `cart.TakeHit()` directly on the CartController instead of going through GameManager. Added debug logging. |
| `Bird-Animation.cs` (new) | Simple two-sprite swap animator (`SpriteSwap` class). Used for bird flapping animation. |
| `InstructionScreen.cs` (new) | Pauses game on load (`Time.timeScale = 0`), shows instruction panel, resumes on Space press. Designer added this independently. |

**Scripts no longer in use:**
- `BirdPoopDropper.cs` — designer chose a different approach for bird mechanic
- `PoopProjectile.cs` — same
- `JumpingCrab.cs` — not yet confirmed in use

**Notes:**
- The duck mechanic (S key) added in Session 005 was removed by the designer — `CartController` no longer has `IsDucking`
- Obstacle collision is now routed through `Obstacle.cs → CartController.TakeHit()` rather than `CartController.OnTriggerEnter2D`
- `BirdPoopDropper` and `PoopProjectile` from Session 005 may need to be rewritten to match this new collision routing if bird poop is still needed

---

### [RAW INTERACTION LOG] — Session 007
**Date:** 2026-06-11
**Stage:** Level 4 Mechanic — Rat Cheese Throw

**What happened:**
Designer requested a rat enemy that throws cheese left toward the oncoming cart. Player must press D (dodge) to get invincibility frames and avoid the cheese.

**Design confirmed:**
- Rat sits ON the track — cart runs into it
- Rat itself is also a hazard (Obstacle.cs on same object)
- On cart approach, rat plays windup animation then throws cheese LEFT
- Throws multiple pieces of cheese with a gap between each
- Cheese flies left at constant speed, disappears off screen

**File created:**
| File | Purpose |
|---|---|
| `RatThrower.cs` | Attach to Rat GameObject. Detects cart, shows windup sprite, throws cheese prefab left. Supports multi-throw with configurable delay between throws. Three-sprite animation: idle → windup → throw. |

**Cheese prefab setup (designer must create):**
- Sprite: cheese image
- `Obstacle.cs` attached
- `Rigidbody2D` (gravity scale 0)
- `Collider2D` Is Trigger
- Tag: `Obstacle`

**Rat GameObject setup:**
- `RatThrower.cs` attached
- `Obstacle.cs` attached (rat body itself damages cart)
- `Collider2D` Is Trigger
- Tag: `Obstacle`
- Three sprites assigned in Inspector: idle, windup, throw

---

### [RAW INTERACTION LOG] — Session 008
**Date:** 2026-06-11
**Stage:** Polish Fix — Pause Game on Win/Lose/Instruction Screens

**What happened:**
Designer requested the game freeze when the instruction, win, or lose screen appears so the cart doesn't keep moving in the background.

**Root cause:**
`InstructionScreen.cs` already used `Time.timeScale = 0` correctly, but `UIManager.ShowWin()` and `UIManager.ShowLose()` did not — the game kept running behind the end screens.

**Files updated:**
| File | Change |
|---|---|
| `UIManager.cs` | Added `Time.timeScale = 0f` to `ShowWin()` and `ShowLose()`. Added `Time.timeScale = 1f` to the restart button listener so time resumes before scene reloads. |
| `GameManager.cs` | Added `Time.timeScale = 1f` to `ResetState()` as a safety net in case restart is triggered without going through the UI button. |

**Pause behaviour now:**
- Instruction screen appears → `Time.timeScale = 0` (from `InstructionScreen.cs`) → press Space → `Time.timeScale = 1`
- Win screen appears → `Time.timeScale = 0`
- Lose screen appears → `Time.timeScale = 0`
- Restart button pressed → `Time.timeScale = 1` → scene reloads

---

### [RAW INTERACTION LOG] — Session 009
**Date:** 2026-06-11
**Stage:** New Mechanics — Track Shift (W/S) & Fly Arc (F key)

**What happened:**
Designer requested two new movement mechanics:
1. W/S keys shift the cart slightly up/down on the track to dodge new obstacles
2. F key launches the cart in an arc to fly to a broken next track — missing = instant death/restart

**Design confirmed:**
- W/S = small nudge up/down, clamped to `shiftLimit` units from start Y
- F = single press launch arc using physics gravity
- Landing on next track: cart must hit a collider tagged `TrackLanding`
- Missing the track: cart hits collider tagged `DeathZone` → instant lose screen

**Files updated:**
| File | Change |
|---|---|
| `CartController.cs` | Added W/S track shift (replaces old Vertical axis lateral movement). Added F key fly arc using `flyGravity` and `flyLaunchForce`. `LandOnTrack()` resets gravity and updates `startY` to new track. `OnTriggerEnter2D` handles `TrackLanding` and `DeathZone` tags. |
| `GameManager.cs` | Added `TriggerFallDeath()` — sets gameOver and shows lose screen with fall message. |
| `UIManager.cs` | `ShowLose()` now takes a `fellOffTrack` bool — shows "You fell off the track!" message for fall deaths. |

**New Unity setup required:**
- Add a collider (Is Trigger) to the START of each next track → tag it `TrackLanding`
- Add a collider (Is Trigger) to any gap/void below broken tracks → tag it `DeathZone`
- Add both tags in Edit → Project Settings → Tags & Layers

**Full player controls:**
- `W` / `↑` : Shift up on track
- `S` / `↓` : Shift down on track
- `D`       : Dodge (invincibility frames)
- `F`       : Fly arc to next track
- `Space`   : Collect coin

---

### [RAW INTERACTION LOG] — Session 010
**Date:** 2026-06-11
**Stage:** Bug Fix — Fly and Dodge Blocked After Hit

**Bugs reported:**
1. Player cannot fly (F key) after getting hit by an obstacle
2. Player can no longer dodge (D key)

**Root causes:**
1. `isInvincible` was a single shared flag used by BOTH hit damage AND dodge. When the cart got hit, `isInvincible = true` blocked the fly input check, preventing flight during the invincibility window.
2. The dodge `dodgeLateralBoost` was being overridden by the W/S `shiftInput * shiftSpeed` calculation — both were writing to the same `lateralVel` variable and the shift was winning.

**Fixes:**
- Split invincibility into two separate flags:
  - `isHitInvincible` — only set when taking damage, drives flicker
  - Dodge and fly no longer check or set `isHitInvincible` — they are always available to the player
- Fixed dodge lateral boost: dodge now correctly applies `shiftInput * dodgeLateralBoost` independently, not overridden by shift speed
- Added `rb.linearVelocity y = 0` on landing to prevent bounce after track jump

**Also clarified for designer:**
- `TrackLanding` collider = thin strip at the START of the next track, same height as track surface
- When cart hits it during flight, it snaps to that Y and continues forward normally

---

### [RAW INTERACTION LOG] — Session 011
**Date:** 2026-06-11
**Stage:** Bug Fix — W/S Removed, TrackLanding Not Catching Cart

**Bugs reported:**
1. Designer wants W and S keys to have no effect
2. Cart flies but TrackLanding collider is not catching the cart / player falls through

**Root causes:**
1. W/S shift mechanic intentionally removed per designer request
2. TrackLanding was only calling `LandOnTrack()` when `isFlying == true` — if timing was slightly off and the flag wasn't set correctly, the landing would be missed. Also the `isFlying` check on the trigger was too strict.

**Fixes:**
- `HandleGroundMovement()` now sets velocity to `new Vector2(currentSpeed, 0f)` — pure forward, no lateral input at all. W/S/Up/Down are explicitly ignored.
- `OnTriggerEnter2D` for `TrackLanding` now calls `LandOnTrack()` regardless of `isFlying` state — removed the `&& isFlying` guard so the landing always triggers
- Added debug log on TrackLanding hit so designer can confirm it's firing in Console
- `LandOnTrack()` kills vertical velocity and snaps Y cleanly to track surface

**Controls now:**
- `D`     : Dodge
- `F`     : Fly arc
- `Space` : Collect coin
- W/S/Up/Down : No effect

---

### [RAW INTERACTION LOG] — Session 012
**Date:** 2026-06-11
**Stage:** Removed Fly Mechanic — Added Next Level Button & LevelManager

**What happened:**
The TrackLanding fly mechanic was not working after multiple fix attempts and was cut entirely by designer decision. Replaced with a Next Level button on the win screen that loads the next Unity scene.

**Files removed / simplified:**
- Fly mechanic fully removed from `CartController.cs`
- `TrackLanding` and `DeathZone` tags no longer needed

**Files created:**
| File | Purpose |
|---|---|
| `LevelManager.cs` | Singleton. `LoadNextLevel()` loads next scene by build index. `RestartLevel()` reloads current scene. Both restore `Time.timeScale = 1f` first. |

**Files updated:**
| File | Change |
|---|---|
| `CartController.cs` | Fly mechanic removed. Now only handles forward movement, dodge, hit invincibility, coin collection. Clean and simple. |
| `UIManager.cs` | Win screen now has `nextLevelButton` field wired to `LevelManager.LoadNextLevel()`. Restart button wired to `LevelManager.RestartLevel()`. |

**Unity setup required:**
1. Add empty GameObject to each scene → attach `LevelManager.cs`
2. Go to File → Build Settings → drag all scenes in order (Level 1 = index 0, Level 2 = index 1, etc.)
3. On Win screen Canvas: add a Button named "Next Level" → wire its OnClick to `LevelManager → LoadNextLevel()`
4. On Lose screen Canvas: wire Restart button OnClick to `LevelManager → RestartLevel()`

---

### [RAW INTERACTION LOG] — Session 013
**Date:** 2026-06-24
**Stage:** Bug Fix — Next Level Button Not Working

**Bug reported:** Next Level button visible in scene but not functioning.

**Root cause:** `UIManager.cs` had no `nextLevelButton` field — only `restartButton` existed. The button in the scene had nothing to connect to in code.

**Fix:** Added `nextLevelButton` Button field to UIManager. OnClick listener loads next scene by build index + 1, restores `Time.timeScale = 1f`, and calls `GameManager.ResetState()` before loading. Scene loading is self-contained in UIManager — no separate LevelManager needed.

**Unity steps still required:**
1. Replace UIManager.cs in project
2. In Inspector on UIManager, drag the Next Level button into the new `Next Level Button` slot
3. Confirm all scenes are in File → Build Settings in correct order

---

### [RAW INTERACTION LOG] — Session 014
**Date:** 2026-06-24
**Stage:** Tweak — Rat Body No Longer Damages Player

**Change requested:**
Touching the rat body should NOT damage the player. Only the cheese projectile should deal damage.

**Fix — no code change needed:**
- In Unity, select the Rat GameObject → remove the `Obstacle.cs` component from it
- Keep `Obstacle.cs` on the Cheese prefab only
- The rat can still have a Collider2D for visual purposes but without Obstacle.cs it won't call `TakeHit()`

**Also fixed in this session:**
- `CartController.cs` dodge now properly gives invincibility frames via `isDodgeInvincible` flag
- Dodge duration increased from 0.3s → 0.5s so player can feel it
- Dodge can be used repeatedly — timer fully resets each time

---
