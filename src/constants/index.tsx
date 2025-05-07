import {
  BlogType,
  EducationType,
  PortfolioType,
  ServiceCategoryType,
  ServiceType,
  SkillsType,
} from "@/types";
import {
  Building2,
  Cloud,
  CloudCog,
  CloudUpload,
  Code2,
  Database,
  DatabaseZap,
  Figma,
  FileCode2,
  Globe,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  LifeBuoy,
  MonitorSmartphone,
  PlugZap,
  Puzzle,
  RefreshCcw,
  Server,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Users,
  Wrench,
} from "lucide-react";

// Service Constant
const services: ServiceType[] = [
  {
    title: "Figma Web Application",
    shortDes: "Convert Figma designs into fully responsive web applications.",
    longDes:
      "Transform your Figma UI/UX designs into fully responsive and dynamic web applications, ensuring pixel-perfect accuracy, performance, and seamless user experience across all devices.",
    icon: <Figma size={40} />,
    category: ["Frontend Services", "Full Stack Solutions"],
  },
  {
    title: "Front-end Web Application",
    shortDes:
      "Build high-quality front-end applications with modern frameworks.",
    longDes:
      "Develop engaging front-end applications with clean code, modern frameworks like React and Next.js, and best practices in performance, accessibility, and SEO.",
    icon: <LayoutDashboard size={40} />,
    category: ["Frontend Services"],
  },
  {
    title: "Landing Page Design",
    shortDes:
      "Design high-converting landing pages for businesses and products.",
    longDes:
      "Create visually stunning and goal-driven landing pages designed to capture leads, promote products, or launch new services, combining design excellence with strategic call-to-actions.",
    icon: <Globe size={40} />,
    category: ["Frontend Services"],
  },
  {
    title: "HTML Template Design",
    shortDes: "Develop responsive and customizable HTML templates.",
    longDes:
      "Design clean, customizable HTML templates with responsive layouts, perfect for businesses, portfolios, blogs, and e-commerce projects, ready to be adapted and launched quickly.",
    icon: <FileCode2 size={40} />,
    category: ["Frontend Services"],
  },
  {
    title: "Website Redesign and Optimization",
    shortDes: "Modernize and optimize your existing website.",
    longDes:
      "Revamp outdated websites with a fresh, modern design, improved UX/UI, mobile responsiveness, faster loading speeds, and SEO best practices to deliver better engagement and results.",
    icon: <RefreshCcw size={40} />,
    category: ["Frontend Services", "Maintenance and Support"],
  },
  {
    title: "E-commerce Development",
    shortDes: "Build secure and user-friendly e-commerce platforms.",
    longDes:
      "Design and develop secure, user-friendly e-commerce platforms with features like product catalogs, payment integration, order management, and an intuitive shopping experience to boost your online sales.",
    icon: <ShoppingCart size={40} />,
    category: ["Frontend Services", "Full Stack Solutions"],
  },
  {
    title: "Business Web Application",
    shortDes: "Create professional web applications for businesses.",
    longDes:
      "Design tailored business applications that enhance your digital presence, streamline operations, and support your company’s goals with scalable, secure, and feature-rich web solutions.",
    icon: <Building2 size={40} />,
    category: ["Frontend Services", "Full Stack Solutions"],
  },
  {
    title: "Rest API Development",
    shortDes: "Build secure and scalable REST APIs.",
    longDes:
      "Design and implement REST APIs that allow seamless communication between the frontend and backend, ensuring security, scalability, and easy third-party integration.",
    icon: <CloudCog size={40} />,
    category: ["Backend Services"],
  },
  {
    title: "Express & Node.js Application",
    shortDes: "Develop fast and scalable backend applications.",
    longDes:
      "Develop high-performance backend solutions with Node.js and Express, ideal for real-time applications, RESTful APIs, and microservices, optimized for speed and scalability.",
    icon: <Server size={40} />,
    category: ["Backend Services"],
  },
  {
    title: "Backend for Web Applications",
    shortDes: "Create robust server-side architectures.",
    longDes:
      "Create secure, scalable server-side architectures with efficient database management, user authentication, and business logic that powers complex web applications.",
    icon: <Database size={40} />,
    category: ["Backend Services"],
  },
  {
    title: "Authentication and Authorization Systems",
    shortDes: "Implement secure user authentication systems.",
    longDes:
      "Implement reliable authentication and authorization solutions including user registration, login, role-based access control, and secure session management using JWT, OAuth, or other industry standards.",
    icon: <ShieldCheck size={40} />,
    category: ["Backend Services"],
  },
  {
    title: "Database Design and Management (NoSQL)",
    shortDes: "Design scalable NoSQL databases.",
    longDes:
      "Set up scalable NoSQL databases like MongoDB, optimized for performance, flexible data structures, and real-time data handling, perfectly suited for modern web and mobile applications.",
    icon: <DatabaseZap size={40} />,
    category: ["Backend Services"],
  },
  {
    title: "Admin Panel Development",
    shortDes: "Build intuitive admin dashboards.",
    longDes:
      "Design intuitive and secure admin panels that allow easy management of content, users, products, orders, and site configurations, helping businesses operate more efficiently.",
    icon: <LayoutGrid size={40} />,
    category: ["Backend Services"],
  },
  {
    title: "API Integration Services",
    shortDes: "Integrate external APIs into your application.",
    longDes:
      "Integrate external APIs like payment gateways, CRMs, social media, analytics tools, and more into your applications, enhancing functionality and streamlining user experience.",
    icon: <PlugZap size={40} />,
    category: ["Backend Services"],
  },
  {
    title: "Third-Party API Integration",
    shortDes: "Connect your application with third-party services.",
    longDes:
      "Connect your systems to essential third-party services — from payment processors to CRM systems — allowing your application to extend its functionality and deliver a more powerful user experience.",
    icon: <Puzzle size={40} />,
    category: ["Backend Services"],
  },
  {
    title: "SAAS Web Application",
    shortDes: "Develop complete SaaS platforms.",
    longDes:
      "Build complete SaaS (Software as a Service) web applications with robust backend systems, multi-tenant architecture, and scalable infrastructure, delivering seamless service to your users.",
    icon: <Cloud size={40} />,
    category: ["Full Stack Solutions"],
  },
  {
    title: "Custom Web Application Development",
    shortDes: "Develop custom full-stack web solutions.",
    longDes:
      "Build bespoke web applications tailored to your specific business requirements, combining high-quality frontend and backend development for a seamless digital experience.",
    icon: <Code2 size={40} />,
    category: ["Full Stack Solutions"],
  },
  {
    title: "Website Maintenance and Support",
    shortDes: "Maintain, update, and secure your website.",
    longDes:
      "Offer ongoing support services, including content updates, performance monitoring, security patches, and bug fixing, ensuring your website remains reliable, secure, and up-to-date.",
    icon: <Wrench size={40} />,
    category: ["Maintenance and Support"],
  },
  {
    title: "Cloud Deployment and Hosting",
    shortDes: "Deploy applications to reliable cloud platforms.",
    longDes:
      "Manage and deploy applications on cloud services like AWS, Vercel, DigitalOcean, or Firebase, ensuring high availability, performance, and seamless scaling as your project grows.",
    icon: <CloudUpload size={40} />,
    category: ["Maintenance and Support"],
  },
];

