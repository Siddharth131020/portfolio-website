import React from 'react';

// import campwithusImg from '@/../public/images/camp-with-us.png';
// import carcatalogImg from '@/../public/images/car-catalog.png';
// import filedriveImg from '@/../public/images/file-drive.png';
// import projectmanagementImg from '@/../public/images/project-management.png';
// import reactfoodImg from '@/../public/images/react-food.png';
// import surgeImg from '@/../public/images/surge.png';
import Sentimeme from '@/../public/images/sentimeme.png';
import ImageClassification from '@/../public/images/image-classification.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Academics',
    id: 'academics',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const academicsData = [
  {
    title: 'Maharaja Agrasen Institute Of Technology(MAIT)',
    location: 'Rohini, Delhi, India',
    description: `B.Tech in Electronics and Communication Engineering (ECE). 
    [Relevant Coursework]: Machine Learning, Probability and Statistics, Supervised and Deep Learning, Unsupervised Learning, Statistical Modeling and Data Analytics, Computational Methods, Programming in C.`,
    icon: React.createElement(BookIcon),
    date: 'Aug 2021 - May 2025',
  },
  {
    title: 'Ramjas School',
    location: 'Anand Parbat, Delhi, India',
    description: 'High School Diploma in Science with Mathematics and Computer Science.',
    icon: React.createElement(BookIcon),
    date: 'July 2018 - July 2021',
  },
] as const;

export const experiencesData = [
  {
    title: 'Intensive Fiscal Services Pvt. Ltd (Internship)',
    location: 'Mumbai, India (Onsite)',
    description: 'Analyst. Contributed to IPO documents, analyzed financial statements, built 10+ financial models, and created investor presentations, including for a ₹650 Cr IPO, highlighting company strengths and strategic growth opportunities.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'January 2025 - April 2025',
  },
  {
    title: 'Coding Blocks (Internship)',
    location: 'New Delhi, India (Hybrid)',
    description: 'Teaching Assistant. Taught DSA to 200+ students through interactive online/offline sessions, developed 100+ worksheets and quizzes, and led 10+ weekly sessions to strengthen conceptual understanding and practical coding skills.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'September 2023 - March 2024',
  },
] as const;

// export const images = {
//   campwithusImg,
//   carcatalogImg,
//   filedriveImg,
//   projectmanagementImg,
//   reactfoodImg,
// };

export const projectsData = [
  {
    title: 'Sentimeme',
    description: `Developed a CLIP-based multimodal model for meme sentiment analysis on 10K samples, achieving an F1 score of 39 and outperforming previous benchmarks using data augmentation, regularization, and learning rate scheduling.`,
    tags: ['Python', 'M2CLIP-SEmoNet', 'HuggingFace', 'Data Augmentation'],
    imageUrl: Sentimeme,
    link: 'https://barks-and-whiskers.onrender.com/',
  },
  {
    title: 'Image Classification',
    description:'Optimized a ResNet-based CNN to classify a custom image dataset with 95% accuracy, reducing error by 40% and training time by 30% through model tuning and pipeline enhancements.',
    tags: ['Python', 'TensorFlow/Keras', 'ResNet Architecture', 'NumPy', 'Pandas'],
    imageUrl: ImageClassification,
    link: 'https://github.com/Siddharth131020/Machine-learning/blob/main/CNN_FineTuning.ipynb',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  // ['TypeScript', '/svgs/typescript-icon.svg'],
  // ['React', '/svgs/react.svg'],
  // ['Next.js', '/svgs/nextjs.svg'],
  ['Python', '/svgs/python-svgrepo-com.svg'],
  ['Scikit-learn', '/svgs/scikit-learn.svg'],
  ['TensorFlow', '/svgs/TensorFlow.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Matplotlib', '/svgs/Matplotlib.svg'],
  ['Pandas', '/svgs/Pandas.svg'],
  // ['Express', '/svgs/express-original.svg'],
  // ['Tailwind', '/svgs/tailwind-css.svg'],
  // ['Framer', '/svgs/framer.svg'],
  // ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  // ['Redux', '/svgs/redux-original.svg'],
  // ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Numpy', '/svgs/numpy-svgrepo-com.svg'],
  ['Financial Modeling', '/svgs/financial-modeling.svg'],
  ['IPO Drafting', '/svgs/ipo-drafting.svg'],
  ['Pitch Decks', '/svgs/pitch-decks.svg'],
  // ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  // ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  // ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Golang', '/svgs/golang.svg'],
  // ['Docker', '/svgs/Docker.svg'],
  // ['Clerk', '/svgs/clerk.svg'],
  // ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  // ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
