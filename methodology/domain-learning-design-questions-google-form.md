# Google Form Version: From Domain Learning to Game System

This folder includes a ready-to-run Google Apps Script file:

- `domain-learning-design-questions-google-form.gs`

## How to Create the Google Form

1. Open [Google Apps Script](https://script.google.com/).
2. Create a new project.
3. Delete the default code.
4. Paste the full content of `domain-learning-design-questions-google-form.gs`.
5. Click **Run** and choose `createDomainLearningDesignQuestionsGoogleForm`.
6. Approve the Google permission request.
7. Open **Executions** or **Logs** to find:
   - `Edit URL`
   - `Published URL`
8. Send the `Published URL` to students.

## Form Settings

The script creates a Google Form with:

- Title: `From Domain Learning to Game System: Student Design Form`
- Editable responses enabled
- Progress bar enabled
- A `Student Info` section at the beginning
- Steps 1-10 separated into Google Form pages/sections
- Each section includes a short `Why this part matters` explanation
- Each question includes a short `Why this question matters` help text
- Most questions set as paragraph responses
- Student name / team name marked as required
- Other questions not marked as required, so students can save partial or staged reflections

## Sections Included

1. Student Info
2. Step 1: Domain Learning Sample
3. Step 2: Novice / Expert Difference
4. Step 3: Skill Loop
5. Step 4: Domain Feedback Table
6. Step 5: Data-Based Abstraction
7. Step 6: Game System Graph Upload
8. Step 7: Challenge Space Design
9. Step 8: Minimum Playable Prototype
10. Step 9: AI-Assisted Development
11. Step 10: Playtesting and Reflection

## Notes for Classroom Use

- The rationale text is intentionally written in student-facing language. It explains why each step or question exists without turning the form into a teacher-only research instrument.
- If the form feels too text-heavy for younger students, keep the section rationales and remove selected question help text inside the Google Form editor.
- If you want every question to be mandatory, change `.setRequired(false)` to `.setRequired(true)` in the script.
- If you want students to submit one step at a time, duplicate the generated form and keep only the relevant section.
- If you want Google Forms to collect email automatically, turn on **Collect email addresses** in the Google Form settings after the form is created.
- Step 6 now asks students to upload one image of their game system graph. Google Forms file upload may require students to sign in, depending on your account and sharing settings.
- If file upload is not convenient, students can use the backup Step 6 question to paste a link to an image, Google Doc, slide, FigJam, Canva, Miro, or other board.
- The Step 6 graph should organize Step 1-5 into a visible system: domain objects, player actions, feedback signals, resources, numbers, and states.

## Rationale Design

The form now uses two levels of explanation:

1. **Section rationale**: explains why the whole step exists in the design method.
2. **Question rationale**: explains what kind of design evidence this specific question is trying to collect.

This makes the form useful not only as a student worksheet, but also as a research artifact: student answers can later be analyzed as evidence of domain selection, novice/expert distinction, skill-loop design, feedback design, data abstraction, challenge-space reasoning, AI collaboration, and playtest reflection.
