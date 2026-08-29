# Build a Minimal, Editorial Personal Portfolio Website

You are an expert frontend engineer and interaction designer.

Build a **personal portfolio / developer website** with a highly polished, minimal, editorial aesthetic. The site should feel intentional, premium, modern, and personal-not like a generic developer portfolio template.

## Design References

Use these websites as **visual and interaction references**, NOT as templates to copy:

* https://grahamyoung.com/
* https://poulos.co/
* https://ladespensa.es/
* https://www.helenastening.com/

Study their principles:

* Strong typography
* Generous whitespace
* Editorial composition
* Minimal UI
* Clear visual hierarchy
* Large, confident headings
* Project-first presentation
* Subtle but meaningful interactions
* Smooth scrolling
* High-quality image presentation
* Personal personality without excessive decoration
* Content should feel curated rather than crowded

Do NOT copy their layouts, branding, text, assets, or exact animations.

---

# Technology Requirements

Prefer:

* **Astro**
* TypeScript
* CSS / modern CSS
* Minimal vanilla JavaScript
* Optional lightweight animation library only when genuinely necessary

The website should be primarily **static-generated**.

Avoid unnecessary client-side frameworks.

Do NOT use React/Next.js unless there is a concrete technical reason.

The architecture should be compatible with free/static hosting such as:

* Cloudflare Workers / Pages
* GitHub Pages
* Netlify
* Vercel
* Similar static hosting platforms

Prioritize Cloudflare deployment.

Astro should generate as much content as possible at build time and ship minimal client-side JavaScript.

---

# Critical Requirement: Free Hosting

The project must NOT depend on:

* Paid hosting
* Paid databases
* Paid APIs
* VPS
* Credit-card-required infrastructure
* Proprietary backend services unless they have a genuinely usable free tier without requiring payment information

The portfolio must be deployable using a **free hosting account without entering card/payment information**.

Prefer a completely static architecture.

If a feature requires backend functionality, first ask:

> Can this be implemented statically?

If yes, implement it statically.

If not, use a free serverless option such as Cloudflare Workers only when necessary.

Do not introduce infrastructure complexity just for the sake of it.

---

# Performance Philosophy

Performance is a first-class requirement.

The site should feel:

> “Beautiful because it is restrained.”

not:

> “Beautiful because it has 37 JavaScript libraries.”

Requirements:

* Minimize JavaScript
* Avoid heavy animation libraries
* Avoid unnecessary hydration
* Lazy-load non-critical images
* Use modern image formats where appropriate
* Prevent layout shifts
* Use responsive image sizing
* Optimize fonts
* Avoid autoplay background videos
* Avoid huge WebGL scenes
* Avoid excessive DOM complexity
* Respect `prefers-reduced-motion`
* Keep animations GPU-friendly
* Prefer CSS transforms and opacity
* Avoid animations that trigger expensive layout/reflow
* Keep first load extremely fast

Target:

* Excellent Lighthouse Performance
* Excellent accessibility
* Excellent SEO
* Excellent Core Web Vitals

---

# Visual Direction

## Overall

Minimal, monochrome-first, editorial, modern.

Use:

* White/off-white or very dark background
* Strong black/white contrast
* One restrained accent color if needed
* Large typography
* Small metadata typography
* Thin borders
* Generous spacing
* Asymmetric layouts where appropriate
* Subtle grid systems
* Carefully controlled negative space

Avoid:

* Glassmorphism everywhere
* Excessive gradients
* Neon colors
* Excessive rounded cards
* Generic SaaS UI
* Huge decorative blobs
* Excessive shadows
* Skill percentage bars
* Generic “Welcome to my portfolio” hero sections
* Floating widgets everywhere
* Overuse of icons

The website should look closer to an **independent designer/developer's digital studio** than a software-engineering résumé template.

---

# Typography

Typography is one of the main visual elements.

Use a strong display font combined with a highly readable body font.

Possible approach:

