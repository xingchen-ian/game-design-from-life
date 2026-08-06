# System Design Summaries

> Extracted from Canva screenshots collected on 2026-06-18.
> These summaries preserve the project-level system diagrams and descriptions for later comparison with repositories and `agent-development-log.md` files.

## Source Files

| Project ID | Screenshot |
| --- | --- |
| P00 | `course-tracking/canva-screenshots/P00-anxiety-in-lines.png` |
| P01 | `course-tracking/canva-screenshots/P01-raine-gambler.png` |
| P02 | `course-tracking/canva-screenshots/P02-one-more-sip.png` |
| P03 | `course-tracking/canva-screenshots/P03-the-darkroom.png` |
| P04 | `course-tracking/canva-screenshots/P04-coaster-carnage.png` |
| P05 | `course-tracking/canva-screenshots/P05-cat-servant-simulator.png` |
| P06 | `course-tracking/canva-screenshots/P06-pre-made-panic.png` |

## P00 - Anxiety In Lines - Ian

**Matched repo:** `https://github.com/xingchen-ian/AnxietyInLines`

**Life experience:** Queuing creates anxiety because the queue moves unpredictably, people ahead may delay progress, and the player has limited control in a confined social space.

**Game experience:** The player waits in a line under a time limit. Slow NPCs create tension. The player can advance, negotiate, hold position, and choose lines while trying to secure a ticket.

**Core variables:**

- `NoP`: number of people ahead of the player.
- `GT`: remaining game time.
- `RWT`: random wait time for each NPC.

**Inputs and outcomes:**

- `Up`: move to next position, reducing `NoP`.
- `Y/N`: persuade others to let the player go first, reducing `NoP`.
- `Y/N`: allow another person to go first, increasing `NoP`.
- Win: `NoP == 0 && GT > 0`.
- Game over: `NoP > 0 && GT <= 0`.

**Initial analysis note:** Strong alignment between life experience, variable model, and mechanic. This is currently the clearest example of the v2.0 method's datalization step.

## P01 - 赌鬼 / Gambler - Raine

**Matched repo:** `https://github.com/raineraine-go-away/Raine-nyu-2026-summer-game.git`

**2026-06-30 update:** The current repo no longer matches this Canva concept. The repo's `agent-development-log.md` documents `无为（Wuwei）`, a five-element escape-room puzzle about over-effort and release through letting go. Treat the Canva `Gambler` diagram as an earlier or mismatched concept until Raine confirms the relationship.

**Life experience:** Not yet described in the screenshot.

**Game experience:** Not yet described in the screenshot.

**Core variables:**

- `RTR`: random toss result. Screenshot notes probabilities: yes = 50%, no = 25%, ? = 25%, surprise = 3%.
- `NoR`: number of rounds.
- `RS`: random skill, buff/debuff to `RTR`.
- `NpcHP`: NPC health points.
- `MeHP`: player health points.

**Inputs and outcomes:**

- `Space`: toss for `RTR`, changing HP by `+1`, `-1`, or `0`.
- `Q`: obtain new `RS`.
- `1/2/3/4/5`: use skills, changing `RTR` by `+1`, `-1`, `+2`, `-2`, or `0`.
- Win: `NpcHP = 0 && GT > 0`.
- Game over: player HP reaches `0` while `GT > 0`.
- Round loop continues for `NoR` rounds.

**Initial analysis note:** The system has clear variables and inputs, but the screenshot does not yet connect the gambling mechanic to a specific lived experience or core emotion. This needs the repo log or a student reflection to evaluate method alignment.

## P02 - One More Sip - Christina

**Matched repo:** `https://github.com/Christina0205/OneMoreSip.git`

**Life experience:** Drinking can feel relaxing after stress, but drinking too much makes it harder to stay in control. Drinking at school is prohibited.

**Game experience:** The player secretly finishes 2-4 bottles of alcohol while walking back to the dormitory. Higher drunk level makes control harder. The player avoids teachers, RAs, and students, drinks at checkpoints, and hides the bottle.

**Core variables:**

- `PP`: player position.
- `DL`: drunk level.
- `C`: caught state.

**Inputs and outcomes:**

- `A/D`: move.
- `Space`: drink, increasing `DL` by 5.
- `Shift`: hide wine bottle.
- Win: `PP = 100 && DL = 100 && C = false`.
- Game over: `C = false && PP = 100 && DL < 100; C = true`.

**Initial analysis note:** The design expresses a control-loss trajectory through `DL` and movement difficulty. The win/loss logic in the screenshot may need clarification because the game-over condition text mixes caught state and insufficient drunk level.

## P03 - The Darkroom / Long Exposure

**Matched repo folder:** `https://github.com/King-Raphael/26SM_Demo/tree/main/Assignment3/The%20Darkroom?authuser=0`

**Life experience:** Taking photos often fails to capture what the photographer actually saw. Photos may be too dark, too bright, or transformed through long exposure, where movement becomes visible as glowing traces.

