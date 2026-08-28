// CGDD site — bilingual toggle (zh / en) with persistence.
// Markup convention (same as the summer-camp site):
//   <span class="zh">中文</span><span class="en">English</span>
//   <button class="lang" data-lang="zh">中文</button>
//   body[data-lang="zh"]  -> hides .en ;  body[data-lang="en"] -> hides .zh
(function () {
  var KEY = "cgdd-lang";

  function apply(lang) {
    document.body.setAttribute("data-lang", lang);
    var btns = document.querySelectorAll(".lang");
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle("active", btns[i].getAttribute("data-lang") === lang);
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function init() {
    var saved = "en";
    try { saved = localStorage.getItem(KEY) || "en"; } catch (e) {}
    apply(saved);
    var btns = document.querySelectorAll(".lang");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        apply(this.getAttribute("data-lang"));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
