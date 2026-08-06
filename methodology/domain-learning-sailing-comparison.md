# Sailing Domain Learning Answers: Comparison Table

> Source A: Google Form response by Ian, submitted 2026-07-05  
> Source B: `domain-learning-sailing-example-en.md`  
> Purpose: Compare two sailing examples for the `Domain Learning to Game System` framework.

---

## 1. Overall Comparison

| Dimension | Google Form Response | My Example Response | Main Difference | Design Value |
| --- | --- | --- | --- | --- |
| Starting point | A family member is learning sailing; the writer observes training and wants to understand sailing. | A beginner sailing lesson; the learner discovers that sailing is not like steering a car. | The Google response has a more real personal context; my response has a clearer learning incident. | Keep the personal family-observation context, but add one concrete failure moment. |
| Core beginner misunderstanding | Beginners think they should set the sail at 90 degrees to catch wind. | Beginners think sailing means steering directly toward the destination. | The Google response focuses on sail angle; my response focuses on route and wind relationship. | Both are useful: one is a technical misconception, the other is a system-level misconception. |
| Expert judgment | Experts confidently set the sail and avoid frequent unstable adjustments. | Experts read wind direction, sail angle, boat angle, route, drift, and target relation. | Google response has a strong intuitive idea: experts act confidently; my response gives more system details. | Combine them: expert judgment means stable adjustment based on wind, not constant guessing. |
| Core learning shift | Learn how to set the sail angle and control the ship intuitively. | Move from steering toward target to reading wind, adjusting sail, and planning a route. | Google response emphasizes intuitive control; my response emphasizes readable system structure. | The stronger statement would be: players learn to control the boat by reading wind and finding efficient sail/boat angles. |
| Feedback design | Boat slows down, boat moves out of control, boat movement changes with sail direction. | Sail flaps, speed drops, boat tilts, route drifts, target remains unreachable. | Google response captures real feedback but leaves some entries incomplete; my response organizes feedback signals more clearly. | Keep the user’s raw sailing feedback, then translate each into game feedback. |
| Variables | Move speed, sail angle, wind intensity, water speed, wind direction, destination. | Wind direction, wind strength, boat direction, sail angle, speed, drift, stability, time. | Google response already has the important variables; my response adds state and role in experience. | The Google answer is strong here; it needs typing and role explanation. |
| Challenge space | Changeable wind, ocean flow, hidden rocks, high water speed. | Side wind, upwind target, current, rocks, visibility, time pressure, progressive combinations. | Google response has good factors but challenge progression is incomplete; my response makes a clearer difficulty curve. | Keep hidden rocks and ocean flow; add a simple-to-complex order. |
| Prototype | Paper prototype; first learn steering, then move to destination. | Web/p5.js or paper prototype; side wind, upwind target, drifting channel. | Google response is more feasible for camp; my response is more system-complete. | For first class, paper prototype is better. For AI-agent later, convert it into a web prototype. |
| AI use | AI helps with code. | AI helps with variables, movement code, wind UI, sail feedback, level setup. | Google response is concise but too broad. | Specify exactly what AI should build, otherwise it may produce a generic boat game. |
| Research usefulness | Shows authentic thinking, mistakes, partial understanding, and unfinished design decisions. | Shows a polished target example. | Google response is better as real student/research evidence; my response is better as a model answer. | Use both: student responses reveal learning gaps; model answers show possible scaffolding. |

---

## 2. Step-by-Step Comparison

