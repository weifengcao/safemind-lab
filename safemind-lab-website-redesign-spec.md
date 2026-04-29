
# SafeMind Lab Website Redesign Spec
Version: v1
Purpose: Product/engineering design spec for Codex implementation
Stack: React (frontend) + Node.js/Express (backend)

---

## 1. Product Goal

SafeMind Lab is an engineering hub for showcasing:
- the SafeMind Harness platform
- selected projects built on top of it
- technical writing and design principles
- GitHub proof of work
- profile and contact paths

This site should feel like a **serious AI systems engineer portfolio**, not a startup marketing site and not a general blog.

Primary audience:
- recruiters
- hiring managers
- staff/principal engineers
- AI infrastructure teams
- technically curious visitors

Primary outcome:
- quickly understand who the owner is
- understand the platform and projects
- trust the technical depth
- reach out for interviews or discussions

---

## 2. Core Design Principles

1. Do not overload the landing page.
2. Lead with clarity before interaction.
3. Present the harness as the core platform.
4. Use SOC as the primary reference workload.
5. Use fintech compliance as secondary proof of generalization.
6. The AI assistant is a helper, not the hero.
7. The visual style should feel refined, technical, modern, and calm.
8. Pages should be modular and easy for Codex to implement.

---

## 3. Information Architecture

Top navigation:
- Platform
- Projects
- Blog
- GitHub
- About
- Contact

Pages:
- `/` Home / Landing
- `/platform`
- `/projects`
- `/projects/soc-agent`
- `/projects/fintech-compliance`
- `/blog`
- `/blog/:slug`
- `/about`
- `/contact`

Optional later:
- `/docs`
- `/api`

GitHub item may be either:
- external link directly to GitHub, or
- internal page with curated repo links

Recommended for v1:
- external link in nav
- small GitHub section on Home and Projects pages

---

## 4. Landing Page Strategy

The landing page should NOT contain everything.

It should do only these jobs:
1. establish identity
2. explain the core platform at a high level
3. highlight 2 projects
4. preview blog/design principles
5. provide a clear path to explore deeper
6. offer the AI assistant as a floating helper

### 4.1 Landing Page Sections

#### A. Header / Navigation
Sticky top nav with:
- logo / site name: SafeMind Lab
- nav links
- optional CTA button: "View Projects" or "Explore Platform"

#### B. Hero
Left column:
- headline
- subheadline
- 2 CTA buttons

Right column:
- visual card showing platform architecture preview
- NOT a big chat window

Suggested headline:
**Building production-grade agent systems with a focus on orchestration, context, and reliability.**

Suggested subheadline:
**SafeMind Lab is an engineering hub for designing agent harnesses and validating them through real-world investigation workloads such as SOC and compliance.**

Hero CTAs:
- Explore Platform
- View Projects

#### C. Platform Preview
Short explanation of SafeMind Harness:
- what it is
- why it exists
- three architectural ideas:
  - control plane
  - data plane
  - domain pack

Include a simplified architecture visual.

#### D. Featured Projects Preview
Cards for:
- SOC Triage Agent
- Fintech Compliance Agent

Each card contains:
- title
- one-paragraph description
- key technical tags
- image/video thumbnail
- CTA to project detail page

#### E. Blog / Design Principles Preview
3 featured posts:
- Context Engineering vs Harness Engineering
- What Breaks First in Agentic Systems
- Policy and Auditability in AI Workflows

#### F. About Preview
Short bio, one paragraph only.

#### G. Contact Preview
Simple section with email + LinkedIn/GitHub link.

#### H. Floating AI Assistant
Bottom-right icon opening a side panel or modal assistant.

---

## 5. Page-by-Page Content Design

## 5.1 Platform Page (`/platform`)
Purpose:
Explain the harness in a digestible but credible way.

Sections:
1. Hero
   - title: SafeMind Harness
   - one-line definition
2. Architecture overview
   - diagram
   - control plane / data plane / domain pack
3. Execution model
   - planner
   - state manager
   - tool execution
   - memory runtime
4. Context and memory
   - structured investigation state
   - retrieval and compression
5. Safety and policy
   - approval gating
   - risk classes
6. Production constraints
   - context explosion
   - tool failure
   - latency vs quality
   - auditability
7. CTA to Projects

This page must feel technical but not like a 30-page design book.

---

## 5.2 Projects Index (`/projects`)
Purpose:
Show concrete implementations and proof of work.

