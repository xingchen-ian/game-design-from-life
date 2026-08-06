# Example Response: From Sailing Learning to Game System

> Use with `domain-learning-design-questions-en.md` or the Google Form version.  
> Domain: Sailing  
> Example focus: learning to read wind and plan a route, instead of simply steering toward the target.

---

## Step 1: Domain Learning Sample

1. **What domain do you want to choose?**  
   Sailing a small sailboat.

2. **Why do you know about this domain, or why do you want to learn it? What real situation connects you to it?**  
   I once joined a beginner sailing lesson. At first, I thought sailing was mainly about steering the boat like driving a car. During the lesson, I realized the boat does not simply go wherever I point it. The boat depends on wind direction, sail angle, boat angle, and speed.

3. **When beginners first enter this domain, what do they usually think is most important?**  
   Beginners usually think the most important thing is steering directly toward the destination.

4. **When did you, or a beginner you observed, first get stuck or clearly fail?**  
   I got stuck when the destination was upwind. I kept pointing the boat toward the target, but the boat slowed down and could not move forward well.

5. **After learning for a while, what did you begin to notice that you could not see before?**  
   I began to notice wind direction, the angle between the boat and the wind, the shape of the sail, whether the sail was flapping, and whether the boat was losing speed.

6. **What attracts you most about this domain?**  
   Judgment and environment. Sailing is interesting because the player must read an invisible force, the wind, through visible feedback from the boat, sail, and water.

---

## Step 2: Novice / Expert Difference

1. **What is the most common misunderstanding beginners have?**  
   Beginners think the boat should move directly toward the target if they steer correctly.

2. **When experts and beginners look at the same situation, how are their judgments different?**  
   A beginner sees the target and tries to steer straight toward it. An expert first checks the wind direction, then decides whether the target can be reached directly or whether the boat needs to tack in a zigzag route.

3. **What is the most important challenge in this domain?**  
   The most important challenge is the relationship between wind direction, boat direction, sail angle, and route planning.

4. **What action or decision do beginners most often get wrong?**  
   Beginners often point the boat too close to the wind and forget to adjust the sail angle. They also try to sail in a straight line when a zigzag route is needed.

5. **What signals do experts use to judge whether they are doing well?**  
   Experts use boat speed, sail shape, sail flapping, boat tilt, wind indicator direction, and whether the boat is drifting away from the planned route.

6. **Can you summarize the core learning shift in this domain in one sentence?**  
   Beginners think sailing means steering toward the target; experts know sailing means reading the wind and adjusting the boat, sail, and route in relation to it.

Example format:

```text
Beginners think: Sailing is mainly about steering the boat toward the destination.
Experts know: Sailing requires reading wind direction, adjusting sail angle, and planning a route that works with the wind.
```

---

## Step 3: Skill Loop

```text
Observe -> Judge -> Act -> Receive Feedback -> Adjust -> Become More Skilled
```

1. **What does the player need to observe?**  
   Wind direction, target direction, sail shape, boat speed, boat angle, water current, obstacles, and distance to the goal.

2. **What does the player need to judge?**  
   Whether the boat can reach the target directly, whether the sail angle is efficient, whether the boat is too close to the wind, and whether the route needs to change.

3. **What actions can the player take?**  
   Turn the boat left or right, adjust the sail angle, choose a route, tack to change direction, slow down, or avoid obstacles.

4. **How does the system give feedback on whether the player is doing well?**  
   The boat speeds up or slows down, the sail becomes smooth or flaps, the boat tilts, the route line drifts away from the goal, and a wind indicator shows the wind direction.

5. **How can the player adjust their next action based on feedback?**  
   If the sail flaps, the player adjusts the sail angle. If the boat slows down near the wind, the player turns away from the wind. If the boat cannot reach the upwind target directly, the player plans a zigzag route.

6. **After repeating the loop several times, what does the player become better at?**  
   The player becomes better at reading wind, choosing a workable angle, adjusting the sail, and planning a route instead of steering directly toward the goal.

