"use client";
import { useState } from "react";

/* -----------------------------------------
   IMAGE CONSTANTS
------------------------------------------*/
const SERVICE_IMAGES = {
  customSoftware:
    "https://www.xavor.com/wp-content/uploads/2023/05/Custom-Software-Development.webp",

  webApp:
    "https://www.simpalm.com/wp-content/uploads/Web-Application.webp",

  mobileApp:
    "https://powergatesoftware.com/wp-content/uploads/2025/06/mobile-app-development-trends-in-2025-2-1200x900.jpg",

  aiDev:
    "https://reizend.ai/assets/img/ai/2.jpg",

  softwareProduct:
    "https://cdn-cchkmpj.nitrocdn.com/CJXGnJvCvbQYOSNVvxpLvOYcHhpJDKbH/assets/images/optimized/rev-7a103a8/ossisto.com/wp-content/uploads/2024/10/Choosing-the-Right-Software-Product-Development-Company.webp",

  enterpriseSoftware:
    "https://brainit.com/wp-content/uploads/2023/05/10276612_4421964-1024x1024.webp",

  saasDev:
    "https://binaryfolks.com/wp-content/uploads/2025/08/Intro-14.png",

  integration:
    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Custom-API-Integration-and-Development.png",

  mvp:
    "https://www.talentica.com/wp-content/uploads/2023/09/MVP-DEVELOPMENT-1.jpg",

  poc:
    "https://www.developcoins.com/newfront/poc-development/what-is-proof-of-concept.svg",

  devops:
    "https://ictechlabs.com/wp-content/uploads/2023/05/devops_6-ai.jpg",

  cloudMigration:
    "https://d2v4wz5vk7guj6.cloudfront.net/wp-content/uploads/2021/07/CD_Cloud_Migration.jpg",

  backend:
    "https://ossisto.com/wp-content/uploads/2024/04/Backend-Development-Services.webp",

  frontend:
    "https://techsignific.com/wp-content/uploads/2020/06/frontend_graphic1.png",

  maintenance:
    "https://www.infomazeelite.com/wp-content/uploads/2022/02/Why-Choose-to-Hire-Software-Maintenance-Team-from-Infomaze.png",
};

/* -----------------------------------------
   SERVICES COMPONENT


   
------------------------------------------*/
export default function Services() {
  return (
    <div className="w-full bg-white py-16">
      <h1 className="text-center text-4xl font-extrabold text-blue-600">
        Services We Offer
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-12 px-6">
        {servicesList.map((s, i) => (
          <HoverCard key={i} service={s} />
        ))}
      </div>
    </div>
  );
}

/* -----------------------------------------
   SERVICE LIST DATA
------------------------------------------*/
const servicesList = [
  {
    title: "Custom Software Development",
    img: SERVICE_IMAGES.customSoftware,
    detail:
      "We design and develop tailored software that fits your exact business workflows. Built for speed, security, and long-term performance. Ensures seamless automation across departments. Reduces operational effort and improves accuracy. Perfect for businesses needing custom digital transformation.",
  },
  {
    title: "Web Application Development",
    img: SERVICE_IMAGES.webApp,
    detail:
      "Modern, responsive and secure web applications for all industries. Developed using enterprise-grade technologies. Designed for fast performance and smooth user experience. Supports scaling as your business grows. Ideal for SaaS platforms, portals, and enterprise dashboards.",
  },
  {
    title: "Mobile App Development",
    img: SERVICE_IMAGES.mobileApp,
    detail:
      "Beautiful mobile apps for both iOS and Android platforms. Built using Flutter, React Native and advanced native technologies. Ensures smooth, fast and intuitive user experience. Supports push notifications, payments, and authentication. Ideal for service apps, ecommerce, and on-demand businesses.",
  },
  {
    title: "AI Development Services",
    img: SERVICE_IMAGES.aiDev,
    detail:
      "AI-powered chatbots, automation engines and intelligent workflows. Uses NLP, machine learning and predictive analytics. Reduces manual operations with smart automation. Enhances customer experience through instant responses. Ideal for enterprises adopting AI transformation.",
  },
  {
    title: "SaaS Application Development",
    img: SERVICE_IMAGES.saasDev,
    detail:
      "Multi-tenant, cloud-based SaaS application development. Includes subscription management, user roles and billing systems. Designed for global performance and zero downtime. Highly secure and ready for rapid scaling. Ideal for launching commercial software platforms.",
  },
  {
    title: "Software Integration Services",
    img: SERVICE_IMAGES.integration,
    detail:
      "Seamless integration of ERP, CRM, API and cloud systems. Enables smooth communication between all your platforms. Removes data silos and synchronization issues. Automates workflows across multiple apps. Perfect for companies expanding their digital ecosystem.",
  },
  {
    title: "MVP Software Development",
    img: SERVICE_IMAGES.mvp,
    detail:
      "Rapid development of a Minimum Viable Product for your idea. Includes only core features to test user interest. Helps attract investors with real working prototypes. Saves development cost and time. Ideal for startups validating product-market fit.",
  },
  {
    title: "PoC Development Services",
    img: SERVICE_IMAGES.poc,
    detail:
      "Proof-of-Concept solutions to test technical feasibility. Helps evaluate ideas before full investment. Reduces risk by validating assumptions early. Useful for innovative or experimental projects. Ensures you move forward with confidence.",
  },
  {
    title: "DevOps Development Services",
    img: SERVICE_IMAGES.devops,
    detail:
      "Automation of CI/CD pipelines, builds and deployments. Enhances release speed with reliable workflows. Uses Docker, Kubernetes and monitoring tools. Reduces downtime and improves deployment stability. Ideal for modern cloud-based development teams.",
  },
  {
    title: "Back-end Development Services",
    img: SERVICE_IMAGES.backend,
    detail:
      "High-performance backend systems and APIs for any platform. Built using FastAPI, Node.js and secure architectures. Supports microservices, authentication and data processing. Scalable for enterprise workloads and large traffic. Ensures secure and reliable server-side operations.",
  },
  {
    title: "Front-End Development Services",
    img: SERVICE_IMAGES.frontend,
    detail:
      "Pixel-perfect UI development with React, Next.js and Angular. Delivers smooth navigation and clean interface design. Fully responsive across all devices and browsers. Optimized for fast load times and accessibility. Ideal for modern web dashboards and apps.",
  },
  {
    title: "Software Maintenance & Support",
    img: SERVICE_IMAGES.maintenance,
    detail:
      "Continuous monitoring and maintenance for your applications. Includes bug fixes, updates and performance improvements. Ensures long-term stability and security. Reduces system downtime through proactive support. Ideal for businesses requiring reliable long-term assistance.",
  },
];

/* -----------------------------------------
   HOVER CARD COMPONENT
------------------------------------------*/
function HoverCard({ service }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* IMAGE (visible only when NOT hovered) */}
      {!hover && (
        <div className="h-56 w-full overflow-hidden">
          <img
            src={service.img}
            className="w-full h-full object-cover"
            alt={service.title}
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {service.title}
        </h3>

        {/* SHOW DETAILS ONLY ON HOVER */}
        {hover && (
          <p className="mt-4 text-gray-600 text-sm leading-relaxed border-t pt-4">
            {service.detail}
          </p>
        )}
      </div>
    </div>
  );
}
