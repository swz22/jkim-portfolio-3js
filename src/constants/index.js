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
    icon: javascript,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Stuff",
      "Stuff",
      "Stuff",
      "Stuff",
    ],
  },
  {
    title: "Title",
    company_name: "Company Name",
    icon: javascript,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Stuff",
      "Stuff",
      "Stuff",
      "Stuff", 
    ],
  },
  {
    title: "Title",
    company_name: "Company Name",
    icon: javascript,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Stuff",
      "Stuff",
      "Stuff",
      "Stuff",  
    ],
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

export { services, experiences, technologies };