# Portfolio Content — Chris Earl Amar

This file is the **single source of truth** for the personal/portfolio content of Chris Earl Amar. It contains no design, styling, layout, or framework information on purpose — it is meant to be handed to another AI (or developer) building a brand-new portfolio design, so it can reuse the real content and original personal assets without needing the old React project.

Everything in this file was extracted from the existing React portfolio (`cea-web-portfolio-2026`) — primarily `src/data/portfolio-data.ts` and the section components in `src/components/`. Where a requested category (e.g. Education) has no content on the current site, it is explicitly marked below as empty rather than omitted or invented, so nothing is silently lost.

---

## 1. Identity Summary

| Field | Value |
|---|---|
| Full name | Chris Earl Amar |
| Title / role | Fullstack Web Developer |
| Tagline | Building scalable back-office systems and modern web applications |
| Location | Philippines |
| Years of experience | 2+ years professional experience (as of 2026) |
| Current employer | DecoArts Marketing / CitiHardware |
| Current role at employer | Fullstack Systems Development Specialist (site UI displays the public-facing title "Fullstack Web Developer") |

---

## 2. About Me / Bio

**Headline:** Fullstack Developer with Backend Focus

**Full bio (as written on the site, verbatim):**

> I am a Fullstack Web Developer with over 2 years of professional experience building scalable back-office systems and modern web applications. My expertise lies in developing enterprise-grade solutions that solve real business problems.
>
> Currently working at DecoArts Marketing / CitiHardware, I specialize in backend-heavy development, creating robust systems that handle complex business logic, integrate with enterprise ERP solutions, and serve hundreds of users across multiple locations.
>
> I'm passionate about writing clean, maintainable code and architecting solutions that scale. My approach combines technical excellence with a deep understanding of business requirements, ensuring that every project I deliver creates measurable impact.

**Stats highlighted on the site:**
- 2+ — Years Experience
- 120+ — Stores Served
- ∞ — Problems Solved (a stylistic/informal stat, not literal)

**"What I Do Best" (core strengths, shown as 4 highlighted capabilities):**
1. **Enterprise System Development** — Building scalable back-office tools integrated with Oracle ERP
2. **Real-time Applications** — WebSocket-powered tools for live data synchronization
3. **REST API Design** — Clean, documented APIs following industry best practices
4. **Access Control & Security** — Role-based systems with enterprise-grade security

**Additional strengths (shown in the Skills section footer):**
- **Performance Focused** — Optimizing applications for speed and efficiency
- **Security Conscious** — Implementing best practices for data protection
- **Team Collaboration** — Experienced in agile development environments

---

## 3. Work Experience

### DecoArts Marketing / CitiHardware
- **Role:** Fullstack Systems Development Specialist
- **Period:** Feb 2024 – Present
- **Company logo asset:** `assets/company-logos/citihardware_logo.jpg`
- **Description:** Developed and maintained enterprise web applications for retail operations across 120+ stores.
- **Key achievements / highlights:**
  - Built accounting report generators integrated with Oracle ERP systems
  - Developed REST APIs using Laravel and React for internal tools
  - Maintained and enhanced survey tool used by 120+ stores nationwide
  - Implemented PDF export functionality, real-time updates via WebSockets, access control, and advanced filtering
- **Technologies used:** Laravel, React, Oracle SQL, MySQL, WebSockets, REST APIs

*(This is the only work experience entry currently on the site — there is no additional job history listed.)*

---

## 4. Projects

### 1. MVP Survey Tool
- **Description:** A real-time survey management system deployed across 120+ retail locations. Features include live data synchronization, role-based access control, and external system integration.
- **Highlights:** Real-time updates · Multi-store deployment · External system integration
- **Technologies:** Laravel, React, WebSockets, Material UI, MySQL
- **GitHub:** https://github.com/ChrisEarlAmar/cea-mvp-survey
- **Live demo:** none
- **Demo video asset:** `assets/project-media/mvp-survey.mp4`

### 2. Batch Manager
- **Description:** A Python-based desktop utility for managing batch scripts and streamlining development workflows. Improves developer productivity by automating repetitive tasks.
- **Highlights:** Script management · Dev workflow automation · Cross-platform
- **Technologies:** Python, Desktop Application, Automation
- **GitHub:** https://github.com/ChrisEarlAmar/cea-batch-manager
- **Live demo:** none
- **Demo video asset:** `assets/project-media/batch-manager.mp4`

