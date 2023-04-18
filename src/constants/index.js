import {
  frontend,
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
  docker,
  threejs,
  hackreactor,
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
    title: "Title",
    company_name: "Company Name",
    icon: hackreactor,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: ["Stuff", "Stuff", "Stuff", "Stuff"],
  },
  {
    title: "Title",
    company_name: "Company Name",
    icon: hackreactor,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: ["Stuff", "Stuff", "Stuff", "Stuff"],
  },
  {
    title: "Title",
    company_name: "Company Name",
    icon: hackreactor,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: ["Stuff", "Stuff", "Stuff", "Stuff"],
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
        name: "react",
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
        name: "react",
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
    description: "An AI chatbot powered by OpenAI's GPT-3.",
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
    description: "A Discord clone with channel creation and chat functionality.",
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