---

## Step 4: Domain Feedback Table

| Feedback Signal | Where It Comes From | What It Tells the Player | How It Appears in the Game |
| --- | --- | --- | --- |
| Sail flaps | sail and wind | sail angle or boat angle is inefficient | sail animation shakes, flapping sound plays |
| Boat speed drops | boat movement | boat is pointed too close to wind or sail is poorly adjusted | speed bar drops, wake behind boat becomes smaller |
| Boat tilts strongly | wind force on sail | wind force is strong and the boat may become unstable | boat leans, warning color appears |
| Route drifts sideways | current or poor route planning | the player is not compensating for current or wind | ghost route line separates from planned route |
| Target remains unreachable | wind direction | the target is upwind and cannot be reached directly | direct path is marked red or blocked by wind cone |

Questions:

1. **Which feedback should appear immediately?**  
   Sail flapping, boat speed, and boat tilt should appear immediately because they help the player understand action-feedback relationships.

2. **Which feedback should appear later, so the player has to discover it?**  
   Route drift should appear over several seconds, because the player should learn that a small wrong angle can cause a large route error over time.

3. **Which feedback should not be shown only as a score, but through visuals, sound, feel, or state changes?**  
   Sail flapping should be visual and sound-based. Boat speed should be shown through movement, wake, and sound. Route drift should be shown spatially, not only as a number.

---

## Step 5: Data-Based Abstraction

1. **What parts of this domain can become numbers?**  
   Wind direction angle, wind strength, boat direction angle, sail angle, boat speed, distance to target, route drift, time remaining, and hull stability.

2. **What parts can become states?**  
   Efficient / inefficient sail angle, stable / unstable boat, direct route possible / direct route impossible, safe / danger zone, clear water / obstacle zone.

3. **What player actions change these numbers or states?**  
   Turning changes boat direction. Adjusting the sail changes sail angle and speed. Tacking changes the route direction. Steering into a strong wind zone changes stability and speed.

4. **Under what conditions does the player succeed?**  
   The player reaches the target within the time limit while keeping enough speed and avoiding obstacles or danger zones.

5. **Under what conditions does the player fail?**  
   The player runs out of time, gets stuck pointing too close to the wind, hits rocks, loses too much speed, or drifts outside the safe area.

6. **Is there a "just right" range?**  
   Yes. The sail angle must match the wind and boat direction. If the sail is too tight or too loose, the boat loses speed. The boat direction also has a workable range; pointing too close to the wind makes forward movement difficult.

Core variables:

| Variable Name | Type | How It Changes | Role in the Experience |
| --- | --- | --- | --- |
| windDirection | Number / angle | changes by level or slowly over time | forces the player to read the environment |
| windStrength | Number | increases in harder challenges | affects speed and stability |
| boatDirection | Number / angle | changes when player turns | determines relationship to wind |
| sailAngle | Number / angle | changes when player adjusts sail | creates the main action-feedback loop |
| boatSpeed | Number | increases or decreases based on wind, boat direction, and sail angle | shows whether the player is using wind well |
| routeDrift | Number | increases when current or poor angle pushes the boat sideways | teaches route compensation |
| stability | State / number | decreases in strong wind or bad sail angle | adds risk and pressure |
| timeRemaining | Number | counts down | creates urgency |

---

## Step 6: Game System Structure Diagram

```text
Domain Objects -> Player Actions -> Feedback Signals -> Resources / States
```

| Domain Objects | Player Actions | Feedback Signals | Resources / States |
| --- | --- | --- | --- |
| Wind direction | turn boat | boat changes angle, speed changes | boatDirection, boatSpeed |
| Sail | adjust sail angle | sail smooth or flapping | sailAngle, efficiency |
| Target buoy | choose route | distance changes, route line updates | distanceToTarget |
| Current | compensate route | boat drifts sideways over time | routeDrift |
| Rocks / obstacles | avoid or plan around | warning zone, collision | safe / dangerous |
| Wind zones | enter or avoid | boat tilts, speed changes | stability, risk |

