/* Lean-AI — premium interactions. Vanilla JS, no dependencies. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- footer year ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- sticky nav state ---------- */
  var nav = document.querySelector(".nav");
  function onScroll() { if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".mobile-menu");
  var closeBtn = document.querySelector(".mobile-close");
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (toggle) toggle.addEventListener("click", function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  if (menu) menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- scroll reveal (stagger via CSS --i) ---------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- count-up stats ---------- */
  var nums = document.querySelectorAll("[data-count]");
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var pre = el.getAttribute("data-prefix") || "";
    var suf = el.getAttribute("data-suffix") || "";
    if (reduce) { el.textContent = pre + target + suf; return; }
    var dur = 1400, start = null;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(target * eased) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); nio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { nio.observe(el); });
  } else {
    nums.forEach(countUp);
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq__item").forEach(function (item) {
    var q = item.querySelector(".faq__q");
    var a = item.querySelector(".faq__a");
    if (!q || !a) return;
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", function () {
      var open = item.classList.contains("is-open");
      document.querySelectorAll(".faq__item.is-open").forEach(function (other) {
        if (other !== item) { other.classList.remove("is-open"); other.querySelector(".faq__a").style.maxHeight = null; other.querySelector(".faq__q").setAttribute("aria-expanded", "false"); }
      });
      item.classList.toggle("is-open", !open);
      q.setAttribute("aria-expanded", String(!open));
      a.style.maxHeight = open ? null : a.scrollHeight + "px";
    });
  });

  /* ---------- magnetic primary buttons (subtle) ---------- */
  if (finePointer && !reduce) {
    document.querySelectorAll(".btn--primary").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width / 2;
        var my = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + mx * 0.18 + "px," + (my * 0.18 - 2) + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---------- contact form (client-side ack) ---------- */
  var form = document.querySelector(".cta__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector("#email");
      if (email && !email.checkValidity()) { email.focus(); return; }
      var btn = form.querySelector("button[type=submit]");
      if (btn) { btn.innerHTML = "Thank you — we'll be in touch within one business day"; btn.disabled = true; btn.style.transform = ""; }
      // TODO: wire to an endpoint (Formspree / Netlify Forms / own API).
    });
  }

  /* ---------- hero canvas: calm flowing lines ---------- */
  var canvas = document.querySelector(".hero__canvas");
  if (canvas && !reduce) {
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, t = 0, raf = null, visible = true;
    var LINES = 5;

    function resize() {
      var rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < LINES; i++) {
        var prog = i / (LINES - 1);
        var baseY = H * (0.36 + prog * 0.5);
        var amp = 26 + i * 12;
        var speed = 0.00022 + i * 0.00004;
        var wl = 0.0016 + i * 0.0002;
        ctx.beginPath();
        for (var x = -20; x <= W + 20; x += 14) {
          var y = baseY
            + Math.sin(x * wl + t * speed * 1000 + i) * amp
            + Math.sin(x * wl * 0.5 - t * speed * 600) * amp * 0.4
            - (x / W) * 90; // gentle ascent (the lean curve)
          if (x === -20) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        var alpha = 0.05 + (1 - prog) * 0.07;
        ctx.strokeStyle = "rgba(201,164,93," + alpha + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      t += 16;
      if (visible) raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    // pause when hero off-screen
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(draw);
        else if (!visible && raf) { cancelAnimationFrame(raf); raf = null; }
      }, { threshold: 0 }).observe(canvas);
    }
  }
})();

