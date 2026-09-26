"use strict";

const requestButton = document.getElementById("cta-email-request");
const requestStatus = document.getElementById("cta-email-status");

function openRequest(paidRewrite) {
  const value = (id) => document.getElementById(id).value.trim();
  const homepage = value("cta-homepage");
  const goal = value("cta-goal");
  if (!homepage || !goal) {
    requestStatus.textContent = "Add your public homepage URL and the action you want visitors to take first.";
    return;
  }
  try {
    const parsed = new URL(homepage);
    if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("invalid protocol");
  } catch {
    requestStatus.textContent = "Enter a complete public homepage URL beginning with https:// or http://.";
    return;
  }

  const notes = [
    `Homepage URL: ${homepage}`,
    `Desired visitor action: ${goal}`,
    `Current homepage CTA: ${value("cta-current") || "Not provided"}`,
    `CTA destination URL: ${value("cta-destination") || "Not provided"}`,
    `What appears first at the destination: ${value("cta-first-view") || "Not provided"}`,
    `Possible mismatch or fix: ${value("cta-mismatch") || "Not provided"}`,
    "",
    paidRewrite
      ? "Please send a First Screen Fix: one prioritized diagnosis plus a paste-ready headline, supporting line, and CTA within 24 hours. I understand that if it is useful, I pay $29 after delivery; if not, I owe nothing."
      : "Please send one free homepage finding. I understand this is not a full audit and there is no purchase obligation."
  ];
  const subject = paidRewrite ? "First Screen Fix request from Shopify CTA worksheet" : "One free homepage finding from Shopify CTA worksheet";
  const mailto = `mailto:ppjdmpk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(notes.join("\n"))}`;
  requestStatus.textContent = "Review the draft in your email app and send it if you want " + (paidRewrite ? "the $29 pay-after-delivery rewrite" : "the free finding") + ". Nothing was sent automatically.";
  window.location.href = mailto;
}

requestButton.addEventListener("click", () => openRequest(false));
document.getElementById("cta-rewrite-request").addEventListener("click", () => openRequest(true));

document.getElementById("cta-copy-notes").addEventListener("click", async () => {
  const fields = [
    ["Homepage URL", "cta-homepage"], ["Desired visitor action", "cta-goal"],
    ["Current homepage CTA", "cta-current"], ["CTA destination URL", "cta-destination"],
    ["What appears first at the destination", "cta-first-view"], ["Possible mismatch or fix", "cta-mismatch"]
  ];
  const notes = fields.map(([label, id]) => `${label}: ${document.getElementById(id).value.trim() || "Not provided"}`).join("\n");
  const fallbackLabel = document.getElementById("cta-copy-fallback-label");
  const fallback = document.getElementById("cta-copy-fallback");
  fallbackLabel.hidden = true;
  try {
    await navigator.clipboard.writeText(notes);
    requestStatus.textContent = "Notes copied. Paste them into your records or an email you choose to send. Nothing was sent.";
  } catch {
    fallback.value = notes;
    fallbackLabel.hidden = false;
    fallback.focus();
    fallback.select();
    requestStatus.textContent = "Automatic copy is unavailable. Copy the selected notes below. Nothing was sent.";
  }
});
