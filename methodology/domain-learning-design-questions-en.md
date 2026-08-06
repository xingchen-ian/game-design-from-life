# From Domain Learning to Game System: Student Question List

> For high school summer camps, workshops, and short courses  
> Goal: Transform the learning process of a real-world domain into a playable game system  
> Version: v0.1  
> Last updated: 2026-07-01

---

## Step 1: Domain Learning Sample

1. What domain do you want to choose? Examples: sailing, rock climbing, photography, coffee, first aid, basketball strategy, plant care.
2. Why do you know about this domain, or why do you want to learn it? What real situation connects you to it?
3. When beginners first enter this domain, what do they usually think is most important?
4. When did you, or a beginner you observed, first get stuck or clearly fail?
5. After learning for a while, what did you begin to notice that you could not see before?
6. What attracts you most about this domain: technique, risk, judgment, tools, environment, body feeling, or something else?

---

## Step 2: Novice / Expert Difference

1. What is the most common misunderstanding beginners have?
2. When experts and beginners look at the same situation, how are their judgments different?
3. What is the most important challenge in this domain? Examples: time, energy, wind direction, light, space, equipment, incomplete information.
4. What action or decision do beginners most often get wrong?
5. What signals do experts use to judge whether they are doing well?
6. Can you summarize the core learning shift in this domain in one sentence?

Example format:

```text
Beginners think: Rock climbing is mainly about arm strength.
Experts know: Rock climbing requires route reading, footwork, and body-weight control to save arm energy.
```

---

## Step 3: Skill Loop

Break this domain into a learning loop:

```text
Observe -> Judge -> Act -> Receive Feedback -> Adjust -> Become More Skilled
```

1. What does the player need to observe?
2. What does the player need to judge?
3. What actions can the player take?
4. How does the system give feedback on whether the player is doing well?
5. How can the player adjust their next action based on feedback?
6. After repeating the loop several times, what does the player become better at?

---

## Step 4: Domain Feedback Table

List at least 3 feedback signals:

| Feedback Signal | Where It Comes From | What It Tells the Player | How It Appears in the Game |
| --- | --- | --- | --- |
| Example: the boat slows down | boat movement | sail angle or course is wrong | speed bar drops, boat shakes |

Questions:

1. Which feedback should appear immediately?
2. Which feedback should appear later, so the player has to discover it?
3. Which feedback should not be shown only as a score, but through visuals, sound, feel, or state changes?

---

## Step 5: Data-Based Abstraction

1. What parts of this domain can become numbers? Examples: speed, angle, energy, time, distance, pressure.
2. What parts can become states? Examples: stable/unstable, visible/invisible, tired/alert, safe/dangerous.
3. What player actions change these numbers or states?
4. Under what conditions does the player succeed?
5. Under what conditions does the player fail?
6. Is there a "just right" range? For example, a sail angle can be too large or too small; in climbing, using too much or too little force can both be unstable.

Core variables:

| Variable Name | Type | How It Changes | Role in the Experience |
| --- | --- | --- | --- |
| Example: Energy | Number | decreases after each inefficient move | pushes the player to read the route instead of guessing randomly |

---

## Step 6: Game System Graph Upload

Upload or paste a link to one image of your game system graph.

Why this graph matters:

- It turns your answers from Step 1-5 into a visible system.
- It shows whether domain objects, player actions, feedback signals, and changing states are connected.
- It helps you and your instructor see what can be prototyped first.
- It becomes the bridge from analysis to Step 7 challenge design.

How to organize Step 1-5 into the graph:

```text
Step 1 domain learning sample -> choose the real domain objects
Step 2 novice/expert difference -> show what judgment the player must learn
Step 3 skill loop -> connect observe, judge, act, feedback, and adjust
Step 4 feedback table -> place feedback signals after player actions
Step 5 variables/states -> place numbers and states that change over time
```

Recommended graph structure:

```text
Domain Objects -> Player Actions -> Feedback Signals -> Resources / States
```

Questions:

1. Upload one image of your game system graph. If upload is not available, paste a link to the image, document, or board.
2. In 2-3 sentences, explain how this graph uses your Step 1-5 answers.
3. What part of this graph should become your first playable prototype?

---

## Step 7: Challenge Space Design

> Goal: Derive challenges from domain factors instead of inventing random levels.

1. What factors in this domain affect the result of an action? Examples: wind direction, wind strength, waves, current, holds, light, distance, time, equipment condition.
2. Which factors force the player to change their judgment or strategy when they change?
3. Which factors can the player directly perceive? Which factors must be inferred slowly through feedback?
4. Fill in a challenge dimension table:

| Domain Factor | Simple State | Difficult State | What the Player Needs to Learn |
| --- | --- | --- | --- |
| Example: Wind direction | downwind or side wind | target is upwind | plan a route instead of moving in a straight line |

5. Design 2-3 challenge combinations with changing difficulty:

| Challenge Name | Factor Combination | Situation the Player Faces | Skill / Judgment Being Tested |
| --- | --- | --- | --- |
| Example: Upwind Target | upwind + open water | player cannot reach the target directly | tacking / zigzag route planning |

6. Do these challenges have an order from simple to complex?
7. After failing, can the player know what they should observe and adjust next time?
8. Choose 2-3 progressive challenges for the first minimum playable prototype. If time is short, complete at least the first challenge.

---

## Step 8: Minimum Playable Prototype

The first version only needs to test one core loop, but it can include 2-3 challenges with increasing difficulty. If you use an AI Agent, such as Codex or WorkBuddy, the prototype should show a simple -> medium -> difficult progression instead of only one static situation.

1. What can the player do within 30 seconds?
2. What mistake will the player likely make the first time they play?
3. Will the player do better the second time because they learned from feedback?
4. Will you prototype with paper, body movement, cards, a webpage, Scratch, GDevelop, p5.js, or Unity?
5. Which 2-3 challenge combinations from Step 7 does the prototype implement? How does the difficulty progress?
6. If you can only complete one challenge first, which one best represents the core learning experience?
7. Which parts of the prototype can be simplified without damaging the core learning experience?

---

## Step 9: AI-Assisted Development

1. What do you want AI to help you with: rules, variables, code, assets, debugging, writing, or feedback?
2. Does your prompt explain the domain structure clearly, instead of only saying "help me make a game about this topic"?
3. Did AI's suggestion turn your design into a generic mini-game?
4. Which AI suggestions did you accept?
5. Which AI suggestions did you modify or reject? Why?
6. In this design process, who made the final design decisions?

---

## Step 10: Playtesting and Reflection

Ask at least 2 classmates to playtest and record:

1. Where was the player most confused during the first playthrough?
2. When did the player begin to understand the rules?
3. Did the player learn a domain-specific judgment?
4. Was the player only chasing score, or did they enter the domain way of thinking?
5. Did the player's feedback match your design goal?
6. What will you change in the next version?

Final designer statement:

```text
My game comes from my learning experience in the domain of ______.
I want the player to move from the beginner idea that "______" to the domain judgment that "______."
My core mechanic is ______.
Through the feedback of ______, the player gradually learns to ______.
The first prototype challenge combination is ______, and it tests ______.
```
