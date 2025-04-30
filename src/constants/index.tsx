import { ServiceCategoryType, ServiceType } from "@/types";
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

export { serviceCategories, services };
