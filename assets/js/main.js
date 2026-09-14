/* ---------- theme ---------- */

(() => {
  const btn = document.getElementById("theme-btn");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  const isDark = () =>
    document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === "dark"
      : systemDark.matches;

  const sync = () => {
    btn.setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme");
  };

  btn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    sync();
  });

  systemDark.addEventListener("change", sync);
  sync();
})();

/* ---------- sticky header ---------- */

(() => {
  const masthead = document.getElementById("masthead");
  const update = () => {
    masthead.dataset.stuck = String(window.scrollY > 4);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
})();

/* ---------- mobile nav ---------- */

(() => {
  const btn = document.getElementById("nav-btn");
  const nav = document.getElementById("nav");

  const setOpen = (open) => {
    nav.dataset.open = String(open);
    btn.setAttribute("aria-expanded", String(open));
  };

  btn.addEventListener("click", () => setOpen(nav.dataset.open !== "true"));

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.dataset.open === "true") {
      setOpen(false);
      btn.focus();
    }
  });

  setOpen(false);
})();

/* ---------- copy email ---------- */

(() => {
  const btn = document.getElementById("copy-email");
  const flag = document.getElementById("copied");
  let timer;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.email);
      flag.dataset.on = "true";
      clearTimeout(timer);
      timer = setTimeout(() => {
        flag.dataset.on = "false";
      }, 1800);
    } catch (e) {
      window.location.href = `mailto:${btn.dataset.email}`;
    }
  });
})();

/* ---------- contact form ---------- */

(() => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  // Replace with a Formspree endpoint (https://formspree.io) to receive messages.
  const ENDPOINT = "";

  const rules = {
    name: (v) => (v.trim() ? "" : "Enter your name."),
    email: (v) =>
      !v.trim()
        ? "Enter your email address."
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
          ? ""
          : "Enter a valid email address.",
    message: (v) => (v.trim().length >= 10 ? "" : "Write at least 10 characters."),
  };

  const showError = (field, msg) => {
    document.getElementById(`${field}-error`).textContent = msg;
  };

  const validate = () => {
    let firstBad = null;
    for (const [field, rule] of Object.entries(rules)) {
      const input = form.elements[field];
      const msg = rule(input.value);
      showError(field, msg);
      if (msg && !firstBad) firstBad = input;
    }
    return firstBad;
  };

  for (const field of Object.keys(rules)) {
    form.elements[field].addEventListener("blur", () => {
      showError(field, rules[field](form.elements[field].value));
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "";

    const firstBad = validate();
    if (firstBad) {
      firstBad.focus();
      return;
    }

    if (!ENDPOINT) {
      status.textContent = "Form endpoint not configured yet.";
      return;
    }

    const submit = form.querySelector("button[type=submit]");
    submit.disabled = true;
    status.textContent = "Sending…";

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.textContent = "Message sent. I'll get back to you.";
    } catch (err) {
      status.textContent = "Could not send. Email me directly instead.";
    } finally {
      submit.disabled = false;
    }
  });
})();

/* ---------- footer year ---------- */

document.getElementById("year").textContent = String(new Date().getFullYear());