### 3. Quizey
- **Description:** A web application that allows users to generate quizzes and share them with others. No authentication required — data is stored locally using IndexedDB. Quizzes can be shared using a custom `.qzy` file format.
- **Highlights:** Offline-first architecture · Custom file format (.qzy) · No cloud storage needed
- **Technologies:** React, Vite, Tailwind CSS, Shadcn/ui, Dexie.js, IndexedDB
- **GitHub:** https://github.com/ChrisEarlAmar/cea-quizey
- **Live demo:** https://chrisearlamar.github.io/Quizey
- **Demo video asset:** `assets/project-media/quizey.mp4`

**"More projects" CTA note:** the site closes the Projects section with a prompt pointing visitors to the GitHub profile for more work: "Interested in seeing more of my work?" → links to https://github.com/ChrisEarlAmar

*(No project screenshots/still images exist — all three projects use short looping demo videos instead of static images.)*

---

## 5. Skills

Skill levels are exactly as rated on the site (`Advanced` / `Intermediate`). Each skill below has a matching icon asset in `assets/tech-icons/`.

### Frontend
| Skill | Level | Icon asset |
|---|---|---|
| React | Advanced | `react-icon.svg` |
| TypeScript | Advanced | `typescript-icon.svg` |
| Tailwind CSS | Advanced | `tailwind-icon.svg` |
| Material UI | Advanced | `materialui-icon.svg` |
| Shadcn/ui | Intermediate | `shadcn-icon.svg` |
| JavaScript | Advanced | `javascript-icon.svg` |

### Backend
| Skill | Level | Icon asset |
|---|---|---|
| Laravel | Advanced | `laravel-icon.svg` |
| PHP | Advanced | `php-icon.svg` |
| REST APIs | Advanced | `api-icon.svg` |
| WebSockets | Intermediate | `websocket-icon.svg` |

### Database
| Skill | Level | Icon asset |
|---|---|---|
| MySQL | Advanced | `mysql-icon.svg` |
| Oracle | Intermediate | `oracle-icon.svg` |

### Tools & Platforms
| Skill | Level | Icon asset |
|---|---|---|
| GitLab | Advanced | `gitlab-icon.svg` |
| Vite | Advanced | `vite-icon.svg` |

