(function () {
  var KEY = "gdl-process-tool-v1";

  var QUESTIONS = [
    { id: "Q1", name: "设计起点", core: true, prompt: "这段设计从哪段生活来？用一两句话写下那件事。它记在图旁边，当作来源，不是一种新节点。", placeholder: "例如：凌晨去窗口排队买票" },
    { id: "Q2", name: "过程地图", core: true, prompt: "这件事里有哪些对象，步骤怎么走？先记下来。对象先当作线索，节点可以仍是空的。", placeholder: "例如：窗口、队伍、保安。先看人多不多，再决定站哪一队。" },
    { id: "Q3", name: "突出时刻", core: true, prompt: "哪一下最想让人感受到？先写在 intent 上，当作候选体验。", placeholder: "例如：不知道还要等多久，也不想被插队" },
    { id: "Q4", name: "主动应对", core: true, prompt: "人当时必须动手做了什么？写成动词，多个用顿号分开。这是候选 mechanic。不要写成世界规则。", placeholder: "例如：张望、换队" },
    { id: "Q6", name: "目标体验", core: true, prompt: "目标体验用两三个具体的词写下来。这会改写主 intent。", placeholder: "例如：干等、防插队" },
    { id: "Q9", name: "玩家身份", core: true, prompt: "玩家是谁，世界里有什么对象？写入 entity。", placeholder: "例如：排队的人、窗口、队伍" },
    { id: "Q10", name: "主要目标", core: true, prompt: "这一局要达成什么？写到 challenge 的成功条件上。", placeholder: "例如：在窗口关上之前买到票" },
    { id: "Q11", name: "核心挑战", core: true, prompt: "第一次可玩的情境是什么？写入第一枚 challenge。", placeholder: "例如：窗口快关了，你还在队尾" },
    { id: "Q13", name: "核心动作", core: true, prompt: "留下 1 到 3 个核心动词，用顿号分开。这会改写 mechanic，并 serves 到 intent。", placeholder: "例如：张望、换队" },
    { id: "Q16", name: "状态资源", core: true, prompt: "要记住哪些会变的状态？用顿号分开。第一个写入 variable-a，后面的写入 variable-b。", placeholder: "例如：剩余时间、队伍长度" },
    { id: "Q17", name: "行动后果", core: true, prompt: "人做了动作之后，世界怎么回应？这是 rule，不是玩家动词。", placeholder: "例如：换队会失去原来的位置" },
    { id: "Q21", name: "结束结果", core: true, prompt: "一局什么时候停？写入 rule 的结束。要和玩家一直在做的事对得上。", placeholder: "例如：窗口关闭，这一局结束" },
    { id: "Q5", name: "核心素材", core: false, prompt: "这段经历里，哪一条线索要留下来？写在 intent 下面，用来收紧，不另造节点。", placeholder: "例如：只留「不知道还要等多久」" },
    { id: "Q7", name: "抽象程度", core: false, prompt: "要保住过程、保住感觉，还是只换一层皮？写在 intent 的约束上。", placeholder: "例如：保住干等的感觉，场景可以换" },
    { id: "Q8", name: "主题信息", core: false, prompt: "想说的那句话，如果有。只是注释，不能拿来代替动词或规则。", placeholder: "例如：排队本身就是在把时间交出去" },
    { id: "Q12", name: "玩家动作", core: false, prompt: "玩家还可能做哪些动作？先当作候选，等 Q13 再收成核心动词。", placeholder: "例如：询问、往前挤、离开" },
    { id: "Q14", name: "所需技能", core: false, prompt: "玩家要学会判断什么？写在动词或体验的备注里。", placeholder: "例如：哪一队其实更快" },
    { id: "Q15", name: "变化来源", core: false, prompt: "重复的时候，哪些状态会变？Q16 还没写的话，先填上空着的 variable。", placeholder: "例如：队伍长度、自己的耐性" },
    { id: "Q18", name: "前后依赖", core: false, prompt: "早先的行动，怎么改掉后面的选项或风险？记在 rule 的备注里。", placeholder: "例如：一旦换队，就排不回原来的位置" },
    { id: "Q19", name: "玩家反馈", core: false, prompt: "人怎么感觉到规则在起作用？写入 feedback。", placeholder: "例如：前面的人回头看你，队伍数字往上跳" },
    { id: "Q20", name: "游戏进程", core: false, prompt: "后面的挑战是什么？多个用顿号分开。要变的是状态或规则，不另起一套玩法。", placeholder: "例如：只开一个窗口、有人插队" }
  ];

  var BASE = [
    { id: "mechanic-main", type: "mechanic", label: "玩家动词" },
    { id: "intent-main", type: "intent", label: "目标体验" },
    { id: "challenge-1", type: "challenge", label: "挑战" },
    { id: "variable-a", type: "variable", label: "状态" },
    { id: "rule-main", type: "rule", label: "世界规则" },
    { id: "feedback-main", type: "feedback", label: "反馈" },
    { id: "entity-main", type: "entity", label: "对象" },
    { id: "variable-b", type: "variable", label: "状态" }
  ];

  var EMPTY_NOTE = {
    "mechanic-main": "人做的动词",
    "intent-main": "目标体验",
    "challenge-1": "一次可玩的情境",
    "variable-a": "会变、可测",
    "rule-main": "世界如何回应，含结束",
    "feedback-main": "人怎么感知规则在工作",
    "entity-main": "节点仍是空的",
    "variable-b": "预置边不连它，节点仍要看见"
  };

  var OWNERS = {
    Q1: [],
    Q2: [],
    Q3: ["intent-main"],
    Q4: ["mechanic-main"],
    Q5: ["intent-main"],
    Q6: ["intent-main"],
    Q7: ["intent-main"],
    Q8: ["intent-main"],
    Q9: ["entity-main"],
    Q10: ["challenge-1"],
    Q11: ["challenge-1"],
    Q12: ["mechanic-main"],
    Q13: ["mechanic-main"],
    Q14: ["intent-main", "mechanic-main"],
    Q15: ["variable-a", "variable-b"],
    Q16: ["variable-a", "variable-b"],
    Q17: ["rule-main"],
    Q18: ["rule-main"],
    Q19: ["feedback-main"],
    Q20: ["challenge-2", "challenge-3"],
    Q21: ["rule-main"]
  };

  var SLOT_CORE = {
    "intent-main": ["Q3", "Q6"],
    "mechanic-main": ["Q4", "Q13"],
    "entity-main": ["Q2", "Q9"],
    "challenge-1": ["Q11", "Q10"],
    "challenge-2": ["Q20"],
    "challenge-3": ["Q20"],
    "variable-a": ["Q16"],
    "variable-b": ["Q16"],
    "rule-main": ["Q17", "Q21"],
    "feedback-main": []
  };

  var SLOT_FOLLOW = {
    "intent-main": ["Q5", "Q7", "Q8", "Q14"],
    "mechanic-main": ["Q12", "Q14"],
    "entity-main": [],
    "challenge-1": ["Q20"],
    "challenge-2": ["Q20"],
    "challenge-3": ["Q20"],
    "variable-a": ["Q15"],
    "variable-b": ["Q15"],
    "rule-main": ["Q18"],
    "feedback-main": ["Q19"]
  };

  var NODE_OWN = {
    "intent-main": "Q3 写候选体验，Q6 改成主句。Q5、Q7、Q8 写在备注。",
    "mechanic-main": "Q4 写候选动词，Q13 收成核心动作。Q12 只作候选备注。动词不是世界规则。",
    "entity-main": "Q9 写入对象。Q2 只留线索，不把这一格填上。",
    "challenge-1": "Q11 写情境，Q10 写成功。",
    "variable-a": "Q16 的第一个状态。",
    "variable-b": "Q16 剩下的状态。没有就空着。预置边不连它。",
    "rule-main": "Q17 写世界如何回应。Q21 写结束。不要把玩家动词写在这里。",
    "feedback-main": "Q19 写人怎么感觉到规则在起作用。",
    "challenge-2": "Q20 的后一枚挑战。",
    "challenge-3": "Q20 的再后一枚挑战。"
  };

  var FOLLOW_ORDER = ["Q5", "Q7", "Q8", "Q12", "Q14", "Q15", "Q18", "Q19", "Q20"];

  var SAIL = {
    Q1: "学帆船时要读风再动手",
    Q2: "船、帆、风。先看风，再调帆，再转向。",
    Q3: "读风，而不是硬控船",
    Q4: "调帆、转向"
  };

  var answers = {};
  var drafts = {};
  var overrides = {};
  var reached = {};
  var selected = null;
  var pendingSuggestion = "";
  var widths = [32, 40, 28];
  var gameSnap = null;
  var confirmedKey = "";
  var runtime = null;
  var raf = 0;
  var lastSig = {};
  var booted = false;
  var saveTimer = 0;

  function qById(id) {
    for (var i = 0; i < QUESTIONS.length; i++) {
      if (QUESTIONS[i].id === id) return QUESTIONS[i];
    }
    return null;
  }

  function splitItems(text) {
    var raw = (text || "").trim();
    if (!raw) return [];
    var parts = raw.split(/[、,，;；\n\/|]+/).map(function (s) { return s.trim(); }).filter(Boolean);
    if (parts.length === 1) {
      var bySpace = parts[0].split(/\s+/).filter(Boolean);
      if (bySpace.length >= 2 && bySpace.length <= 4 && bySpace.every(function (s) { return s.length <= 8; })) {
        parts = bySpace;
      }
    }
    return parts;
  }

  function oneLine(text, n) {
    var t = (text || "").replace(/\s+/g, " ").trim();
    if (t.length <= n) return t;
    return t.slice(0, n).replace(/[，,、。\s]+$/, "") + "…";
  }

  function firstClause(text) {
    var t = (text || "").trim();
    var first = t.split(/[。！？\n]/)[0].trim();
    return oneLine(first || t, 28);
  }

  function joinNotes(list) {
    return list.filter(Boolean).join(" · ");
  }

  function node(id, type, label, text, note, manual) {
    return { id: id, type: type, label: label, text: (text || "").trim(), note: note || "", manual: !!manual };
  }

  function compose() {
    var a = answers;
    var intentText = (a.Q6 || a.Q3 || "").trim();
    var intentNotes = [];
    if (a.Q6) intentNotes.push("Q6");
    else if (a.Q3) intentNotes.push("Q3 候选");
    if ((a.Q5 || "").trim()) intentNotes.push("保留：" + oneLine(a.Q5, 42));
    if ((a.Q7 || "").trim()) intentNotes.push("约束：" + oneLine(a.Q7, 42));
    if ((a.Q8 || "").trim()) intentNotes.push("注释：" + oneLine(a.Q8, 42));

    var mechText = (a.Q13 || a.Q4 || "").trim();
    var mechNotes = [];
    if (a.Q13) mechNotes.push("Q13");
    else if (a.Q4) mechNotes.push("Q4 候选");
    if ((a.Q12 || "").trim()) mechNotes.push("候选：" + oneLine(a.Q12, 42));
    if ((a.Q14 || "").trim()) {
      if (mechText) mechNotes.push("要学会：" + oneLine(a.Q14, 42));
      else intentNotes.push("要学会：" + oneLine(a.Q14, 42));
    }

    var entityText = (a.Q9 || "").trim();
    var entityNote = "";
    if (!entityText && (a.Q2 || "").trim()) entityNote = "线索：" + firstClause(a.Q2) + "。节点仍是空的";
    else if (entityText && (a.Q2 || "").trim()) entityNote = "Q9 · 过程里还提到：" + firstClause(a.Q2);
    else if (entityText) entityNote = "Q9";

    var challengeText = "";
    var challengeNotes = [];
    if ((a.Q11 || "").trim()) {
      challengeText = a.Q11.trim();
      challengeNotes.push("Q11");
    }
    if ((a.Q10 || "").trim()) {
      challengeText = challengeText ? challengeText + "\n成功：" + a.Q10.trim() : "成功：" + a.Q10.trim();
      challengeNotes.push("Q10 成功");
    }

    var from16 = splitItems(a.Q16 || "");
    var from15 = splitItems(a.Q15 || "");
    var varA = from16[0] || "";
    var varB = from16.slice(1).join("、");
    var noteA = [];
    var noteB = [];
    if ((a.Q16 || "").trim()) noteA.push("Q16");
    if (!varA && !varB && (a.Q15 || "").trim()) {
      varA = from15[0] || "";
      varB = from15.slice(1).join("、");
      if (varA || varB) noteA.push("Q15，还不是 Q16 的状态清单");
    } else if ((a.Q15 || "").trim()) {
      noteA.push("重复里会变：" + oneLine(a.Q15, 36));
    }
    if (varB) noteB.push("Q16 · 预置边不连它");
    else noteB.push("预置边不连它，节点仍要看见");

    var ruleText = (a.Q17 || "").trim();
    var ruleNotes = [];
    if (ruleText) ruleNotes.push("Q17 · 世界如何回应");
    if ((a.Q21 || "").trim()) {
      ruleText = ruleText ? ruleText + "\n结束：" + a.Q21.trim() : "结束：" + a.Q21.trim();
      ruleNotes.push("Q21 结束");
    }
    if ((a.Q18 || "").trim()) ruleNotes.push("之后会变：" + oneLine(a.Q18, 48));

    var feedbackText = (a.Q19 || "").trim();
    var feedbackNote = feedbackText ? "Q19" : "";

    var later = splitItems(a.Q20 || "");
    var extras = [];
    if (later[0]) extras.push(node("challenge-2", "challenge", "挑战", later[0], "Q20", false));
    if (later.length > 1) extras.push(node("challenge-3", "challenge", "挑战", later.slice(1).join("、"), "Q20", false));

    var made = [
      node("mechanic-main", "mechanic", "玩家动词", mechText, joinNotes(mechNotes), false),
      node("intent-main", "intent", "目标体验", intentText, joinNotes(intentNotes), false),
      node("challenge-1", "challenge", "挑战", challengeText, joinNotes(challengeNotes), false),
      node("variable-a", "variable", "状态", varA, joinNotes(noteA), false),
      node("rule-main", "rule", "世界规则", ruleText, joinNotes(ruleNotes), false),
      node("feedback-main", "feedback", "反馈", feedbackText, feedbackNote, false),
      node("entity-main", "entity", "对象", entityText, entityNote, false),
      node("variable-b", "variable", "状态", varB, joinNotes(noteB), false)
    ].concat(extras);

    made.forEach(function (item) {
      if (Object.prototype.hasOwnProperty.call(overrides, item.id)) {
        item.text = overrides[item.id];
        item.manual = true;
        item.note = item.text ? "这一格是你直接改的。再确认相关的题，会按答案写回。" : "你把这一格清空了。再确认相关的题，会按答案写回。";
      } else if (!item.text && !item.note && EMPTY_NOTE[item.id]) {
        item.note = EMPTY_NOTE[item.id];
      } else if (!item.text && EMPTY_NOTE[item.id] && item.id === "variable-b") {
        item.note = EMPTY_NOTE[item.id];
      }
    });

    var edges = [
      { from: "mechanic-main", to: "intent-main", type: "serves" },
      { from: "variable-a", to: "rule-main", type: "feeds" },
      { from: "challenge-1", to: "variable-a", type: "challenges" },
      { from: "rule-main", to: "feedback-main", type: "signals" }
    ];
    if (later[0] || Object.prototype.hasOwnProperty.call(overrides, "challenge-2")) {
      edges.push({ from: "challenge-2", to: "variable-a", type: "challenges" });
    }
    if (later.length > 1 || Object.prototype.hasOwnProperty.call(overrides, "challenge-3")) {
      edges.push({ from: "challenge-3", to: "variable-a", type: "challenges" });
    }

    if (Object.prototype.hasOwnProperty.call(overrides, "challenge-2") && !later[0]) {
      if (!made.some(function (item) { return item.id === "challenge-2"; })) {
        made.push(node("challenge-2", "challenge", "挑战", overrides["challenge-2"], "", true));
      }
    }
    if (Object.prototype.hasOwnProperty.call(overrides, "challenge-3") && later.length < 2) {
      if (!made.some(function (item) { return item.id === "challenge-3"; })) {
        made.push(node("challenge-3", "challenge", "挑战", overrides["challenge-3"], "", true));
      }
    }

    return {
      source: (a.Q1 || "").trim(),
      nodes: made,
      edges: edges
    };
  }

  function anyAnswer() {
    return Object.keys(answers).some(function (k) { return (answers[k] || "").trim(); });
  }

  function graphOn() {
    return anyAnswer() || Object.keys(overrides).length > 0;
  }

  function findNode(g, id) {
    for (var i = 0; i < g.nodes.length; i++) {
      if (g.nodes[i].id === id) return g.nodes[i];
    }
    return null;
  }

  function el(tag, attrs, text) {
    var nodeEl = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") nodeEl.className = attrs[k];
        else nodeEl.setAttribute(k, attrs[k]);
      });
    }
    if (text != null) nodeEl.textContent = text;
    return nodeEl;
  }

  function buildCard(q) {
    var card = el("article", { class: q.core ? "ask" : "ask ask-follow", id: "ask-" + q.id, "data-qid": q.id });
    var head = el("header");
    head.appendChild(el("span", { class: "ask-id" }, q.id));
    head.appendChild(el("span", { class: "ask-name" }, q.name));
    head.appendChild(el("span", { class: "ask-tag" }, q.core ? "先答" : "后补"));
    card.appendChild(head);
    card.appendChild(el("p", { class: "ask-prompt" }, q.prompt));
    var area = el("textarea", { "data-q": q.id, rows: "3" });
    area.placeholder = q.placeholder;
    if (drafts[q.id] != null) area.value = drafts[q.id];
    else if (answers[q.id]) area.value = answers[q.id];
    card.appendChild(area);
    var row = el("div", { class: "ask-row" });
    row.appendChild(el("button", { type: "button", class: "btn btn-outline btn-tiny", "data-confirm": q.id }, "确认"));
    row.appendChild(el("span", { class: "ask-state", "data-state": q.id }, "还没写入"));
    card.appendChild(row);
    return card;
  }

  function placeFollow(id) {
    if (document.getElementById("ask-" + id)) return;
    var q = qById(id);
    if (!q || q.core) return;
    reached[id] = true;
    var box = document.getElementById("askFollow");
    var card = buildCard(q);
    var idx = FOLLOW_ORDER.indexOf(id);
    var cards = Array.prototype.slice.call(box.children);
    var next = cards.find(function (c) {
      return FOLLOW_ORDER.indexOf(c.getAttribute("data-qid")) > idx;
    });
    if (next) box.insertBefore(card, next);
    else box.appendChild(card);
    syncOne(id);
  }

  function syncOne(id) {
    var state = document.querySelector('[data-state="' + id + '"]');
    var area = document.querySelector('textarea[data-q="' + id + '"]');
    if (!state || !area) return;
    var written = (answers[id] || "").trim();
    var current = area.value.trim();
    state.classList.remove("is-in", "is-dirty");
    if (current !== written) {
      state.textContent = written ? "改过，还没确认" : "还没确认";
      state.classList.add("is-dirty");
      return;
    }
    if (!written) {
      state.textContent = "还没写入";
      return;
    }
    var owned = OWNERS[id] || [];
    var overwritten = owned.some(function (nid) {
      return Object.prototype.hasOwnProperty.call(overrides, nid);
    });
    state.textContent = overwritten ? "已确认，图上被改过" : "已写入图";
    state.classList.add("is-in");
  }

  function syncAll() {
    QUESTIONS.forEach(function (q) {
      if (document.getElementById("ask-" + q.id)) syncOne(q.id);
    });
  }

  function statusLine(g) {
    var early = ["Q1", "Q2", "Q3", "Q4"].every(function (id) { return (answers[id] || "").trim(); });
    var holes = ["rule-main", "variable-a", "variable-b", "challenge-1", "feedback-main", "entity-main"];
    var stillOpen = holes.every(function (id) {
      var item = findNode(g, id);
      return item && !item.text;
    });
    if (early && stillOpen) {
      return "Q1–Q4 的起步图。候选体验和候选动词可以在上面。规则、状态、挑战、反馈、对象还空着，这是预期。";
    }
    var filled = g.nodes.filter(function (item) { return item.text; }).length;
    if (!filled) return "起步图已经在。8 个节点，4 条预置边。字还没写上，空位都看得见。";
    return "已写下 " + filled + " 格。起步是 8 个节点、4 条预置边。没写的仍是虚线。";
  }

  function renderGraph() {
    var status = document.getElementById("graphStatus");
    var mount = document.getElementById("graphMount");
    var body = document.getElementById("graphBody");
    var top = body.scrollTop;
    mount.textContent = "";
    if (!graphOn()) {
      status.textContent = "还没有图。先在左边确认 Q1，或任意一题。确认之后，这里会出现 8 个节点和 4 条边，空的也留着。";
      booted = true;
      updateDrift();
      refreshEditor();
      return;
    }
    var g = compose();
    status.textContent = statusLine(g);

    var source = el("p", { class: "source-line" });
    if (g.source) {
      source.appendChild(el("em", null, "来源 · 不是节点"));
      source.appendChild(document.createTextNode(" " + g.source));
    } else {
      source.appendChild(el("em", null, "来源还没写。Q1 记在这里，不另做一种节点。"));
    }
    mount.appendChild(source);

    var edgeWords = { serves: 1, feeds: 1, challenges: 1, signals: 1 };
    function addBand(ids) {
      var row = el("div", { class: "sg-row" });
      ids.forEach(function (entry) {
        if (edgeWords[entry]) {
          if (row.childNodes.length) row.appendChild(el("div", { class: "sg-edge", "aria-hidden": "true" }, entry));
          return;
        }
        var item = findNode(g, entry);
        if (!item) return;
        row.appendChild(nodeButton(item));
      });
      if (row.childNodes.length) mount.appendChild(row);
    }

    addBand(["mechanic-main", "serves", "intent-main"]);
    addBand(["challenge-1", "challenges", "variable-a"]);
    var feedLine = el("p", { class: "sg-edge sg-edge-line" }, "variable-a feeds rule-main");
    mount.appendChild(feedLine);
    addBand(["rule-main", "signals", "feedback-main"]);
    if (findNode(g, "challenge-2")) addBand(["challenge-2"]);
    if (findNode(g, "challenge-3")) addBand(["challenge-3"]);
    addBand(["entity-main", "variable-b"]);

    var list = el("ul", { class: "edge-list" });
    g.edges.forEach(function (edge) {
      var li = el("li");
      li.appendChild(el("code", null, edge.from));
      li.appendChild(document.createTextNode(" " + edge.type + " "));
      li.appendChild(el("code", null, edge.to));
      list.appendChild(li);
    });
    mount.appendChild(list);
    mount.appendChild(el("p", { class: "legend-line" }, "实线框是已经写下的。虚线框是空位，先留着。边只用 serves、feeds、challenges、signals。这一版不能改边。"));
    body.scrollTop = top;
    booted = true;
    updateDrift();
    refreshEditor();
  }

  function nodeButton(item) {
    var btn = el("button", {
      type: "button",
      class: "sg-node" + (item.text ? "" : " is-empty") + (selected === item.id ? " is-selected" : ""),
      "data-node": item.id,
      "aria-pressed": selected === item.id ? "true" : "false"
    });
    var sig = item.text + "\n" + item.note;
    if (booted && lastSig[item.id] !== undefined && lastSig[item.id] !== sig) btn.classList.add("is-flash");
    lastSig[item.id] = sig;
    btn.appendChild(el("span", { class: "sg-type" }, item.type + " · " + item.label));
    btn.appendChild(el("strong", null, item.id));
    btn.appendChild(el("p", { class: "sg-text" }, item.text || "空"));
    if (item.note) btn.appendChild(el("em", { class: "sg-note" }, item.note));
    btn.addEventListener("click", function () { selectNode(item.id); });
    return btn;
  }

  function selectNode(id) {
    selected = id;
    (SLOT_FOLLOW[id] || []).forEach(placeFollow);
    var g = compose();
    var item = findNode(g, id);
    renderGraph();
    var prefer = (SLOT_CORE[id] || []).concat(SLOT_FOLLOW[id] || []);
    var target = null;
    for (var i = 0; i < prefer.length; i++) {
      var area = document.querySelector('textarea[data-q="' + prefer[i] + '"]');
      if (area && !(answers[prefer[i]] || "").trim()) {
        target = prefer[i];
        break;
      }
    }
    if (!target) target = prefer[0];
    if (target) {
      var card = document.getElementById("ask-" + target);
      if (card) {
        card.classList.add("is-hit");
        card.scrollIntoView({ block: "nearest", behavior: "smooth" });
        window.setTimeout(function () { card.classList.remove("is-hit"); }, 1600);
      }
    }
    if (item) {
      document.getElementById("editHint").textContent = "";
    }
    saveSoon();
  }

  function refreshEditor() {
    var typeLine = document.getElementById("selectedType");
    var nameLine = document.getElementById("selectedName");
    var own = document.getElementById("selectedOwn");
    var area = document.getElementById("directEdit");
    var fields = document.getElementById("editorFields");
    document.getElementById("aiLine").hidden = true;
    document.getElementById("applyAi").hidden = true;
    pendingSuggestion = "";
    if (!selected || !graphOn()) {
      typeLine.textContent = "还没选节点";
      nameLine.textContent = graphOn() ? "点一个节点可以改字" : "图出现之后才能改节点";
      own.textContent = "";
      fields.hidden = true;
      area.value = "";
      return;
    }
    fields.hidden = false;
    var item = findNode(compose(), selected);
    if (!item) {
      selected = null;
      refreshEditor();
      return;
    }
    typeLine.textContent = item.type + " · " + item.label;
    nameLine.textContent = item.id;
    own.textContent = NODE_OWN[item.id] || "";
    area.disabled = false;
    area.value = item.text;
  }

  function confirmQuestion(id) {
    var area = document.querySelector('textarea[data-q="' + id + '"]');
    if (!area) return;
    var value = area.value.trim();
    if (value) answers[id] = value;
    else delete answers[id];
    drafts[id] = area.value;
    (OWNERS[id] || []).forEach(function (nid) { delete overrides[nid]; });
    if (id === "Q20") {
      delete overrides["challenge-2"];
      delete overrides["challenge-3"];
    }
    renderGraph();
    syncOne(id);
    document.getElementById("editHint").textContent = value ? "已按 " + id + " 更新图。" : "已清空 " + id + " 在图上的内容。";
    save();
  }

  function suggest(item) {
    var a = answers;
    if (item.type === "intent") {
      if ((a.Q6 || "").trim()) return oneLine(a.Q6, 36);
      if ((a.Q3 || "").trim()) return oneLine(a.Q3, 36);
      if ((a.Q1 || "").trim()) return "想让人带走的是：" + oneLine(a.Q1, 24);
      return "用两三个具体的词写下目标体验";
    }
    if (item.type === "mechanic") {
      if ((a.Q13 || "").trim()) return splitItems(a.Q13).slice(0, 3).join("、") || oneLine(a.Q13, 24);
      if ((a.Q4 || "").trim()) return splitItems(a.Q4).slice(0, 3).join("、") || oneLine(a.Q4, 24);
      if ((a.Q12 || "").trim()) return splitItems(a.Q12).slice(0, 3).join("、") || oneLine(a.Q12, 24);
      return "写成玩家动词，不要写成世界怎么回应";
    }
    if (item.type === "rule") {
      if ((a.Q17 || "").trim() && (a.Q21 || "").trim()) return oneLine(a.Q17, 36) + "。结束：" + oneLine(a.Q21, 24);
      if ((a.Q17 || "").trim()) return oneLine(a.Q17, 48);
      if ((a.Q21 || "").trim()) return "结束：" + oneLine(a.Q21, 36);
      if ((a.Q4 || "").trim()) return "玩家「" + (splitItems(a.Q4).slice(0, 3).join("、") || "行动") + "」之后，世界要有一个回应。把回应写在这里，不要把动词再写一遍。";
      return "写下世界如何回应。结束条件也写在这里。";
    }
    if (item.type === "entity") {
      if ((a.Q9 || "").trim()) return oneLine(a.Q9, 36);
      if ((a.Q2 || "").trim()) return firstClause(a.Q2);
      return "写下玩家和世界上的对象";
    }
    if (item.type === "variable") {
      var items = splitItems(a.Q16 || "");
      if (item.id === "variable-b") {
        if (items.length > 1) return items.slice(1).join("、");
        if ((a.Q15 || "").trim()) return oneLine(a.Q15, 24);
        return "第二个会变的状态。没有就留空。";
      }
      if (items[0]) return items[0];
      if ((a.Q15 || "").trim()) return splitItems(a.Q15)[0] || oneLine(a.Q15, 24);
      return "写一个会变、可以观察的状态";
    }
    if (item.type === "challenge") {
      if (item.id !== "challenge-1") {
        var later = splitItems(a.Q20 || "");
        if (item.id === "challenge-3") return later[1] ? later.slice(1).join("、") : "再写一个后面的挑战，改变状态或规则";
        if (later[0]) return later[0];
        return "后面的挑战：改变状态或规则，不换一套玩法";
      }
      if ((a.Q11 || "").trim() && (a.Q10 || "").trim()) return oneLine(a.Q11, 28) + "。成功：" + oneLine(a.Q10, 18);
      if ((a.Q11 || "").trim()) return oneLine(a.Q11, 40);
      if ((a.Q10 || "").trim()) return "成功：" + oneLine(a.Q10, 32);
      return "写一次能玩的情境，以及怎样算做成";
    }
    if (item.type === "feedback") {
      if ((a.Q19 || "").trim()) return oneLine(a.Q19, 40);
      if ((a.Q17 || "").trim()) return "让人注意到：" + oneLine(a.Q17, 28);
      return "人怎么感觉到规则在起作用";
    }
    return "";
  }

  function applyDirect() {
    var hint = document.getElementById("editHint");
    if (!selected || !graphOn()) {
      hint.textContent = "先点图上的一个节点。";
      return;
    }
    overrides[selected] = document.getElementById("directEdit").value.trim();
    hint.textContent = "已写入 " + selected + "。这是直接改图。";
    renderGraph();
    syncAll();
    save();
  }

  function askAi() {
    var hint = document.getElementById("editHint");
    if (!selected || !graphOn()) {
      hint.textContent = "先点图上的一个节点。";
      return;
    }
    var item = findNode(compose(), selected);
    pendingSuggestion = suggest(item);
    var line = document.getElementById("aiLine");
    line.hidden = false;
    line.textContent = "本地提议，不是模型：" + pendingSuggestion;
    document.getElementById("applyAi").hidden = false;
    hint.textContent = "还没写入。你点「把提议写入图」才进这一格。";
  }

  function applyAi() {
    if (!selected || !pendingSuggestion) return;
    overrides[selected] = pendingSuggestion;
    document.getElementById("editHint").textContent = "已把提议写入 " + selected + "。没有自动覆盖，是你点的写入。";
    renderGraph();
    syncAll();
    save();
  }

  function graphKey(g) {
    return JSON.stringify({
      source: g.source,
      nodes: g.nodes.map(function (item) {
        return { id: item.id, text: item.text, note: item.note, manual: item.manual };
      }),
      edges: g.edges
    });
  }

  function updateDrift() {
    var drift = document.getElementById("drift");
    if (!drift) return;
    if (!gameSnap || !confirmedKey) {
      drift.textContent = "";
      return;
    }
    drift.textContent = graphKey(compose()) === confirmedKey
      ? "图和这次生成时一样。"
      : "图已经和这次生成时不一样。再点一次「生成游戏」，右边才跟着变。";
  }

  function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
  }

  function endingLine(ruleText) {
    var raw = ruleText || "";
    var matched = raw.match(/结束：\s*([^\n]+)/);
    if (matched && matched[1].trim()) return matched[1].trim();
    if (/一局结束|游戏结束|到此结束|这局结束/.test(raw)) return raw.trim();
    return "";
  }

  function ruleBody(ruleText) {
    return (ruleText || "").split("\n").filter(function (line) {
      return line.trim() && !/^结束：/.test(line.trim());
    }).join("\n").trim();
  }

  function createRuntime(snap) {
    var mech = findNode(snap, "mechanic-main");
    var parts = splitItems(mech && mech.text);
    var verbs = parts.length ? parts.slice(0, 3) : [];
    var names = ["variable-a", "variable-b"].map(function (id) {
      var item = findNode(snap, id);
      if (!item || !item.text) return "";
      return item.text.split("\n")[0].trim();
    }).filter(Boolean);
    var ruleItem = findNode(snap, "rule-main");
    var feedbackItem = findNode(snap, "feedback-main");
    var entityItem = findNode(snap, "entity-main");
    var intentItem = findNode(snap, "intent-main");
    return {
      verbs: verbs,
      extraVerbs: parts.length > 3,
      vars: names.map(function (name, i) { return { name: name, value: 46 + i * 8 }; }),
      rule: ruleItem && ruleItem.text ? ruleItem.text : "",
      feedback: feedbackItem && feedbackItem.text ? feedbackItem.text : "",
      challenges: ["challenge-1", "challenge-2", "challenge-3"].map(function (id) {
        var item = findNode(snap, id);
        return item && item.text ? item.text : "";
      }).filter(Boolean),
      challengeIndex: 0,
      entity: entityItem && entityItem.text ? entityItem.text.split("\n")[0].trim() : "",
      intent: intentItem && intentItem.text ? intentItem.text.split("\n")[0].trim() : "",
      source: snap.source || "",
      echo: 18,
      progress: 0,
      fails: 0,
      actions: 0,
      flash: 0,
      tick: 0,
      over: "",
      endTitle: "",
      endLine: "",
      did: "",
      world: "",
      sense: "",
      delta: "",
      banner: ""
    };
  }

  function stopLoop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  function startLoop() {
    stopLoop();
    var step = function () {
      if (!runtime) return;
      runtime.tick += 1;
      if (runtime.flash > 0) runtime.flash -= 1;
      draw();
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }

  function showWaiting() {
    stopLoop();
    runtime = null;
    var root = document.getElementById("gameBody");
    root.textContent = "";
    var wrap = el("div", { class: "game-wait" });
    wrap.appendChild(el("div", { class: "game-frame", "aria-hidden": "true" }));
    wrap.appendChild(el("p", { class: "pane-lead" }, "还没生成。图可以不完整。你觉得可以试了，就在中间点「生成游戏」。"));
    wrap.appendChild(el("p", { class: "stub-note" }, "右边是页内的第一版草稿，没有接到 AI Game Creator。"));
    root.appendChild(wrap);
  }

  function paintGame(rebuild) {
    var root = document.getElementById("gameBody");
    if (!gameSnap || !runtime) {
      showWaiting();
      return;
    }
    if (rebuild || !root.querySelector(".play")) {
      root.textContent = "";
      var play = el("div", { class: "play" });
      play.appendChild(el("p", { class: "drift", id: "drift" }));
      play.appendChild(el("p", { class: "play-intent", id: "gIntent" }));
      play.appendChild(el("p", { class: "fine", id: "gSource" }));
      var stage = el("div", { class: "stage-wrap" });
      var canvas = el("canvas", { id: "gCanvas", width: "640", height: "168" });
      stage.appendChild(canvas);
      var end = el("div", { class: "g-end", id: "gEnd" });
      end.hidden = true;
      end.appendChild(el("p", { id: "gEndTitle" }));
      end.appendChild(el("p", { id: "gEndLine" }));
      var again = el("button", { type: "button", class: "btn btn-outline btn-tiny", id: "gReplay" }, "再来一次");
      again.addEventListener("click", replay);
      end.appendChild(again);
      stage.appendChild(end);
      play.appendChild(stage);
      play.appendChild(el("div", { id: "gVars" }));
      play.appendChild(el("div", { class: "meter", id: "gMeter" }));
      play.appendChild(el("div", { class: "verb-row", id: "gVerbs" }));
      play.appendChild(el("p", { class: "g-did", id: "gDid" }));
      play.appendChild(el("p", { class: "g-delta", id: "gDelta" }));
      play.appendChild(el("p", { class: "g-world", id: "gWorld", "aria-live": "polite" }));
      play.appendChild(el("p", { class: "g-sense", id: "gSense" }));
      play.appendChild(el("p", { class: "g-banner", id: "gBanner" }));
      play.appendChild(el("p", { class: "fine", id: "gKeys" }));
      var replayRow = el("div", { class: "dock-actions" });
      var replayBtn = el("button", { type: "button", class: "btn btn-outline btn-tiny" }, "再来一次");
      replayBtn.addEventListener("click", replay);
      replayRow.appendChild(replayBtn);
      play.appendChild(replayRow);
      play.appendChild(el("h3", null, "这一版做了"));
      play.appendChild(el("ul", { id: "gDone" }));
      play.appendChild(el("h3", null, "这一版没做"));
      play.appendChild(el("ul", { id: "gSkip" }));
      play.appendChild(el("p", { class: "stub-note" }, "这是按当前图做的页内草稿，不是 AI Game Creator 引擎。空节点没有做成玩法。"));
      root.appendChild(play);

      var verbs = document.getElementById("gVerbs");
      if (!runtime.verbs.length) {
        verbs.appendChild(el("p", { class: "pane-lead" }, "图上没有玩家动词，这一版没有按键。下面只显示已经写下的部分。"));
      } else {
        runtime.verbs.forEach(function (verb, index) {
          var btn = el("button", { type: "button", class: "btn btn-outline btn-tiny", "data-verb": String(index) });
          btn.appendChild(document.createTextNode(verb + " "));
          btn.appendChild(el("kbd", null, String(index + 1)));
          btn.addEventListener("click", function () { act(index); });
          verbs.appendChild(btn);
        });
      }
      fillContractLists();
    }
    fillRuntimeFields();
    updateDrift();
    draw();
  }

  function fillContractLists() {
    var done = document.getElementById("gDone");
    var skip = document.getElementById("gSkip");
    done.textContent = "";
    skip.textContent = "";
    gameSnap.nodes.forEach(function (item) {
      var li = el("li");
      var name = el("b", null, item.id);
      li.appendChild(name);
      if (item.text) {
        li.appendChild(document.createTextNode("（" + item.label + "）：" + item.text.replace(/\n/g, " ")));
        done.appendChild(li);
      } else {
        li.appendChild(document.createTextNode("（" + item.label + "）：空着，这一版不做"));
        skip.appendChild(li);
      }
    });
    if (!done.children.length) {
      done.appendChild(el("li", null, "图上没有写好的节点。这一版没有可做的内容。"));
    }
    if (!skip.children.length) {
      skip.appendChild(el("li", null, "这次生成时，图上的格子都写了字。"));
    }
  }

  function fillRuntimeFields() {
    var intent = document.getElementById("gIntent");
    var source = document.getElementById("gSource");
    if (!intent) return;
    intent.textContent = runtime.intent ? "目标体验：" + runtime.intent : "目标体验还空着。";
    source.textContent = runtime.source ? "来源：" + runtime.source : "";
    var vars = document.getElementById("gVars");
    vars.textContent = "";
    if (!runtime.vars.length) {
      vars.appendChild(el("p", { class: "fine" }, "状态还空着，这一版没有数值在变。"));
    } else {
      runtime.vars.forEach(function (v) {
        var row = el("div", { class: "var-row" });
        row.appendChild(el("span", { class: "var-name" }, v.name));
        var track = el("div", { class: "var-track" });
        var fill = el("div", { class: "var-fill" });
        fill.style.width = v.value + "%";
        track.appendChild(fill);
        row.appendChild(track);
        row.appendChild(el("span", { class: "var-num" }, String(v.value)));
        vars.appendChild(row);
      });
    }
    var meter = document.getElementById("gMeter");
    meter.textContent = "";
    var currentChallenge = runtime.challenges[runtime.challengeIndex] || "";
    if (currentChallenge) {
      var challengeLabel = "挑战：" + currentChallenge.replace(/\n/g, " ");
      if (runtime.challenges.length > 1) {
        challengeLabel = "挑战 " + (runtime.challengeIndex + 1) + "/" + runtime.challenges.length + "：" + currentChallenge.replace(/\n/g, " ");
      }
      meter.appendChild(el("p", null, challengeLabel));
      var track2 = el("div", { class: "var-track" });
      var fill2 = el("div", { class: "var-fill" });
      fill2.style.width = runtime.progress + "%";
      track2.appendChild(fill2);
      meter.appendChild(track2);
    }
    document.getElementById("gDid").textContent = runtime.did || (runtime.verbs.length ? "点下面的动词，或按键盘 1、2、3。" : "");
    document.getElementById("gDelta").textContent = runtime.delta;
    document.getElementById("gWorld").textContent = runtime.world;
    document.getElementById("gSense").textContent = runtime.sense;
    document.getElementById("gBanner").textContent = runtime.banner;
    var keys = document.getElementById("gKeys");
    if (runtime.extraVerbs) keys.textContent = "图上动词超过 3 个，这一版先做前 3 个。";
    else if (runtime.verbs.length) keys.textContent = "键盘 1、2、3 对应上面的动词。";
    else keys.textContent = "";
    var end = document.getElementById("gEnd");
    if (runtime.over) {
      end.hidden = false;
      document.getElementById("gEndTitle").textContent = runtime.endTitle;
      document.getElementById("gEndLine").textContent = runtime.endLine;
    } else {
      end.hidden = true;
    }
  }

  function act(index) {
    if (!runtime || runtime.over) return;
    var verb = runtime.verbs[index];
    if (!verb) return;
    runtime.actions += 1;
    runtime.did = "你做了「" + verb + "」。";
    if (runtime.vars.length) {
      var target = runtime.vars[Math.min(index, runtime.vars.length - 1)];
      var dir = index % 2 === 0 ? 1 : -1;
      var before = target.value;
      target.value = clamp(target.value + dir * 14, 0, 100);
      var diff = target.value - before;
      runtime.delta = "「" + verb + "」改变了" + target.name + "：" + (diff > 0 ? "+" : "") + diff;
    } else {
      runtime.echo = (runtime.echo + 22) % 100;
      runtime.delta = "「" + verb + "」有了动作。图上没有状态，所以没有数值在变。";
    }

    var body = ruleBody(runtime.rule);
    var ending = endingLine(runtime.rule);
    var hot = runtime.vars.some(function (v) { return v.value >= 78 || v.value <= 22; });
    var watches = /失速|过陡|太大|太小|过度|不够|危险|失败|不能/.test(body);
    var failed = false;
    if (body && watches && hot) {
      failed = true;
      runtime.fails += 1;
      runtime.flash = 12;
      runtime.world = "规则触发：" + body;
    } else if (body) {
      runtime.world = "世界：" + body;
    } else if (ending) {
      runtime.world = "结束写在规则上：" + ending + "。这一步的即时回应还没写。";
    } else {
      runtime.world = "世界规则还空着，这一步没有世界回应。";
    }
    runtime.sense = runtime.feedback ? "你感觉到：" + runtime.feedback : "";

    var justFilled = false;
    if (runtime.challenges.length && !failed) {
      var beforeProgress = runtime.progress;
      runtime.progress = Math.min(100, runtime.progress + 34);
      justFilled = beforeProgress < 100 && runtime.progress >= 100;
    }
    if (failed) runtime.progress = Math.max(0, runtime.progress - 20);

    runtime.banner = "";
    runtime.over = "";
    if (justFilled && runtime.challengeIndex < runtime.challenges.length - 1) {
      runtime.challengeIndex += 1;
      runtime.progress = 0;
      runtime.banner = "下一挑战：" + runtime.challenges[runtime.challengeIndex].split("\n")[0];
    } else if (justFilled && ending) {
      runtime.over = "done";
      runtime.endTitle = "这一局停了";
      runtime.endLine = ending;
    } else if (justFilled) {
      runtime.banner = "这个挑战到了。结束还没写在规则上，可以继续操作。";
    } else if (ending && !runtime.challenges.length && runtime.actions >= 6) {
      runtime.over = "done";
      runtime.endTitle = "这一局停了";
      runtime.endLine = "图上有结束，还没有挑战。做满 6 次动作就停。" + ending;
    } else if (runtime.fails >= 3 && /失败|失速/.test(body)) {
      runtime.over = "stop";
      runtime.endTitle = "这一局停了";
      runtime.endLine = body;
    }
    fillRuntimeFields();
  }

  function draw() {
    var canvas = document.getElementById("gCanvas");
    if (!canvas || !runtime) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var cssW = canvas.clientWidth || 320;
    var cssH = 168;
    var need = Math.floor(cssW * dpr);
    if (canvas.width !== need) {
      canvas.width = need;
      canvas.height = Math.floor(cssH * dpr);
    }
    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);
    ctx.fillStyle = runtime.flash > 0 ? "#3a2428" : "#12141c";
    ctx.fillRect(0, 0, cssW, cssH);
    ctx.strokeStyle = "rgba(212,168,83,0.35)";
    ctx.beginPath();
    ctx.moveTo(16, cssH * 0.72);
    ctx.lineTo(cssW - 16, cssH * 0.72);
    ctx.stroke();
    if (runtime.challenges.length) {
      var gx = cssW * 0.84;
      ctx.strokeStyle = "rgba(212,168,83,0.85)";
      ctx.beginPath();
      ctx.moveTo(gx, cssH * 0.72);
      ctx.lineTo(gx, cssH * 0.3);
      ctx.stroke();
      ctx.fillStyle = "#d4a853";
      ctx.fillRect(gx, cssH * 0.3, 14, 9);
    }
    var primary = runtime.vars[0] ? runtime.vars[0].value : runtime.echo;
    var x = 28 + (primary / 100) * Math.max(40, cssW - 72);
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var bob = reduce ? 0 : Math.sin(runtime.tick / 18) * 3;
    var y = cssH * 0.72 - 26 + bob;
    var boatish = /船|帆|舵|航/.test((runtime.entity || "") + runtime.verbs.join(""));
    ctx.save();
    ctx.translate(x, y);
    var tiltSource = runtime.vars[1] ? runtime.vars[1].value : runtime.echo;
    ctx.rotate((tiltSource - 50) * 0.012);
    if (runtime.entity && boatish) {
      ctx.fillStyle = "#e8c278";
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.lineTo(16, 12);
      ctx.lineTo(-16, 12);
      ctx.closePath();
      ctx.fill();
    } else if (runtime.entity) {
      ctx.fillStyle = "#e8c278";
      ctx.fillRect(-16, -16, 32, 32);
    } else {
      ctx.strokeStyle = "rgba(237,234,227,0.55)";
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(-16, -16, 32, 32);
      ctx.setLineDash([]);
    }
    ctx.restore();
    ctx.fillStyle = "#edeae3";
    ctx.font = "13px 'Noto Sans SC', sans-serif";
    ctx.fillText(runtime.entity ? runtime.entity.slice(0, 16) : "对象还空着", 16, 24);
  }

  function replay() {
    if (!gameSnap) return;
    runtime = createRuntime(gameSnap);
    paintGame(false);
  }

  function makeGame() {
    if (!graphOn()) {
      var g0 = { source: "", nodes: BASE.map(function (item) {
        return node(item.id, item.type, item.label, "", EMPTY_NOTE[item.id], false);
      }), edges: [] };
      gameSnap = g0;
    } else {
      gameSnap = JSON.parse(JSON.stringify(compose()));
    }
    confirmedKey = graphOn() ? graphKey(compose()) : graphKey(gameSnap);
    runtime = createRuntime(gameSnap);
    if (!runtime.verbs.length) {
      runtime.world = "还没有可点的动词。";
    }
    paintGame(true);
    startLoop();
    var pane = document.getElementById("paneGame");
    if (window.matchMedia("(max-width: 800px)").matches) pane.scrollIntoView({ behavior: "smooth" });
    save();
  }

  function loadSail() {
    Object.keys(SAIL).forEach(function (id) {
      answers[id] = SAIL[id];
      drafts[id] = SAIL[id];
      var area = document.querySelector('textarea[data-q="' + id + '"]');
      if (area) area.value = SAIL[id];
      (OWNERS[id] || []).forEach(function (nid) { delete overrides[nid]; });
    });
    document.getElementById("editHint").textContent = "已载入帆船的 Q1–Q4。其余题没动。这只是例子。";
    renderGraph();
    syncAll();
    save();
  }

  function clearAll() {
    answers = {};
    drafts = {};
    overrides = {};
    reached = {};
    selected = null;
    gameSnap = null;
    confirmedKey = "";
    runtime = null;
    lastSig = {};
    document.getElementById("askFollow").textContent = "";
    document.querySelectorAll("textarea[data-q]").forEach(function (area) { area.value = ""; });
    document.getElementById("editHint").textContent = "已清空。";
    renderGraph();
    syncAll();
    showWaiting();
    save();
  }

  function saveSoon() {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(save, 160);
  }

  function save() {
    try {
      document.querySelectorAll("textarea[data-q]").forEach(function (area) {
        drafts[area.getAttribute("data-q")] = area.value;
      });
      localStorage.setItem(KEY, JSON.stringify({
        answers: answers,
        drafts: drafts,
        overrides: overrides,
        reached: reached,
        widths: widths,
        game: gameSnap,
        confirmedKey: confirmedKey
      }));
    } catch (err) {
      /* ignore quota */
    }
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      answers = data.answers || {};
      drafts = data.drafts || {};
      overrides = data.overrides || {};
      reached = data.reached || {};
      if (Array.isArray(data.widths) && data.widths.length === 3) widths = data.widths;
      gameSnap = data.game || null;
      confirmedKey = data.confirmedKey || "";
    } catch (err) {
      answers = {};
    }
  }

  function stacked() {
    return window.matchMedia("(max-width: 800px)").matches;
  }

  function applyWidths() {
    var workspace = document.getElementById("workspace");
    if (stacked()) {
      workspace.style.gridTemplateColumns = "";
      return;
    }
    var total = workspace.clientWidth - 16;
    var sum = widths[0] + widths[1] + widths[2];
    var px = widths.map(function (w) { return total * w / sum; });
    var min = 200;
    if (total < min * 3) min = Math.max(120, Math.floor(total / 3) - 4);
    for (var guard = 0; guard < 4; guard++) {
      var overflow = 0;
      var free = 0;
      px.forEach(function (value) {
        if (value < min) overflow += min - value;
        else free += value - min;
      });
      if (overflow <= 0) break;
      px = px.map(function (value) {
        if (value < min) return min;
        return value - (value - min) * (overflow / free);
      });
    }
    workspace.style.gridTemplateColumns = px[0] + "px 8px " + px[1] + "px 8px " + px[2] + "px";
  }

  function bindSplit(div) {
    div.addEventListener("pointerdown", function (e) {
      if (stacked() || e.button !== 0) return;
      e.preventDefault();
      div.classList.add("is-drag");
      var split = Number(div.getAttribute("data-split"));
      var startX = e.clientX;
      var start = widths.slice();
      var total = document.getElementById("workspace").clientWidth - 16;
      var sum = start[0] + start[1] + start[2];
      var minR = (200 / Math.max(total, 1)) * sum;
      function move(ev) {
        var delta = ((ev.clientX - startX) / Math.max(total, 1)) * sum;
        var a = start[split] + delta;
        var b = start[split + 1] - delta;
        if (a < minR || b < minR) return;
        widths[split] = a;
        widths[split + 1] = b;
        applyWidths();
      }
      function up() {
        div.classList.remove("is-drag");
        div.removeEventListener("pointermove", move);
        div.removeEventListener("pointerup", up);
        save();
      }
      div.addEventListener("pointermove", move);
      div.addEventListener("pointerup", up);
      div.setPointerCapture(e.pointerId);
    });
    div.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      if (stacked()) return;
      var split = Number(div.getAttribute("data-split"));
      var total = document.getElementById("workspace").clientWidth - 16;
      var sum = widths[0] + widths[1] + widths[2];
      var minR = (200 / Math.max(total, 1)) * sum;
      var step = sum * (e.shiftKey ? 0.08 : 0.04) * (e.key === "ArrowLeft" ? -1 : 1);
      var a = widths[split] + step;
      var b = widths[split + 1] - step;
      if (a < minR || b < minR) return;
      widths[split] = a;
      widths[split + 1] = b;
      applyWidths();
      save();
    });
    div.addEventListener("dblclick", function () {
      widths = [32, 40, 28];
      applyWidths();
      save();
    });
  }

  function init() {
    load();
    var core = document.getElementById("askCore");
    QUESTIONS.filter(function (q) { return q.core; }).forEach(function (q) {
      core.appendChild(buildCard(q));
    });
    FOLLOW_ORDER.forEach(function (id) {
      if (reached[id]) placeFollow(id);
    });
    document.getElementById("askCore").addEventListener("click", onAskClick);
    document.getElementById("askFollow").addEventListener("click", onAskClick);
    document.getElementById("askCore").addEventListener("input", onAskInput);
    document.getElementById("askFollow").addEventListener("input", onAskInput);
    document.getElementById("applyDirect").addEventListener("click", applyDirect);
    document.getElementById("askAi").addEventListener("click", askAi);
    document.getElementById("applyAi").addEventListener("click", applyAi);
    document.getElementById("makeGame").addEventListener("click", makeGame);
    document.getElementById("loadSail").addEventListener("click", loadSail);
    document.getElementById("clearAll").addEventListener("click", clearAll);
    bindSplit(document.getElementById("split0"));
    bindSplit(document.getElementById("split1"));
    window.addEventListener("resize", function () {
      applyWidths();
      if (runtime) draw();
    });
    document.addEventListener("keydown", function (e) {
      if (!runtime || runtime.over) return;
      var tag = document.activeElement && document.activeElement.tagName;
      if (tag === "TEXTAREA" || tag === "INPUT") return;
      if (e.key === "1" || e.key === "2" || e.key === "3") {
        var index = Number(e.key) - 1;
        if (runtime.verbs[index]) {
          e.preventDefault();
          act(index);
        }
      }
    });
    applyWidths();
    renderGraph();
    syncAll();
    if (gameSnap && gameSnap.nodes) {
      runtime = createRuntime(gameSnap);
      paintGame(true);
      startLoop();
    } else {
      gameSnap = null;
      showWaiting();
    }
  }

  function onAskClick(e) {
    var btn = e.target.closest("[data-confirm]");
    if (!btn) return;
    confirmQuestion(btn.getAttribute("data-confirm"));
  }

  function onAskInput(e) {
    var area = e.target.closest("textarea[data-q]");
    if (!area) return;
    var id = area.getAttribute("data-q");
    drafts[id] = area.value;
    syncOne(id);
    saveSoon();
  }

  init();
})();
