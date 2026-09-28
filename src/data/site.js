import { image } from './images.js';

export const SITE_URL = 'https://asifmohamed-portfolio.netlify.app';

export const person = {
  name: 'Asif Mohamed Mohideen',
  heroName: 'ASIF MOHAMED',
  role: 'Web Developer & Designer',
  email: 'asifmohamed.r@gmail.com',
  phone: '+919940348954',
  phoneDisplay: '9940348954',
  resume: '/resume/Asif-Mohamed-Mohideen-Resume.pdf',
};

export const social = {
  linkedin: 'https://www.linkedin.com/in/asif-mohamed-mohideen-868692312/',
  instagram: 'https://www.instagram.com/___.a.s.i.f.___?igsh=MXZvY2Q4NTdyd2NyZw==',
  github: 'https://github.com/Asifmohamed007',
  whatsapp: 'https://wa.me/919940348954',
};

// Words that rotate after "I am a" in the hero.
export const headlineWords = ['Developer.', 'Frontender.', 'Designer.', 'Fresher.'];

// One-page navigation. `id` must match the section id on the page.
export const navItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'features', label: 'About', icon: 'briefcase' },
  { id: 'resume', label: 'Resume', icon: 'users' },
  { id: 'blog', label: 'blog', icon: 'image' },
  { id: 'contacts', label: 'Contact', icon: 'message-circle' },
];

export const logos = {
  large: image('logo/logo-large.webp'),
  small: image('logo/logo-small.webp'),
};

export const contactImage = image('contact/contact.webp');
