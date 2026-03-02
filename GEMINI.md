# Project Blueprint: Jason Enia Professional Website

Build a modern, fast, and highly accessible personal professional website for Jason Enia. The site serves as a digital portfolio highlighting academic leadership, research, teaching, publications, and upcoming projects. 

## Tech Stack & Architecture
* **Framework:** Astro (Static Site Generation)
* **Styling:** Tailwind CSS
* **Deployment:** Netlify
* **Content Management:** Markdown/MDX collections for Publications, Talks, and Courses.

## Project Standards

### 1. Typography & Density ("The Enia Standard")
To ensure 100% visual consistency across the Bio, Teaching, Research, and Media pages:
* **Font Family:** All body text, abstracts, and media descriptions must use `font-sans`.
* **Line Height:** All paragraph-level text must use `leading-normal`.
* **Standardization:** Text blocks should be visually indistinguishable in style between different sections of the site.

### 2. Visual Hierarchy
* **Book Project:** The introductory description for the "Current Book Project" section must be slightly larger or more prominent than the individual '01-08' descriptions below it to maintain clear nested hierarchy.

### 3. Copy Philosophy
* **Style:** Ultra-lean and punchy.
* **Focus:** Avoid "meta-talk" (e.g., "This article discusses...") and focus directly on core intellectual arguments (e.g., transaction costs, institutional rules, incentive structures).
* **Structure:** Use parallel grammatical structures (e.g., starting with participles) for list items and research areas.

### 4. Security & Performance
* **Email Obfuscation:** The primary email address (`jason.enia@shsu.edu`) is obfuscated using HTML entities in `contact.astro` to prevent automated scraping while maintaining human readability and `mailto:` functionality.
* **Link Hardening:** All external `<a>` tags (DOIs, YouTube, conference programs, and PDF links) must include the `rel="noopener noreferrer"` attribute.
* **Targeting:** External links and documents should open in a new tab (`target="_blank"`).

### 5. Asset Management
* **Syllabi & Documents:** All PDF assets (e.g., POLS 3398, POLS 2304, CV) are mapped to and served from the `/public/documents/` folder.

## Antigravity Agent Rules
* **Planning First:** Always generate a brief implementation plan and await approval before writing or refactoring major components.
* **Browser Agent Validation:** Use the Browser Agent to visually test UI alignments, hit targets, and mobile responsiveness across both light and dark modes before marking a UI task as complete.
* **Artifact Generation:** Provide diff views and front-end screenshots when proposing design changes.