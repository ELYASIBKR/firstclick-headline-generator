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
    document.querySelector("#headline-3").textContent = `${sentence(service)}: ${outcome}.`;
    document.querySelector("#support").textContent = `${sentence(service)} for ${audience}${place}. ${proof ? `${sentence(proof)}.` : `The goal: ${outcome}.`}`;
    document.querySelector("#cta").textContent = `${sentence(action)} →`;

    const requestBody = `Homepage URL:\nThe one action I want visitors to take: ${tidy(draft.action) === example.action ? "" : tidy(draft.action)}\nMy current headline:\n`;
    document.querySelector("#request-fix").href = `mailto:ppjdmpk@gmail.com?subject=First%20Screen%20Fix%20request%20from%20GitHub%20Pages&body=${encodeURIComponent(requestBody)}`;

    const freeFindingBody = `Homepage URL:\nThe one action I want visitors to take: ${tidy(draft.action) === example.action ? "" : tidy(draft.action)}\nWhat I sell: ${tidy(draft.service) === example.service ? "" : tidy(draft.service)}\n`;
    document.querySelector("#request-free-finding").href = `mailto:ppjdmpk@gmail.com?subject=One%20free%20homepage%20finding%20from%20GitHub%20Pages&body=${encodeURIComponent(freeFindingBody)}`;
  }

  async function copyResult(button) {
    const target = document.querySelector(`#${button.dataset.copy}`);
    const value = target.textContent.replace(/\s+→$/, "");
    try {
      await navigator.clipboard.writeText(value);
      const original = button.textContent;
      button.textContent = "Copied";
      note.textContent = "";
      note.dataset.state = "success";
      window.setTimeout(() => { button.textContent = original; }, 1600);
    } catch {
      note.textContent = "Select the result text and copy it manually.";
      note.dataset.state = "error";
    }
  }

  async function copyDraft() {
    const direction = document.querySelector("#draft-headline").value;
    const headline = document.querySelector(`#headline-${direction}`).textContent;
    const support = document.querySelector("#support").textContent;
    const cta = document.querySelector("#cta").textContent.replace(/\s+→$/, "");
    const draft = `Headline: ${headline}\nSupporting line: ${support}\nCTA: ${cta}`;
    try {
      await navigator.clipboard.writeText(draft);
      note.textContent = "Full first-screen draft copied.";
      note.dataset.state = "success";
    } catch {
      note.textContent = "Copy failed. Select the headline, supporting line, and CTA text to copy manually.";
      note.dataset.state = "error";
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
  document.querySelector("#copy-draft").addEventListener("click", copyDraft);

  render();
})();
