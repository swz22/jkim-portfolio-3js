import {
  frontend,
  backend,
  creator,
  web,
  javascript,
  typescript,
  angular,
  reactjs,
  redux,
  postgres,
  mysql,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  bitwise,
  freshk,
  hackreactor,
  tuc,
  bearbnb,
  chatbuddy,
  clonazon,
  crescendo,
  discord,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: frontend,
  },
  {
    title: "Back-End Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "IT Director",
    company_name: "Fresh K International Farmers Market",
    icon: freshk,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Oversaw all IT operations including POS management, network administration, systems security, website optimization, and SEO.",
    ],
  },
  {
    title: "Full-Stack Web Dev Apprentice",
    company_name: "AlphaWorks, Bitwise Industries - Remote",
    icon: bitwise,
    iconBg: "#383E56",
    date: "Mar 2021 - Nov 2022",
    points: [
      "Developed and maintained web applications using modern web technologies. Collaborated with cross-functional teams to ensure the applications were optimized for performance, scalability, and user experience.",
    ],
  },
  {
    title: "Sofware Engineering Immersive",
    company_name: "Hack Reactor / Galvanize",
    icon: hackreactor,
    iconBg: "#383E56",
    date: "Mar 2020 - June 2020",
    points: [
      "Dedicated 900 hours to learning full-stack SWE development. Learned systems design fundamentals, data structures and algorithms, ERD diagram basics, and web optimization.",
    ],
  },
  {
    title: "IT Project Manager",
    company_name: "Textile Unlimited Corp",
    icon: tuc,
    iconBg: "#383E56",
    date: "March 2018 - April 2019",
    points: [
      "Used scrum methodology to manage a team in developing a custom-built ERP application",
    ],
  },
];

const technologies = [
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
    name: "Redux",
    icon: redux,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
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
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Amazon Clone",
    description: "An Amazon clone with authentication and stripe payment processing.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nextauth",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
    ],
    image: clonazon,
    demo_link: "https://zonclone.cloud/",
    source_code_link: "https://github.com/swz22/Amazon-Clone/",
  },
  {
    name: "Bearbnb",
    description: "An Airbnb clone with a calendar and an interactive map.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mapbox",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bearbnb,
    demo_link: "https://bearbnb.vercel.app/",
    source_code_link: "https://github.com/swz22/bearbnb/",
  },
  {
    name: "Crescendo",
    description: "A music discovery and streaming app like Spotify but better!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crescendo,
    demo_link: "https://crescendo-music.netlify.app/",
    source_code_link: "https://github.com/swz22/crescendo/",
  },
  {
    name: "Chatbuddy AI",
    description: "An AI chatbot powered by OpenAI's GPT-3 Text-Davinci-003.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "gpt-3",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: chatbuddy,
    demo_link: "https://chatbuddy-sand.vercel.app/",
    source_code_link: "https://github.com/swz22/chat-buddy-ai/",
  },
  {
    name: "Discord Clone",
    description: "A Discord clone with chat functionality and channel creation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: discord,
    demo_link: "https://chatdsc-520c3.web.app/",
    source_code_link: "https://github.com/swz22/discord_clone/",
  },
];

export { services, experiences, technologies, projects };