| Step | Google Form Response: Main Idea | My Example: Main Idea | Difference | Suggested Merge |
| --- | --- | --- | --- | --- |
| Step 1: Domain Learning Sample | Sailing comes from observing a family member’s sailing training. Beginners think sail should catch wind; first failure is not moving the boat where intended. | Sailing lesson; beginner realizes boat does not simply go where pointed. | Google response is more personally grounded; my response gives clearer “beginner failure” narrative. | Use the family training context, then describe a concrete scene: “The boat would not go where I wanted because wind, sail angle, and boat direction did not align.” |
| Step 2: Novice / Expert Difference | Beginners set sail at 90 degrees and adjust unstably; experts set sail confidently based on movement. | Beginners steer toward target; experts check wind and plan route/tacking. | Google response is about sail-control intuition; my response is about navigation logic. | Combine as two learning layers: first sail angle efficiency, then route planning. |
| Step 3: Skill Loop | Observe wind direction with wind flag and water movement; judge wind/water direction; control rudder and sail; adjust sail angle. | Observe wind, target, sail, speed, current, obstacles; judge direct route, sail efficiency, route change; adjust based on feedback. | Google response has the loop but it remains general. | Rewrite loop as: observe wind/water -> judge efficient angle and target relation -> adjust rudder/sail -> read speed/drift -> adjust route. |
| Step 4: Domain Feedback Table | Boat slows down; boat moves out of control; boat movement changes when sail direction changes. | Sail flaps, speed drops, boat tilts, route drifts, target unreachable. | Google response has authentic signals but incomplete game representation. | Make every feedback row answer four parts: signal / source / meaning / game expression. |
| Step 5: Data-Based Abstraction | Numbers: speed, sail angle, wind intensity, water speed, wind direction, destination. State answer is weak or repeated as “move speed.” Success: reach destination. Failure: time limit, boat sinks. | Numbers and states are separated; success/failure includes safe route, speed, time, obstacles. | Google response has good variable candidates but state modeling needs work. | Add states: efficient/inefficient sail, stable/unstable boat, safe/danger, drifting/on-course. |
| Step 6: Game System Graph Upload | Earlier answers contain graph material: sail angle -> movement speed; boat direction -> movement direction; reward by shipping goods. | The model graph would connect wind, sail, boat, target, current, rocks, actions, feedback, and states. | The original form asked separate questions; the revised form should ask for one uploaded graph plus a short explanation. | Ask students to upload a graph image showing how Step 1-5 become a connected system; shipping goods can remain the mission theme, but wind/sail/route feedback should be the learning system. |
| Step 7: Challenge Space Design | Strong factors: wind direction, wind strength, waves, current, time, equipment, ocean flow, hidden rocks. Challenge examples include changing wind + hidden rocks, high water speed + hidden rocks. | More structured challenge dimensions and combinations: side wind, upwind target, drifting channel, rocky gusts. | Google response has promising challenge material but not fully ordered. | Create a 3-level progression: stable wind -> changeable wind -> changeable wind + current + hidden rocks. |
| Step 8: Minimum Playable Prototype | Paper prototype; player learns steering and moving to destination. First mistake: setting sail angle to 90 degrees. | p5.js/web or paper; player adjusts sail and route through 2-3 challenges. | Google response is more feasible but needs clearer feedback and challenge scope. | Use paper first: wind cards, sail-angle dial, boat token, destination, current/rock cards. |
| Step 9: AI-Assisted Development | AI helps with code. | AI helps with boat movement, wind indicator, sail feedback, and level setup. | Google response is too broad to guide AI. | Prompt AI with specific variables: windDirection, sailAngle, boatDirection, boatSpeed, currentDirection, rocks. |
| Step 10: Playtesting and Reflection | Mostly blank in the current response. | Includes expected confusion, learning moment, domain judgment, feedback match, next changes, final statement. | Google response is unfinished after Step 9. | Add playtest questions after the paper prototype: Did players stop setting sail at 90 degrees? Did they use speed/drift feedback? |

---

## 3. Strongest Ideas From the Google Form Response

| Strong Idea | Why It Is Valuable | How To Use It |
| --- | --- | --- |
| Family member learning sailing | Gives the project a real-life source and personal motivation. | Use it in Step 1 as the authentic learning context. |
| “Cannot move the boat to the direction I want” | This is a clear beginner failure. | Make it the central failure moment of the design. |
| Sail angle is not simply 90 degrees | This is a concrete sailing misconception. | Turn it into the first playable lesson: “90 degrees is not always efficient.” |
| Experts adjust confidently instead of constantly changing sail | Captures the feel of expertise. | Translate into game goal: reduce unstable over-adjustment. |
| Wind direction + ocean flow + hidden rocks | Strong challenge-space material. | Use these as progressive challenge factors. |
| Paper prototype | Very suitable for summer camp. | Build with wind cards, boat token, sail-angle marker, current cards, and hidden rock tiles. |