Layout:
- project grid
- each project card with preview media and short summary

Projects for v1:
1. SOC Triage Agent
2. Fintech Compliance Agent

Card fields:
- title
- domain
- one-liner
- 3-5 bullets of what it demonstrates
- CTA: View Project

---

## 5.3 SOC Agent Project Page (`/projects/soc-agent`)
Purpose:
Primary public proof artifact.

Sections:
1. Project summary
2. Problem statement
3. Demo video / walkthrough
4. Architecture in context of the harness
5. Example workflow
   - alert -> normalization -> plan -> execution -> verdict
6. Production considerations
7. GitHub link
8. Related blog posts

The landing page can include a short teaser video.
The full demo belongs here.

---

## 5.4 Fintech Compliance Project Page (`/projects/fintech-compliance`)
Purpose:
Show the harness generalizes beyond security.

Sections:
1. Summary
2. What the agent does
3. Dashboard / screenshots / demo
4. Reasoning and action model
5. Production considerations
6. Relationship to the harness
7. CTA back to Platform

---

## 5.5 Blog Index (`/blog`)
Purpose:
Thought leadership and design depth.

Layout:
- featured post
- recent posts grid
- optional topic filters later

Topics should emphasize:
- design tradeoffs
- production lessons
- context management
- policy / safety
- evaluation / observability

---

## 5.6 Blog Post Page (`/blog/:slug`)
Purpose:
Readable technical essays.

Layout:
- title
- metadata
- hero summary
- body
- related posts
- optional CTA to Platform/Projects

Keep typography excellent and calm.

---

## 5.7 About Page (`/about`)
Purpose:
Identity and trust.

Structure:
- short biography
- what SafeMind Lab is
- what topics you work on
- what kind of opportunities/conversations you welcome

Do not make this too long.

---

## 5.8 Contact Page (`/contact`)
Purpose:
Simple, direct contact.

Include:
- short header
- one sentence on what you're open to
- email
- LinkedIn
- GitHub

Avoid a heavy enterprise-style contact form in v1.

---

## 6. AI Assistant Design

### 6.1 Role
The assistant helps users navigate and understand SafeMind Lab.

It should answer:
- what the platform is
- how the architecture works
- what the projects do
- where to find specific information
- what design principles guide the work

It should NOT:
- invent features not on the site
- act like a sales rep
- speculate about hidden/private startup plans

### 6.2 Placement
- Floating circular icon at bottom-right
- Opens side panel on desktop
- Opens full-screen sheet on mobile

### 6.3 Suggested Prompt Chips
- What is SafeMind Harness?
- Show me the SOC architecture
- What projects are built on this platform?
- What are your design principles?
- How does the fintech agent work?

### 6.4 Backend Model
Use a backend service with RAG over:
- platform page content
- selected project pages
- blog posts
- selected documentation summaries

Do not index everything blindly.

### 6.5 Assistant API
`POST /api/assistant/chat`

Request:
```json
{
  "message": "What is SafeMind Harness?",
  "pageContext": "platform"
}
```

Response:
```json
{
  "answer": "SafeMind Harness is a production-oriented agent harness ...",
  "sources": [
    { "title": "Platform Overview", "url": "/platform" },
    { "title": "SOC Triage Agent", "url": "/projects/soc-agent" }
  ]
}
```

### 6.6 Assistant UX
- typing indicator
- clickable sources
- limited response length
- graceful failure state
- no hallucinated confidence

---

## 7. Frontend Architecture

### 7.1 Recommended Stack
- React
- Vite
- React Router
- Tailwind CSS
- Framer Motion (optional)
- Lucide React (optional)

### 7.2 Frontend Folder Structure
```text
frontend/
  src/
    app/
      router.tsx
      providers.tsx
    components/
      layout/
        Header.tsx
        Footer.tsx
      sections/
        HeroSection.tsx
        PlatformPreviewSection.tsx
        FeaturedProjectsSection.tsx
        BlogPreviewSection.tsx
        AboutPreviewSection.tsx
        ContactPreviewSection.tsx
      assistant/
        AssistantFab.tsx
        AssistantPanel.tsx
        AssistantMessageList.tsx
        AssistantComposer.tsx
      ui/
        Button.tsx
        Card.tsx
        SectionHeader.tsx
        Tag.tsx
    pages/
      Home/
      Platform/
      Projects/
      ProjectSOC/
      ProjectFintech/
      Blog/
      BlogPost/
      About/
      Contact/
    hooks/
    lib/
      api.ts
    styles/
    main.tsx
```

