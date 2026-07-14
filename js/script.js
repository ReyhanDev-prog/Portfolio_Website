// ============================================================
// script.js - Main Application Logic
// ============================================================

(function () {
    'use strict';

    // ============================================================
    // DOM References
    // ============================================================
    const bootOverlay = document.getElementById('bootOverlay');
    const bootProgressBar = document.getElementById('bootProgressBar');
    const bootSkip = document.getElementById('bootSkip');
    const mainContent = document.getElementById('mainContent');
    const typingTarget = document.getElementById('typingTarget');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const contactForm = document.getElementById('contactForm');
    const transmissionStatus = document.getElementById('transmissionStatus');
    const statusContent = document.getElementById('statusContent');
    const sfxToggle = document.getElementById('sfxToggle');
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    const unlockedCountEl = document.getElementById('unlockedCount');

    // ============================================================
    // State
    // ============================================================
    let bootComplete = false;
    let sfxEnabled = false;
    let mouseX = -100;
    let mouseY = -100;
    let cursorRingX = -100;
    let cursorRingY = -100;
    let isTouchDevice = false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ============================================================
    // Boot Sequence
    // ============================================================
    function initBootSequence() {
        if (prefersReducedMotion) {
            finishBoot();
            return;
        }

        let progress = 0;
        const totalDuration = 2200; // ~2.2 seconds
        const interval = 40;
        const steps = totalDuration / interval;
        const increment = 100 / steps;

        const progressInterval = setInterval(() => {
            progress += increment;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
                bootProgressBar.style.width = '100%';
                setTimeout(finishBoot, 300);
            }
            bootProgressBar.style.width = progress + '%';
        }, interval);

        // Show boot lines with proper timing
        const bootLines = document.querySelectorAll('.boot-line');
        bootLines.forEach((line, i) => {
            line.style.animationDelay = (0.2 + i * 0.5) + 's';
        });
    }

    function finishBoot() {
        bootComplete = true;
        bootOverlay.classList.add('hidden');
        document.body.style.overflow = '';
        // Initialize everything after boot
        initTypingAnimation();
        initIntersectionObservers();
        renderDynamicContent();
        initCustomCursor();
    }

    bootSkip.addEventListener('click', () => {
        bootProgressBar.style.width = '100%';
        setTimeout(finishBoot, 150);
    });

    // Prevent scroll during boot
    document.body.style.overflow = 'hidden';

    // ============================================================
    // Typing Animation
    // ============================================================
    function initTypingAnimation() {
        if (prefersReducedMotion) {
            typingTarget.textContent = typingRoles[0];
            typingTarget.classList.remove('typing');
            return;
        }

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typeSpeed = 80;
        const deleteSpeed = 40;
        const pauseBetween = 2000;

        function type() {
            const currentRole = typingRoles[roleIndex];

            if (!isDeleting) {
                typingTarget.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentRole.length) {
                    isDeleting = true;
                    setTimeout(type, pauseBetween);
                    return;
                }
            } else {
                typingTarget.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % typingRoles.length;
                }
            }

            typingTarget.classList.add('typing');
            const delay = isDeleting ? deleteSpeed : typeSpeed;
            setTimeout(type, delay);
        }

        // Initial delay
        setTimeout(type, 500);
    }

    // ============================================================
    // Dynamic Content Rendering
    // ============================================================
    function renderDynamicContent() {
        renderSkillBars();
        renderProjects();
        renderSkillDatabase();
        renderTimeline();
        renderAchievements();
    }

    function renderSkillBars() {
        const container = document.getElementById('skillBarsContainer');
        if (!container) return;

        container.innerHTML = skillMetrics
            .map(
                (skill) => `
            <div class="skill-bar-item">
              <div class="skill-bar-label">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-pct">${skill.percentage}%</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" data-progress="${skill.percentage}" style="width: 0%;"></div>
              </div>
            </div>
          `
            )
            .join('');
    }

    function renderProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        grid.innerHTML = projects
            .map(
                (proj) => `
            <article class="project-card">
              <div class="project-thumb">
                <span class="project-number">PROJECT ${proj.id}</span>
                <img src="${proj.image}" alt="${proj.name}"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                     onload="this.nextElementSibling.style.display='none';">
                <div class="project-thumb-placeholder" style="display:none;">
                  [ PROJECT ${proj.id} PREVIEW ]
                </div>
              </div>
              <div class="project-info">
                <h3 class="project-name">${proj.name}</h3>
                <p class="project-category">${proj.category}</p>
                <p class="project-desc">${proj.description}</p>
                <div class="project-tech">
                  ${proj.technology.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <span class="project-status ${proj.statusClass}">${proj.status}</span>
                <a href="#contact" class="btn btn-secondary" aria-label="View project ${proj.name}">
                  <span class="btn-text">VIEW PROJECT</span>
                  <span class="btn-arrow">&#9654;</span>
                </a>
              </div>
            </article>
          `
            )
            .join('');
    }

    function renderSkillDatabase() {
        const container = document.getElementById('skillDbContainer');
        if (!container) return;

        container.innerHTML = skillCategories
            .map(
                (cat) => `
            <div class="skilldb-category">
              <h3 class="skilldb-cat-title">[ ${cat.title} ]</h3>
              <div class="skilldb-nodes">
                ${cat.skills.map((s) => `<span class="skill-node">${s}</span>`).join('')}
              </div>
            </div>
          `
            )
            .join('');
    }

    function renderTimeline() {
        const container = document.getElementById('timelineContainer');
        if (!container) return;

        container.innerHTML = experiences
            .map(
                (exp) => `
            <div class="timeline-item">
              <div class="timeline-node"></div>
              <div class="timeline-year">${exp.year}</div>
              <h3 class="timeline-title">${exp.title}</h3>
              <p class="timeline-category">${exp.category}</p>
              <p class="timeline-desc">${exp.description}</p>
              <span class="timeline-status">STATUS: ${exp.status}</span>
            </div>
          `
            )
            .join('');
    }

    function renderAchievements() {
        const grid = document.getElementById('achievementsGrid');
        if (!grid) return;

        const unlockedCount = achievements.filter((a) => a.unlocked).length;
        if (unlockedCountEl) {
            unlockedCountEl.textContent = String(unlockedCount).padStart(2, '0');
        }

        grid.innerHTML = achievements
            .map(
                (ach) => `
            <div class="achievement-badge ${ach.unlocked ? 'unlocked' : 'locked'}">
              ${ach.unlocked
                ? `<span class="achievement-icon" aria-hidden="true">${ach.icon}</span>`
                : `<span class="lock-icon" aria-hidden="true">🔒</span>`
              }
              <h3 class="achievement-name">${ach.unlocked ? ach.name : '???'}</h3>
              <p class="achievement-desc">${ach.unlocked ? ach.description : '"Complete more missions to unlock this achievement."'}</p>
            </div>
          `
            )
            .join('');
    }

    // ============================================================
    // Intersection Observers
    // ============================================================
    function initIntersectionObservers() {
        // Observer for progress bars (skill + exp)
        const progressObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const progress = bar.getAttribute('data-progress');
                        if (progress) {
                            // Small delay for staggered effect
                            const delay = bar.closest('.skill-bar-item')
                                ? Array.from(bar.closest('.skill-bars').children).indexOf(bar.closest(
                                        '.skill-bar-item')) * 100
                                : 0;
                            setTimeout(() => {
                                bar.style.width = progress + '%';
                            }, delay);
                        }
                        // Also handle exp-fill
                        if (bar.classList.contains('exp-fill') && !bar.style.width) {
                            setTimeout(() => {
                                bar.style.width = progress + '%';
                            }, 200);
                        }
                        progressObserver.unobserve(bar);
                    }
                });
            }, { threshold: 0.3 }
        );

        // Observe all progress bars
        document.querySelectorAll('.skill-bar-fill, .exp-fill').forEach((bar) => {
            progressObserver.observe(bar);
        });

        // Observer for active nav link
        const sections = document.querySelectorAll('.section[data-section-name]');
        const navObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.getAttribute('data-section-name');
                        setActiveNav(sectionName);
                    }
                });
            }, { threshold: 0.35, rootMargin: '-10% 0px -60% 0px' }
        );

        sections.forEach((section) => {
            navObserver.observe(section);
        });

        // Observe status section separately (not full height)
        const statusSection = document.getElementById('status');
        if (statusSection) {
            const statusNavObserver = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        // Status doesn't have its own nav, but we can highlight profile
                        // as it's between profile and projects
                    }
                }, { threshold: 0.5 }
            );
            statusNavObserver.observe(statusSection);
        }
    }

    function setActiveNav(sectionName) {
        // Update desktop nav
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionName) {
                link.classList.add('active');
            }
        });
        // Update mobile nav
        mobileNavLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionName) {
                link.classList.add('active');
            }
        });
    }

    // ============================================================
    // Mobile Navigation
    // ============================================================
    hamburger.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('open');
        if (isOpen) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    function openMobileNav() {
        mobileNav.classList.add('open');
        mobileNav.setAttribute('aria-hidden', 'false');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Close menu');
    }

    function closeMobileNav() {
        mobileNav.classList.remove('open');
        mobileNav.setAttribute('aria-hidden', 'true');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Toggle menu');
    }

    // Close mobile nav when a link is clicked
    mobileNavLinks.forEach((link) => {
        link.addEventListener('click', () => {
            closeMobileNav();
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (
            mobileNav.classList.contains('open') &&
            !mobileNav.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            closeMobileNav();
        }
    });

    // ============================================================
    // Contact Form with Simulated Transmission
    // ============================================================
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Reset errors
        document.querySelectorAll('.form-group').forEach((group) => group.classList.remove('error'));

        // Validate name
        if (!name.value.trim()) {
            showFieldError('name');
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
            showFieldError('email');
            isValid = false;
        }

        // Validate subject
        if (!subject.value.trim()) {
            showFieldError('subject');
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            showFieldError('message');
            isValid = false;
        }

        if (!isValid) return;

        // Simulate transmission
        simulateTransmission();
    });

    function showFieldError(fieldId) {
        const group = document.getElementById(fieldId).closest('.form-group');
        if (group) group.classList.add('error');
    }

    function simulateTransmission() {
        transmissionStatus.classList.add('visible');
        statusContent.className = 'status-content';
        statusContent.textContent = 'ENCRYPTING MESSAGE...';

        // Disable submit button
        const submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        submitBtn.style.pointerEvents = 'none';

        // Phase 1: Encrypting (0.5s)
        setTimeout(() => {
            statusContent.textContent = 'ESTABLISHING SECURE CHANNEL...';
        }, 500);

        // Phase 2: Sending (1.0s)
        setTimeout(() => {
            statusContent.textContent = 'TRANSMISSION IN PROGRESS...';
        }, 1000);

        // Phase 3: Success (1.5s)
        setTimeout(() => {
            statusContent.textContent = '✓ TRANSMISSION SENT SUCCESSFULLY';
            statusContent.className = 'status-content success';
            contactForm.reset();

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.pointerEvents = 'auto';

            // Hide status after a few seconds
            setTimeout(() => {
                transmissionStatus.classList.remove('visible');
            }, 3500);
        }, 1500);
    }

    // ============================================================
    // Custom Cursor
    // ============================================================
    function initCustomCursor() {
        // Detect touch device
        isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

        if (isTouchDevice || prefersReducedMotion) {
            if (cursorDot) cursorDot.style.display = 'none';
            if (cursorRing) cursorRing.style.display = 'none';
            document.body.style.cursor = 'auto';
            return;
        }

        document.body.style.cursor = 'none';

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (cursorDot) {
                cursorDot.style.left = mouseX + 'px';
                cursorDot.style.top = mouseY + 'px';
            }
        });

        // Animate ring with slight delay
        function animateCursor() {
            if (!cursorRing) return;
            const speed = 0.15;
            cursorRingX += (mouseX - cursorRingX) * speed;
            cursorRingY += (mouseY - cursorRingY) * speed;
            cursorRing.style.left = cursorRingX + 'px';
            cursorRing.style.top = cursorRingY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, .skill-node, .project-card, .nav-link, .mobile-nav-link'
        );
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                if (cursorRing) cursorRing.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                if (cursorRing) cursorRing.classList.remove('hovering');
            });
        });

        // Handle cursor leaving window
        document.addEventListener('mouseleave', () => {
            if (cursorDot) cursorDot.style.opacity = '0';
            if (cursorRing) cursorRing.style.opacity = '0';
        });
        document.addEventListener('mouseenter', () => {
            if (cursorDot) cursorDot.style.opacity = '1';
            if (cursorRing) cursorRing.style.opacity = '1';
        });
    }

    // ============================================================
    // Parallax Effect on Mouse Move (light)
    // ============================================================
    function initParallax() {
        if (prefersReducedMotion || isTouchDevice) return;

        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;

            // Subtle movement on the grid background
            document.body.style.backgroundPosition = `${x * 0.5}px ${y * 0.5}px`;

            // Subtle movement on hero avatar
            const avatarHologram = document.querySelector('.avatar-hologram');
            if (avatarHologram) {
                avatarHologram.style.transform = `perspective(500px) rotateY(${x * 0.3}deg) rotateX(${-y * 0.3}deg)`;
                avatarHologram.style.transition = 'transform 0.3s ease-out';
            }
        });
    }

    // ============================================================
    // SFX with Web Audio API
    // ============================================================
    let audioCtx = null;

    function initAudio() {
        // Lazy init - only create when user enables SFX
        if (!audioCtx) {
            try {
                audioCtx = new(window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.log('Web Audio API not supported');
                return false;
            }
        }
        return true;
    }

    function playHoverSound() {
        if (!sfxEnabled) return;
        if (!initAudio()) return;

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.08);
    }

    function playClickSound() {
        if (!sfxEnabled) return;
        if (!initAudio()) return;

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'square';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.05);
    }

    // SFX Toggle
    sfxToggle.addEventListener('click', () => {
        sfxEnabled = !sfxEnabled;
        if (sfxEnabled) {
            sfxToggle.classList.add('active');
            sfxToggle.querySelector('span').textContent = 'SFX: ON';
            sfxToggle.title = 'SFX: ON';
            // Play a small confirmation sound
            if (initAudio()) {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, audioCtx.currentTime);
                osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
                osc.start(audioCtx.currentTime);
                osc.stop(audioCtx.currentTime + 0.2);
            }
        } else {
            sfxToggle.classList.remove('active');
            sfxToggle.querySelector('span').textContent = 'SFX: OFF';
            sfxToggle.title = 'SFX: OFF';
        }
    });

    // Attach sound effects to interactive elements
    function attachSoundEffects() {
        const hoverElements = document.querySelectorAll(
            'a, button, .skill-node, .project-card, .nav-link, .mobile-nav-link, .btn'
        );
        hoverElements.forEach((el) => {
            el.addEventListener('mouseenter', playHoverSound);
            el.addEventListener('click', playClickSound);
        });
    }

    // ============================================================
    // Smooth scroll for anchor links
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = window.innerWidth <= 1024 ? 70 : 0;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        });
    });

    // ============================================================
    // Initialize
    // ============================================================
    function init() {
        initBootSequence();
        initParallax();

        // Attach sound effects after dynamic content is rendered
        // We'll use a MutationObserver to watch for content changes
        const mainContentObserver = new MutationObserver(() => {
            attachSoundEffects();
        });
        mainContentObserver.observe(document.getElementById('mainContent'), {
            childList: true,
            subtree: true,
        });

        // Initial attachment
        setTimeout(attachSoundEffects, 2500);

        // Handle reduced motion changes
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
            if (e.matches) {
                // User now prefers reduced motion
                if (cursorDot) cursorDot.style.display = 'none';
                if (cursorRing) cursorRing.style.display = 'none';
                document.body.style.cursor = 'auto';
                typingTarget.classList.remove('typing');
            }
        });
    }

    // Start the application
    init();
})();