Questions:

1. **What domain objects are in your system?**  
   Wind, sail, boat, target buoy, current, rocks, route line, wind indicator.

2. **What actions can the player take?**  
   Turn left, turn right, adjust sail in, adjust sail out, tack, choose route, avoid obstacles.

3. **What feedback does each action produce?**  
   Turning changes boat angle and speed. Adjusting sail changes sail shape and speed. Tacking changes route direction. Choosing a poor route creates drift or delay.

4. **What resources or states change as a result?**  
   Speed, distance to target, stability, route drift, time remaining, safe/dangerous state.

5. **Does this diagram show that the player is learning how to think in this domain?**  
   Yes. The player is not only controlling a boat. The player must read wind, adjust sail, plan a route, and learn from feedback.

---

## Step 7: Challenge Space Design

1. **What factors in this domain affect the result of an action?**  
   Wind direction, wind strength, sail angle, boat direction, current direction, current strength, waves, rocks, channel width, target position, visibility, and time pressure.

2. **Which factors force the player to change their judgment or strategy when they change?**  
   Wind direction, target position, current direction, rocks, and wind strength. If any of these change, the player may need a different route or sail setting.

3. **Which factors can the player directly perceive? Which factors must be inferred slowly through feedback?**  
   The player can directly perceive target position, rocks, boat direction, sail shape, and wind indicator. The player must infer current strength and inefficient angle through drift and speed changes.

Challenge dimension table:

| Domain Factor | Simple State | Difficult State | What the Player Needs to Learn |
| --- | --- | --- | --- |
| Wind direction | side wind | target is upwind | plan a route instead of steering directly |
| Wind strength | steady medium wind | gusty or strong wind | adjust sail and manage stability |
| Current | no current | sideways current | compensate before drifting too far |
| Obstacles | open water | rocks near the route | choose a safe path, not just the shortest path |
| Visibility | clear view | fog hides part of the route | move carefully and use feedback |
| Time pressure | generous time | strict time limit | balance safety and speed |

Challenge combinations:

| Challenge Name | Factor Combination | Situation the Player Faces | Skill / Judgment Being Tested |
| --- | --- | --- | --- |
| Smooth Side Wind | side wind + open water + visible target | player can reach the target if they adjust sail correctly | understanding sail angle and boat speed |
| Upwind Target | target upwind + open water | player cannot reach the target by steering straight | tacking and zigzag route planning |
| Drifting Channel | side wind + sideways current + narrow channel | the boat slowly drifts toward the edge even if it points correctly | compensation and route correction |
| Rocky Gusts | changing wind + rocks + time pressure | the player must adjust sail while avoiding obstacles | risk judgment and flexible route planning |

4. **Do these challenges have an order from simple to complex?**  
   Yes. The order is: Smooth Side Wind -> Upwind Target -> Drifting Channel -> Rocky Gusts. The first teaches direct feedback. The second teaches route planning. The third adds hidden drift. The fourth combines adjustment, risk, and pressure.

5. **After failing, can the player know what they should observe and adjust next time?**  
   Yes. If speed is low, the player should check sail angle and boat direction. If the target cannot be reached directly, the player should check wind direction and tack. If the boat drifts, the player should check current and compensate earlier.

6. **Choose 2-3 progressive challenges for the first minimum playable prototype.**  
   I would choose:
   1. Smooth Side Wind
   2. Upwind Target
   3. Drifting Channel

These three challenges are enough to show the core learning progression from sail adjustment to route planning to compensation.

---

## Step 8: Minimum Playable Prototype

1. **What can the player do within 30 seconds?**  
   The player can steer the boat, adjust the sail angle, read a wind indicator, and try to reach a target buoy.

2. **What mistake will the player likely make the first time they play?**  
   The player will likely steer straight toward the target and forget to adjust the sail. In the upwind challenge, they may keep pointing directly at the target even though the boat slows down.