* Display: modern grotesk / geometric sans
* Body: clean sans-serif
* Metadata: compact mono or neutral sans

Do not load five different font families.

Prefer locally hosted or highly optimized web fonts.

Typography should create hierarchy without relying on excessive decoration.

---

# Animation & Interaction

Animations should be:

* Smooth
* Fast
* Subtle
* Intentional
* Responsive to user interaction

Examples:

### Page entrance

Very subtle:

* opacity
* translateY
* staggered content reveal

Duration approximately:

`400–700ms`

Use easing that feels natural rather than gimmicky.

### Project hover

When hovering a project:

* Slight image movement
* Subtle scale
* Metadata transition
* Underline/indicator movement

Keep it restrained.

### Navigation

Navigation can have subtle:

* hover transitions
* active-state indicators
* smooth appearance/disappearance

### Image interaction

Project images may use:

* subtle zoom
* clip-path reveal
* horizontal movement
* cursor-following effect

But only if performance remains excellent.

### Scroll

Use native smooth scrolling where appropriate.

Do NOT build a custom smooth-scroll engine unless there is a compelling reason.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable or greatly reduce non-essential animation for users who request reduced motion.

---

# Site Structure

Build the following:

## 1. Home

The homepage should immediately communicate:

* Who I am
* What I do
* What I care about
* Selected work
* Ways to contact me

Possible structure:

### Intro

Large statement such as:

> I build digital products, experiment with technology, and turn ideas into things that work.

Do not use generic corporate language.

The copy should feel personal and confident.

### Selected Work

Large project entries.

Each project should contain:

* Project name
* Short description
* Role
* Year
* Technology/category
* Large visual
* Link

Projects should feel like editorial case-study previews rather than cards in a grid.

### Experience

Compact timeline/list.

### Capabilities

Instead of progress bars:

`Web Development · UI/UX · Backend · Automation · AI Integration · Game Development`

### About

Short personal introduction.

### Contact

Minimal and direct.

Example:

> Have something worth building?

Then email / GitHub / LinkedIn.

---

# 2. Projects

Create a dedicated project index.

Each project should have:

* Large title
* Category
* Year
* Short description
* Hero image
* Technology
* Role
* Project link
* Optional GitHub link

Use a visually rich editorial layout.

Do NOT make every project a generic rectangular card.

---

# 3. Project Detail Pages

Use Astro dynamic routes.

Example:

```text
/projects/reelvault
/projects/church-inventory
/projects/ecolang
/projects/tunas
/projects/dinners-ready
```

Each case study can contain:

1. Project title
2. One-line summary
3. Role
4. Timeline
5. Technology
6. Hero visual
7. Context
8. Problem
9. Process
10. Solution
11. Technical implementation
12. Screenshots / visuals
13. Outcome
14. Reflection
15. Next project

Do not force every section to exist if there is no meaningful content.

---

# 4. About

Create a simple personal page.

Include:

* Short bio
* Current focus
* Technical interests
* Experience
* Selected achievements
* Contact links

The page should feel like a person talking-not a corporate “About Us” page.

---

# 5. Resume

Provide a lightweight resume page.

Optionally provide a downloadable PDF link.

Do not embed a huge PDF viewer.

---

# Content

Use the following known experience/projects as initial content placeholders.

### Experience

* Coding Extracurricular Instructor
* Freelance / Independent Web & Software Developer
* IT Technical Support Assistant - CV. Putra Mandiri Komputer
* UI/UX Designer
* Game Developer

### Projects

* ReelVault
* Church Inventory Web App
* TUNAS
* Ecolang
* Remilque
* Jobin
* Dinners Ready / Hikikomori
* TSC Learn

Do NOT invent achievements, metrics, clients, users, revenue, or technical details.

If information is missing, create clearly marked content placeholders.

---

# Project Presentation

Projects should be the visual centerpiece.

Example hierarchy:

```text
01
REELVAULT
Automation / AI / Backend
2026

[Large project image]

Instagram content processing automation
using serverless infrastructure...
```

