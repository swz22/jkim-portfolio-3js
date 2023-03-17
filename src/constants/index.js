import { frontend, backend, creator, web, javascript } from "../assets";

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

export { services, experiences };