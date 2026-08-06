# Six-Step Design Process: Question List

> For the "Game Design from Everyday Life" methodology v2.
> The questions in each step help students gradually transform lived experience into a playable game prototype.

---

## Step 1: Lived Experience

1. Identify 2-3 experiences from your life. Each experience must include: **an action, a process, and an emotional realization**.
2. Choose one experience and describe it in 2-3 sentences.
3. Enrich your description of this experience from the following five perspectives:
   - What did you or someone else do? (**Action**)
   - How did the experience unfold over time? (**Process**)
   - How did your feelings change during the experience? (**Emotion**)
   - Where did the experience take place? (**Space**)
   - What was the object of the experience: a person, an object, or information? (**Object**)

---

## Step 2: Emotional Analysis

1. Name the core emotion of this experience precisely in 1-3 words.
2. What is the central conflict within this emotion? What do you want, and what prevents you from getting it?
3. At what moment does this emotion appear? What triggers it?
4. What is the most intense moment of the emotion? Describe it specifically.
5. What remains after the experience ends? This may be an aftertaste, a thought, or an unresolved feeling.
6. What is the emotional progression of this experience? Write it with arrows. Example: calm -> anxious -> angry -> release.
7. Which parts of this experience are most suitable for becoming game mechanics? For example: uncertain timing, limited resources, irreversible choices, or another person breaking the rules.
8. If someone else has never had this experience, could they understand the emotion through a game? Why?

### Step 2.5: Emotional Prototype Card

> **Goal**: Turn one emotional analysis into a prototype card that can be discussed, reused, and iterated.

1. Give this emotional prototype a name. It can be a working title.
2. What is the core structure of this prototype? Summarize it in one sentence.
3. What game mechanics might this prototype correspond to?
4. After class discussion, how would you revise the name, structure, or mechanic ideas of this prototype?

---

## Step 3: Data-Based Abstraction

1. In this experience, which elements can be represented by **numbers or states**? Examples: time, distance, quantity, yes/no.
2. What **actions** can the player take that will change these numbers or states?
3. Under what conditions does the player **fail or succeed**? What is the threshold?
4. Which 3-5 variables are the most essential? Which variables can be removed without affecting the emotional communication?
5. Fill in the mechanic framework:
   - **Goal**: What does the player need to achieve?
   - **Challenges**: What blocks the player?
   - **Player Inputs**: What can the player do?
   - **Core Variables**: What data changes during play?

---

## Step 3.5: Game Data Structure Diagram

> **Goal**: Before building in Unity, use one structure diagram to visualize the core data relationships of the game.
> This diagram is the visual expression of the abstraction from Step 3, and it also serves as the blueprint for programming in Step 4.

**Diagram Structure**: Three-column layout
- Left column (Game World): Objects that exist in the world, such as levels, enemies, maps, and items.
- Middle column (Player Action): Operations the player can initiate, represented with **diamond-shaped** nodes.
- Right column (Resources): Changeable values or states, such as health, score, and energy.

**Guiding Questions**:

1. What core elements exist in your game world? List 3-5 and represent them with red/orange rectangles.
2. What **actions/operations** can the player perform? List all inputs and represent them with purple diamonds.
3. What **resources or states** can the player gain or consume? Represent them with green rectangles.
4. Which world elements does each player action **affect**? Connect them with labeled arrows. Example: action -> world.
5. Which resources does each player action require or produce? Connect them with labeled arrows. Example: action <-> resource.
6. Check: Is your core emotional experience preserved through these connections?

**Diagram Rules**:
- Use different colors for the three columns: world = red tones, action = purple tones, resources = green tones.
- Label each arrow with a relationship word, such as unlock, trigger, consume, raise, or drain.
- World elements may have hierarchical arrows, such as levels -> destination.

**Reference Case**: See the project screenshot. Hiking example: destinations / levels / enemy / traps <-> move / rotate / flash light <-> photo book.

---

## Step 4: Unity Prototype Building

1. Turn each variable from Step 3 into one line of C# code. What type is it (`float`/`bool`/`int`), and what is its initial value?
2. Which player key or action corresponds to which variable change? Example: press W -> distance decreases.
3. How will the game make the player **feel** the emotion? What visual or sound effects will you use to strengthen it? Example: the color turns red when time is running out.
4. Build the simplest version first and play through it once. Do you feel the target emotion? What is missing?
5. Add one new element and play again. Does this element strengthen the emotion or dilute it?

---

## Step 5: AI-Assisted Development

1. What is the biggest technical obstacle you are facing right now? Describe in one sentence what you want AI to help you do.
2. When describing your design to AI, can you clearly explain these three things: **what the core experience is, what the key variables are, and what specific result you want**?
3. Does the code or solution provided by AI match your design intention? What needs to be changed?
4. In this AI-assisted work, which parts were decisions you made yourself, and which parts did AI make for you? Design decision-making should always remain in your hands.

---

## Step 6: Expanding the Game World

1. With the same core mechanic, can you change one condition or parameter to make the experience completely different? Propose 2-3 variations.
2. What kind of **world** does this mechanic exist in? What "physical laws" of this world make the mechanic reasonable?
3. Will the player's choices or actions have a **lasting impact** on this world? If so, what is it?
4. After playing this game, what feeling or thought do you want the player to take away? What does this game want to "say"?

---

*Last updated: 2026-06-07*
*Version: Based on methodology v2, with the emotional prototype positioned as an analytical framework rather than a classification label.*
