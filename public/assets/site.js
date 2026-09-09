/* Learn UI Name — site chrome JS */
(function () {
  "use strict";

  /* ---------- service worker (PWA) ---------- */
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").catch(function () {});
    });
  }

  /* ---------- language mode ---------- */
  var MODE_KEY = "ntui-lang-mode";
  function detectMode() {
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      if (/^en/i.test(langs[i])) return "en";
    }
    return "ko";
  }
  function mode() {
    try { return localStorage.getItem(MODE_KEY) || "ko"; } catch (e) { return "ko"; }
  }
  function applyMode(m) {
    document.documentElement.setAttribute("data-lang-mode", m);
    document.querySelectorAll(".ls-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-mode") === m);
    });
  }
  document.querySelectorAll(".ls-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      var m = b.getAttribute("data-mode");
      try { localStorage.setItem(MODE_KEY, m); } catch (e) {}
      applyMode(m);
    });
  });
  applyMode(mode());

  /* ---------- keyboard: / or ⌘K focuses search, Esc clears ---------- */
  document.addEventListener("keydown", function (ev) {
    var tag = (ev.target.tagName || "").toLowerCase();
    var typing = tag === "input" || tag === "textarea" || ev.target.isContentEditable;
    if ((ev.key === "/" && !typing) || ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === "k")) {
      var inp = document.getElementById("search") || document.getElementById("style-search") || document.getElementById("table-search");
      if (inp) { ev.preventDefault(); inp.focus(); inp.select(); }
    }
    if (ev.key === "Escape" && typing) {
      var active = document.activeElement;
      if (active && (active.id === "search" || active.id === "style-search" || active.id === "table-search")) {
        if (active.value) { active.value = ""; active.dispatchEvent(new Event("input")); }
        active.blur();
      }
    }
  });

  function debounce(fn, ms) {
    var t = null;
    return function () {
      var args = arguments, self = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  }

  function syncURL(params) {
    if (!history.replaceState) return;
    var url = new URL(location.href);
    Object.keys(params).forEach(function (k) {
      if (params[k]) url.searchParams.set(k, params[k]);
      else url.searchParams.delete(k);
    });
    history.replaceState(null, "", url);
  }

  function highlightEl(el, q) {
    if (!el) return;
    if (!el.hasAttribute("data-orig")) el.setAttribute("data-orig", el.innerHTML);
    else el.innerHTML = el.getAttribute("data-orig");
    if (!q) return;
    var txt = el.textContent;
    var i = txt.toLowerCase().indexOf(q);
    if (i === -1) return;
    var before = txt.slice(0, i), hit = txt.slice(i, i + q.length), after = txt.slice(i + q.length);
    el.textContent = "";
    el.appendChild(document.createTextNode(before));
    var mark = document.createElement("mark");
    mark.textContent = hit;
    el.appendChild(mark);
    el.appendChild(document.createTextNode(after));
  }

  /* ---------- double-press a word: plain-English definition ---------- */
  var pop = document.getElementById("def-pop");
  var popWord = document.getElementById("def-word");
  var popBody = document.getElementById("def-body");
  var popSrc = document.getElementById("def-src");
  var hideTimer = null;

  function hidePop() { if (pop) pop.hidden = true; }
  function selectedWord() {
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed) return "";
    var txt = sel.toString().trim();
    var m = txt.match(/[A-Za-z][A-Za-z\-']*/);
    return m ? m[0].toLowerCase() : "";
  }
  document.addEventListener("dblclick", function (ev) {
    if (!pop) return;
    var w = selectedWord();
    if (!w || w.length < 2) { hidePop(); return; }
    popWord.textContent = w;
    popBody.textContent = "조회 중…";
    popSrc.textContent = "plain-English definition";
    pop.hidden = false;
    var x = Math.min(ev.clientX + 12, window.innerWidth - 340);
    var y = Math.min(ev.clientY + 14, window.innerHeight - 160);
    pop.style.left = Math.max(8, x) + "px";
    pop.style.top = Math.max(8, y) + "px";
    clearTimeout(hideTimer);
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(w))
      .then(function (r) { if (!r.ok) throw new Error("nf"); return r.json(); })
      .then(function (data) {
        var meanings = data[0] && data[0].meanings || [];
        var out = [];
        for (var i = 0; i < meanings.length && out.length < 2; i++) {
          var d = meanings[i].definitions && meanings[i].definitions[0];
          if (d) out.push("(" + meanings[i].partOfSpeech + ") " + d.definition);
        }
        popBody.textContent = out.length ? out.join("\n") : "정의를 찾을 수 없습니다.";
      })
      .catch(function () {
        popBody.textContent = "정의를 찾을 수 없습니다.";
      });
    hideTimer = setTimeout(hidePop, 9000);
  });
  document.addEventListener("click", function (ev) {
    if (pop && !pop.hidden && !pop.contains(ev.target)) hidePop();
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") hidePop();
  });
})();