---

## 4. Main Gaps In The Google Form Response

| Gap | Why It Matters | Suggested Fix |
| --- | --- | --- |
| Some answers repeat “move speed” instead of separating number/state/action. | The system structure becomes unclear. | Separate numbers, states, actions, and feedback. |
| Feedback table entries are incomplete. | Players learn through feedback; this is central to the method. | For each signal, specify source, meaning, and game expression. |
| Challenge progression stops after listing factors. | The prototype needs a learning curve. | Build 3 levels: stable wind, changing wind, wind + current + hidden rocks. |
| Prototype scope is not yet concrete. | Students need to know what to build first. | Define a 30-second paper prototype loop. |
| AI prompt is too broad. | “Code” alone may produce a generic boat game. | Ask AI for a specific system with named variables and feedback. |
| Playtest/reflection is blank. | Research evidence depends on what players actually learn. | Add 2-3 test questions after the first paper prototype. |

---

## 5. Suggested Integrated Version

This version combines the authenticity of the Google Form response with the structure of the model answer.

| Design Element | Integrated Answer |
| --- | --- |
| Domain | Sailing |
| Real source | I observed a family member learning sailing and became interested in how beginners learn to control the boat. |
| Beginner misunderstanding | Beginners think sailing means setting the sail to catch wind, often imagining a fixed 90-degree angle, and then steering the boat toward the destination. |
| First failure | The boat does not move where the beginner wants; it slows down, drifts, or becomes unstable. |
| Expert judgment | Experts read wind direction, water flow, boat direction, sail angle, and boat speed, then adjust calmly instead of constantly guessing. |
| Core learning shift | From “set sail and steer directly” to “read wind/water feedback and find an efficient relationship between sail, boat, and route.” |
| Core loop | Observe wind/water -> judge efficient sail and boat angle -> adjust rudder/sail -> read speed/drift/stability -> adjust route. |
| Key feedback | Boat speed, sail behavior, drift, instability, collision/sinking near hidden rocks. |
| Core variables | windDirection, windStrength, waterCurrent, sailAngle, boatDirection, boatSpeed, routeDrift, stability. |
| Challenge progression | Stable wind -> changing wind -> changing wind + current -> current + hidden rocks. |
| First prototype | Paper prototype with boat token, destination, wind direction card, sail-angle dial, current cards, and hidden rock tiles. |
| AI task | Later ask AI to implement the same variables and feedback in a simple web prototype. |

---

## 6. Paper Prototype Proposal Based On The Google Response

| Component | Paper Version |
| --- | --- |
| Boat | A token on a grid or simple map |
| Wind | A wind-direction card or arrow |
| Sail angle | A small dial or card showing current sail angle |
| Water flow | Current cards that push the boat sideways |
| Hidden rocks | Face-down tiles that create risk |
| Destination | A port or buoy |
| Feedback | Boat moves faster/slower, drifts, becomes unstable, or sinks |

### Three progressive challenges

| Challenge | Factors | What Players Learn |
| --- | --- | --- |
| Stable Wind Practice | stable wind + open water | 90 degrees is not always the answer; sail angle affects speed |
| Changing Wind | wind changes every round | players must observe and adjust, not set once |
| Current And Hidden Rocks | water flow + hidden rock tiles | route planning matters; speed alone is dangerous |

---

## 7. Short Evaluation

The Google Form response is better as **research data** because it shows a real designer’s partial understanding, wording uncertainty, and authentic learning focus. The model answer is better as **teaching scaffolding** because it is complete and organized.

For the summer camp, the best use is not to replace one with the other. Use the Google response to show students that early answers can be incomplete but meaningful. Then use the model answer to show how to develop those answers into a clearer game system.