*(Note: Python appears under the Batch Manager project's technology list but is not listed as a rated skill in the Skills section itself.)*

---

## 6. Achievements

The site doesn't have a dedicated "Achievements" section, but the following concrete, quantifiable achievements are stated across the About/Experience content and are worth surfacing as a distinct highlight block in a new design:

- Delivered enterprise systems currently used across **120+ retail store locations**.
- Built and shipped **3 personal/independent projects** (MVP Survey Tool, Batch Manager, Quizey), each with its own GitHub repo; one (Quizey) has a live public demo.
- Designed and integrated **accounting report generators with Oracle ERP**.
- Implemented **real-time features (WebSockets)**, **PDF export**, **role-based access control**, and **advanced filtering** in production tools.
- Invented a custom file format (`.qzy`) for the Quizey project to support offline, no-account data sharing.

---

## 7. Education

Not present on the current website — no education/degree/school content exists in the source project. Add this section here (school, degree, dates, honors) if you want it in the new portfolio.

---

## 8. Services / What I Offer

Not present as a distinct "services" list. The closest equivalent is the Contact section's framing of availability:

> "Open for Opportunities — I'm currently open to new opportunities and collaborations. Whether you have a question, a project proposal, or just want to say hi, I'll do my best to get back to you!"
> Usually responds within 24–48 hours.

If the new portfolio wants an explicit services list (e.g. "Web App Development," "API Integration," "ERP Integration"), it isn't defined yet and would need to be authored fresh.

---

## 9. Interests / Hobbies

Not present on the current website — no personal-interests/hobbies content exists in the source project. Add this section here if you want it included in the new portfolio.

---

## 10. Contact Information

| Channel | Value |
|---|---|
| Email | chrisearlamar@gmail.com |
| Location | Philippines |
| GitHub | https://github.com/ChrisEarlAmar |
| LinkedIn | https://www.linkedin.com/in/chris-earl-amar-945a7a226/ |
| Resume (PDF) | `assets/documents/Chris Earl Amar - Resume.pdf` |

**Note on a stale placeholder:** the old vanilla-JS static copy of the site (`static-portfolio/index.html`) and a hidden SEO block in the React app's `index.html` both hardcode a placeholder email, `chrisearl.amar@example.com` (an `example.com` address). That is **not** a real address — it's leftover placeholder text. The real, live contact email everywhere else on the site is `chrisearlamar@gmail.com`, as listed above and in `src/data/portfolio-data.ts`.

---

## 11. Social / External Links

- **GitHub:** https://github.com/ChrisEarlAmar (profile handle shown on-site as `github.com/ChrisEarlAmar`)
- **LinkedIn:** https://www.linkedin.com/in/chris-earl-amar-945a7a226/ (shown on-site as `linkedin.com/in/chris-earl-amar`)

No other social platforms (X/Twitter, Instagram, personal blog, YouTube, Dribbble, etc.) are referenced anywhere in the project.

---

## 12. Site Navigation (for reference only)

The current single-page site has these sections, in this order: Home (Hero) → About → Experience → Projects → Skills → Contact → Footer. This is structural, not content, but is included here in case the new design wants to preserve the same information architecture.

---

## 13. SEO / Branding Metadata

Taken from the `<head>` of `index.html`, useful if the new portfolio wants to reuse the same positioning/keywords:

- **Page title:** Chris Earl Amar
- **Meta description:** "Chris Earl Amar is a Fullstack Web Developer in the Philippines specializing in scalable back-office systems, Laravel, React, and enterprise web applications."
- **Meta keywords:** Chris Earl Amar, Fullstack Developer, Laravel, React, Philippines Developer, Web Developer Portfolio
- **Open Graph title:** Chris Earl Amar | Fullstack Web Developer
- **Open Graph description:** Building scalable back-office systems and modern web applications.

---

## 14. Asset Inventory

All files below live under `assets/` in this package, preserved with their **original filenames and formats** (no re-encoding/optimization). Paths in the "Original location" column are relative to the source repo (`cea-web-portfolio-2026`).

| File (in this package) | Original location(s) | Type | Represents / where it was used |
|---|---|---|---|
| `assets/profile/cea-profile.jpg` | `src/assets/cea-profile.jpg` | JPG photo | Chris's real profile headshot photo — used in the Hero section as the main profile picture. |
| `assets/profile/logo.png` | `src/assets/logo.png` (also duplicated at `public/logo.png`) | PNG illustration | An illustrated cartoon character (a bald figure holding a baguette). **Not a photo of Chris and not a monogram/wordmark logo** — it's used purely as the site's favicon (browser tab icon, via `<link rel="icon">` in `index.html`). In the older static HTML copy of the site it was also used as a placeholder profile image before `cea-profile.jpg` was added. Kept here since it's a real, currently-used, personally-added asset — but flagged so the next design can deliberately decide whether to keep it as a favicon, replace it, or drop it. |
| `assets/company-logos/citihardware_logo.jpg` | `src/assets/citihardware_logo.jpg` (also duplicated at `public/citihardware_logo.jpg`) | JPG logo | The employer's company logo (CitiHardware — red square mark with "Citi Hardware" wordmark). Used as the company icon in the Experience section. This is a third-party employer logo, not an original personal design, but it's a real local asset tied to the Experience entry above. |
| `assets/tech-icons/react-icon.svg` | `src/assets/react-icon.svg` | SVG icon | React logo — Skills → Frontend. |
| `assets/tech-icons/typescript-icon.svg` | `src/assets/typescript-icon.svg` | SVG icon | TypeScript logo — Skills → Frontend. |
| `assets/tech-icons/tailwind-icon.svg` | `src/assets/tailwind-icon.svg` | SVG icon | Tailwind CSS logo — Skills → Frontend. |
| `assets/tech-icons/materialui-icon.svg` | `src/assets/materialui-icon.svg` | SVG icon | Material UI logo — Skills → Frontend. |
| `assets/tech-icons/shadcn-icon.svg` | `src/assets/shadcn-icon.svg` | SVG icon | Shadcn/ui logo — Skills → Frontend. |
| `assets/tech-icons/javascript-icon.svg` | `src/assets/javascript-icon.svg` | SVG icon | JavaScript logo — Skills → Frontend. |
| `assets/tech-icons/laravel-icon.svg` | `src/assets/laravel-icon.svg` | SVG icon | Laravel logo — Skills → Backend. |
| `assets/tech-icons/php-icon.svg` | `src/assets/php-icon.svg` | SVG icon | PHP logo — Skills → Backend. |
| `assets/tech-icons/api-icon.svg` | `src/assets/api-icon.svg` | SVG icon | Generic "API" glyph used to represent the REST APIs skill — Skills → Backend. |
| `assets/tech-icons/websocket-icon.svg` | `src/assets/websocket-icon.svg` | SVG icon | WebSockets glyph — Skills → Backend. |
| `assets/tech-icons/mysql-icon.svg` | `src/assets/mysql-icon.svg` | SVG icon | MySQL logo — Skills → Database. |
| `assets/tech-icons/oracle-icon.svg` | `src/assets/oracle-icon.svg` | SVG icon | Oracle logo — Skills → Database. |
| `assets/tech-icons/gitlab-icon.svg` | `src/assets/gitlab-icon.svg` | SVG icon | GitLab logo — Skills → Tools & Platforms. |
| `assets/tech-icons/vite-icon.svg` | `src/assets/vite-icon.svg` | SVG icon | Vite logo — Skills → Tools & Platforms. |
| `assets/project-media/mvp-survey.mp4` | `src/assets/mvp-survey.mp4` | MP4 video | Autoplaying demo/preview clip for the "MVP Survey Tool" project card. |
| `assets/project-media/batch-manager.mp4` | `src/assets/batch-manager.mp4` | MP4 video | Autoplaying demo/preview clip for the "Batch Manager" project card. |
| `assets/project-media/quizey.mp4` | `src/assets/quizey.mp4` | MP4 video | Autoplaying demo/preview clip for the "Quizey" project card. |
| `assets/documents/Chris Earl Amar - Resume.pdf` | `src/assets/Chris Earl Amar - Resume.pdf` | PDF document | Chris's actual resume/CV file, linked from the "Resume" button in the Hero section. |

### Explicitly excluded (and why)

To keep this package free of anything design/framework-specific or non-personal, the following were deliberately **left out**:

- **`lucide-react` icons** (`CheckCircle`, `Zap`, `Code2`, `Shield`, `Mail`, `MapPin`, `GitBranch`, `Globe`, `Send`, `Calendar`, `ArrowRight`, `ChevronDown`, `FileDown`, `ExternalLink`, `Menu`, `X`, `Users`, etc.) — these come from the installed `lucide-react` npm package, not personally created/added files, per your instructions.
- **Inline hardcoded GitHub/LinkedIn/envelope SVG paths** in `Footer.tsx` and `static-portfolio/index.html` — these are standard/generic brand-mark icon paths embedded directly in markup (not separate personal asset files, not original artwork), so they're treated the same as a library icon rather than a custom asset.
- **All React/TSX components, Tailwind classes, color tokens (`#1F6F5F`, `#2FA084`, `#6FCF97`, `#141c18`, etc.), layout, and animation logic** — explicitly out of scope per your request.
- **`static-portfolio/index.html`** — an older vanilla-HTML/JS/Tailwind-CDN rendition of the exact same content as the React app (same copy, same links, same "sample-video.mp4" placeholders). It was reviewed to confirm it holds no unique content beyond what's captured above (it does still have the stale placeholder email noted in Section 10), so it wasn't copied in as a separate asset source.
- **`react_portfolio.md`, `README.md`, `tasks.md`** — these are project/development notes (an original design brief, the Vite template README, and the user's own dev to-do notes), not "about me" portfolio content, so they were not carried into this package.

---

## 15. Suggestions for whoever builds the new design (optional, non-binding)

- Sections 7–9 (Education, Services, Interests) are currently empty — worth asking Chris directly if he wants them filled in before final launch, since the request that generated this package explicitly expected those categories to exist.
- Consider replacing/re-evaluating `assets/profile/logo.png` (the baguette-character favicon) intentionally rather than carrying it forward by default, since it doesn't depict Chris or a wordmark — see the note in the Asset Inventory.
- `mvp-survey.mp4` is ~24 MB and `quizey.mp4` is ~12 MB — fine to reuse as-is, but a new design may want to compress/poster-frame them for faster page loads (that's a design/performance decision, not a content one, so it's left untouched here).
