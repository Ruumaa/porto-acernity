import {
  galleryAppTech,
  growhthTech,
  ruumapediaTech,
  spaceXTech,
} from './Techstack';

export const ProjectData = [
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
  {
    title: 'Space-X Schedule',
    desc: 'Simple website displaying SpaceX rocket launch schedules using the SpaceX API for real-time updates. Users can add and edit personal notes, with data stored locally via localStorage for persistence.',
    imgUrl: '/project-card/spaceX.png',
    techstack: spaceXTech,
    url: 'https://spacex-schedule.vercel.app/',
  },
];
