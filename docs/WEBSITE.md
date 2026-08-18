# Eshkere Strategy website V1

Status: implemented
Last updated: 2026-08-18

This document is the source of truth for the Eshkere Strategy public website V1. It records the settled product brief without changing the underlying strategy.

## Purpose and audience

The website is the curated public interface to Vadym Sulzhenko's personal AI-safety strategy. Its primary outcome is that a relevant person can understand Vadym's current direction within a few minutes and recognize whether they can offer an opportunity, resource, introduction, collaboration, or useful advice.

The primary audience is AI-safety employers and hiring managers, funders, fellowship or program organizers, researchers and practitioners, field-builders, community organizers, collaborators, and introduction-makers. Students, peers, people curious about Vadym's work, and visitors from one of his projects are secondary audiences.

V1 is not a general AI-safety explainer, fundraising site, complete CV, blog, newsletter, opportunity database, personal dashboard, application tracker, or the homepage of a formal Eshkere organization.

## Relationships and publication boundary

The site speaks in Vadym's first-person voice. Eshkere Strategy is Vadym's persistent personal strategy for accumulating and deploying resources toward AI-safety problems. The website is a curated public view of that system; the repository is the deeper working source.

Broader Eshkere remains a separate, evolving idea. V1 may briefly explain that Eshkere Strategy is one project under it and that the broader concept currently distinguishes Health—the non-optional conditions for human flourishing—from Games—the optional things people choose to pursue. The site must not imply that broader Eshkere is a formal organization or make it the subject of this website.

Repository content is working source material. Website content is intentionally curated publication. The build must not render `docs/*.md` or import strategy documents automatically.

The site may publish the AI-safety objective, power as instrumental, the four-part power model, the five resource-acquisition routes, the financial/runway bottleneck at a high level, broad career directions, public projects, strategic principles, current priorities, collaboration requests, public links, and high-level current experiments.

Do not publish exact spending, savings, runway balances, detailed income assumptions, application-by-application status, speculative probabilities, private reasoning about individuals, medical details, identity or account information, confidential third-party information, or raw working notes merely because they exist in the public repository.

## Information architecture

V1 has exactly two authored pages and a standard 404 page:

- `/` — public front door.
- `/strategy` — deeper explanation of the strategy system.
- `/404.html` — standard not-found page.

Do not add About, Projects, Blog, Contact, Now, or other authored pages in V1.

### Home

Use this section order:

1. Header with Eshkere Strategy, Home, Strategy, and GitHub.
2. Hero: “MAXIMIZE HEALTH, PLAY GAMES” with “Health is non-optional. Everything else is a game.” and links to current priorities and the strategy.
3. What I'm optimizing for: objective, current bottleneck, and longer horizon.
4. Now: manually dated priority cards sourced from `web/src/data/site.ts`.
5. What I mean by power: Capital, Capabilities, Productivity, and Influence in that order.
6. How I can acquire resources: Employment; Career Transition Funding; Project Funding; Fellowships, Internships, Residencies & Support; Project Revenue & Donations.
7. Current work with explicit status labels and no invented accomplishments.
8. Where outside leverage would help, linking to Vadym's public GitHub profile.
9. A short, visually secondary clarification about broader Eshkere.
10. Footer.

### Strategy

Use this section order:

1. Introduction.
2. Objective and near-term / three-to-five-year horizons.
3. Current financial/runway bottleneck without precise personal figures.
4. The four-part power model.
5. The five resource-acquisition routes, distinguished from career paths.
6. The operating loop: **identify the bottleneck → acquire relevant resources → convert resources into power → direct power toward AI safety → review results and update**.
7. Decision principles.
8. What the strategy is not.
9. Closing links to current priorities and the GitHub repository.

## Calls to action

The primary site-wide call to action is **See current priorities**. The secondary call is **Read the strategy**. In collaboration context, use **View my GitHub**.

Do not make Donate, Fund me, Hire me, or Book a call primary calls to action in V1. Do not invent an email address.

## Design and interaction

