// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
    const current =
        root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(current);
});

// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
    });
});

// Sticky nav background on scroll
const nav = document.getElementById("nav");
window.addEventListener(
    "scroll",
    () => {
        nav.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true },
);

// Active nav link based on scroll position
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-link");

function setActiveLink() {
    const scrollPos = window.scrollY + 120;
    let current = "";
    sections.forEach((section) => {
        if (scrollPos >= section.offsetTop) {
            current = section.getAttribute("id");
        }
    });
    navAnchors.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`,
        );
    });
}
window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

// Typed text effect
const typedEl = document.getElementById("typed");
const phrases = [
    "MERN Stack Developer",
    "Problem Solver",
    "DSA Enthusiast",
    "Lifelong Learner",
];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
    const current = phrases[phraseIndex];
    if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeLoop, 1800);
            return;
        }
    } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    setTimeout(typeLoop, deleting ? 40 : 80);
}
typeLoop();

// Scroll reveal animations
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 },
);

revealEls.forEach((el) => revealObserver.observe(el));

// Hero canvas - subtle animated particle network
const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let animationFrame;

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function createParticles() {
    const count = window.innerWidth < 768 ? 30 : 60;
    particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
    }));
}

function getAccentColor() {
    return root.getAttribute("data-theme") === "light"
        ? "rgba(124, 58, 237, "
        : "rgba(167, 139, 250, ";
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const color = getAccentColor();
    const maxDist = 140;

    particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color + "0.5)";
        ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDist) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = color + 0.12 * (1 - dist / maxDist) + ")";
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    animationFrame = requestAnimationFrame(drawParticles);
}

function initCanvas() {
    resizeCanvas();
    createParticles();
    cancelAnimationFrame(animationFrame);
    drawParticles();
}

initCanvas();
window.addEventListener("resize", () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(initCanvas, 200);
});

// Resume download placeholder
// document.getElementById('resumeBtn').addEventListener('click', (e) => {
//   e.preventDefault();
//   alert('Resume coming soon. Please reach out via the contact form or email for now.');
// });

// Contact form handling (frontend only)
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formNote.textContent = "Please fill in all fields.";
        formNote.style.color = "#ef4444";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formNote.textContent = "Please enter a valid email address.";
        formNote.style.color = "#ef4444";
        return;
    }

    formNote.innerHTML =
        "<b>Thanks for reaching out! Email Service Might Be Stoped</b> — please email me directly at abhishek638983k@gmail.com.<br> <b>OR Click ↓</b>";
    formNote.style.color = "#10b981";
    contactForm.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = document.getElementById("nav").offsetHeight;
                const targetPos =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navHeight;
                window.scrollTo({ top: targetPos, behavior: "smooth" });
            }
        }
    });
});
