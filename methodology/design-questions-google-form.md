# Google Form Version: Six-Step Design Process

This folder includes a ready-to-run Google Apps Script file:

- `design-questions-google-form.gs`

## How to Create the Google Form

1. Open [Google Apps Script](https://script.google.com/).
2. Create a new project.
3. Delete the default code.
4. Paste the full content of `design-questions-google-form.gs`.
5. Click **Run** and choose `createDesignQuestionsGoogleForm`.
6. Approve the Google permission request.
7. Open **Executions** or **Logs** to find:
   - `Edit URL`
   - `Published URL`

## Form Settings

The script creates a Google Form with:

- Title: `Six-Step Design Process: Question List`
- Editable responses enabled
- Progress bar enabled
- Step 1 appears immediately at the start of the form
- Steps 2-6 are separated into Google Form pages/sections
- All questions set as paragraph responses
- Questions not marked as required, so students can save partial or staged reflections

## Sections Included

1. Step 1: Lived Experience
2. Step 2: Emotional Analysis
3. Step 2.5: Emotional Prototype Card
4. Step 3: Data-Based Abstraction
5. Step 3.5: Game Data Structure Diagram
6. Step 4: Unity Prototype Building
7. Step 5: AI-Assisted Development
8. Step 6: Expanding the Game World

## Notes for Classroom Use

- If you want every question to be mandatory, change `.setRequired(false)` to `.setRequired(true)` in the script.
- If you want students to submit one step at a time, duplicate the generated form and keep only the relevant section.
- If you want to collect names or emails, turn on those settings inside Google Forms after the form is created.
