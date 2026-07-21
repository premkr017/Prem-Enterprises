# Plan: Add NGM Degree College & PMS Scholarship Portal Links

## Information Gathered

The user wants to **ADD** two new links:

### 1. NGM Degree College, Bhelahi, East Champaran
- **URL:** https://ngmdegreecollege.ac.in/
- **Type:** College website link
- Should be added alongside the existing KCTC College link in the **Admission (नामांकन)** section

### 2. Post Matric Scholarship BC-EBC Portal 2026-27
- **URL:** https://pmsonline.bihar.gov.in/pms/pms_online/Default.aspx
- **Type:** Scholarship portal link
- Should be added in the **Scholarship (छात्रवृत्ति)** section(s)

## Current Status

### services.html:
- **Admission Section (SECTION 4):** Has KCTC College link → Add NGM Degree College nearby
- **Scholarship Section (SECTION 6):** Has "PMS Online Bihar Post Matric Scholarship 2026-27" text but WITHOUT the actual clickable link → Add proper link
- **Scholarships Section (SECTION 12):** Has "Post Matric Scholarship New" text but WITHOUT links → Add link here too

### index.html:
- **Features list:** Lists "Scholarship" and "Admission" as features (no direct links needed)
- **No detailed Admission/Scholarship link sections** (these are in services.html)

## Plan

### services.html edits:

**Edit 1: Admission Section (SECTION 4)**
- Add NGM Degree College link right after the KCTC College link

**Edit 2: Scholarship Section (SECTION 6)**
- Convert "PMS Online Bihar Post Matric Scholarship 2026-27" text into a proper clickable link pointing to `https://pmsonline.bihar.gov.in/pms/pms_online/Default.aspx`

**Edit 3: Scholarship Links Section (SECTION 12)**
- Add the PMS Online portal link as a clickable link

## Follow-up Steps
- Verify all links work correctly in browser