3. **Will the player do better the second time because they learned from feedback?**  
   Yes. The player should notice that sail flapping and low speed mean the angle is wrong. In the second playthrough, they should adjust the sail and choose a better route.

4. **Will you prototype with paper, body movement, cards, a webpage, Scratch, GDevelop, p5.js, or Unity?**  
   I would use a simple p5.js or webpage prototype, because the game can be represented with a top-down boat, wind arrow, target buoy, and speed feedback.

5. **Which 2-3 challenge combinations from Step 7 does the prototype implement? How does the difficulty progress?**  
   The prototype implements:
   1. Smooth Side Wind: learn sail angle and speed.
   2. Upwind Target: learn that direct route does not work and tacking is needed.
   3. Drifting Channel: learn that current changes the route over time.

6. **If you can only complete one challenge first, which one best represents the core learning experience?**  
   Upwind Target best represents the core learning experience, because it breaks the beginner misunderstanding that sailing is just steering directly toward the destination.

7. **Which parts of the prototype can be simplified without damaging the core learning experience?**  
   Waves, detailed boat physics, advanced sail controls, weather changes, and realistic graphics can be omitted. The prototype only needs wind direction, boat direction, sail angle, speed feedback, and a target.

---

## Step 9: AI-Assisted Development

1. **What do you want AI to help you with?**  
   I want AI to help with variables, simple boat movement code, wind indicator UI, sail angle feedback, and level setup for three challenges.

2. **Does your prompt explain the domain structure clearly?**  
   Yes. My prompt should explain that the core learning is not "drive a boat to a target," but "read wind direction, adjust sail angle, and plan a route when the target is upwind."

3. **Did AI's suggestion turn your design into a generic mini-game?**  
   If AI suggests only collecting coins or avoiding random obstacles, I should reject or modify that idea because it does not teach sailing judgment.

4. **Which AI suggestions did you accept?**  
   I would accept suggestions for calculating boat speed based on wind angle, drawing a wind arrow, creating level data, and showing visual feedback when the sail angle is inefficient.

5. **Which AI suggestions did you modify or reject? Why?**  
   I would reject a score-only design or a racing-only design. I would modify any obstacle course idea so that obstacles are connected to route planning and wind judgment.

6. **In this design process, who made the final design decisions?**  
   I made the final decisions. AI helped implement and test the system, but the domain learning goal and challenge progression came from my analysis.

---

## Step 10: Playtesting and Reflection

Ask at least 2 classmates to playtest and record:

1. **Where was the player most confused during the first playthrough?**  
   The player may be confused about why the boat slows down when pointing directly at the target.

2. **When did the player begin to understand the rules?**  
   The player may begin to understand after noticing that changing sail angle makes the boat speed up or slow down.

3. **Did the player learn a domain-specific judgment?**  
   The target is not always reachable by a straight route. The player needs to judge the relationship between wind direction, boat direction, and the target.

4. **Was the player only chasing score, or did they enter the domain way of thinking?**  
   A successful playtest would show the player saying things like "I need to turn away from the wind first" or "I should tack here," instead of only saying "I need more points."

5. **Did the player's feedback match your design goal?**  
   If players mention wind, sail angle, speed, and route planning, then the feedback matches the design goal. If they only mention steering or obstacles, the prototype needs clearer sailing feedback.

6. **What will you change in the next version?**  
   I would improve the wind indicator, add a short tutorial level, make sail flapping more visible, and add a replay screen showing the player's route compared with a better route.

Final designer statement:

```text
My game comes from my learning experience in the domain of sailing.
I want the player to move from the beginner idea that "sailing means steering directly toward the destination" to the domain judgment that "sailing means reading the wind, adjusting the sail, and planning a route that works with the wind."
My core mechanic is adjusting boat direction and sail angle in response to wind.
Through the feedback of sail flapping, boat speed, boat tilt, and route drift, the player gradually learns to read wind and plan a workable route.
The first prototype challenge combination is Upwind Target, and it tests whether the player can stop trying to move in a straight line and begin using tacking / zigzag route planning.
```
