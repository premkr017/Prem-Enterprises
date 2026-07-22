(function() {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }

    // Contact Form
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    if (form && feedback) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('userName').value.trim();
            const email = document.getElementById('userEmail').value.trim();
            if (!name || !email) {
                feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> कृपया नाम और Email भरें!';
                feedback.style.color = '#f0c040';
                return;
            }
            if (!email.includes('@')) {
                feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> सही Email डालें!';
                feedback.style.color = '#f0c040';
                return;
            }
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Sending...';
            btn.disabled = true;
            setTimeout(() => {
                feedback.innerHTML = '<i class="fas fa-check-circle" style="color:#00ff88;"></i> धन्यवाद! Prem Enterprises जल्दी आपसे संपर्क करेगा। 🚀';
                feedback.style.color = '#00ff88';
                btn.innerHTML = originalText;
                btn.disabled = false;
                form.reset();
                setTimeout(() => { feedback.innerHTML = ''; }, 8000);
            }, 2000);
        });
    }

    // ===== SEARCH ENGINE =====
    const searchData = [
        // Home Page
        { page: 'Home', url: 'index.html', keywords: ['home', 'hero', 'prem kumar', 'it solutions', 'cyber security', 'prem enterprises'], icon: 'fa-home' },
        { page: 'About', url: 'about.html', keywords: ['about', 'journey', 'prem kumar', 'ritik kumar', 'mission', 'vision', 'ceo', 'founder', 'projects'], icon: 'fa-info-circle' },
        { page: 'Services', url: 'services.html', keywords: ['services', 'it services', 'formatting', 'windows', 'linux', 'networking', 'cyber security', 'ethical hacking', 'student help'], icon: 'fa-cogs' },
        { page: 'Contact', url: 'contact.html', keywords: ['contact', 'phone', 'email', 'address', 'form', 'support', 'help', 'ramgarhwa'], icon: 'fa-phone' },

        // Jobs
        { page: 'Current Jobs', url: 'jobs.html', keywords: ['jobs', 'sarkari naukri', 'current job', 'government job', 'recruitment', 'bharti', 'vacancy', 'PNB', 'JSSC', 'NICL', 'NFR', 'RRB', 'SSC', 'IBPS', 'UPSC', 'BPSC'], icon: 'fa-briefcase' },
        { page: 'Upcoming Jobs', url: 'jobs.html#upcoming-job', keywords: ['upcoming job', 'aagami bharti', 'future recruitment', 'rvunl'], icon: 'fa-hourglass-start' },
        { page: 'Latest Updates', url: 'jobs.html#latest-updates', keywords: ['latest update', 'navinatam update', 'sbi', 'rrb alp', 'nta', 'ugc net', 'bihar police', 'army', 'navy'], icon: 'fa-bullhorn' },

        // Admit Cards
        { page: 'Admit Cards', url: 'admit-card.html', keywords: ['admit card', 'pravish patra', 'hall ticket', 'exam city', 'call letter', 'RSSB', 'AIIMS', 'RRB', 'BPSC', 'SBI', 'UPSC', 'CGPSC', 'RBI'], icon: 'fa-ticket-alt' },

        // Results
        { page: 'Results', url: 'results.html', keywords: ['result', 'pariksha parinam', 'merit list', 'marksheet', 'BPSC', 'CBSE', 'NEET', 'UPSC', 'RRB', 'SSC', 'Bihar', 'LNMU', 'BRABU'], icon: 'fa-trophy' },

        // Syllabus
        { page: 'Syllabus', url: 'syllabus.html', keywords: ['syllabus', 'silebas', 'pathyakram', 'curriculum', 'RRB', 'SSC', 'BPSC', 'UPSC', 'TET', 'CTET', 'railway', 'group d'], icon: 'fa-book' },

        // Answer Key
        { page: 'Answer Key', url: 'syllabus.html#answer-key', keywords: ['answer key', 'uttar kunj', 'NEET', 'RRB', 'SSC', 'UPTET', 'HTET', 'BPSC', 'MPESB'], icon: 'fa-key' },

        // Govt Services
        { page: 'Government Services', url: 'services.html#govt-services', keywords: ['government service', 'sarkari seva', 'certificate', 'caste certificate', 'income certificate', 'residence certificate', 'pan card', 'voter id', 'pension', 'kisan registration'], icon: 'fa-building-columns' },
        { page: 'Certificates', url: 'services.html#govt-services', keywords: ['certificate', 'jati praman patra', 'aay praman patra', 'nivas praman patra', 'non creamy layer', 'NCL'], icon: 'fa-certificate' },
        { page: 'Land Services', url: 'services.html#bhumi-vibhag', keywords: ['land', 'bhumi', 'jamabandi', 'lagan', 'parimarjan', 'dakhil khariz', 'bihar bhumi vibhag', 'LPC'], icon: 'fa-map' },
        { page: 'Scholarships', url: 'services.html#scholarship-fj', keywords: ['scholarship', 'chhatravritti', 'NSP', 'PMS', 'post matric', 'ekalyan', 'medhasoft', 'bihar scholarship'], icon: 'fa-hand-holding-usd' },
        { page: 'Sarkari Yojana', url: 'services.html#sarkari-yojana', keywords: ['sarkari yojana', 'government scheme', 'CM pratigya', 'bihar student credit card', 'PM internship', 'kisan', 'seekho kamao'], icon: 'fa-hand-holding-heart' },

        // Admission
        { page: 'Admissions', url: 'services.html#admission-fj', keywords: ['admission', 'namankan', 'pravish', 'BCECE', 'BRABU', 'JCECEB', 'PPU', 'Patliputra', 'navodaya', 'JNVST', 'PTET', 'OFSS', 'polytechnic', 'ITI'], icon: 'fa-graduation-cap' },
        { page: 'KCTC College', url: 'services.html', keywords: ['khemchand tarachand college', 'kctc college', 'raxaul college', 'raxaul'], icon: 'fa-school' },

        // University Updates
        { page: 'University Updates', url: 'services.html#university-update', keywords: ['university', 'vishwavidyalaya', 'PPU', 'UOK', 'JNVU', 'LNMU', 'PDUSU', 'VMOU', 'VKSU', 'BRABU', 'IGNOU', 'magadh', 'munger', 'uniraj'], icon: 'fa-university' },

        // Important Links
        { page: 'Important Links', url: 'services.html#important-links', keywords: ['important link', 'mahitvapurn link', 'aadhar', 'voter list', 'RTPS', 'ration card', 'pan card', 'ayushman', 'labour card', 'e shram'], icon: 'fa-link' },

        // Converter Tools
        { page: 'Converter Tools', url: 'services.html#converter-tools', keywords: ['converter', 'jpg to pdf', 'pdf to jpg', 'image size', 'file converter', 'google input tools', 'apaar id'], icon: 'fa-exchange-alt' },

        // Blog
        { page: 'Latest Blog', url: 'services.html#latest-blog', keywords: ['blog', 'CM Pratigya', 'RRB ALP', 'SSC GD', 'har ghar tiranga', 'ekalyan', 'PM kisan', 'BPSC teacher'], icon: 'fa-blog' },

        // Security / Cyber Safety
        { page: 'Cyber Security & Safety', url: 'security.html', keywords: ['security', 'cyber security', 'safety', 'have i been pwned', 'data leak', 'email check', 'password', '2fa', 'two factor', 'scam', 'phishing', 'spam', 'data breach', 'pwned', 'hacking', 'ethical hacking'], icon: 'fa-shield-alt' },

        // Tech / Windows & Linux
        { page: 'Windows & Linux Solutions', url: 'services.html#tech', keywords: ['windows', 'linux', 'kali linux', 'ubuntu', 'formatting', 'os installation', 'windows 7', 'windows 10', 'windows 11'], icon: 'fa-windows' },

        // Documents
        { page: 'Documents', url: 'services.html#documents', keywords: ['document', 'dastavez', 'voter id', 'e shram', 'aadhar', 'ayushman', 'abha card', 'BCECE'], icon: 'fa-file' },
    ];

    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchClose = document.getElementById('searchClose');
    const searchBtns = document.querySelectorAll('.search-icon-btn');

    function openSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.add('active');
        setTimeout(() => {
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
                searchInput.value = '';
                searchResults.innerHTML = '';
                // Show all results by default
                renderResults('');
            }
        }, 400);
        document.body.style.overflow = 'hidden';
    }

    function closeSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.innerHTML = '';
    }

    // Open search
    searchBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openSearch();
        });
    });

    // Close search
    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }

    // Close on Esc key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSearch();
        }
        // Ctrl+K to open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
    });

    // Close on overlay click (outside results area)
    if (searchOverlay) {
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                closeSearch();
            }
        });
    }

    function renderResults(query) {
        if (!searchResults) return;
        query = query.toLowerCase().trim();

        if (!query) {
            // Show all pages grouped by category
            searchResults.innerHTML = '';
            searchData.forEach(item => {
                const div = document.createElement('a');
                div.className = 'search-result-item';
                div.href = item.url;
                div.innerHTML = `
                    <i class="fas ${item.icon}"></i>
                    <div class="result-text">
                        <h4>${item.page}</h4>
                        <p>${item.url}</p>
                    </div>
                `;
                searchResults.appendChild(div);
            });
            return;
        }

        // Filter results
        const filtered = searchData.filter(item => {
            const keywordMatch = item.keywords.some(keyword =>
                keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase())
            );
            const pageMatch = item.page.toLowerCase().includes(query);
            const urlMatch = item.url.toLowerCase().includes(query);
            return keywordMatch || pageMatch || urlMatch;
        });

        searchResults.innerHTML = '';
        if (filtered.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    कोई परिणाम नहीं मिला "<strong>${query}</strong>"<br>
                    <span style="font-size:0.85rem;color:#556688;margin-top:8px;display:block;">कृपया कोई दूसरा शब्द टाइप करें</span>
                </div>
            `;
            return;
        }

        filtered.forEach(item => {
            const div = document.createElement('a');
            div.className = 'search-result-item';
            div.href = item.url;
            div.innerHTML = `
                <i class="fas ${item.icon}"></i>
                <div class="result-text">
                    <h4>${item.page}</h4>
                    <p>${item.url}</p>
                </div>
            `;
            searchResults.appendChild(div);
        });
    }

    // Search on input
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            renderResults(this.value);
        });
    }

    // Keyboard navigation for search results
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            const items = searchResults.querySelectorAll('.search-result-item');
            if (items.length === 0) return;

            const active = searchResults.querySelector('.search-result-item.active') || items[0];
            let index = Array.from(items).indexOf(active);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                active.classList.remove('active');
                index = (index + 1) % items.length;
                items[index].classList.add('active');
                items[index].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                active.classList.remove('active');
                index = (index - 1 + items.length) % items.length;
                items[index].classList.add('active');
                items[index].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (active && active.href) {
                    window.location.href = active.href;
                }
            }
        });
    }
})();

