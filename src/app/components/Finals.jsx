"use client";

export default function IndustriesPartnerEngagement() {
  return (
    <section className="w-full bg-white text-gray-900">

      {/* =====================================================
            INDUSTRIES WE SERVE
      ===================================================== */}
      <div className="max-w-6xl mx-auto py-16 px-6 text-center">

        <h2 className="text-4xl font-bold text-blue-600">Industries We Serve</h2>

        <p className="mt-4 text-gray-600 text-lg">
          Our domain versatility allows us to deliver tailored solutions that meet
          unique industry challenges.
        </p>

        {/* INDUSTRY TAGS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            "IT & Software",
            "Retail & E-commerce",
            "Finance & Banking",
            "Logistics & Supply Chain",
            "Healthcare",
            "Salon & Service Marketplace",
            "Manufacturing & ERP",
          ].map((item, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-white border border-blue-300 rounded-full text-blue-600 
              shadow-sm hover:bg-blue-50 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* BLUE DIVIDER — REDUCED GAP ABOVE */}
      <div className="w-full h-2 bg-blue-600 mt-4 mb-10"></div>

      {/* =====================================================
            WHY PARTNER WITH US
      ===================================================== */}
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-gray-900">Why Partner With Us?</h2>

        <p className="mt-3 text-gray-600 text-lg">
          We deliver enterprise-grade quality through a partner-centric,
          transparent and scalable approach.
        </p>

        {/* ADVANTAGE GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Agile Delivery */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">Agile Delivery</h3>
            <p className="text-gray-600 mt-2">
              Rapid, sprint-based execution ensuring faster development cycles.
            </p>
          </div>

          {/* Transparent Process */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">Transparent Process</h3>
            <p className="text-gray-600 mt-2">
              Clear communication, weekly reports, and complete project clarity.
            </p>
          </div>

          {/* Proven Expertise */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">Proven Expertise</h3>
            <p className="text-gray-600 mt-2">
              Strong SAP, AI, cloud & full-stack engineering technical depth.
            </p>
          </div>

          {/* High Scalability */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">High Scalability</h3>
            <p className="text-gray-600 mt-2">
              System architecture designed to scale with growing business needs.
            </p>
          </div>

          {/* Cost-Effective & Long-Term Support */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 md:col-span-2">
            <h3 className="text-xl font-semibold text-blue-600">
              Cost-Effective & Long-Term Support
            </h3>
            <p className="text-gray-600 mt-2">
              Enterprise quality at competitive pricing with continuous improvement
              and lifetime maintenance options.
            </p>
          </div>
        </div>
      </div>

      {/* BLUE DIVIDER */}
      <div className="w-full h-2 bg-blue-600 mt-12 mb-10"></div>

      {/* =====================================================
      FLEXIBLE ENGAGEMENT MODELS — UPDATED WITH BLUE ICON CIRCLES
===================================================== */}
<div className="max-w-6xl mx-auto text-center px-6 pb-16">

  <h2 className="text-4xl font-bold text-gray-900">
    Flexible Engagement Models
  </h2>

  <p className="mt-3 text-gray-600 text-lg">
    Choose a collaboration model that aligns with your business goals and delivery needs.
  </p>

  {/* ICON GRID */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    {/* Fixed Project Cost */}
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
        {/* White Contract Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-10 h-10"
        >
          <path d="M7 2a2 2 0 00-2 2v16l7-3 7 3V4a2 2 0 00-2-2H7z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mt-5">Fixed Project Cost</h3>
      <p className="text-gray-600 mt-2">For well-defined scope.</p>
    </div>

    {/* Hourly Billing */}
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
        {/* White Clock Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-10 h-10"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h4v2h-6V7h2v6z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mt-5">Hourly Billing</h3>
      <p className="text-gray-600 mt-2">For adaptive, evolving tasks.</p>
    </div>

    {/* Dedicated Teams */}
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
        {/* White Team Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-10 h-10"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm6 8v-1c0-2.21-3.58-4-6-4s-6 1.79-6 4v1h12zm3-8c0 1.1-.9 2-2 2h-1v-4h1c1.1 0 2 .9 2 2zm-2-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mt-5">Dedicated Teams</h3>
      <p className="text-gray-600 mt-2">For long-term execution velocity.</p>
    </div>

    {/* Hybrid Model */}
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
        {/* White Handshake Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-10 h-10"
        >
          <path d="M21 8h-3.17l-1.41-1.41A1.996 1.996 0 0015 6H9c-.53 0-1.04.21-1.41.59L6.17 8H3C1.9 8 1 8.9 1 10v4c0 1.1.9 2 2 2h2l1 1h4l2-2h2l1 1h4l1-1h2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mt-5">Hybrid Model</h3>
      <p className="text-gray-600 mt-2">Flexible engagement & collaboration.</p>
    </div>

  </div>
</div>


    </section>
  );
}