// Service Category Constant
const serviceCategories: ServiceCategoryType[] = [
  {
    title: "Frontend Services",
    shortDes:
      "Building responsive, dynamic, and beautiful interfaces with modern web technologies.",
    icon: <MonitorSmartphone size={38} />,
  },
  {
    title: "Backend Services",
    shortDes:
      "Creating secure, scalable server-side applications, APIs, and databases.",
    icon: <ServerCog size={38} />,
  },
  {
    title: "Full Stack Solutions",
    shortDes:
      "Delivering complete web solutions by combining powerful front-end and back-end technologies.",
    icon: <Layers size={38} />,
  },
  {
    title: "Maintenance and Support",
    shortDes:
      "Ensuring your websites stay updated, optimized, secure, and performing at their best.",
    icon: <LifeBuoy size={38} />,
  },
];

// Skills Constant
const skills: SkillsType[] = [
  {
    category: "Frontend Development",
    icon: <Code2 size={22} />,
    skills: [
      { name: "HTML & CSS", percent: 95 },
      { name: "JavaScript", percent: 85 },
      { name: "Tailwind CSS & Bootstrap", percent: 90 },
      { name: "React.js", percent: 80 },
      { name: "Redux & Zustand", percent: 90 },
      { name: "Next.js", percent: 80 },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server size={22} />,
    skills: [
      { name: "Node.js", percent: 85 },
      { name: "Express.js", percent: 80 },
      { name: "MongoDB & Mongoose", percent: 80 },
      { name: "JWT & bcrypt", percent: 85 },
      { name: "RESTful API", percent: 85 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: <Wrench size={22} />,
    skills: [
      { name: "Git & GitHub", percent: 90 },
      { name: "VS Code, WebStorm", percent: 95 },
      { name: "Postman & Thunder Client", percent: 85 },
      { name: "MongoDB Atlas", percent: 90 },
      { name: "Vercel, Netlify, Render", percent: 80 },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Users size={22} />,
    skills: [
      { name: "Problem-Solving", percent: 60 },
      { name: "Teamwork", percent: 85 },
      { name: "Continuous Learning", percent: 95 },
      { name: "Communication", percent: 80 },
    ],
  },
];

// Education Constant
const education: EducationType = {
  academicEducation: [
    {
      id: 1,
      instituteName: "Govt. Tolaram College and University",
      session: "2023-2024",
      duration: "4 Years (Expected - 2028)",
      department: "English",
      subject_group: "BA Hon's",
      certificateName: "Bachelors of Art's",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at dignissimos aliquid praesentium, harum mollitia laborum nulla consequatur accusantium natus!",
    },
    {
      id: 2,
      instituteName: "Sanarpar Rowshan Ara Degree College",
      session: "2021-2022",
      subject_group: "Business Studies",
      certificateName: "HSC (Higher Secondary Certificate)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at dignissimos aliquid praesentium, harum mollitia laborum nulla consequatur accusantium natus!",
    },
    {
      id: 3,
      instituteName: "Alhaz Abdur Razzak Islamia High School",
      session: "2019-2020",
      subject_group: "Business Studies",
      certificateName: "SSC (Secondary School Certificate)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at dignissimos aliquid praesentium, harum mollitia laborum nulla consequatur accusantium natus!",
    },
  ],
  professionalCourse: [
    {
      id: 1,
      provider: "Ostad",
      duration: "1 Years",
      courseName: "Full Stack Web Development with JavaScript (MERN)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at dignissimos aliquid praesentium, harum mollitia laborum nulla consequatur accusantium natus!",
    },
    {
      id: 2,
      provider: "Learn With Summit",
      duration: "2 Months",
      courseName: "Think in a Redux way",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at dignissimos aliquid praesentium, harum mollitia laborum nulla consequatur accusantium natus!",
    },
  ],
};

// Portfolio Constant
const portfolio: PortfolioType[] = [
  {
    categoryName: "Frontend Services",
    projects: [
      {
        name: "Responsive Landing Page",
        description:
          "A modern, mobile-first product landing page with animations and form handling.",
        technologyUsed: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/frontend-landing",
      },
      {
        name: "Portfolio Website",
        description:
          "A personal portfolio built with React and styled-components.",
        technologyUsed: ["React", "Styled-Components"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/portfolio",
      },
      {
        name: "Portfolio Website",
        description:
          "A personal portfolio built with React and styled-components.",
        technologyUsed: ["React", "Styled-Components"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/portfolio",
      },
    ],
  },
  {
    categoryName: "Backend Services",
    projects: [
      {
        name: "RESTful API for Blog",
        description:
          "Node.js and Express API with CRUD functionality and MongoDB integration.",
        technologyUsed: ["Node.js", "Express", "MongoDB"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/blog-api-docs",
      },
      {
        name: "JWT Auth System",
        description:
          "A secure authentication system using JWT, bcrypt, and role-based access.",
        technologyUsed: ["Node.js", "Express", "JWT", "MongoDB"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/auth-system",
      },
      {
        name: "JWT Auth System",
        description:
          "A secure authentication system using JWT, bcrypt, and role-based access.",
        technologyUsed: ["Node.js", "Express", "JWT", "MongoDB"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/auth-system",
      },
    ],
  },
  {
    categoryName: "Full Stack Solutions",
    projects: [
      {
        name: "E-commerce Platform",
        description:
          "A full-featured e-commerce website with cart, admin panel, and payment gateway.",
        technologyUsed: ["React", "Redux", "Node.js", "Express", "MongoDB"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/fullstack-ecommerce",
      },
      {
        name: "Task Manager App",
        description:
          "Full stack to-do app with user authentication and real-time task syncing.",
        technologyUsed: ["React", "Node.js", "Express", "MongoDB"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/task-manager",
      },
      {
        name: "Task Manager App",
        description:
          "Full stack to-do app with user authentication and real-time task syncing.",
        technologyUsed: ["React", "Node.js", "Express", "MongoDB"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/task-manager",
      },
    ],
  },
  {
    categoryName: "Maintenance and Support",
    projects: [
      {
        name: "Website Performance Optimization",
        description:
          "Ongoing work optimizing performance and fixing bugs for a production website.",
        technologyUsed: ["Lighthouse", "Webpack", "React"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/performance-support",
      },
      {
        name: "Legacy Code Refactoring",
        description:
          "Modernizing an old JavaScript codebase and migrating to React.",
        technologyUsed: ["JavaScript", "React", "Git"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/refactor",
      },
      {
        name: "Legacy Code Refactoring",
        description:
          "Modernizing an old JavaScript codebase and migrating to React.",
        technologyUsed: ["JavaScript", "React", "Git"],
        thumbnailUrl:
          "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
        liveLinkUrl: "https://example.com/refactor",
      },
    ],
  },
];

// Blogs Constant
const blogs: BlogType[] = [
  {
    id: 1,
    title: "Mastering React useEffect: A Beginner’s Guide",
    shortDes:
      "Learn how to properly use useEffect to manage side effects in your React applications.",
    thumbnail:
      "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
    description:
      "The useEffect hook is one of the most commonly used hooks in React. In this article, we'll break down its usage, how to manage dependencies, avoid infinite loops, and structure your cleanup functions properly.",
    publishedDate: new Date("2024-12-15"),
    tags: ["React", "Hooks", "Frontend"],
    category: ["React", "JavaScript"],
    authorName: "Nhm Nazmul",
  },
  {
    id: 2,
    title: "What is the MERN Stack? Explained for Beginners",
    shortDes:
      "An overview of MongoDB, Express, React, and Node.js, and how they come together to build full-stack apps.",
    thumbnail:
      "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
    description:
      "MERN Stack is a popular JavaScript stack used for building modern web applications. It consists of MongoDB, Express.js, React.js, and Node.js. Learn how they work together and why it's a great choice for full-stack development.",
    publishedDate: new Date("2025-01-10"),
    tags: ["MERN", "Full Stack", "Web Development"],
    category: ["Full Stack", "Technology"],
    authorName: "Nhm Nazmul",
  },
  {
    id: 3,
    title: "10 Common JavaScript Mistakes and How to Avoid Them",
    shortDes:
      "Improve your JavaScript code by avoiding these common beginner mistakes.",
    thumbnail:
      "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
    description:
      "Whether you're just starting with JavaScript or already building projects, knowing what not to do is just as important. This post highlights 10 common pitfalls and shows how to fix or avoid them.",
    publishedDate: new Date("2025-01-25"),
    tags: ["JavaScript", "Tips", "Bugs"],
    category: ["JavaScript", "Best Practices"],
    authorName: "Nhm Nazmul",
  },
  {
    id: 4,
    title: "Optimizing Web Performance for Better UX",
    shortDes:
      "Learn how to make your site load faster and feel smoother with real-world optimization tips.",
    thumbnail:
      "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
    description:
      "Performance is key to keeping users engaged. In this blog, we’ll explore best practices like image optimization, lazy loading, code splitting, and using tools like Lighthouse and Webpack.",
    publishedDate: new Date("2025-02-05"),
    tags: ["Performance", "Frontend", "UX"],
    category: ["Frontend", "Optimization"],
    authorName: "Nhm Nazmul",
  },
  {
    id: 5,
    title: "How to Build a REST API with Node.js and Express",
    shortDes:
      "Step-by-step tutorial to build a clean and scalable REST API using Express.",
    thumbnail:
      "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg",
    description:
      "This guide walks you through setting up a RESTful API using Node.js and Express, with routing, middleware, error handling, and a MongoDB connection.",
    publishedDate: new Date("2025-02-20"),
    tags: ["Node.js", "Express", "Backend"],
    category: ["Backend", "API"],
    authorName: "Nhm Nazmul",
  },
];

export { blogs, education, portfolio, serviceCategories, services, skills };
