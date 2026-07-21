# Plan: Add KCTC College & LinkedIn Links to Both services.html & contact.html

## Information Gathered
- User wants **Khemchand Tarachand College, Raxaul (https://kctccollege.in/)** added in both places
- User wants **LinkedIn (https://www.linkedin.com/in/ritik-kumar-prem-kumar-542814286/)** added in both places
- "EK SERVICES KE ANDAR AUR EK LINKEDIN H DONO KO DONO JAGAH ADD KAR DO" = One (KCTC) inside Services & one LinkedIn - Add both in both places

## Current Status
### services.html:
- ✅ KCTC link already present in Admission section
- ✅ LinkedIn already in footer with correct URL

### contact.html:
- ✅ LinkedIn already in contact-social section with correct URL
- ✅ LinkedIn already in footer with correct URL
- ❌ KCTC college link NOT present anywhere

## Plan

### 1. Add KCTC College link to contact.html
Add the following as a new contact-detail entry under the existing contact info:
```
<i class="fas fa-graduation-cap"></i>
<span>Khemchand Tarachand College, Raxaul — <a href="https://kctccollege.in/" target="_blank">kctccollege.in</a> <span class="status-tag new">New</span></span>
```

Also add a KCTC link in the contact section description area as a quick link.

### 2. Files to edit:
- **contact.html**: Add KCTC college link

### 3. Follow-up steps:
- Verify both links work correctly in browser
