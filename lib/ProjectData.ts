import {
  galleryAppTech,
  growhthTech,
  portofolioTech,
  ruumapediaTech,
} from './Techstack';

export const ProjectData = [
  {
    title: 'Portofolio By Ruumaa',
    desc: 'A dynamic and interactive portfolio web application designed to showcase creativity and technical expertise. It features smooth animations, seamless scrolling, and a responsive design.',
    imgUrl: '/project-card/portofolio.png',
    techstack: portofolioTech,
    url: 'https://portfolio-by-ruumaa.vercel.app/',
  },
  {
    title: 'Ruumapedia',
    desc: 'A responsive ecommerce site with Stripe integration for seamless checkouts, powered by Sanity for efficient product data management.',
    imgUrl: '/project-card/ruumapedia.png',
    techstack: ruumapediaTech,
    url: 'https://ruumapedia.vercel.app/',
  },
  {
    title: 'Gallery App',
    desc: ' Full-stack web application with image upload, deletion, and download capabilities, featuring a responsive UI. The app includes a robust authentication system using NextAuth for enhanced security.',
    imgUrl: '/project-card/gallery-app.png',
    techstack: galleryAppTech,
    url: 'https://gallery-app-v2.vercel.app/',
  },
  {
    title: 'Growth - Learning',
    desc: 'A website under development helps job seekers secure their desired careers. It integrates Midtrans for payment processing and uses Nodemailer to send products automatically via webhooks triggered by Midtrans.',
    imgUrl: '/project-card/growth.png',
    techstack: growhthTech,
    url: 'https://www.growth-learning.com/',
  },
];
