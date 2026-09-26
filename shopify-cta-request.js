"use strict";

const requestButton = document.getElementById("cta-email-request");
const requestStatus = document.getElementById("cta-email-status");

requestButton.addEventListener("click", () => {
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
    "Please send one free homepage finding. I understand this is not a full audit and there is no purchase obligation."
  ];
  const subject = "One free homepage finding from Shopify CTA worksheet";
  const mailto = `mailto:ppjdmpk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(notes.join("\n"))}`;
  requestStatus.textContent = "Review the draft in your email app and send it if you want the free finding. Nothing was sent automatically.";
  window.location.href = mailto;
});
