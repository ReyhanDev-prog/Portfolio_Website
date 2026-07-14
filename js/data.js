// ============================================================
// data.js - Portfolio Data
// Semua data portfolio disimpan di sini agar mudah diedit
// ============================================================

// --- Skill Metrics (untuk Player Status) ---
const skillMetrics = [
    { name: 'GAME DEVELOPMENT', percentage: 85 },
    { name: 'WEB DEVELOPMENT', percentage: 80 },
    { name: 'DATA SCIENCE', percentage: 70 },
    { name: 'UI DESIGN', percentage: 60 },
    { name: 'STORYTELLING', percentage: 75 },
];

// --- Project Database ---
const projects = [
    {
        id: '01',
        name: 'CTRL-Z',
        category: 'Visual Novel // Time Loop // Mystery',
        description: '"A psychological visual novel about choices, consequences, and broken timelines."',
        technology: ['Ren\'Py', 'Python'],
        status: 'IN DEVELOPMENT',
        statusClass: 'in-development',
        image: 'assets/images/ctrl-z.jpg',
    },
    {
        id: '02',
        name: 'WEB VN ENGINE',
        category: 'Game Engine // Web Development',
        description: '"A lightweight visual novel engine created for modern web browsers."',
        technology: ['HTML', 'CSS', 'JavaScript'],
        status: 'ACTIVE DEVELOPMENT',
        statusClass: 'active-development',
        image: 'assets/images/web-vn-engine.jpg',
    },
    {
        id: '03',
        name: 'SAES CRYPTOGRAPHY',
        category: 'Cryptography // Educational Tool',
        description: '"An interactive web application for learning and simulating Simplified AES encryption."',
        technology: ['JavaScript', 'Cryptography'],
        status: 'COMPLETED',
        statusClass: 'completed',
        image: 'assets/images/saes.jpg',
    },
    {
        id: '04',
        name: 'DATA SCIENCE PROJECT',
        category: 'Machine Learning // Data Analysis',
        description: '"A collection of experiments involving data analysis, visualization, and predictive models."',
        technology: ['Python', 'Pandas', 'Machine Learning'],
        status: 'RESEARCH',
        statusClass: 'research',
        image: 'assets/images/data-science.jpg',
    },
];

// --- Skill Database Categories ---
const skillCategories = [
    {
        title: 'GAME DEVELOPMENT',
        skills: ['Ren\'Py', 'Unity', 'Game System Design', 'Visual Novel Development',
            'Narrative Design'
        ],
    },
    {
        title: 'PROGRAMMING',
        skills: ['Python', 'JavaScript', 'Java', 'C++', 'HTML', 'CSS'],
    },
    {
        title: 'DATA & AI',
        skills: ['Data Analysis', 'Pandas', 'Machine Learning', 'Data Visualization'],
    },
    {
        title: 'TOOLS',
        skills: ['Git', 'GitHub', 'Linux', 'Vite', 'Aseprite', 'Photoshop'],
    },
];

// --- Experience Log ---
const experiences = [
    {
        year: '2024 - Present',
        title: 'Visual Novel Developer',
        category: 'Game Development',
        description: 'Developing an original time-loop visual novel "CTRL-Z" using Ren\'Py. Responsible for story design, programming, and game mechanics.',
        status: 'ONGOING',
    },
    {
        year: '2024',
        title: 'Web VN Engine Creator',
        category: 'Web Development',
        description: 'Built a lightweight visual novel engine from scratch using vanilla HTML, CSS, and JavaScript for modern browsers.',
        status: 'ACTIVE',
    },
    {
        year: '2023 - 2024',
        title: 'Cryptography Learning Platform',
        category: 'Education Technology',
        description: 'Created an interactive web application for learning Simplified AES encryption with step-by-step simulation.',
        status: 'COMPLETED',
    },
    {
        year: '2023',
        title: 'Data Science Researcher',
        category: 'Data Science',
        description: 'Conducted experiments in data analysis, visualization, and predictive modeling using Python ecosystem.',
        status: 'RESEARCH',
    },
];

// --- Achievements ---
const achievements = [
    {
        name: 'SYSTEM ARCHITECT',
        description: '"Built a visual novel engine using Vanilla JavaScript."',
        unlocked: true,
        icon: '🏗️',
    },
    {
        name: 'STORY CREATOR',
        description: '"Developed an original time-loop visual novel."',
        unlocked: true,
        icon: '📖',
    },
    {
        name: 'CRYPTOGRAPHY RESEARCHER',
        description: '"Created an interactive SAES learning platform."',
        unlocked: true,
        icon: '🔐',
    },
    {
        name: 'CONTINUOUS LEARNER',
        description: '"Exploring game development, data science, and multiple languages."',
        unlocked: true,
        icon: '📚',
    },
    {
        name: 'PIXEL ARTIST',
        description: '"Create at least 10 original game assets."',
        unlocked: false,
        icon: '🎨',
    },
    {
        name: 'MULTIPLAYER ENABLED',
        description: '"Collaborate on a team project with 3+ developers."',
        unlocked: false,
        icon: '👥',
    },
    {
        name: 'PERFECT DEPLOY',
        description: '"Deploy a production-ready application."',
        unlocked: false,
        icon: '🚀',
    },
    {
        name: 'MENTOR MODE',
        description: '"Help 5 beginners start their coding journey."',
        unlocked: false,
        icon: '🌟',
    },
];

// --- Typing animation roles ---
const typingRoles = [
    'GAME DEVELOPER',
    'DATA SCIENCE STUDENT',
    'CREATIVE DEVELOPER',
];