function createDomainLearningDesignQuestionsGoogleForm() {
  const form = FormApp.create('From Domain Learning to Game System: Student Design Form');
  form.setDescription(
    'For high school summer camps, workshops, and short courses.\n' +
    'Use this form to transform the learning process of a real-world domain into a playable game system.'
  );
  form.setIsQuiz(false);
  form.setProgressBar(true);
  form.setAllowResponseEdits(true);
  form.setConfirmationMessage('Your response has been submitted. Keep developing your prototype based on your domain feedback and challenge space.');

  const sections = [
    {
      title: 'Student Info',
      description: 'Please fill this section so your design process can be connected to your final prototype.',
      questions: [
        { title: 'Student name / team name', type: 'text', required: true },
        { title: 'Email address', type: 'text', required: false },
        { title: 'Project title, if you already have one', type: 'text', required: false }
      ]
    },
    {
      title: 'Step 1: Domain Learning Sample',
      description: '',
      questions: [
        'What domain do you want to choose? Examples: sailing, rock climbing, photography, coffee, first aid, basketball strategy, plant care.',
        'Why do you know about this domain, or why do you want to learn it? What real situation connects you to it?',
        'When beginners first enter this domain, what do they usually think is most important?',
        'When did you, or a beginner you observed, first get stuck or clearly fail?',
        'After learning for a while, what did you begin to notice that you could not see before?',
        'What attracts you most about this domain: technique, risk, judgment, tools, environment, body feeling, or something else?'
      ]
    },
    {
      title: 'Step 2: Novice / Expert Difference',
      description:
        'Example format:\n' +
        'Beginners think: Rock climbing is mainly about arm strength.\n' +
        'Experts know: Rock climbing requires route reading, footwork, and body-weight control to save arm energy.',
      questions: [
        'What is the most common misunderstanding beginners have?',
        'When experts and beginners look at the same situation, how are their judgments different?',
        'What is the most important challenge in this domain? Examples: time, energy, wind direction, light, space, equipment, incomplete information.',
        'What action or decision do beginners most often get wrong?',
        'What signals do experts use to judge whether they are doing well?',
        'Can you summarize the core learning shift in this domain in one sentence?'
      ]
    },
    {
      title: 'Step 3: Skill Loop',
      description:
        'Break this domain into a learning loop:\n' +
        'Observe -> Judge -> Act -> Receive Feedback -> Adjust -> Become More Skilled',
      questions: [
        'What does the player need to observe?',
        'What does the player need to judge?',
        'What actions can the player take?',
        'How does the system give feedback on whether the player is doing well?',
        'How can the player adjust their next action based on feedback?',
        'After repeating the loop several times, what does the player become better at?'
      ]
    },
    {
      title: 'Step 4: Domain Feedback Table',
      description:
        'List at least 3 feedback signals.\n\n' +
        'Format suggestion:\n' +
        'Feedback Signal / Where It Comes From / What It Tells the Player / How It Appears in the Game\n\n' +
        'Example: The boat slows down / boat movement / sail angle or course is wrong / speed bar drops, boat shakes.',
      questions: [
        'Feedback signal 1: What is the signal, where does it come from, what does it tell the player, and how does it appear in the game?',
        'Feedback signal 2: What is the signal, where does it come from, what does it tell the player, and how does it appear in the game?',
        'Feedback signal 3: What is the signal, where does it come from, what does it tell the player, and how does it appear in the game?',
        'Which feedback should appear immediately?',
        'Which feedback should appear later, so the player has to discover it?',
        'Which feedback should not be shown only as a score, but through visuals, sound, feel, or state changes?'
      ]
    },
    {
      title: 'Step 5: Data-Based Abstraction',
      description:
        'Core variable format suggestion:\n' +
        'Variable Name / Type / How It Changes / Role in the Experience\n\n' +
        'Example: Energy / Number / decreases after each inefficient move / pushes the player to read the route instead of guessing randomly.',
      questions: [
        'What parts of this domain can become numbers? Examples: speed, angle, energy, time, distance, pressure.',
        'What parts can become states? Examples: stable/unstable, visible/invisible, tired/alert, safe/dangerous.',
        'What player actions change these numbers or states?',
        'Under what conditions does the player succeed?',
        'Under what conditions does the player fail?',
        'Is there a "just right" range? For example, a sail angle can be too large or too small; in climbing, using too much or too little force can both be unstable.',
        'List your 3-5 core variables using this format: Variable Name / Type / How It Changes / Role in the Experience.'
      ]
    },
    {
      title: 'Step 6: Game System Graph Upload',
      description:
        'Upload or paste a link to one image of your game system graph.\n\n' +
        'Why this graph matters:\n' +
        '- It turns your answers from Step 1-5 into a visible system.\n' +
        '- It shows whether domain objects, player actions, feedback signals, and changing states are connected.\n' +
        '- It helps you and your instructor see what can be prototyped first.\n' +
        '- It becomes the bridge from analysis to Step 7 challenge design.\n\n' +
        'How to organize Step 1-5 into the graph:\n' +
        'Step 1 domain learning sample -> choose the real domain objects\n' +
        'Step 2 novice/expert difference -> show what judgment the player must learn\n' +
        'Step 3 skill loop -> connect observe, judge, act, feedback, and adjust\n' +
        'Step 4 feedback table -> place feedback signals after player actions\n' +
        'Step 5 variables/states -> place numbers and states that change over time\n\n' +
        'Recommended graph structure:\n' +
        'Domain Objects -> Player Actions -> Feedback Signals -> Resources / States',
      questions: [
        { title: 'Upload one image of your game system graph.', type: 'file', required: false },
        'If upload is not available, paste a link to your game system graph image, document, or board.',
        'In 2-3 sentences, explain how this graph uses your Step 1-5 answers.',
        'What part of this graph should become your first playable prototype?'
      ]
    },
    {
      title: 'Step 7: Challenge Space Design',
      description:
        'Goal: Derive challenges from domain factors instead of inventing random levels.\n\n' +
        'Challenge dimension format:\n' +
        'Domain Factor / Simple State / Difficult State / What the Player Needs to Learn\n\n' +
        'Challenge combination format:\n' +
        'Challenge Name / Factor Combination / Situation the Player Faces / Skill or Judgment Being Tested',
      questions: [
        'What factors in this domain affect the result of an action? Examples: wind direction, wind strength, waves, current, holds, light, distance, time, equipment condition.',
        'Which factors force the player to change their judgment or strategy when they change?',
        'Which factors can the player directly perceive? Which factors must be inferred slowly through feedback?',
        'Fill in 3-5 challenge dimensions using this format: Domain Factor / Simple State / Difficult State / What the Player Needs to Learn.',
        'Design 2-3 challenge combinations with changing difficulty using this format: Challenge Name / Factor Combination / Situation the Player Faces / Skill or Judgment Being Tested.',
        'Do these challenges have an order from simple to complex? Explain the progression.',
        'After failing, can the player know what they should observe and adjust next time?',
        'Choose 2-3 progressive challenges for the first minimum playable prototype. If time is short, which one challenge will you complete first?'
      ]
    },
    {
      title: 'Step 8: Minimum Playable Prototype',
      description:
        'The first version only needs to test one core loop, but it can include 2-3 challenges with increasing difficulty.\n' +
        'If you use an AI Agent, such as Codex or WorkBuddy, the prototype should show a simple -> medium -> difficult progression instead of only one static situation.',
      questions: [
        'What can the player do within 30 seconds?',
        'What mistake will the player likely make the first time they play?',
        'Will the player do better the second time because they learned from feedback? Why?',
        'Will you prototype with paper, body movement, cards, a webpage, Scratch, GDevelop, p5.js, or Unity?',
        'Which 2-3 challenge combinations from Step 7 does the prototype implement? How does the difficulty progress?',
        'If you can only complete one challenge first, which one best represents the core learning experience?',
        'Which parts of the prototype can be simplified without damaging the core learning experience?'
      ]
    },
    {
      title: 'Step 9: AI-Assisted Development',
      description: 'Design decision-making should remain in your hands. AI can help you build, debug, organize, or test, but it should not replace your domain judgment.',
      questions: [
        'What do you want AI to help you with: rules, variables, code, assets, debugging, writing, or feedback?',
        'Does your prompt explain the domain structure clearly, instead of only saying "help me make a game about this topic"?',
        'Did AI\'s suggestion turn your design into a generic mini-game?',
        'Which AI suggestions did you accept?',
        'Which AI suggestions did you modify or reject? Why?',
        'In this design process, who made the final design decisions?'
      ]
    },
    {
      title: 'Step 10: Playtesting and Reflection',
      description:
        'Ask at least 2 classmates to playtest and record what happened.\n\n' +
        'Final designer statement format:\n' +
        'My game comes from my learning experience in the domain of _____.\n' +
        'I want the player to move from the beginner idea that "_____" to the domain judgment that "_____."\n' +
        'My core mechanic is _____.\n' +
        'Through the feedback of _____, the player gradually learns to _____.\n' +
        'The first prototype challenge combination is _____, and it tests _____.',
      questions: [
        'Where was the player most confused during the first playthrough?',
        'When did the player begin to understand the rules?',
        'Did the player learn a domain-specific judgment?',
        'Was the player only chasing score, or did they enter the domain way of thinking?',
        'Did the player\'s feedback match your design goal?',
        'What will you change in the next version?',
        'Write your final designer statement.'
      ]
    }
  ];

  const sectionReasons = {
    'Student Info':
      'Why this part matters: This connects each response to a student, team, and final prototype, so the design process can later be reviewed as teaching and research evidence.',
    'Step 1: Domain Learning Sample':
      'Why this part matters: Students must begin from a real learning experience, not from a game genre or a vague topic. This section helps them choose a domain with observable learning, failure, and change.',
    'Step 2: Novice / Expert Difference':
      'Why this part matters: The game should teach a domain way of seeing. This section identifies the gap between beginner thinking and expert judgment, which becomes the core design target.',
    'Step 3: Skill Loop':
      'Why this part matters: A playable system needs a repeated loop. This section turns domain learning into observe, judge, act, feedback, and adjust.',
    'Step 4: Domain Feedback Table':
      'Why this part matters: Players learn through feedback. This section helps students avoid explaining the domain with text only, and instead design signals players can see, hear, feel, or infer.',
    'Step 5: Data-Based Abstraction':
      'Why this part matters: A game system needs variables, states, rules, and thresholds. This section turns domain factors into things that can be implemented and tested.',
    'Step 6: Game System Graph Upload':
      'Why this part matters: The graph turns Step 1-5 into a visible system and becomes the bridge from analysis to challenge design and prototyping.',
    'Step 7: Challenge Space Design':
      'Why this part matters: Challenges should come from domain factors, not random level ideas. This section helps students build progressive difficulty from the system itself.',
    'Step 8: Minimum Playable Prototype':
      'Why this part matters: The first prototype should test the core learning loop quickly. This section prevents students from overbuilding art, story, or features before the main experience works.',
    'Step 9: AI-Assisted Development':
      'Why this part matters: AI can help implementation, but it can also flatten the design into a generic mini-game. This section keeps domain judgment and final decisions with the student.',
    'Step 10: Playtesting and Reflection':
      'Why this part matters: The method only works if players actually learn the intended domain judgment. This section collects evidence of confusion, learning, and needed revision.'
  };

  const questionReasons = {
    'Student name / team name':
      'Why this question matters: It lets the instructor connect this response to the team, prototype, and later project evidence.',
    'Email address':
      'Why this question matters: It gives the instructor a way to follow up if a response needs clarification or if files need to be connected.',
    'Project title, if you already have one':
      'Why this question matters: A title helps track the project as it changes from an idea into a prototype.',

    'What domain do you want to choose? Examples: sailing, rock climbing, photography, coffee, first aid, basketball strategy, plant care.':
      'Why this question matters: A specific domain gives the project a clear learning source. A vague topic is hard to turn into a system.',
    'Why do you know about this domain, or why do you want to learn it? What real situation connects you to it?':
      'Why this question matters: The design should come from a real connection, observation, or learning need, not only from a theme that sounds interesting.',
    'When beginners first enter this domain, what do they usually think is most important?':
      'Why this question matters: Beginner assumptions are useful because the game can help players move beyond them.',
    'When did you, or a beginner you observed, first get stuck or clearly fail?':
      'Why this question matters: Failure points reveal what the domain actually demands from learners.',
    'After learning for a while, what did you begin to notice that you could not see before?':
      'Why this question matters: This identifies the hidden perception or judgment the game should help players develop.',
    'What attracts you most about this domain: technique, risk, judgment, tools, environment, body feeling, or something else?':
      'Why this question matters: The attraction tells you what kind of experience the prototype should preserve.',

    'What is the most common misunderstanding beginners have?':
      'Why this question matters: The misunderstanding becomes the starting point of the player learning journey.',
    'When experts and beginners look at the same situation, how are their judgments different?':
      'Why this question matters: This contrast defines what expert-like thinking looks like in the domain.',
    'What is the most important challenge in this domain? Examples: time, energy, wind direction, light, space, equipment, incomplete information.':
      'Why this question matters: The most important challenge helps decide what the game should test, pressure, or train.',
    'What action or decision do beginners most often get wrong?':
      'Why this question matters: Common wrong actions can become meaningful failure conditions and teachable feedback.',
    'What signals do experts use to judge whether they are doing well?':
      'Why this question matters: Expert signals can become in-game feedback instead of scores or explanations.',
    'Can you summarize the core learning shift in this domain in one sentence?':
      'Why this question matters: A one-sentence shift gives the project a clear design thesis.',

    'What does the player need to observe?':
      'Why this question matters: Observation defines what information the game must make visible, audible, or inferable.',
    'What does the player need to judge?':
      'Why this question matters: Judgment is the main evidence that the player is entering the domain way of thinking.',
    'What actions can the player take?':
      'Why this question matters: Player actions turn domain understanding into playable decisions.',
    'How does the system give feedback on whether the player is doing well?':
      'Why this question matters: Feedback lets the player learn without needing constant explanation from the teacher.',
    'How can the player adjust their next action based on feedback?':
      'Why this question matters: Adjustment completes the learning loop and separates learning games from one-time tasks.',
    'After repeating the loop several times, what does the player become better at?':
      'Why this question matters: This clarifies the skill or judgment that should improve through play.',

    'Feedback signal 1: What is the signal, where does it come from, what does it tell the player, and how does it appear in the game?':
      'Why this question matters: The first feedback signal should represent the clearest action-result relationship in the domain.',
    'Feedback signal 2: What is the signal, where does it come from, what does it tell the player, and how does it appear in the game?':
      'Why this question matters: Multiple feedback signals prevent the game from becoming a single-score system.',
    'Feedback signal 3: What is the signal, where does it come from, what does it tell the player, and how does it appear in the game?':
      'Why this question matters: A third signal helps reveal whether the domain has enough richness for progressive challenges.',
    'Which feedback should appear immediately?':
      'Why this question matters: Immediate feedback teaches direct cause and effect.',
    'Which feedback should appear later, so the player has to discover it?':
      'Why this question matters: Delayed feedback creates deeper learning because players must notice patterns over time.',
    'Which feedback should not be shown only as a score, but through visuals, sound, feel, or state changes?':
      'Why this question matters: Domain learning often depends on perception, not just points.',

    'What parts of this domain can become numbers? Examples: speed, angle, energy, time, distance, pressure.':
      'Why this question matters: Numbers make intensity, thresholds, and progress implementable.',
    'What parts can become states? Examples: stable/unstable, visible/invisible, tired/alert, safe/dangerous.':
      'Why this question matters: States help represent qualitative changes that are not only bigger or smaller numbers.',
    'What player actions change these numbers or states?':
      'Why this question matters: This links player agency to system behavior.',
    'Under what conditions does the player succeed?':
      'Why this question matters: Success conditions define what good domain judgment looks like.',
    'Under what conditions does the player fail?':
      'Why this question matters: Failure conditions show what misunderstanding or poor judgment looks like.',
    'Is there a "just right" range? For example, a sail angle can be too large or too small; in climbing, using too much or too little force can both be unstable.':
      'Why this question matters: Many domain skills are about calibration, not simply maximizing one number.',
    'List your 3-5 core variables using this format: Variable Name / Type / How It Changes / Role in the Experience.':
      'Why this question matters: A small variable list keeps the first prototype focused and buildable.',

    'Upload one image of your game system graph.':
      'Why this question matters: The image is the evidence that your domain objects, player actions, feedback, variables, and states form one system.',
    'If upload is not available, paste a link to your game system graph image, document, or board.':
      'Why this question matters: A link is a backup when Google Form file upload is not available or not convenient.',
    'In 2-3 sentences, explain how this graph uses your Step 1-5 answers.':
      'Why this question matters: This checks whether the graph is built from earlier analysis instead of being a decorative diagram.',
    'What part of this graph should become your first playable prototype?':
      'Why this question matters: The graph should help you choose the smallest testable part of the system.',

    'What factors in this domain affect the result of an action? Examples: wind direction, wind strength, waves, current, holds, light, distance, time, equipment condition.':
      'Why this question matters: Challenge factors are the raw material for levels, tasks, and difficulty changes.',
    'Which factors force the player to change their judgment or strategy when they change?':
      'Why this question matters: Good challenges are factors that change decisions, not just background decoration.',
    'Which factors can the player directly perceive? Which factors must be inferred slowly through feedback?':
      'Why this question matters: The difference between visible and inferred information shapes how the game teaches observation.',
    'Fill in 3-5 challenge dimensions using this format: Domain Factor / Simple State / Difficult State / What the Player Needs to Learn.':
      'Why this question matters: Challenge dimensions turn domain analysis into a difficulty design tool.',
    'Design 2-3 challenge combinations with changing difficulty using this format: Challenge Name / Factor Combination / Situation the Player Faces / Skill or Judgment Being Tested.':
      'Why this question matters: Combining factors creates playable situations instead of isolated mechanics.',
    'Do these challenges have an order from simple to complex? Explain the progression.':
      'Why this question matters: A learning game needs progression so players can build skill step by step.',
    'After failing, can the player know what they should observe and adjust next time?':
      'Why this question matters: Useful failure should teach the next attempt, not only punish the player.',
    'Choose 2-3 progressive challenges for the first minimum playable prototype. If time is short, which one challenge will you complete first?':
      'Why this question matters: This forces a realistic prototype scope and identifies the most important first test.',

    'What can the player do within 30 seconds?':
      'Why this question matters: A short play window keeps the first prototype focused on one core loop.',
    'What mistake will the player likely make the first time they play?':
      'Why this question matters: Predicting the first mistake helps design feedback and learning.',
    'Will the player do better the second time because they learned from feedback? Why?':
      'Why this question matters: Improvement between attempts is evidence that the prototype teaches something.',
    'Will you prototype with paper, body movement, cards, a webpage, Scratch, GDevelop, p5.js, or Unity?':
      'Why this question matters: The prototyping medium should fit the core loop and available time.',
    'Which 2-3 challenge combinations from Step 7 does the prototype implement? How does the difficulty progress?':
      'Why this question matters: This ensures the prototype tests challenge progression, not only a static scene.',
    'If you can only complete one challenge first, which one best represents the core learning experience?':
      'Why this question matters: The first build should protect the most important learning experience.',
    'Which parts of the prototype can be simplified without damaging the core learning experience?':
      'Why this question matters: Simplification helps students finish a playable prototype without losing the method.',

    'What do you want AI to help you with: rules, variables, code, assets, debugging, writing, or feedback?':
      'Why this question matters: Naming the AI task prevents vague prompting and helps evaluate AI contribution.',
    'Does your prompt explain the domain structure clearly, instead of only saying "help me make a game about this topic"?':
      'Why this question matters: AI needs the domain structure to preserve the learning goal.',
    'Did AI\'s suggestion turn your design into a generic mini-game?':
      'Why this question matters: This catches a common failure where AI makes something playable but removes the domain judgment.',
    'Which AI suggestions did you accept?':
      'Why this question matters: Accepted suggestions show where AI shaped the prototype.',
    'Which AI suggestions did you modify or reject? Why?':
      'Why this question matters: Rejection and modification show student design judgment.',
    'In this design process, who made the final design decisions?':
      'Why this question matters: The method requires students to remain responsible for the design, not outsource judgment to AI.',

    'Where was the player most confused during the first playthrough?':
      'Why this question matters: Confusion shows where rules, feedback, or domain signals are unclear.',
    'When did the player begin to understand the rules?':
      'Why this question matters: The moment of understanding reveals whether feedback and progression are working.',
    'Did the player learn a domain-specific judgment?':
      'Why this question matters: This is the main evaluation criterion for the domain-learning pathway.',
    'Was the player only chasing score, or did they enter the domain way of thinking?':
      'Why this question matters: A good prototype should shift thinking, not only motivate score optimization.',
    'Did the player\'s feedback match your design goal?':
      'Why this question matters: Player comments are evidence for whether the intended learning experience was communicated.',
    'What will you change in the next version?':
      'Why this question matters: Reflection should lead to a specific design revision.',
    'Write your final designer statement.':
      'Why this question matters: The final statement connects domain learning, core mechanic, feedback, and challenge into one clear design claim.'
  };

  function sectionHelpText(section) {
    const reason = sectionReasons[section.title] || '';
    const description = section.description || '';
    if (reason && description) {
      return reason + '\n\n' + description;
    }
    return reason || description;
  }

  function applyQuestionReason(item, title) {
    const reason = questionReasons[title];
    if (reason) {
      item.setHelpText(reason);
    }
    return item;
  }

  sections.forEach(function(section, index) {
    if (index === 0) {
      form.addSectionHeaderItem()
        .setTitle(section.title)
        .setHelpText(sectionHelpText(section));
    } else {
      form.addPageBreakItem()
        .setTitle(section.title)
        .setHelpText(sectionHelpText(section));
    }

    section.questions.forEach(function(question) {
      if (typeof question === 'string') {
        applyQuestionReason(
          form.addParagraphTextItem()
            .setTitle(question)
            .setRequired(false),
          question
        );
      } else if (question.type === 'text') {
        applyQuestionReason(
          form.addTextItem()
            .setTitle(question.title)
            .setRequired(Boolean(question.required)),
          question.title
        );
      } else if (question.type === 'file') {
        applyQuestionReason(
          form.addFileUploadItem()
            .setTitle(question.title)
            .setRequired(Boolean(question.required)),
          question.title
        );
      } else {
        applyQuestionReason(
          form.addParagraphTextItem()
            .setTitle(question.title)
            .setRequired(Boolean(question.required)),
          question.title
        );
      }
    });
  });

  Logger.log('Edit URL: ' + form.getEditUrl());
  Logger.log('Published URL: ' + form.getPublishedUrl());
}
