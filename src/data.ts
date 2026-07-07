/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProjectItem, TimelineItem, SkillItem, SoftSkillItem } from './types';

export const personalInfo = {
  fullName: "Sherqulov Sardorbek",
  patronymic: "Shoqosim O'g'li",
  title: "Ma'lumotlar tahlilchisi | Web Dasturchi",
  birthDate: "2005-yil 16-iyul",
  birthPlace: "Qashqadaryo viloyati Koson tumani",
  currentEducation: "QDTU (Menejment)",
  currentJob: "Qashqadaryo viloyat statistika boshqarmasi",
  phone: "+998 91 455 43 23",
  email: "sherqsardor455@gmail.com",
  location: "Koson tumani, Qashqadaryo",
  age: 20,
  bioLines: [
    "Men Sherqulov Sardorbek Shoqosim o'g'li 2005-yil 16-iyulda Qashqadaryo viloyati Koson tumanida tug'ilganman. Hozirda Koson tumanida istiqomat qilmoqdaman.",
    "2026-yil Qarshi davlat texnika universitetini tamomlaganman, 2024-2026-yillar davomida Qashqadaryo viloyat statistika boshqarmasida ish faoliyatimni olib borganman."
  ],
  socials: {
    instagram: "https://www.instagram.com/sardor1_8",
    telegram: "https://t.me/sardorbek_sherqulov",
    linkedin: "https://linkedin.com"
  },
  images: {
    heroBg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFmF-TddcAmiCAelV0WenUnL_z8_7UGo8BGOLssgoTLc-gkZgnlNJcOWkGzy83R9E2vgliLLoGzyqjNzB8UXlEcKeDtiR0gLKd3maLSXGQS0nG_Zanr-puzBDnm-S62J8V7asgB0-1BwrZA_F_k7nUUuX1MXisDNHBLeeUsNE0GcAn4tmicha7Pc2cJ9LMx6a8XlMED0qk2kJzTJlMvqOHIZHrcWrnkDtFjCDQfH9Yj6cxh5D4Jg9IchcAIThRepha1NU",
    profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnS0EIwdJvrEvCJsmo23xD2xCWU1OOMhQDCZ7sOwLElZ-tWrvakz46YtV45A4ZFFbYfidhDTmfUC4ttwO_7zRIsiW4n3JpVU-U8mdWuqcr_ACZ-RHXpd40aa6Rns2fJGqMUG3tjGbtteNuYxiMjHPW2BGNbHWP6Xy-9iDifJbxmYAWLjQCh6ByYnI1CrVf6c_UiSlBVB-TjsjvJQ8gN1y-clS_adift4RPi_YvFZ_h4BBjHQjFQOt2fqOpw9Gz1lnkVnU"
  }
};

export const timelineData: TimelineItem[] = [
  {
    id: "edu-1",
    year: "2011 — 2022",
    title: "100-Maktab",
    subtitle: "Umumiy o'rta ta'lim, Koson tumani",
    description: "Boshlang'ich va o'rta ta'lim davrida matematika va informatika fanlariga chuqur qiziqish uyg'ongan, turli fan olimpiadalarida qatnashgan.",
    type: "education"
  },
  {
    id: "edu-2",
    year: "2022 — 2026",
    title: "Qarshi davlat texnika universiteti",
    subtitle: "Menejment (tarmoqlar va sohalar)",
    description: "Zamonaviy IT-yo'nalishlar, dasturlash asoslari va ma'lumotlar bazasini boshqarish texnologiyalarini chuqur o'rganib, universitetni tamomlaganman.",
    type: "education"
  },
  {
    id: "exp-1",
    year: "2024 — 2026",
    title: "Qashqadaryo viloyat statistika boshqarmasi",
    subtitle: "Ma'lumotlarni tahlil qilish va qayta ishlash bo'yicha mutaxassis",
    description: "Katta hajmdagi ma'lumotlar (Big Data) bilan ishlash, statistik hisobotlarni tayyorlash, ma'lumotlar tozaligi va vizualizatsiyasini ta'minlash.",
    type: "experience"
  },
  {
    id: "exp-2",
    year: "2023 — 2024",
    title: "Freelance Web Developer",
    subtitle: "Mahalliy mijozlar uchun veb-saytlar yaratish va optimallashtirish",
    description: "Foydalanuvchilarga qulay va tezkor veb-yechimlar, admin panellar va landing sahifalarni yaratish va mijozlar talablariga moslashtirish.",
    type: "experience"
  }
];

export const technicalSkills: SkillItem[] = [
  { name: "PYTHON / DATA ANALYSIS", percentage: 90 },
  { name: "HTML5 / CSS3 / TAILWIND", percentage: 95 },
  { name: "JAVASCRIPT / REACT", percentage: 85 },
  { name: "SQL / DATABASE MANAGEMENT", percentage: 80 }
];

