# Weekly Course Progress

> Course-level timeline for tracking how student projects develop over time.
> This file summarizes the class as a whole; individual project details remain in each repo's `agent-development-log.md`.

## Purpose

This document records weekly patterns across all student projects. It helps identify common design problems, useful teaching interventions, AI collaboration patterns, and evidence for the "Game Design from Everyday Life" methodology.

## Current Course Context

- Methodology: Game Design from Everyday Life v2.0
- Instructor reference project: Anxiety In Lines
- Required student process file: `agent-development-log.md`
- Student repo collection starts: 2026-06-11

## Weekly Summary Template

```md
## Week X - YYYY-MM-DD

### Course Focus

What method step, class activity, or production milestone did this week focus on?

### Student Project Status

| Project ID | Student / Team | Current Stage | Progress | Main Issue | Next Step |
| --- | --- | --- | --- | --- | --- |
| P01 | TBD | TBD | TBD | TBD | TBD |

### Common Patterns

- Pattern 1:
- Pattern 2:
- Pattern 3:

### Design Problems Observed

- Problem 1:
- Problem 2:

### AI Collaboration Observations

- How students used AI this week:
- Where AI helped:
- Where AI caused drift or confusion:

### Methodology Notes

- Which part of v2.0 worked well:
- Which part was hard for students:
- Possible changes to teaching materials:

### Evidence to Preserve

- Logs to review:
- Screenshots or builds to collect:
- Strong examples:
- Cases needing follow-up:
```

## Week 0 - 2026-06-10

### Course Focus

Preparation for collecting student GitHub repositories and using each project's `agent-development-log.md` as process evidence.

### Student Project Status

| Project ID | Student / Team | Current Stage | Progress | Main Issue | Next Step |
| --- | --- | --- | --- | --- | --- |
| P00 | Ian | Instructor reference project | `Anxiety In Lines` has a project log, project index, Unity V1 code, and private GitHub repo. | V1 code exists but scene integration/playtest status still needs verification. | Continue development in the AnxietyInLines project thread. |
| P01+ | Students | Awaiting repo intake | Repo information will be collected starting 2026-06-11. | Student repo access and file consistency not yet checked. | Register repos in `student-repos.md`. |

### Common Patterns

- Not yet available. Student repositories have not been collected.

### Design Problems Observed

- Not yet available.

### AI Collaboration Observations

- Instructor reference project uses `agent-development-log.md` to record AI-assisted indexing, documentation, implementation review, and GitHub publishing.

### Methodology Notes

- The required student `agent-development-log.md` can become a primary record of how students move from life experience to game mechanics.
- Course-level tracking should stay separate from individual project logs.

### Evidence to Preserve

- Student GitHub repo links.
- Each project's `agent-development-log.md`.
- Each project's README or project index, if present.
- Screenshots or playable prototypes once available.

## Week 1 - 2026-06-18

### Course Focus

Student GitHub repository intake. Students were asked to include `agent-development-log.md` in their repositories so their AI collaboration process can be reviewed alongside the playable project.

### Student Project Status

| Project ID | Student / Team | Current Stage | Progress | Main Issue | Next Step |
| --- | --- | --- | --- | --- | --- |
| P01 | Raine | Repo updated | GitHub repo link updated to `Raine-nyu-2026-summer-game`. | Project metadata and `agent-development-log.md` still need to be checked. | Index repo and locate required log file. |
| P02 | Christina & Bella | Repo collected | GitHub repo link collected for `One More Sip`. | Project metadata and `agent-development-log.md` still need to be checked. | Index repo and locate required log file. |
| P03 | Boyan | Repo subfolder collected | GitHub link points to `26SM_Demo/Assignment3/The Darkroom`. | Link targets a subfolder rather than a repo root; log location needs verification. | Inspect subfolder and locate required log file. |
| P04 | Savanna | Repo collected | GitHub repo link collected for `Coaster Carnage`. | Project metadata and `agent-development-log.md` still need to be checked. | Index repo and locate required log file. |

### Common Patterns

- Students are using GitHub repositories as the submission channel.
- The required `agent-development-log.md` file should now become the main process evidence.
- At least one submission uses a repo subfolder rather than a standalone repository.

### Design Problems Observed

- Not yet analyzed. Repositories have been collected but not indexed.
- The previously duplicated Raine/Savanna repo URL has been resolved by an updated Raine link.

### AI Collaboration Observations

- Pending review of each repository's `agent-development-log.md`.

### Methodology Notes

- Repo intake is now sufficient to begin project-level indexing.
- The next useful step is to check whether each repo contains `README.md`, `PROJECT_INDEX.md`, and `agent-development-log.md`.
- A shared Canva board has been identified as the source for each project's system design diagram and description. Screenshots have been archived and summarized for project-level analysis.
- Canva screenshots have now been captured and summarized in `course-tracking/system-design-summaries.md`. Two screenshots currently do not have matching repo links: `Cat Servant Simulator` and `Pre-Made Panic`.

