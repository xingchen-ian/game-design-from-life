# Student Project Progress and Research Value Summary

> Checked on 2026-06-30.
> Sources: GitHub repository file trees, available `agent-development-log.md` files, Canva system design summaries, and extracted PDF log text where needed.

## Overall Read

The course dataset is now useful as research material because it contains visible variation across projects:

- One instructor reference project with clear methodology alignment: `Anxiety In Lines`.
- One student project that changed direction from its original Canva concept: Raine's repo now documents `无为 / Wuwei`, not `赌鬼 / Gambler`.
- One project with strong implementation growth but weak process logging: `One More Sip`.
- One highly developed project with unusually rich process evidence: `The Darkroom`.
- One project with a concise but useful technical/reflection log: `Coaster Carnage`.
- Two Canva-only projects still missing repo links: `Cat Servant Simulator` and `Pre-Made Panic`.

This spread is valuable because it shows not only successful use of the v2.0 method, but also drift, uneven documentation, implementation gaps, and different AI collaboration patterns.

## Project Matrix

| ID | Project | Current Progress | Evidence Strength | Research Value |
| --- | --- | --- | --- | --- |
| P01 | Raine - `无为 / Wuwei` | Unity/Tuanjie escape-room puzzle with 3 scripts, 1 scene, 50 image assets, 2 audio assets, and 5 logged AI interactions. | Medium. Log is structured and specific, but original Canva concept no longer matches repo concept. | Strong for studying design direction change, AI inference, and how a student moves from system diagram to a different lived-experience frame. |
| P02 | Christina & Bella - `One More Sip` | Unity project with 17 scripts, 3 scenes, 18 images, 9 audio files. Implementation appears much further than the log. | Mixed. Repo has substantial code/assets, but `agent-development-log.md` currently records only initial setup. | Strong for studying the gap between artifact progress and process documentation. Also useful for control-loss mechanics. |
| P03 | Boyan - `The Darkroom` | Very advanced Unity project inside `26SM_Demo/Assignment3/The Darkroom`: 51 scripts, 3 scenes, 8 Markdown docs, 56 images, music, and 72 logged interactions. | Very strong. Log is extensive and records design critique, implementation, validation, sound, narrative, and documentation. | Best current case for a full research-through-design study. Strongest evidence for AI as design partner, systems builder, critic, and documentation collaborator. |
| P04 | Savanna - `Coaster Carnage` | Unity project with 5 scripts, 2 scenes, PDF log, and Markdown log under `Assets/`. Core scaffold implemented. | Medium-low. Log is readable and includes 4 sessions plus reflection, but the required root `agent-development-log.md` is PDF rather than Markdown; the Markdown copy is under `Assets/`. | Useful for studying early technical debugging, architecture change, and emotional alignment through reflection. |
| P05 | `Cat Servant Simulator` | Canva system design only. No repo matched yet. | Low. | Strong potential case for threshold/risk/overdoing mechanics once repo is found. |
| P06 | `Pre-Made Panic` | Canva system design only. No repo matched yet. | Low. | Strong potential case for overload, concurrent task pressure, and sacrifice choice once repo is found. |

## Detailed Notes

### P01 - Raine: From `Gambler` to `Wuwei`

The Canva board described `赌鬼 / Gambler`: random toss result, HP, rounds, and skills. The GitHub repo now documents a different project:

- Title: `无为（Wuwei） — A 2D Escape Room Puzzle Game`
- Life experience: being stuck in a rule system one did not design; release comes from stopping over-effort.
- Core emotion: quiet discomfort of over-effort and release through letting go.
- Core mechanic: five-element room exploration across walls/floor, moving through `FindRules → FollowRules → ChangeRules → DoNothing → Unfolded`.
- Evidence: 3 scripts, 1 scene, 50 images, 2 audio files, 5 logged interactions.

Research value:

- This is a high-value drift case. It shows either a concept replacement or a major reframing after the Canva stage.
- It can help answer: what happens when a student's final project no longer matches the submitted system design diagram?
- The log notes that AI inferred some life-experience and core-emotion fields from game content, not from confirmed student reflection. That is important evidence about AI's interpretive role.

Current concern:

- Need student confirmation: is `Wuwei` the current replacement for `Gambler`, or is the repo link still pointing to a different project?

### P02 - Christina & Bella: `One More Sip`

The repo now contains a much more developed Unity project than the log suggests:

- 17 C# scripts, including `GameManager`, `PlayerController`, `SipMechanic`, `DrunkEffectManager`, `NPCController`, `NpcAlert`, `PeeMinigame`, `AudioManager`, `EndScreen`, and UI/session scripts.
- 3 scenes/recovery scenes.
- 18 image assets and 9 audio assets.
- `agent-development-log.md` currently records only Interaction 01: concept/log initialization.