The 2026-08-18 cosmic mock-up is the authoritative visual reference. The desired impression is cinematic, playful, internet-native, premium, ambitious, and personal rather than corporate: a sophisticated hyperpop world wrapped around a rigorous public strategy.

Use a deep near-black cosmic ground; electric cyan, bubblegum pink, ultraviolet, acid lime, and peach accents; a large luminous Earth-like planet; editorial serif display typography; and restrained hearts, sparkles, pixels, orbit lines, and game-like stickers. The centered `ESHKERE` wordmark is rendered as accessible text. No external fonts are required.

The Home hero uses a separate original, text-free generated planet image. Astro produces AVIF and WebP versions with a PNG fallback. Interface text, navigation, buttons, badges, and decorative linework remain HTML and CSS rather than being baked into the artwork. The exact hero copy is “MAXIMIZE HEALTH, PLAY GAMES” with “Health is non-optional. Everything else is a game.” The remainder of the site carries the same visual language with calmer backgrounds and reduced decoration for long-form readability.

Motion is restrained: slow atmospheric image drift, subtle floating decorations, chromatic hover feedback, intersection-based entrances, and a Strategy-page reading-progress line. Content remains fully available without JavaScript, motion never delays access to information, and `prefers-reduced-motion` disables atmospheric and entrance effects.

Build mobile-first. At 320px, content must remain one-column without horizontal overflow. At wider sizes, use compact grids while preserving readable line lengths. Navigation stays simple without a hamburger unless necessary.

## Accessibility

Use semantic HTML and landmarks, a logical heading hierarchy, keyboard-accessible navigation, visible focus states, WCAG AA text contrast, reasonable touch targets, and links that are distinguishable without relying on color alone. Do not hide essential information behind hover. Pages must remain understandable without CSS.

## Technical architecture

Use Astro, TypeScript, and plain CSS inside `web/`. Produce static output only. Do not add React, Vue, Svelte, Tailwind, a component library, CMS, database, server runtime, authentication, or analytics.

Separate reusable layout/components from pages. Put frequently changing public content—last-updated date, priorities, work records, status labels, public links, and collaboration asks—in `web/src/data/site.ts`. Static explanatory prose may remain in pages or components. Do not dynamically read strategy documents during the build.

Use system font stacks. Include canonical URLs, page-specific titles and descriptions, Open Graph metadata, Twitter/X summary metadata, robots indexing, a favicon, and a sitemap if it can be added with minimal configuration. A custom social image is not required.

## Deployment

Deploy the static site through GitHub Pages using GitHub Actions. Configure Astro for the repository path and add a workflow that installs dependencies, runs the Astro check, builds, uploads the artifact, and deploys it without committed credentials. A custom domain is deferred, and the site should remain portable to another static host.

## Acceptance criteria

V1 is complete when:

- Home, Strategy, and 404 build successfully and follow the specified order.
- Vadym, Eshkere Strategy, the AI-safety objective, instrumental role of power, financial/runway bottleneck, four-part power model, five acquisition routes, current work statuses, and broader Eshkere distinction are represented accurately.
- Strategy and GitHub are easy to reach.
- No accomplishments, confirmed opportunities, or sensitive facts are invented or exposed, and strategy documents are not automatically rendered.
- First-person language is used when speaking for Vadym, without implying a formal Eshkere organization.
- Installation, Astro checking, and production build succeed.
- Internal links work, the Pages workflow is valid, no unnecessary client framework ships, and there is no analytics or external font request.
- The site works without horizontal overflow at 320px and at ordinary tablet and desktop widths, with keyboard navigation, visible focus, appropriate contrast, reduced-motion support, and semantic structure.

## Explicit non-goals

Do not implement authentication, a private dashboard, admin UI, CMS, database, financial calculators, automatic opportunity scraping, live application tracking, website agents, payments or donations, newsletter, blog, comments, calendar integration, detailed CV, resume generator, power score, charts, particle-effect demos, team pages, a full Eshkere manifesto, Health/Games pages, multilingual support, a theme switcher, custom domain, analytics, or automatic synchronization from strategy documents.

These are deferrals, not a feature backlog. Do not turn them into TODOs without a new product decision.