**Game experience:** The player opens the shutter, moves as a light-form character, and leaves a glowing trail. When the shutter closes, the trail becomes an object in the level. Underexposed trails reveal hidden paths, balanced trails create stable platforms, and overexposed trails burn shadows or activate sensors.

**Core variables:**

- `ES`: exposure state. `0 = underexposed`, `1 = balanced`, `2 = overexposed`.
- `LT`: light trail, a list of recorded path points.
- `TD`: trail duration / trail object lifetime.
- `GT`: remaining game time.

**Inputs and outcomes:**

- `Space` hold: open shutter and enter light form.
- `WASD/Arrows`: move light form and record path points.
- Release `Space`: develop trail into a level object.
- `Q/E`: change exposure state.
- Win: reach exit door with `GT > 0`.
- Game over: `GT <= 0` or trail failed.

**Initial analysis note:** Very strong conversion from a life-world perceptual problem into a mechanic. This may be a useful case study for how a concrete sensory experience becomes a system rule.

## P04 - Coaster Carnage - Savanna

**Matched repo:** `https://github.com/syc9459-ui/Coaster-Carnage-.git`

**Life experience:** Riding a rollercoaster for the first time combines fear, adrenaline, hesitation, and curiosity. The project imagines a "what if the worst happened" version of the ride.

**Game experience:** The player enters a deadly rollercoaster with 5 health and 0 points. In 3 minutes, they collect 10 points without dying to unlock the next coaster. Obstacles include birds, vomit, and other hazards. Later coasters become harder.

**Core variables:**

- `HP`: health points.
- `PT`: points collected.
- `RT`: ride time.

**Inputs and outcomes:**

- `D`: dodge obstacle, preserving HP.
- `Space`: tap / collect coin, increasing `PT`.
- Event: obstacle or vomit hits player, decreasing `HP`.
- Win: `HP >= goal && GT > 0`.
- Lose: `HP <= goal` or `RT <= 0`.
- Restart: reset HP, points, and game time.

**Initial analysis note:** The emotional source is clear, but the system diagram may need a sharper distinction between fear/adrenaline and generic obstacle-dodging. The repo log should show whether the design preserves the first-ride emotion.

## P05 - Cat Servant Simulator

**Matched repo:** TBD

**Life experience:** Brushing a cat carries risk because the person does not know whether the cat is comfortable. If the cat is too comfortable or overstimulated, it may attack.

**Game experience:** The player pets and brushes different parts of the cat, deduces preferences from reactions, and uses a comb to groom it. Correct spots increase mood, wrong spots increase anger. If the cat becomes too satisfied, satisfaction converts into anger. The player should stop when the cat is happiest but has not attacked.

**Core variables:**

- `S`: satisfied value, from 0-100. If it exceeds 100, it turns into anger.
- `A`: anger value, from 0-10. If it reaches 10, the cat scratches the player.
- `P`: pass value, the satisfaction threshold needed to pass the game.
- `PGR`: perfect game range. Stopping within this range makes the cat fall asleep and gives an extra prize.
- `C`: coins. Passing a level gives coins based on grade; coins buy brushes and cat toys.

**Inputs and outcomes:**

- Left click: use hand to pet or brush the cat.
- Shift: switch between hand and brush.
- Win: `100 > S > P && A < 10`.
- Lose: `A > 10 || S < P`.
- Perfect game: `PGR(min) < S < PGR(max)`.

**Initial analysis note:** This is a strong uncertainty-and-threshold design. It has a clear emotional structure: care, risk, reading feedback, and stopping at the right moment. Repo information is still missing.

## P06 - Pre-Made Panic

**Matched repo:** TBD

**Life experience:** Running a small restaurant serving pre-made meals looks simple but becomes overwhelming when heating, plating, takeout orders, delivery riders, and last-minute customer requests all arrive at once. The pressure comes from concurrent tasks rather than any single task.

**Game experience:** The player juggles many tasks under a ticking clock. Tasks spawn on their own: dish plating, takeout orders, delivery riders, customer complaints, and incidents. The player chooses what to sacrifice because they cannot do everything. The player wins by keeping the kitchen under control until closing time.

**Core variables:**

- `CP`: customer patience.
- `PT`: pending tasks. New tasks spawn using `Random.Range(T1, T2)`.
- `GT`: game time.
- `MC`: mess count.

**Inputs and outcomes:**

- `Space`: serve / resolve a task, decreasing `PT`.
- `Y` or calm key: calm angry customer, increasing `CP`.
- Auto event timer: incident appears. If ignored, `PT + 1` and `MC + 1`.
- Win: `NoP == 0 && GT > 0`.
- Game over: `MC > limit` or `CP <= 0`.

**Initial analysis note:** Strong task-overload design and likely relevant to the method's "process and pressure" pathway. The screenshot uses `NoP` in the win state although the resources are `PT`, `CP`, `GT`, and `MC`; this may be a notation error to clarify later.
