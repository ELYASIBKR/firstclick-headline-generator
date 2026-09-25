# FirstClick Homepage Headline Generator

A small, local-only browser tool that turns six plain-language inputs into:

- three homepage headline directions;
- a supporting line; and
- a primary call to action.

The tool has no dependencies, login, analytics, ads, uploads, network requests, or build step. It runs entirely in the browser.

## Use it

- Live standalone tool: https://elyasibkr.github.io/firstclick-headline-generator/
- FirstClick Fix version: https://firstclick-fix.ppjdmpk.chatgpt.site/open-source/homepage-headline-generator.html

To run it locally, download the repository and open `index.html` in a modern browser.

## Example: a local pickup service

Enter `wash and fold pickup` as the service, `busy households` as the audience,
`clean laundry returned by tomorrow` as the outcome, and `North Vancouver` as
the location. Add `same-day pickup when booked by 10am` as proof and
`Book a pickup` as the action. The tool produces these three headline options:

1. Clean laundry returned by tomorrow for busy households.
2. Wash and fold pickup built for busy households in North Vancouver.
3. Wash and fold pickup: clean laundry returned by tomorrow.

It also drafts a supporting line and a **Book a pickup** button. Choose the
headline that makes the offer clearest to a new visitor. Check every promise
against what the business can actually deliver, then make sure the button
leads straight to the booking step. The generated copy is a starting point;
specific customer language and proof usually need a human edit.

## Using it for a Shopify store

Start with one product collection and one buyer need, not the entire catalog. For
example, a digital invitation shop might enter `editable wedding invitation
templates` as the product, `couples planning their own wedding` as the audience,
`a ready-to-send invitation they can personalize` as the outcome, and `Browse
wedding templates` as the action. Leave the proof field blank unless a claim
such as a review count or delivery speed can be verified on the store.

After generating copy, check the first screen against the actual purchase path:
Does the CTA open the promised collection? Can a new visitor tell whether the
item is digital or physical, how personalization works, and when they receive
it? A headline cannot repair an unclear product or delivery promise. Use the
[Shopify Homepage Copy Checklist](https://firstclick-fix.ppjdmpk.chatgpt.site/shopify-homepage-copy-checklist)
to review those trust and clarity points before publishing the new copy.

For that fictional store, a first-screen draft could look like this:

> **Headline:** Editable wedding invitations you can personalize yourself
>
> **Supporting line:** Choose a template, update the names and event details,
> and see exactly what you will receive before checkout.
>
> **CTA:** Browse wedding templates

This is an illustration, not a claim about a real shop. The headline names the
product and who controls the edit; the supporting line answers a likely buyer
question; and the CTA names the collection it should open. Replace any detail
that the actual product page cannot verify, especially file format, delivery
timing, and what customization is included.

## Want a human rewrite?

Request a **First Screen Fix** with your public homepage URL and the one action you want visitors to take. You will receive one prioritized diagnosis plus a paste-ready headline, supporting line, and CTA within 24 hours.

If the work is useful, pay **$29 after delivery**. If it is not useful, you owe nothing.

[Request a First Screen Fix by email](mailto:ppjdmpk@gmail.com?subject=First%20Screen%20Fix%20request%20from%20GitHub%20README&body=Homepage%20URL%3A%20%0AThe%20one%20action%20I%20want%20visitors%20to%20take%3A%20%0AMy%20current%20headline%3A%20)

## Files

- `index.html` — accessible semantic markup
- `homepage-headline-generator.css` — responsive visual design
- `homepage-headline-generator.js` — local generation and copy interactions
- `robots.txt` and `sitemap.xml` — search discovery
- `llms.txt` — compact tool description for AI discovery
- `LICENSE` — MIT License

## Privacy

Inputs never leave the browser. The project includes no analytics, cookies, third-party scripts, or external API calls.

## License

MIT