### Evidence to Preserve

- Google Doc source: `Students'Projects`
- Canva system design board: `https://www.canva.com/design/DAHL_IK8O-E/5D0oqq_FYpffeLs08kbNag/edit`
- Raine repo: `https://github.com/raineraine-go-away/Raine-nyu-2026-summer-game.git`
- Christina & Bella repo: `https://github.com/Christina0205/OneMoreSip.git`
- Boyan repo folder: `https://github.com/King-Raphael/26SM_Demo/tree/main/Assignment3/The%20Darkroom?authuser=0`
- Savanna repo: `https://github.com/syc9459-ui/Coaster-Carnage-.git`
- System design summaries: `course-tracking/system-design-summaries.md`
- Canva screenshot archive: `course-tracking/canva-screenshots/`

## Week 2 - 2026-06-30

### Course Focus

Repository progress review and research-value assessment. Checked GitHub repository structure, available `agent-development-log.md` files, Canva alignment, and implementation evidence.

### Student Project Status

| Project ID | Student / Team | Current Stage | Progress | Main Issue | Next Step |
| --- | --- | --- | --- | --- | --- |
| P01 | Raine | Direction changed / indexed | Repo now documents `无为 / Wuwei`, a five-element escape-room puzzle. It has 3 scripts, 1 scene, 50 image assets, 2 audio assets, and 5 logged interactions. | Current repo no longer matches the Canva `赌鬼 / Gambler` system design. | Confirm whether `Wuwei` replaces `Gambler`; if yes, archive the concept shift as research evidence. |
| P02 | Christina & Bella | Implementation advanced / log thin | Repo has 17 scripts, 3 scenes, 18 images, and 9 audio files. | `agent-development-log.md` only records initial concept/log setup, not the substantial implementation. | Ask for updated log entries covering implementation, debugging, AI use, and reflection. |
| P03 | Boyan | Highly developed / strongest case | `The Darkroom` has 51 scripts, 72 interaction logs, multiple docs, art pipeline notes, procedural systems, music, and story concept documentation. | Project is very AI-heavy; analysis must separate student decisions from AI-generated design/implementation. | Treat as primary case study; code process, AI roles, and design evolution carefully. |
| P04 | Savanna | Early playable scaffold / reflection present | `Coaster Carnage` has 5 scripts, 2 scenes, a PDF log, and a Markdown log under `Assets/`. Log records scaffold, debugging, architecture change, and reflection. | Required log is not at repo root as Markdown; PDF duplicate exists. Possible mismatch between log saying spawner removed and repo still containing `ObstacleSpawner.cs`. | Ask student to place Markdown log at repo root and clarify current architecture. |
| P05 | TBD | Missing repo | Canva design captured for `Cat Servant Simulator`. | No GitHub repo linked. | Collect repo. |
| P06 | TBD | Missing repo | Canva design captured for `Pre-Made Panic`. | No GitHub repo linked. | Collect repo. |

### Common Patterns

- GitHub repositories now show real implementation progress, not just concepts.
- Log quality varies sharply and is becoming a research variable in itself.
- The best evidence comes from comparing three artifacts: Canva system design, repo implementation, and `agent-development-log.md`.

### Design Problems Observed

- Concept drift: Raine's repo appears to be a different project than the Canva diagram.
- Documentation lag: One More Sip implementation is ahead of its process log.
- Format inconsistency: Coaster Carnage uses a PDF root log and Markdown log in `Assets/`.
- Evidence imbalance: The Darkroom has exceptionally rich evidence; other projects need more consistent logs for fair comparison.

### AI Collaboration Observations

- AI roles vary by project: auditor/documenter, implementation partner, debugger, design critic, narrative researcher, and reflection assistant.
- The Darkroom shows the broadest AI role expansion, including design critique, validation tooling, sound design, and story concept research.
- Raine's log explicitly notes AI-inferred life-experience/core-emotion fields, which is important evidence of AI shaping interpretation.

### Methodology Notes

- The v2.0 datalization step is visible in several projects, especially Anxiety In Lines, The Darkroom, and One More Sip.
- The course now needs a log-quality intervention: every meaningful implementation/debugging/design session should be reflected in `agent-development-log.md`.
- Concept drift should not be treated as failure automatically; it can become research evidence if students document why the project changed.

### Evidence to Preserve

- `course-tracking/progress-value-summary-2026-06-30.md`
- GitHub file trees and downloaded logs checked on 2026-06-30.
- The mismatch between Raine's Canva design and current repo concept.
- One More Sip's implementation/log gap.
- The Darkroom's 72-interaction log as primary case material.
- Coaster Carnage's reflection on cart-forward architecture strengthening the rollercoaster emotion.
