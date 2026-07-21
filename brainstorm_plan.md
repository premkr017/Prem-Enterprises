# Refactoring Plan: Single-Page → Multi-Page Architecture

## Analysis Summary
The current `index.html` (2923 lines) contains all sections in one file with embedded CSS and JS. The site has:
- **~20+ sections** (Hero, Stats, Jobs, Admit Cards, Results, Syllabus, Answer Key, Services, etc.)
- **Embedded CSS** (~800 lines) with dark theme, gold accents, animations
- **Embedded JS** (hamburger toggle + contact form)
- **1 image** (`prem kumar.jpeg`)

## Architecture Decision
Since this is a pure HTML/CSS/JS site (no build tools/frameworks), we'll use **Separate HTML Files** approach with shared CSS/JS:

```
prem-enterprises/
├── css/
│   └── style.css          ← All CSS extracted from index.html
├── js/
│   └── script.js           ← All JS extracted (hamburger + contact form)
├── index.html              ← Home Page
├── jobs.html               ← Jobs Page
├── admit-card.html         ← Admit Card Page
├── results.html            ← Results Page
├── syllabus.html           ← Syllabus & Answer Key Page
├── services.html           ← IT & Online Services Page
├── contact.html            ← Contact Page
├── prem kumar.jpeg         ← Existing image
└── README.md               ← Existing
```

## Content Distribution Per Page

### 1. Home Page (`index.html`)
- **Header** (shared nav with links to all pages)
- **Hero section** (Prem Kumar intro, badge, CTA buttons)
- **Stats Bar**
- **State Strip** (Fastjob Searchers states)
- **Social Banner** (Telegram/WhatsApp/App)
- **About Fastjob Searchers** section
- **About / Journey** section
- **Projects** section
- **Footer** (shared)

### 2. Jobs Page (`jobs.html`)
- **Header** (same shared nav)
- **Fastjob Searchers top header**
- **Current Job** (सरकारी नौकरी) section with all job listings
- **Upcoming Job** (आगामी भर्ती) section
- **Latest Updates** (नवीनतम अपडेट) section
- **Footer**

### 3. Admit Card Page (`admit-card.html`)
- **Header**
- **Fastjob Searchers top header**
- **Admit Card** (प्रवेश पत्र) section #1 (expanded)
- **Admit Card** section #2
- **Footer**

### 4. Results Page (`results.html`)
- **Header**
- **Fastjob Searchers top header**
- **Results** (परीक्षा परिणाम) section #1 (expanded)
- **Results** section #2
- **Footer**

### 5. Syllabus & Answer Key Page (`syllabus.html`)
- **Header**
- **Fastjob Searchers top header**
- **Syllabus** (सिलेबस) section
- **Answer Key** (उत्तर कुंजी) section
- **Footer**

### 6. IT & Online Services Page (`services.html`)
- **Header**
- **Services** (Our Services grid)
- **Main Services** (मुख्य सेवाएँ - Cyber Cafe)
- **Govt Services** (ऑनलाइन और सरकारी सेवाएँ)
- **Tech / Windows & Linux Solutions**
- **Bihar Bhumi Vibhag**
- **Important Links**
- **Scholarships**
- **Converter Tools**
- **Footer**

### 7. Contact Page (`contact.html`)
- **Header**
- **Contact section** (form + details + social)
- **Footer**

## Navigation Link Updates
All `<a>` links in Header and Footer will point to the new HTML pages:
- `index.html` → Home
- `jobs.html` → Jobs
- `admit-card.html` → Admit Card
- `results.html` → Results
- `syllabus.html` → Syllabus & Answer Key
- `services.html` → IT Services
- `contact.html` → Contact

## Strict Rules
1. **ZERO changes to CSS styles, colors, typography, animations, or spacing**
2. **ZERO changes to HTML structure/layout of any copied section**
3. **Only changes: Navigation href values + extraction of CSS/JS into separate files**
4. **Header and Footer HTML is identical across all pages**

## Implementation Order
1. Create `css/style.css` with all CSS from index.html
2. Create `js/script.js` with hamburger + contact form JS
3. Create `index.html` (Home page)
4. Create `jobs.html` (Jobs page)
5. Create `admit-card.html` (Admit Card page)
6. Create `results.html` (Results page)
7. Create `syllabus.html` (Syllabus & Answer Key page)
8. Create `services.html` (IT & Online Services page)
9. Create `contact.html` (Contact page)

