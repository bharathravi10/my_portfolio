// import images
import Hero_person from "./assets/images/Hero/profile.png";
import Java_Script from "./assets/images/Skills/JavaScript.png"
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import nextjs from "./assets/images/Skills/nextjs3.webp";
import github from "./assets/images/Skills/GitHub.png";
import htmlcss from "./assets/images/Skills/htmlcss.jpg";
import mongoDB from "./assets/images/Skills/mongodb.webp";
import mysql from "./assets/images/Skills/mysql.webp";
import nestjs from "./assets/images/Skills/nest.jpeg";
import express from "./assets/images/Skills/express.png";

import services_logo1 from "./assets/images/Services/developer.jpg";
import services_logo2 from "./assets/images/Services/optimization.jpg";
import services_logo3 from "./assets/images/Services/Timer.jpeg";

import project1 from "./assets/images/Projects/img1.jpeg";
import project2 from "./assets/images/Projects/img2.webp";
import person_project from "./assets/images/Projects/profile2.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Web Developer",
    firstName: "Bharath",
    LastName: "Ravi",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "2+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java Script",
        para: "I have strong proficiency in JavaScript",
        logo: Java_Script,
        description:
          "With one year of experience as a Full Stack Developer, I have strong proficiency in JavaScript, including ES6 features and advanced array methods. I am skilled in using libraries and frameworks such as NEXT.js, React.js, NEST.js, and Node.js to build dynamic and efficient web applications.",
      },
      {
        name: "Next.js",
        para: "I am highly skilled in Next.js",
        logo: nextjs,
        description:
          "I am highly skilled in Next.js, with a deep understanding of its features and best practices. My experience includes building dynamic, high-performance applications, leveraging server-side rendering, static site generation, and API routes to create seamless user experiences.",
      },
      {
        name: "React.js",
        para: "I possess advanced expertise in React.js",
        logo: reactjs,
        description:
          "I possess advanced expertise in React.js, with a deep understanding of its features and best practices. My experience includes building dynamic, high-performance applications, leveraging component-based architecture, state management, and hooks to create seamless user experiences.",
      },
      {
        name: "Node.js",
        para: "I excel in Node.js",
        logo: nodejs,
        description:
          "I excel in Node.js runtime environment for executing JavaScript code outside of a web browser development by leveraging my deep understanding of asynchronous programming and event-driven architecture. My unique approach combines robust module design with efficient database integration, ensuring scalable and high-performance applications.",
      },
      {
        name: "Express.js",
        para: "My strength in Express.js",
        logo: express,
        description:
          "My strength in Express.js lies in crafting streamlined web applications through its minimalist and flexible framework. I specialize in creating RESTful APIs and optimizing middleware to enhance performance and maintainability. With a keen eye for routing and middleware configuration, I deliver secure and scalable solutions tailored to project requirements.",
      },
      {
        name: "Nest.js",
        para: "I stand out in Nest.js development",
        logo: nestjs,
        description:
          "I stand out in Nest.js development by harnessing its powerful combination of TypeScript and Angular-inspired structure. My expertise lies in crafting scalable APIs with modular architecture, leveraging dependency injection and decorators for efficient code organization. I excel in integrating ORM libraries like TypeORM and ensuring robust testing and documentation practices, delivering maintainable and high-performance backend solutions.",
      },
      {
        name: "MongoDB",
        para: "I specialize in MongoDB development",
        logo: mongoDB,
        description:
          "I specialize in MongoDB development, leveraging its flexible document-based structure to design efficient and scalable database solutions. With expertise in schema design, indexing strategies, and aggregation pipelines, I optimize performance for diverse data models. I excel in integrating MongoDB with Node.js applications, ensuring seamless data access and manipulation for robust backend implementations.",
      },
      {
        name: "MySQL",
        para: "I excel in MySQL development",
        logo: mysql,
        description:
          "I excel in MySQL development, harnessing its relational database capabilities to design robust and scalable data solutions. My expertise spans schema design, query optimization, and transaction management, ensuring efficient data storage and retrieval. I specialize in integrating MySQL with Node.js applications, leveraging ORM frameworks like Prisma for streamlined database operations and maintaining data integrity across complex systems.",
      },
      {
        name: "GitHub",
        para: "I specialize in GitHub for version control",
        logo: github,
        description:
          "I specialize in GitHub for version control and collaborative software development, leveraging its robust features for efficient code management and team collaboration. With expertise in repository management, branching strategies, and pull request workflows, I ensure seamless integration and deployment pipelines. I excel in leveraging GitHub's tools for project documentation, issue tracking, and continuous integration, ensuring code quality and project transparency.",
      },
      {
        name: "Html & Css",
        para: "I specialize in HTML and CSS for building responsive",
        logo: htmlcss,
        description:
          "I specialize in HTML and CSS for building responsive and visually appealing web interfaces. With a keen eye for design and accessibility standards, I craft clean and semantic HTML structures while leveraging CSS for styling and layout. My expertise includes CSS preprocessors like Sass for efficient styling management and CSS frameworks like Bootstrap for rapid prototyping. I ensure cross-browser compatibility and usability, deliveri",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Full Stack Web Development",
        para: "Providing expertise in both frontend and backend development. This involves designing and implementing user interfaces (UI) that are visually appealing and responsive using technologies like HTML, CSS, and JavaScript frameworks such as React.js,Next.js. On the backend, using frameworks like Node.js,Express.js,Nest.js, ensuring server-side logic, database integration, and API development are robust and efficient.",
        logo: services_logo1,
      },
      {
        title: "Optimization",
        para: "We ensure that all code is clean, well-structured, and adheres to industry best practices, prioritizing performance optimization to deliver fast, efficient, and responsive user experiences. Our applications are designed to be accessible to all users, including those with disabilities, by adhering to web accessibility standards and ensuring compatibility with assistive technologies. Additionally, we implement best practices for SEO to improve visibility and search engine ranking, enhancing the overall quality and reach of the application.",
        logo: services_logo2,
      },
      {
        title: "Timely Delivery",
        para: "Committing to delivering projects within agreed timelines and budgets. This involves effective project management, setting realistic milestones, tracking progress, and communicating proactively with stakeholders to manage expectations and ensure timely completion.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "College Suggest",
        image: project1,
        link: "https://collegesuggest.com/",
      },
      {
        title: "NEET.Guide",
        image: project2,
        link: "",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Looking for a skilled full stack web developer? I’m here to bring your vision to life with high-quality, efficient, and accessible web solutions. With expertise in both frontend and backend development, I ensure your project is optimized for performance and search engines. Ready to start? Contact me today to discuss how we can make your project a success.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "bharathravi01121999@gmail.com",
        icon: GrMail,
        link: "mailto:bharathravi01121999@gmail.com",
      },
      {
        text: "+91 9087042336",
        icon: MdCall,
        link: "https://wa.me/9087042336",
      },
      {
        text: "_bh_ar_th",
        icon: BsInstagram,
        link: "https://www.instagram.com/_bh_ar_th/",
      },
    ],
  },
};
