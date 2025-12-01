export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-100 px-6">

      {/* PAGE WRAPPER */}
      <div className="max-w-7xl mx-auto space-y-7">

        {/* =================== PRODUCTS BANNER =================== */}
        <div className="relative bg-white p-10 md:p-16 rounded-3xl shadow-xl overflow-hidden">

          {/* BLUE SHAPE — HIDDEN ON MOBILE, VISIBLE ON DESKTOP */}
          <div className="absolute top-0 right-0 w-32 h-80 bg-blue-500 opacity-90 clip-path-polygon z-0 hidden md:block"></div>

          <style>{`
            .clip-path-polygon {
              clip-path: polygon(100% 0, 100% 60%, 40% 100%, 0 100%, 0 0);
            }
          `}</style>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
              Our Products
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl">
              Crafting high-impact digital products that combine 
              cutting-edge technology, optimized workflows, 
              and enterprise reliability.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROJECTS (ALTERNATING SLIDES)
        ===================================================== */}

        <ProjectItem
          image="https://pabau.com/wp-content/uploads/2024/01/BLOG_The-ultimate-guide-to-salon-management-software-in-2024-1.webp"
          title="Salon Management System"
          description="A fully integrated platform including online booking, staff management,
          offers, ratings & customer tracking. Built using Python, FastAPI, MySQL, 
          React, and cloud-native architecture."
          points={[
            "Online Scheduling System",
            "Offers & Loyalty Engine",
            "Admin & Staff Dashboard",
            "Real-time Notifications",
          ]}
          reversed={false}
        />

        <ProjectItem
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=1200&q=80"
          title="SAP CPI Integrations"
          description="Designed, developed and deployed SAP CPI flows for multi-system data 
          exchange, real-time monitoring dashboards, error handling, and secure integrations."
          points={[
            "SAP CPI iFlows",
            "Cloud Integration Runtime",
            "End-to-End System Connectivity",
            "Monitoring Dashboards",
          ]}
          reversed={true}
        />

        <ProjectItem
          image="https://etedge-insights.com/wp-content/uploads/2025/10/AI-Automation.png"
          title="AI Automation Suite"
          description="End-to-end automation platform with chatbot support, NLP-based 
          data extraction, conversational AI, and automated task workflows."
          points={[
            "NLP Document Extraction",
            "Conversational Chatbot",
            "Workflow Automation Engine",
            "AI-powered Insights",
          ]}
          reversed={false}
        />

        <ProjectItem
          image="https://cedcommerce.com/blog/wp-content/uploads/2017/02/2.png"
          title="Online Booking System"
          description="A fast, user-friendly booking system enabling customers to schedule services anytime."
          points={[
            "24/7 Online Booking",
            "Smart Booking Flow",
            "Customer Notifications",
            "Zero Manual Errors",
          ]}
          reversed={true}
        />

        <ProjectItem
          image="https://static.vecteezy.com/system/resources/previews/022/882/362/non_2x/time-management-banner-with-character-and-text-place-can-use-for-web-banner-infographics-hero-images-flat-isometric-illustration-vector.jpg"
          title="Smart Time Slot Management"
          description="Automatically assigns time slots based on peak hours, staff availability and customer demand."
          points={[
            "Peak Hour Intelligence",
            "Zero Conflicts",
            "Auto Adjustments",
            "Improved Efficiency",
          ]}
          reversed={false}
        />

        <ProjectItem
          image="https://www.datocms-assets.com/63775/1738779950-customer-relationship-management.jpg?auto=format&w=1600"
          title="Customer & User CRM"
          description="Complete CRM that captures user preferences, visits, and loyalty data."
          points={[
            "Customer Profiles",
            "Preferences Tracking",
            "Visit History",
            "Loyalty Intelligence",
          ]}
          reversed={true}
        />

        <ProjectItem
          image="https://resources.erp.compare/wp-content/uploads/2024/06/Top-10-ERPs-for-service.jpg"
          title="Multi-Branch & Enterprise Control"
          description="Operate multiple branches with a unified dashboard for customers, staff, revenue & analytics."
          points={[
            "Branch-Level Dashboards",
            "Role-Based Access",
            "Unified Operations",
            "Enterprise Scalability",
          ]}
          reversed={false}
        />

        <ProjectItem
          image="https://static.vecteezy.com/system/resources/previews/026/567/943/original/human-resources-management-hr-department-employer-selects-candidates-online-recruitment-agency-employment-headhunting-business-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg"
          title="Staff & Resource Management"
          description="Manage staff shifts, assignments, availability, and performance from one centralized dashboard. Improves accountability, balances workloads, and boosts overall team productivity with real-time visibility."
          points={[
            "Shift & Availability Tracking",
            "Performance Monitoring",
            "Workload Balancing",
            "Real-Time Resource Visibility",
          ]}
          reversed={true}
        />

      </div>
    </section>
  );
}


/* =====================================================
   REUSABLE COMPONENT — ALTERNATING SLIDE (LEFT / RIGHT)
===================================================== */
function ProjectItem({ image, title, subtitle, description, points, reversed }) {
  return (
    <div className="relative bg-white p-12 rounded-3xl shadow-lg">
      <div className={`md:flex gap-6 items-center ${reversed ? "flex-row-reverse" : ""}`}>

        {/* IMAGE */}
        <img
          src={image}
          className="rounded-xl shadow-md w-full md:w-1/2 h-72 object-cover"
          alt={title}
        />

        {/* TEXT */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-blue-600 font-semibold mt-1">{subtitle}</p>

          <p className="text-gray-600 mt-4 leading-relaxed">{description}</p>

          <ul className="mt-6 text-gray-700 space-y-2">
            {points.map((p, i) => (
              <li key={i}>✔ {p}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
