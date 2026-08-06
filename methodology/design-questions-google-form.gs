function createDesignQuestionsGoogleForm() {
  const form = FormApp.create('Six-Step Design Process: Question List');
  form.setDescription(
    'For the "Game Design from Everyday Life" methodology v2.\n' +
    'The questions in each step help students gradually transform lived experience into a playable game prototype.'
  );
  form.setIsQuiz(false);
  form.setProgressBar(true);
  form.setAllowResponseEdits(true);
  form.setConfirmationMessage('Your response has been submitted. Please keep developing your game prototype based on this reflection.');

  const sections = [
    {
      title: 'Step 1: Lived Experience',
      description: '',
      questions: [
        'Identify 2-3 experiences from your life. Each experience must include: an action, a process, and an emotional realization.',
        'Choose one experience and describe it in 2-3 sentences.',
        'Enrich your description of this experience from the following five perspectives:\n\n- What did you or someone else do? (Action)\n- How did the experience unfold over time? (Process)\n- How did your feelings change during the experience? (Emotion)\n- Where did the experience take place? (Space)\n- What was the object of the experience: a person, an object, or information? (Object)'
      ]
    },
    {
      title: 'Step 2: Emotional Analysis',
      description: '',
      questions: [
        'Name the core emotion of this experience precisely in 1-3 words.',
        'What is the central conflict within this emotion? What do you want, and what prevents you from getting it?',
        'At what moment does this emotion appear? What triggers it?',
        'What is the most intense moment of the emotion? Describe it specifically.',
        'What remains after the experience ends? This may be an aftertaste, a thought, or an unresolved feeling.',
        'What is the emotional progression of this experience? Write it with arrows. Example: calm -> anxious -> angry -> release.',
        'Which parts of this experience are most suitable for becoming game mechanics? For example: uncertain timing, limited resources, irreversible choices, or another person breaking the rules.',
        'If someone else has never had this experience, could they understand the emotion through a game? Why?'
      ]
    },
    {
      title: 'Step 2.5: Emotional Prototype Card',
      description: 'Goal: Turn one emotional analysis into a prototype card that can be discussed, reused, and iterated.',
      questions: [
        'Give this emotional prototype a name. It can be a working title.',
        'What is the core structure of this prototype? Summarize it in one sentence.',
        'What game mechanics might this prototype correspond to?',
        'After class discussion, how would you revise the name, structure, or mechanic ideas of this prototype?'
      ]
    },
    {
      title: 'Step 3: Data-Based Abstraction',
      description: '',
      questions: [
        'In this experience, which elements can be represented by numbers or states? Examples: time, distance, quantity, yes/no.',
        'What actions can the player take that will change these numbers or states?',
        'Under what conditions does the player fail or succeed? What is the threshold?',
        'Which 3-5 variables are the most essential? Which variables can be removed without affecting the emotional communication?',
        'Fill in the mechanic framework:\n\n- Goal: What does the player need to achieve?\n- Challenges: What blocks the player?\n- Player Inputs: What can the player do?\n- Core Variables: What data changes during play?'
      ]
    },
    {
      title: 'Step 3.5: Game Data Structure Diagram',
      description:
        'Goal: Before building in Unity, use one structure diagram to visualize the core data relationships of the game.\n\n' +
        'This diagram is the visual expression of the abstraction from Step 3, and it also serves as the blueprint for programming in Step 4.\n\n' +
        'Diagram Structure: Three-column layout\n' +
        '- Left column (Game World): Objects that exist in the world, such as levels, enemies, maps, and items.\n' +
        '- Middle column (Player Action): Operations the player can initiate, represented with diamond-shaped nodes.\n' +
        '- Right column (Resources): Changeable values or states, such as health, score, and energy.\n\n' +
        'Diagram Rules:\n' +
        '- Use different colors for the three columns: world = red tones, action = purple tones, resources = green tones.\n' +
        '- Label each arrow with a relationship word, such as unlock, trigger, consume, raise, or drain.\n' +
        '- World elements may have hierarchical arrows, such as levels -> destination.\n\n' +
        'Reference Case: See the project screenshot. Hiking example: destinations / levels / enemy / traps <-> move / rotate / flash light <-> photo book.',
      questions: [
        'What core elements exist in your game world? List 3-5 and represent them with red/orange rectangles.',
        'What actions/operations can the player perform? List all inputs and represent them with purple diamonds.',
        'What resources or states can the player gain or consume? Represent them with green rectangles.',
        'Which world elements does each player action affect? Connect them with labeled arrows. Example: action -> world.',
        'Which resources does each player action require or produce? Connect them with labeled arrows. Example: action <-> resource.',
        'Check: Is your core emotional experience preserved through these connections?'
      ]
    },
    {
      title: 'Step 4: Unity Prototype Building',
      description: '',
      questions: [
        'Turn each variable from Step 3 into one line of C# code. What type is it (float/bool/int), and what is its initial value?',
        'Which player key or action corresponds to which variable change? Example: press W -> distance decreases.',
        'How will the game make the player feel the emotion? What visual or sound effects will you use to strengthen it? Example: the color turns red when time is running out.',
        'Build the simplest version first and play through it once. Do you feel the target emotion? What is missing?',
        'Add one new element and play again. Does this element strengthen the emotion or dilute it?'
      ]
    },
    {
      title: 'Step 5: AI-Assisted Development',
      description: '',
      questions: [
        'What is the biggest technical obstacle you are facing right now? Describe in one sentence what you want AI to help you do.',
        'When describing your design to AI, can you clearly explain these three things: what the core experience is, what the key variables are, and what specific result you want?',
        'Does the code or solution provided by AI match your design intention? What needs to be changed?',
        'In this AI-assisted work, which parts were decisions you made yourself, and which parts did AI make for you? Design decision-making should always remain in your hands.'
      ]
    },
    {
      title: 'Step 6: Expanding the Game World',
      description: '',
      questions: [
        'With the same core mechanic, can you change one condition or parameter to make the experience completely different? Propose 2-3 variations.',
        'What kind of world does this mechanic exist in? What "physical laws" of this world make the mechanic reasonable?',
        'Will the player\'s choices or actions have a lasting impact on this world? If so, what is it?',
        'After playing this game, what feeling or thought do you want the player to take away? What does this game want to "say"?'
      ]
    }
  ];

  sections.forEach(function(section, index) {
    if (index === 0) {
      form.addSectionHeaderItem()
        .setTitle(section.title)
        .setHelpText(section.description || '');
    } else {
      form.addPageBreakItem()
        .setTitle(section.title)
        .setHelpText(section.description || '');
    }

    section.questions.forEach(function(question) {
      form.addParagraphTextItem()
        .setTitle(question)
        .setRequired(false);
    });
  });

  Logger.log('Edit URL: ' + form.getEditUrl());
  Logger.log('Published URL: ' + form.getPublishedUrl());
}
