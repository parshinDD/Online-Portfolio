export const profile = {
    name: 'Даня Паршин',
    nickname: 'putka_sok',
    role: 'Backend Developer / ML Engineer / CS Student',
    greeting: 'Привет, я',
    pitch: 'Студент 4 курса ПГНИУ (ПМИ, совместно с МФТИ). Разбираюсь в бэкенде, машинке и системном программировании. Если жизнь - это вызов, я перезвоню.',
    heroEyebrow: 'docker compose logs portfolio --follow',
    photoTag: '~/putka_sok.png',
    photoAlt: 'Аватар',
    ctaPrimary: 'Связаться',
    ctaSecondary: 'Смотреть проекты',
};

export const navLinks = [
    { id: 'about', label: 'Обо мне' },
    { id: 'projects', label: 'Проекты' },
    { id: 'timeline', label: 'Путь' },
    { id: 'contact', label: 'Контакты' },
];

export const headerContent = {
    logo: 'putka_sok',
    navAriaLabel: 'Основная навигация',
};

export const sectionContent = {
    about: {
        eyebrow: '01 / about',
        title: 'Обо мне',
        description: 'Развиваюсь в бэкенд-разработке и машинном обучении. Параллельно веду учебные и студенческие проекты - от кураторства до организации всероссийских мероприятий. Обладаю быстрой обучаемостью и мотивацией развиваться в команде.',
    },
    projects: {
        eyebrow: '02 / projects',
        title: 'Проекты',
        description: 'То, что решал не на бумаге.',
    },
    timeline: {
        eyebrow: '03 / progress',
        title: 'Путь',
        description: 'Без десяти лет трудовой книжки - зато с понятной траекторией роста',
    },
    contact: {
        title: 'Готов обсудить',
        titleHighlight: 'стажировку',
        titleEnd: 'или проект',
        subtitle: 'Быстрее всего отвечаю в Telegram.',
        ctaTelegram: 'Написать в Telegram',
        socialAriaLabel: 'Социальные сети',
    }
};

export const contactInfo = {
    email: 'parshin.dd@phystech.edu',
    location: 'Пермь, Россия',
};

export const socials = [
    { id: 'github', label: 'GitHub', handle: '@parshinDD', url: 'https://github.com/parshinDD' },
    { id: 'telegram', label: 'Telegram', handle: '@putka_sok', url: 'https://t.me/putka_sok' },
    { id: 'vk', label: 'VK', handle: '@putka_sok', url: 'https://vk.ru/putka_sok' },
    { id: 'email', label: 'Email', handle: contactInfo.email, url: `mailto:${contactInfo.email}` },
];

export const devLinks = [
    { id: 'github', label: 'GitHub', url: 'https://github.com/parshinDD' },
    { id: 'codewars', label: 'Codewars', url: 'https://www.codewars.com/users/parshinDD' },
]

export const skills = [
    {
        id: 'python',
        name: 'Python',
        detail: 'FastAPI, Flask, Asyncio',
        note: 'Основной фокус',
        level: 'primary',
    },
    {
        id: 'db',
        name: 'Database',
        detail: 'SQL, PostgreSQL, MySQL, MongoDB',
        note: 'Хранение',
        level: 'primary',
    },
    {
        id: 'js',
        name: 'JavaScript & Web',
        detail: 'React, REST API, базовый фронтенд для своих сервисов',
        note: 'Фронтенд-база',
        level: 'secondary',
    },
    {
        id: 'cpp',
        name: 'C++',
        detail: 'Структуры данных, алгоритмы, системное программирование',
        note: 'Низкоуровневый бэкграунд',
        level: 'secondary',
    },
    {
        id: 'cicd',
        name: 'CI/CD',
        detail: 'GitHub Actions',
        note: 'Автоматика',
        level: 'secondary',
    },
    {
        id: 'infra',
        name: 'Infrastructure',
        detail: 'Git, Docker, Linux, Grafana, Redis',
        note: 'Про управление',
        level: 'secondary',
    },
    {
        id: 'go',
        name: 'Go',
        detail: 'Конкурентность, gRPC',
        note: 'Coming soon...',
        level: 'future',
    },
];

export const projects = [
    {
        id: 'p1',
        title: 'IT Architect Assistant',
        description: 'Автоматизированная RAG-система для генерации и проверки проектных решений по внутренним архитектурным стандартам: векторный поиск по FAISS, LLM на vLLM, мониторинг через Prometheus + Grafana',
        tags: ['Python', 'ML', 'FastAPI', 'PostgreSQL', 'FAISS', 'Angular'],
        github: 'https://github.com/parshinDD/IT-Architect-Assistant.git',
        demo: null,
    },
    {
        id: 'p2',
        title: 'Faunistica 3.0',
        description: 'Teamlead на доработке сервиса для Российского научного фонда: система извлечения данных о находках пауков из научных публикаций для биологов и волонтеров. Безопасная JWT-авторизация, Telegram-бот поддержки.',
        tags: ['Python', 'React', 'PostgreSQL', 'JWT', 'Docker'],
        github: 'https://github.com/parshinDD/Faunistica_3.0.git',
        demo: null,
    },
    {
        id: 'p3',
        title: 'Cheap Pizza City!',
        description: 'Сервис парсит цены пиццерии в реальном времени, строит интерактивный график истории цен и подбирает индивидуальный набор пицц по заданному бюджету.',
        tags: ['Python', 'JavaScript', 'Docker'],
        github: 'https://github.com/parshinDD/Python-Service-CPC.git',
        demo: null,
    },
    {
        id: 'p4',
        title: 'Attuned',
        description: 'Рекомендательный сервис игр под вкус пользователя - от подбора жанров до персональной выдачи похожих проектов.',
        tags: ['Python', 'React', 'Embeddings', 'Docker'],
        github: 'https://github.com/parshinDD/Attuned.git',
        demo: null,
    },
];

export const timeline = [
    {
        id: 't1',
        period: '2023 - 2027',
        title: 'Учеба в ПГНИУ',
        description: 'Бакалавриат, алгоритмы и структуры данных, АКОС, Машинное обучение (классическое), фундаментальная база CS',
    },
    {
        id: 't2',
        period: 'Ноя 2024 - Окт 2025',
        title: 'Наставник на AI for 3D printing',
        description: 'Наставник в проекте лаборатории xWeld: система обнаружения аномалий при 3D-печати металлом на основе данных сварочного источника и нейросетей',
    },
    {
        id: 't3',
        period: 'Фев - Июнь 2025',
        title: 'Teamlead / Backend на Faunistica 3.0',
        description: 'Доработка сервиса для Российского научного фонда: ускорение отклика, улучшение безопасности, новый интерфейс',
    },
    {
        id: 't4',
        period: 'Март - Июнь 2026',
        title: 'Teamlead / Backend на IT Architect Assistant',
        description: 'Создание системы генерации и валидации ИТ проектных решений на основе внутренних и внешних архитектурных стандартов',
    },
    {
        id: 't5',
        period: 'Июль - Сен 2026',
        title: 'Frontend / DevOps на XPath Studio',
        description: 'Разработка интерфейса для визуализации и модификации управляющих программ 3D-принтеров по металлу',
    },
    {
        id: 't6',
        period: 'Настоящее время',
        title: 'Фриланс / пет-проекты / поиск стажировки',
        description: 'Attuned, Cheap Pizza City! и другие эксперименты, параллельно - поиск позиции Junior backend-разработчика или ML-инженера',
    },
];
