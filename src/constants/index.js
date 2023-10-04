import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "C++",
    icon: web,
  },
  {
    title: "NETWORK ENGINEER",
    icon: mobile,
  },
  {
    title: "WEBSITE DEVELOPER",
    icon: backend,
  },
  {
    title: "ANDROID PROGRAMMING",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Career Enhancement Programme",
    company_name: "TCS",
    icon: starbucks,
    iconBg: "#383E56",
    date: " September 2023 - JANUARY 2024 ",
    points: [
      "TOPICS I HAVE COVER.",
      "This is a complete packaged course on soft skills, which aims at enhancing the personality development skills.",
      "The  course covers basic interpersonal skills, non-verbal, verbal and written communication, interview attending skills and business & social etiquette.",
      "This programme  improve my interpersonal, social and communication skills, and in the process empower you as an individual.",
    ],
  },
  {
    title: "C++",
    company_name: "SCALER",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "OCTOBER 2023 - FEBUARY 2024",
    points: [
      "Developing and maintaining applications using C++ and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing Computer Applications.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "DIMENTA",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I had the opportunity to apply my internet programming skills to create a website for Dimenta,", 
      "a company in the architecture industry. The website showcases their architectural projects, services,",
      "and provides an interactive platform for potential clients to explore their work. ",
      "This project allowed me to gain practical experience in web development and contribute to Dimenta's online presence.",
    ],
  },
  {
    title: "A SMALL STARTUP",
    company_name: "STAR X AND INNOVATIONS",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "I'm currently involved in a small startup that caters to students pursuing diploma,",
      "degree, or college-level technical projects." ,
      "Our mission is to provide comprehensive support by taking on these projects, implementing them, and delivering" ,
      "them along with detailed reports to students. Our services not only help students complete their academic assignments",
      "successfully but also provide them with valuable insights and learning experiences. This venture aligns with my passion ",
      "for entrepreneurship and my technical knowledge, enabling us to bridge the gap between academia and practical application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but NAVISH proved me wrong.",
    name: "Sanjana",
    designation: "CEO",
    company: "SANJANA ENTERPRISE",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like NAVISH does.",
    name: "HITESH",
    designation: "CTO",
    company: "HITESH AND CO",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After NAVISH optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "RAFE",
    designation: "CEO",
    company: "CHINI & CO",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "INFORMATION TECHNOLOGY",
    description:
    "In my Diploma in Information Technology, I've delved into a comprehensive range of technical subjects. I've mastered programming languages like C++, C, and Python, honed my web development skills with HTML, and even ventured into mobile app development using Android Studio. These skills have equipped me with a strong foundation in IT that complements my ongoing B.E. degree.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "B.E IN INFORMATION TECHNOLOGY",
    description:
      "My B.E. in IT degree has predominantly focused on networking and web development, where I've gained expertise in technologies like React and JavaScript for creating dynamic websites. Additionally I've delved into various programming languages, enriching my skill set to excel in the field of Information Technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "HONOURS IN CYBERSECURITY",
    description:
      "My honors degree in Cybersecurity, obtained after completing my B.E., has significantly enhanced my security skills. This specialized program has deepened my understanding of cybersecurity principles, threat mitigation strategies, and ethical hacking techniques, making me well-equipped to tackle the evolving challenges in the digital realm.",
    tags: [
      {
        name: "SECURITY",
        color: "blue-text-gradient",
      },
      {
        name: "CIPHER",
        color: "green-text-gradient",
      },
      {
        name: "ETHICAL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
