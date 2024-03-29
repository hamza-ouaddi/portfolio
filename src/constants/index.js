import {
  logoDark,
  logoWhite,
  logoSymbolDark,
  menuIcon,
  menuIconDark,
  closeIcon,
  closeIconDark,
  code,
  uiux,
  design,
  minty,
  architectWebsite,
  networkWebsite,
  newsletterSignup,
  todolist,
  blogWebsite,
  keeperApp,
  weatherApp,
  secretlySocialNetwork,
  stockManagementSystem,
  colab,
  atlasEstate,
  techhub,
  colabUI,
  schoolWebpageUI,
  atlasEstateui,
  issueTrackerUI,
  personalBranding,
  mbouaBranding,
  hopeBranding,
  creativeEyeBranding,
} from "./images";

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
    id: "graphic-design-04",
    image: creativeEyeBranding,
    title: "CreativEye Studio Brand Identity",
    description: "Brand Identity for Creative Studio.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://dribbble.com/shots/22272622-CreativEye-Studio-Brand-Identity",
    category: "Graphic Design",
  },
  {
    id: "graphic-design-03",
    image: hopeBranding,
    title: "Hope Advertising Agency Brand",
    description: "Branding for Marketing Agency.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://dribbble.com/shots/22008588-Hope-Advertising-Agency-Brand",
    category: "Graphic Design",
  },
  {
    id: "graphic-design-02",
    image: mbouaBranding,
    title: "M'BOUA | Natural mineral water brand",
    description: "Branding for Natural mineral water company.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://dribbble.com/shots/22008549-M-BOUA-Natural-mineral-water-brand",
    category: "Graphic Design",
  },
  {
    id: "graphic-design-01",
    image: personalBranding,
    title: "Personal Branding",
    description: "Personal Hamza Ouâddi Branding.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://www.behance.net/gallery/148307495/Personal-Branding",
    category: "Graphic Design",
  },
  {
    id: "ui-ux-4",
    image: issueTrackerUI,
    title: "Issue Tracker Dashboard UI Design",
    description: "A web app UI design for Issue tracking and management.",
    technologies: ["Figma"],
    link: "https://dribbble.com/shots/23573917-Issue-Tracker-Dashboard-UI-Design",
    category: "UI/UX",
  },
  {
    id: "ui-ux-3",
    image: atlasEstateui,
    title: "Atlas Estate Website Design",
    description: "UI web design for a real estate platform.",
    technologies: ["Figma"],
    link: "https://dribbble.com/shots/23136344-Atlas-Estate-Website-Design",
    category: "UI/UX",
  },
  {
    id: "ui-ux-02",
    image: schoolWebpageUI,
    title: "School Homepage UI Concept",
    description: "school UI webpage design.",
    technologies: ["Figma"],
    link: "https://dribbble.com/shots/23081744-School-Homepage-UI-Concept",
    category: "UI/UX",
  },
  {
    id: "ui-ux-01",
    image: colabUI,
    title: "CoLab",
    description:
      "CoLab, a platform for discovering gigs and job offers, built with PHP Laravel and Tailwind CSS.",
    technologies: ["Figma"],
    link: "https://dribbble.com/shots/22505281-Colab-Post-Discover-Job-Offers-UI-Web-Design",
    category: "UI/UX",
  },
  {
    id: "dev-13",
    image: techhub,
    title: "TechHub | IT Community Platform",
    description:
      "TechHub is a community platform for IT enthusiasts. Built with Next.js, MongoDB, Shadcn UI, Tailwind CSS, and Clerk for authentication and user management.",
    technologies: ["Next.js", "MongoDB", "Clerk", "Shadcn UI", "Tailwind CSS"],
    link: "https://tech-hub-tau.vercel.app/",
    repo: "https://github.com/hamza-ouaddi/tech-hub",
    category: "Development",
  },
  {
    id: "dev-12",
    image: atlasEstate,
    title: "Atlas Estate",
    description:
      "Atlas Estate, a real estate platform built with React, Node.js with Express.js, and MongoDB with Prisma. Tailwind CSS and Mantine UI for styling. And Auth0 for authentication. ",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Auth0",
      "Tailwind CSS",
      "Mantine UI",
    ],
    link: "https://github.com/hamza-ouaddi/atlas-estate-website",
    repo: "https://github.com/hamza-ouaddi/atlas-estate-website",
    category: "Development",
  },
  {
    id: "dev-11",
    image: colab,
    title: "CoLab",
    description:
      "CoLab, a platform for discovering gigs and job offers, built with PHP Laravel and Tailwind CSS.",
    technologies: ["PHP Laravel", "Tailwind CSS"],
    link: "https://github.com/hamza-ouaddi/CoLab",
    repo: "https://github.com/hamza-ouaddi/CoLab",
    category: "Development",
  },

  {
    id: "dev-10",
    image: stockManagementSystem,
    title: "Stock Management System",
    description:
      "The Stock Management System is a C# (.Net ) and SQL project designed to streamline stock management processes.",
    technologies: ["C#", "SQL"],
    link: "https://github.com/hamza-ouaddi/Stock-Management-System",
    repo: "https://github.com/hamza-ouaddi/Stock-Management-System",
    category: "Development",
  },

  {
    id: "dev-09",
    image: secretlySocialNetwork,
    title: "Secretly Social Network",
    description:
      "Secretly, a social network website where people can post secretly. Built using EJS, Node.js, Express.js, MongoDB (Mongoose).",
    technologies: ["EJS", "Node.js", "Express.js", "MongoDB"],
    link: "https://secretly-social-network.onrender.com/",
    repo: "https://github.com/hamza-ouaddi/Secretly-Social-Network",
    category: "Development",
  },

  {
    id: "dev-08",
    image: keeperApp,
    title: "Keeper App",
    description:
      "Keeper App, is a website where the user can write and post notes. The project was built using React and Material UI. ",
    technologies: ["React", "Material UI"],
    link: "https://keeper-app-one-iota.vercel.app/",
    repo: "https://github.com/hamza-ouaddi/keeper-app",
    category: "Development",
  },

  {
    id: "dev-07",
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
    category: "Development",
  },

  {
    id: "dev-06",
    image: weatherApp,
    title: "Weather App",
    description:
      "A Weather app utilizing OpenWeatherMap API for specific city weather info. Users can either input city name or enable location detection",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://hamza-ouaddi.github.io/Weather-App/",
    repo: "https://github.com/hamza-ouaddi/Weather-App",
    category: "Development",
  },
  {
    id: "dev-05",
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
    category: "Development",
  },

  {
    id: "dev-04",
    image: newsletterSignup,
    title: "Newsletter Signup",
    description:
      "A Newsletter signup page that is linked with Mailchimp API, can sync email activities, and manage audiences and campaigns.",
    technologies: ["HTML", "CSS", "Node.js", "Express.js"],
    link: "https://newsletter-signup-puce.vercel.app/",
    repo: "https://github.com/hamza-ouaddi/Newsletter-Signup",
    category: "Development",
  },

  {
    id: "dev-03",
    image: networkWebsite,
    title: "Network Website",
    description: "A social media service landing webpage.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://hamza-ouaddi.github.io/Network/",
    repo: "https://github.com/hamza-ouaddi/Network",
    category: "Development",
  },

  {
    id: "dev-02",
    image: architectWebsite,
    title: "Architect Portfolio",
    description: "A landing webpage for Architect as a portfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://hamza-ouaddi.github.io/Caroline-Aubrey-Architect-Portfolio/",
    repo: "https://github.com/hamza-ouaddi/Caroline-Aubrey-Architect-Portfolio",
    category: "Development",
  },

  {
    id: "dev-01",
    image: minty,
    title: "Minty",
    description: "Minty, is an application website for Tea lovers.",
    technologies: ["HTML", "CSS", "Bootstrap 5"],
    link: "https://hamza-ouaddi.github.io/Minty/",
    repo: "https://github.com/hamza-ouaddi/Minty",
    category: "Development",
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