Research value:

- Strong artifact for studying "loss of control" as mechanics: drunk level, stealth, hiding, NPC detection, audiovisual effects.
- Also a strong documentation-gap case: the code/assets indicate significant development, but the process log does not record it.
- This helps refine course requirements: students may need periodic log checks, not just a final instruction to keep a log.

Current concern:

- Need updated log entries for implementation, debugging, AI usage, and reflection. Without them, this project is less useful for AI-collaboration analysis even though the artifact is promising.

### P03 - Boyan: `The Darkroom`

This is the most advanced and research-rich project:

- 51 C# scripts across Core, Player, World, UI, Level, and Editor.
- 72 interaction logs.
- Project documentation includes README, walkthrough, story concept, art direction, image prompts, and sources.
- Mechanics include exposure states, light trails, temporary terrain, sensors, doors, umbral barriers, procedural audio, narrative documentation, validation tooling, and level data.

Research value:

- Best current full case study for "life experience → system design → playable system → AI-assisted iteration."
- Strong evidence of AI as a collaborator beyond coding: design critique, adversarial review, sound design, narrative concept research, validator maintenance, and teaching/pacing improvements.
- Especially useful for a paper section on Research through Design, because the process log records design reasoning and implementation decisions at high resolution.

Current concern:

- Because the project is very AI-heavy and advanced, it should be analyzed carefully: distinguish student decisions from AI-proposed architecture and AI-generated refinement.

### P04 - Savanna: `Coaster Carnage`

The project has a compact Unity implementation:

- 5 C# scripts: `GameManager`, `PlayerController`, `Obstacle`, `ObstacleSpawner`, `UIManager`.
- 2 scenes.
- A PDF log and a Markdown log under `Assets/`.
- Log sessions record scaffold creation, class-name conflict, architecture change, axis bug, and reflection.

Important design shift:

- The AI initially scaffolded obstacle spawning.
- The student then changed the architecture to a cart-forward model with a prebuilt track.
- Reflection notes that this strengthens the original rollercoaster emotion because the player is carried forward and can only react.

Research value:

- Useful early-stage case for how technical debugging and architecture shifts can strengthen emotional alignment.
- The reflection is valuable because it explicitly asks whether the game still expresses the original life experience.

Current concern:

- Required log format is not ideal: root has PDF, Markdown is under `Assets/`.
- The repo still appears to include `ObstacleSpawner.cs`, even though the PDF log says it was removed. This needs verification in Unity or by reading the current script.

## Cross-Project Research Findings

### 1. The method works best when variables remain tied to a lived experience

`Anxiety In Lines`, `The Darkroom`, and parts of `One More Sip` show strong conversion from lived experience to variables:

- queue anxiety → `NoP`, `GT`, `RWT`
- photographic exposure → `ES`, `LT`, `TD`, `GT`
- losing control through drinking → `DL`, `C`, player movement/stealth

This supports the v2.0 claim that "datalization" is teachable.

### 2. The system diagram is not enough by itself

Raine's case shows that a project can diverge from the Canva design. Christina's case shows that a repo can progress far beyond the log. Savanna's case shows that implementation may contradict a previous log note.

Implication: the research archive needs three-way comparison:

1. Canva system design.
2. GitHub artifact.
3. Agent development log.

### 3. `agent-development-log.md` is highly valuable, but compliance varies

The logs are not equally useful:

- The Darkroom: extremely rich and analytically powerful.
- Raine: useful, structured, but includes AI-inferred concept fields.
- Coaster Carnage: useful but format/location inconsistent.
- One More Sip: currently too thin compared with implementation.

Implication: log quality should become a course assessment checkpoint.

### 4. AI's role differs sharply by project

Observed AI roles:

- Project auditor and documentation assistant: Raine, Christina.
- Full implementation and design partner: The Darkroom.
- Debugging and architecture refactoring assistant: Coaster Carnage.
- Possibly unrecorded implementation assistant: One More Sip.

This can become a research contribution: AI in game design education is not one role, but a shifting set of roles.

## Next Steps

1. Ask Raine to confirm whether `Wuwei` replaces the original `Gambler` concept.
2. Ask Christina & Bella to update `agent-development-log.md` with all implementation/debugging conversations after Interaction 01.
3. Ask Savanna to move or copy Markdown `agent-development-log.md` to repo root and clarify whether `ObstacleSpawner.cs` is still used.
4. Get repo links for `Cat Servant Simulator` and `Pre-Made Panic`.
5. Add a regular weekly checkpoint: each student must have at least one Raw Interaction Log entry per meaningful development session and one Reflection Log after each milestone.