Then:

```text
02
CHURCH INVENTORY
Web Application
2026

[Large project image]
```

Use numbering and metadata to create editorial rhythm.

---

# Navigation

Keep navigation extremely simple.

Possible:

```text
[NAME]                         WORK   ABOUT   RESUME
```

On mobile:

```text
[NAME]                         MENU
```

Avoid a giant hamburger menu with unnecessary animations.

---

# Cursor / Experimental Interaction

Optional.

If implemented, keep it subtle.

Examples:

* Cursor label appears over project images
* “View project →”
* Small magnetic interaction on selected buttons

Do NOT create a custom cursor that makes normal browsing difficult.

The website must remain usable on touch devices.

---

# Responsive Design

Mobile is NOT an afterthought.

Design explicitly for:

* 320px+
* 375px
* 768px
* 1024px
* 1440px+
* Ultrawide screens

On mobile:

* Simplify complex layouts
* Reduce animation
* Preserve typography hierarchy
* Maintain generous spacing
* Ensure touch targets are accessible

Do not simply shrink the desktop layout.

---

# Accessibility

Implement:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Visible focus states
* Alt text
* Sufficient color contrast
* Reduced motion support
* Accessible navigation
* Accessible interactive elements

Do not sacrifice accessibility for aesthetics.

---

# SEO

Implement:

* Proper `<title>`
* Meta description
* Open Graph metadata
* Twitter/X metadata
* Canonical URLs
* Sitemap
* robots.txt
* Semantic HTML
* Structured metadata where useful

Use Astro's capabilities rather than adding unnecessary SEO libraries.

---

# Architecture

Recommended structure:

```text
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ProjectCard.astro
│   ├── ProjectMeta.astro
│   ├── SectionHeading.astro
│   └── ...
│
├── layouts/
│   ├── BaseLayout.astro
│   └── ProjectLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── resume.astro
│   └── projects/
│       ├── index.astro
│       └── [slug].astro
│
├── content/
│   └── projects/
│
├── styles/
│   ├── global.css
│   └── animations.css
│
└── assets/
```

Keep components reusable but don't over-engineer.

---

# Content Management

Use Astro Content Collections or another simple file-based content system.

Project information should be editable without modifying component code.

For example:

```yaml
title:
description:
year:
role:
category:
technologies:
featured:
image:
github:
url:
```

This should make adding a new project easy.

---

# Deployment

Configure the project for free deployment.

Preferred target:

**Cloudflare Workers**

Fallback:

**Cloudflare Pages / GitHub Pages / Netlify / Vercel static deployment**

The architecture should remain static-first.

Do not require:

* paid Cloudflare features
* paid databases
* paid authentication
* payment methods
* proprietary backend infrastructure

Provide:

* build command
* output directory
* deployment instructions
* environment variable documentation if any

For Astro static output, ensure the production build can be generated with:

```bash
npm run build
```

and produces a deployable static output.

---

# Development Requirements

Before finishing:

1. Install dependencies.
2. Run the development server.
3. Test all routes.
4. Run a production build.
5. Check for console errors.
6. Check broken images.
7. Check responsive layouts.
8. Test keyboard navigation.
9. Test reduced-motion behavior.
10. Test production preview.
11. Verify no unnecessary dependencies were introduced.
12. Verify the final bundle remains lightweight.

Do not stop at “the page renders.”

---

# Final Quality Bar

The final result should feel like:

> An ambitious young developer/designer who knows how to build things, has strong taste, and doesn't need to scream about it.

It should be:

**Minimal.
Fast.
Editorial.
Personal.
Technical.
Smooth.
Confident.**

Avoid:

**Template-looking.
Over-animated.
Over-engineered.
Generic.
Corporate.
Heavy.**

The design should make someone want to scroll simply because the composition and typography are interesting.

Build the experience around **content, typography, spacing, imagery, and interaction-not UI decoration.**
