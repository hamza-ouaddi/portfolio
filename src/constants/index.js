//Logos
import logoDark from "../assets/logo-dark.png";
import logoWhite from "../assets/logo-white.png";
import logoSymbolDark from "../assets/logo-icon-dark.png";

//Navbar Menu Icons
import menuIcon from "../assets/menu.svg";
import menuIconDark from "../assets/menu-dark.svg";
import closeIcon from "../assets/close.svg";
import closeIconDark from "../assets/close-dark.svg";

//Services Icons
import code from "../assets/coding.svg";
import uiux from "../assets/ui-ux.svg";
import design from "../assets/design.svg";

//Works Pictures
import minty from "../assets/Portfolio/minty.png";
import architectWebsite from "../assets/Portfolio/architect-website.png";
import networkWebsite from "../assets/Portfolio/network-website.png";
import newsletterSignup from "../assets/Portfolio/newsletter-signup.png";
import todolist from "../assets/Portfolio/to-do-list.png";
import blogWebsite from "../assets/Portfolio/blog-website.png";
import keeperApp from "../assets/Portfolio/keeper-app.png";
import weatherApp from "../assets/Portfolio/weather-app.png";
import secretlySocialNetwork from "../assets/Portfolio/secretly-social-network.png";
import stockManagementSystem from "../assets/Portfolio/stock-management-system.png";

//Services
export const services = [
  {
    id: "service-1",
    icon: code,
    title: "Development",
    description:
      "Expert frontend and backend development to transform ideas into functional applications.",
    skills: [
      "Front-end Development",
      "Back-end Development",
      "Database Management",
    ],
  },

  {
    id: "service-2",
    icon: uiux,
    title: "UI/UX",
    description:
      "Creating visually captivating and user-friendly interfaces for seamless digital experiences.",
    skills: ["Web Apps", "Mobile Apps"],
  },

  {
    id: "service-3",
    icon: design,
    title: "Graphic design",
    description:
      "Designing eye-catching visuals for logos, icons, and marketing materials to leave a lasting impression.",
    skills: ["Branding", "Marketing Materials", "3D Design"],
  },
];

//Works
export const works = [
  {
    id: "10",
    image: stockManagementSystem,
    title: "Stock Management System",
    description:
      "The Stock Management System is a C# (.Net ) and SQL project designed to streamline stock management processes. ",
    technologies: ["C#", "SQL"],
    link: "https://github.com/hamza-ouaddi/Stock-Management-System",
    repo: "https://github.com/hamza-ouaddi/Stock-Management-System",
  },

  {
    id: "9",
    image: secretlySocialNetwork,
    title: "Secretly Social Network",
    description:
      "Secretly, a social network website where people can post secretly. Built using EJS, Node.js, Express.js, MongoDB (Mongoose).",
    technologies: ["EJS", "Node.js", "Express.js", "MongoDB"],
    link: "https://secretly-social-network.onrender.com/",
    repo: "https://github.com/hamza-ouaddi/Secretly-Social-Network",
  },

  {
    id: "8",
    image: keeperApp,
    title: "Keeper App",
    description:
      "Keeper App, is a website where the user can write and post notes. The project was built using React and Material UI. ",
    technologies: ["React", "Material UI"],
    link: "https://keeper-app-one-iota.vercel.app/",
    repo: "https://github.com/hamza-ouaddi/keeper-app",
  },

  {
    id: "7",
    image: todolist,
    title: "To Do List",
    description:
      "A To Do List Website, The user can have a daily list that shows today's date, or customize a list with a title. As well as cross out and delete items.  ",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://to-do-list-4fft.onrender.com",
    repo: "https://github.com/hamza-ouaddi/To-Do-List",
  },

  {
    id: "6",
    image: weatherApp,
    title: "Weather App",
    description:
      "A Weather app utilizing OpenWeatherMap API for specific city weather info. Users can either input city name or enable location detection",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://hamza-ouaddi.github.io/Weather-App/",
    repo: "https://github.com/hamza-ouaddi/Weather-App",
  },
  {
    id: "5",
    image: blogWebsite,
    title: "Blog Website",
    description: "a Blog Website project, to create, read, and delete a post.",
    technologies: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://hamza-ouaddi.github.io/Weather-App/",
    repo: "https://github.com/hamza-ouaddi/Blog-Website",
  },

  {
    id: "4",
    image: newsletterSignup,
    title: "Newsletter Signup",
    description:
      "A Newsletter signup page that is linked with Mailchimp API, can sync email activities, and manage audiences and campaigns.",
    technologies: ["HTML", "CSS", "Node.js", "Express.js"],
    link: "https://newsletter-signup-puce.vercel.app/",
    repo: "https://github.com/hamza-ouaddi/Newsletter-Signup",
  },

  {
    id: "3",
    image: networkWebsite,
    title: "Network Website",
    description: "A social media service landing webpage.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://hamza-ouaddi.github.io/Network/",
    repo: "https://github.com/hamza-ouaddi/Network",
  },

  {
    id: "2",
    image: architectWebsite,
    title: "Architect Portfolio",
    description: "A landing webpage for Architect as a portfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://hamza-ouaddi.github.io/Caroline-Aubrey-Architect-Portfolio/",
    repo: "https://github.com/hamza-ouaddi/Caroline-Aubrey-Architect-Portfolio",
  },

  {
    id: "1",
    image: minty,
    title: "Minty",
    description: "Minty, is an application website for Tea lovers.",
    technologies: ["HTML", "CSS", "Bootstrap 5"],
    link: "https://hamza-ouaddi.github.io/Minty/",
    repo: "https://github.com/hamza-ouaddi/Minty",
  },
];

export {
  logoDark,
  logoWhite,
  logoSymbolDark,
  menuIcon,
  menuIconDark,
  closeIcon,
  closeIconDark,
};
