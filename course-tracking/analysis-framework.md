# Course Analysis Framework

> Working framework for analyzing student projects created with "Game Design from Everyday Life" methodology v2.1.
> This file translates the course method into research and feedback categories.

## Purpose

This document defines how student projects and their `agent-development-log.md` files will be reviewed. It keeps analysis consistent across projects and helps turn student work into usable teaching and research evidence, especially for comparing emotional-experience translation, domain-learning translation, and challenge-space design.

## Unit of Analysis

Each student project is analyzed at three levels:

1. Project concept: the stated real-life experience, chosen pathway, core emotion or domain-learning structure, and intended game idea.
2. Development process: the chronological entries in `agent-development-log.md`.
3. Playable artifact: the actual game prototype, code, rules, mechanics, and media.

## Core Questions

### 0. Pathway Choice

- Does the project mainly follow the emotional-experience pathway, the domain-learning pathway, or a hybrid?
- Is the chosen pathway explicit enough to guide design decisions?
- Does the project use the correct evidence for its pathway: emotional trajectory for emotional experience, or novice/expert difference and feedback loop for domain learning?

### 1. Life Experience

- Is the original life experience specific rather than generic?
- Does it include action, process, emotion, space, and object?
- Is the experience observable enough to become design material?

### 2. Core Emotion

- Is the core emotion named clearly?
- Is there an emotional trajectory rather than a single mood label?
- Does the project explain what triggers the emotion and where it peaks?

### 3. Emotional Prototype

- Does the project identify an existing emotional prototype or create a new one?
- Is the prototype more specific than a normal emotion word?
- Does it describe trigger, tension, turning point, peak, and after-effect?

### 4. Mechanic Translation

- Does the game mechanic correspond to the original life experience?
- Are player inputs, challenges, variables, and feedback clearly connected?
- Does the game avoid becoming a generic game with the life experience added only as theme?

### 5. Datalization

- Are the key variables visible in the design or code?
- Are success, failure, thresholds, and state changes defined?
- Can the core mechanic be explained through a small set of variables?

### 6. Domain Learning Translation

- Is the chosen real-world domain specific enough to study?
- Does the project identify novice misunderstanding and expert perception?
- Are domain feedback signals translated into game feedback?
- Does the core loop require players to learn a domain way of seeing, judging, or acting?
- Does the project avoid becoming a generic game with only domain-themed assets?

### 7. Challenge Space Design

- Does the project identify challenge dimensions from system variables or domain factors?
- Are challenges designed as variable combinations rather than isolated ideas?
- Does each challenge correspond to a player skill, judgment, or emotional pressure?
- Is there a progression from simple single-variable challenges to combined challenges?
- Can players perceive the factors causing the challenge and adjust after failure?

### 8. AI Collaboration

- What did AI help with: ideation, code, debugging, assets, UI, reflection, or documentation?
- Did AI change the design direction?
- Did the student accept, reject, or modify AI suggestions?
- Are misunderstandings or failed AI outputs honestly recorded?

### 9. Reflection Quality

- Does the Reflection Log ask whether the game still expresses the original life experience and core emotion?
- Does the student identify emotional drift, technical limits, or design tradeoffs?
- Does reflection lead to a concrete next step?

### 10. Prototype Evidence

- Is there a playable prototype, paper prototype, or runnable digital version?
- Is the core loop testable?
- Are there signs of playtesting, observation, or feedback?

## Coding Categories

Use these short labels when summarizing logs or weekly progress:

| Code | Meaning |
| --- | --- |
| `PATH-emotion` | Project mainly follows the emotional-experience pathway. |
| `PATH-domain` | Project mainly follows the domain-learning pathway. |
| `PATH-hybrid` | Project intentionally combines emotional-experience and domain-learning pathways. |
| `PATH-unclear` | Project has not made its pathway choice explicit. |
| `LE-clear` | Life experience is specific and usable. |
| `LE-vague` | Life experience is too broad or abstract. |
| `EM-clear` | Core emotion is clearly defined. |
| `EM-flat` | Emotion is named but lacks trajectory. |
| `ME-aligned` | Mechanic supports the original emotion. |
| `ME-drift` | Mechanic is fun or functional but emotionally drifting. |
| `DATA-clear` | Core variables and state changes are clear. |
| `DATA-missing` | Project lacks explicit variables or thresholds. |
| `DOMAIN-clear` | Real-world domain and learning context are specific. |
| `DOMAIN-vague` | Domain is too broad or only a topic label. |
| `NOVICE-clear` | Novice misunderstanding is clearly identified. |
| `EXPERT-clear` | Expert perception or judgment is clearly articulated. |
| `FB-clear` | Domain feedback signals are translated into game feedback. |
| `SKILL-loop` | Prototype has an observe-judge-act-feedback-adjust loop. |
| `THEME-skin` | Domain is only surface theme; mechanic does not require domain thinking. |
| `CHAL-dim` | Challenge dimensions are identified from variables or domain factors. |
| `CHAL-combo` | Challenges are designed as meaningful combinations of variables. |
| `CHAL-skill` | Each challenge maps to a player skill, judgment, or target emotion. |
| `CHAL-curve` | Challenge sequence shows a simple-to-complex learning curve. |
| `CHAL-random` | Challenges feel arbitrary or idea-driven rather than system-derived. |
| `AI-code` | AI mainly supports implementation. |
| `AI-design` | AI influences mechanics or direction. |
| `AI-reflect` | AI supports reflection or documentation. |
| `REF-strong` | Reflection is specific and self-critical. |
| `REF-thin` | Reflection is generic or only descriptive. |
| `PLAY-none` | No playable artifact yet. |
| `PLAY-unverified` | Artifact exists but has not been tested. |
| `PLAY-verified` | Core loop has been checked. |

## Evidence to Collect

- Project README and index.
- `agent-development-log.md` entries.
- Screenshots, videos, playable builds, or paper prototype photos.
- Git commit history.
- Student reflections.
- Instructor observations.
- Playtest notes, if available.

## Research Use

This framework can later support:

- Cross-project comparison.
- Weekly teaching reflection.
- Case selection for a paper.
- Analysis of how AI affects student game design.
- Evidence for the method's strengths and failure points.
- Comparison between emotional-experience translation and domain-learning translation.
- Analysis of whether challenge design comes from system variables or unrelated inspiration.