### 7.3 Component Rules
- Keep sections modular
- Avoid giant page files
- Separate content data from layout components
- Use reusable design tokens

---

## 8. Backend Architecture

### 8.1 Recommended Stack
- Node.js
- Express
- Zod for validation
- Pino for logging

### 8.2 Backend Responsibilities
- serve content metadata if needed
- power the assistant API
- optionally serve blog/project data
- future contact endpoint
- health checks

### 8.3 Backend Folder Structure
```text
backend/
  src/
    server.ts
    routes/
      health.routes.ts
      content.routes.ts
      assistant.routes.ts
    controllers/
      assistant.controller.ts
      content.controller.ts
    services/
      rag.service.ts
      content.service.ts
    middleware/
      error.middleware.ts
    config/
    utils/
```

### 8.4 API Endpoints
- `GET /api/health`
- `GET /api/content/home`
- `GET /api/content/platform`
- `GET /api/content/projects`
- `GET /api/content/blog`
- `POST /api/assistant/chat`

---

## 9. UI / Visual Design System

### 9.1 Design Goals
The UI should feel:
- technically strong
- modern
- elegant
- not flashy
- not SaaS-template generic

### 9.2 Visual Style
- dark-first theme
- deep slate/charcoal base
- cyan/electric blue accent
- soft gradients and glows
- large typography
- rounded cards
- subtle motion

### 9.3 Color Palette (proposed)
- Background: `#0B1020`
- Surface: `#111827`
- Elevated surface: `#172033`
- Primary text: `#F8FAFC`
- Secondary text: `#94A3B8`
- Accent cyan: `#22D3EE`
- Accent blue: `#3B82F6`
- Border: `rgba(255,255,255,0.08)`

### 9.4 Typography
- Sans-serif, clean and modern
- Large hero headlines
- Comfortable body text spacing
- Excellent readability on blog pages

### 9.5 Motion
Use subtle motion only:
- card hover elevation
- fade/slide on section reveal
- assistant panel transitions

No noisy animations.

---

## 10. Media and Demo Placement

### 10.1 Landing Page
Use:
- teaser thumbnails or short embedded clips
- one visual per featured project

### 10.2 Project Pages
Use:
- full demo videos
- screenshots
- architecture diagrams
- workflow visuals

Recommendation:
- teaser on Home
- full demo on project detail pages

---

## 11. Content Rules

### Home
High-level, concise, confidence-building.

### Platform
Technical, architectural, but digestible.

### Projects
Concrete and implementation-focused.

### Blog
Thoughtful, staff/principal-level insights.

### About
Human and grounded.

### Contact
Simple and direct.

---

## 12. Mobile Behavior

- Nav collapses into hamburger
- Hero stacks vertically
- Assistant opens as full-screen sheet
- Project cards become single column
- Embedded media remains responsive

---

## 13. Accessibility

- keyboard navigable
- visible focus states
- sufficient contrast
- semantic headings
- buttons and icons with labels
- assistant panel accessible by keyboard and screen readers

---

## 14. Non-Goals for v1

Do NOT implement in v1:
- full docs portal
- heavy CMS
- full auth
- public user accounts
- overly complex animation system
- giant multi-product startup messaging
- startup brand BaySeal AI

This site is about SafeMind Lab only.

---

## 15. Suggested Build Order

### Phase 1
- set up React frontend and Node backend
- create page routes
- build header/footer
- build landing page sections
- add floating assistant shell

### Phase 2
- build Platform page
- build Projects pages
- embed demo areas
- refine visual system

### Phase 3
- add Blog index and posts
- connect assistant to retrieval backend
- polish mobile behavior
- add final metadata / SEO

---

## 16. One-Line Positioning to Use Consistently

Use this across the site:

**SafeMind Lab is an engineering hub for designing production-grade agent systems with a focus on orchestration, context, and reliability.**

---

## 17. Final Note for Codex

Codex should implement this as:
- a modular React app
- a separate Node/Express backend
- a floating AI assistant powered by a constrained RAG backend
- a refined technical dark UI
- a site that emphasizes the harness/platform first, then projects, then blog and identity

Do not collapse everything onto the landing page.
Keep architecture, projects, and writing separated into clear pages.
