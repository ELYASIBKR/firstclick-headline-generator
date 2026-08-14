/* MIT License — Copyright (c) 2026 FirstClick Fix contributors */
(() => {
  "use strict";

  const example = {
    service: "wash and fold pickup",
    audience: "busy households",
    outcome: "clean laundry returned by tomorrow",
    location: "North Vancouver",
    proof: "same-day pickup when booked by 10am",
    action: "Book a pickup",
  };

  const form = document.querySelector("#headline-form");
  const note = document.querySelector("#copy-note");

  function tidy(value) {
    return value.trim().replace(/[.!?]+$/, "");
  }

  function sentence(value) {
    const clean = tidy(value);
    return clean ? clean.charAt(0).toUpperCase() + clean.slice(1) : "";
  }

  function values() {
    return Object.fromEntries(new FormData(form).entries());
  }

  function render() {
    const draft = values();
    const service = tidy(draft.service) || "your service";
    const audience = tidy(draft.audience) || "the people you serve";
    const outcome = tidy(draft.outcome) || "the result they want";
    const location = tidy(draft.location);
    const proof = tidy(draft.proof);
    const action = tidy(draft.action) || "Get started";
    const place = location ? ` in ${location}` : "";

    document.querySelector("#headline-1").textContent = `${sentence(outcome)} for ${audience}.`;
    document.querySelector("#headline-2").textContent = `${sentence(service)} built for ${audience}${place}.`;
    document.querySelector("#headline-3").textContent = `${sentence(outcome)}—without wasting another day.`;
    document.querySelector("#support").textContent = `${sentence(service)} for ${audience}${place}. ${proof ? `${sentence(proof)}.` : "A clear next step, without the usual friction."}`;
    document.querySelector("#cta").textContent = `${sentence(action)} →`;
  }

  async function copyResult(button) {
    const target = document.querySelector(`#${button.dataset.copy}`);
    const value = target.textContent.replace(/\s+→$/, "");
    try {
      await navigator.clipboard.writeText(value);
      const original = button.textContent;
      button.textContent = "Copied";
      note.textContent = "";
      window.setTimeout(() => { button.textContent = original; }, 1600);
    } catch {
      note.textContent = "Select the result text and copy it manually.";
    }
  }

  form.addEventListener("input", render);
  form.addEventListener("submit", event => event.preventDefault());
  document.querySelector("#restore").addEventListener("click", () => {
    Object.entries(example).forEach(([name, value]) => { form.elements[name].value = value; });
    render();
  });
  document.querySelectorAll("[data-copy]").forEach(button => {
    button.addEventListener("click", () => copyResult(button));
  });

  render();
})();