export const softSkills: SoftSkillItem[] = [
  {
    id: "soft-1",
    title: "Jamoada ishlash",
    description: "Yuqori darajadagi muloqot va jamoa a'zolari bilan samarali hamkorlik.",
    iconName: "Users"
  },
  {
    id: "soft-2",
    title: "Muammolar yechimi",
    description: "Murakkab texnik yoki tahliliy masalalarga kreativ va tizimli yondashuv.",
    iconName: "Lightbulb"
  },
  {
    id: "soft-3",
    title: "Vaqt boshqaruvi",
    description: "Loyiha bosqichlari va topshiriqlarni belgilangan muddatda yakunlash mahorati.",
    iconName: "Clock"
  },
  {
    id: "soft-4",
    title: "Tillarni bilish",
    description: "O'zbek (ona tili), Rus va Ingliz tillarida muloqot va texnik hujjatlar bilan ishlash.",
    iconName: "Languages"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Statistik Tahlil Platformasi",
    category: "DATA ANALYTICS",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqmyo_-Lz-vZe1m-VmPG6uPQkq4-BOyRmieGonHJJ5fpQHdOH0kjC-N-DX10khkHxEqiEpbNyoNcNbeIgXA6M3a1h-WKwjzh8xg3WS2R7We3Baf2cU4BiCmotDb6uW04KSbqNXFbWmq6KXA-FOh9KD0hCrRLjbYfs5OYtFkGUCRgFp7VoUparJ4lRsPy6h7HR13F8sPp5qvinR9QapFe_6EbB-gmpo58tQ2c3Sm1HZy4WYgCI8speYIw",
    description: "Statistika agentligida ma'lumotlarni interaktiv tahlil qilish, vizuallashtirish va hisobotlar tayyorlash tizimi.",
    techStack: ["Python", "Pandas", "Matplotlib", "SQL", "PowerBI"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    fullDetails: "Ushbu platforma davlat va hududiy statistik ko'rsatkichlarni real vaqt rejimida qayta ishlash va vizuallashtirish uchun ishlab chiqilgan. Ma'lumotlarni tahlil qilish jarayoni Python tili hamda ilg'or data-science kutubxonalari yordamida avtomatlashtirilgan. Tizim orqali yuzlab jadvallarni tahlil qilish, trendlarni aniqlash va hisobotlarni PDF shaklida eksport qilish imkoniyati yaratilgan."
  },
  {
    id: "proj-2",
    title: "E-Commerce Portfolio",
    category: "WEB DEVELOPMENT",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUdgu8nf6jFV_do41ZTYGiqihESj5Nfr6xV2c549CpIC9NTeq2YhVXeeVVyPlKoV6NYjlOpzA-guEUGjNL6OWTgcozDMzU5L9VTZI1-yyEC5HHx7AhcgRPlMedMTikdXTWbjMkaYUXZ4T467IpRFV_bIK_Rxi0q125pZgVE3Fv0ghZw2J6Au7Aa2DXJN0zEcdazaKcoQWVDWfHQWhoqEWkdv6WhTFrTWKsXCLxQwC4aYjIDjeV5Q3XJw",
    description: "Premium darajadagi zamonaviy e-commerce loyihasi. Elegant dizayn va yuqori tezlikda ishlash qobiliyati.",
    techStack: ["React", "Vite", "Tailwind CSS", "Express", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    fullDetails: "Minimalist va premium dizaynga ega elektron tijorat platformasi. Foydalanuvchi tajribasini (UX) maksimal darajaga ko'tarish uchun tezkor yuklanish, interaktiv animatsiyalar va qulay qidiruv tizimi joriy etilgan. To'lov tizimlari va xavfsiz buyurtma berish modullari, shuningdek savatcha va buyurtma tarixi funksiyalari mavjud."
  },
  {
    id: "proj-3",
    title: "Python Bot Tizimi",
    category: "AUTOMATION",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_OZfp-kBRhYOUlVT0pXTNAv6clnzclvfQrYRh-v5hBLAGG4LmaVWUe5CAoXPEu2a-6FoNTOH56SCYqgNJcEGgbdS2QLbVXkVPg2re9mGMEbadGxhzzXQHOygCiSM_Bp6sOaH-tc1ggNYLmfmm2q80KkyqMtYvhu1r2XUHLkZCyh0whya-OrhQMpcmlFZoAQYMVx2NKgx2f_NWfwSRth9WMxxrgKjZGmPYDx3vYRbItH7j_wPtOH96UA",
    description: "Murakkab ma'lumotlar oqimini va hisobotlarni avtomatik ravishda yetkazib beruvchi Telegram botlar tizimi.",
    techStack: ["Python", "Aiogram", "PostgreSQL", "Docker", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    fullDetails: "Kundalik statistika hisobotlarini avtomatlashtirish uchun mo'ljallangan ko'p funksiyali Telegram bot ekotizimi. Tizim PostgreSQL ma'lumotlar bazasi bilan integratsiya qilingan bo'lib, xodimlar va tahlilchilar uchun real vaqt rejimida ma'lumot olish, filtrlash, Excel/PDF shakllarida hisobot yuklash hamda push-bildirishnomalar yuborish imkonini beradi."
  }
];
