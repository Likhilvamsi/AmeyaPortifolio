export default function About() {
  const aboutImage =
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&w=1200&q=80";

  return (
    <div
      className="
        relative w-full 
        h-[600px] sm:h-[700px] 
        bg-blue-600 sm:bg-white 
        shadow-2xl overflow-hidden rounded-2xl mt-12
      "
    >

      {/* ==== LEFT BLUE ANGLED PANEL (VISIBLE ON ALL DEVICES) ==== */}
      <div
        className="
          absolute top-0 left-0 
          w-full sm:w-[58%] 
          h-full 
          bg-blue-600
        "
        style={{
          clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
        }}
      ></div>

      {/* ==== RIGHT BLUE DIAGONAL — DESKTOP ONLY ==== */}
      <div
        className="
          hidden sm:block
          absolute top-0 right-0 w-[60%] h-full bg-blue-500/70
        "
        style={{
          clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>

      {/* ==== RIGHT IMAGE — DESKTOP ONLY ==== */}
      <div
        className="
          hidden sm:block
          absolute top-0 right-0 w-[60%] h-full overflow-hidden
        "
        style={{
          clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <img
          src={aboutImage}
          alt="About"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* ==== TEXT CONTENT ==== */}
      <div
        className="
          absolute 
          left-6 sm:left-16 
          top-16 sm:top-1/2 
          sm:-translate-y-1/2
          w-[90%] sm:w-[42%]
          text-white
        "
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">ABOUT</h2>

        <p className="mt-4 sm:mt-6 text-xs sm:text-lg leading-relaxed text-gray-100">
          Ameya IT Solutions blends creative intelligence with cutting-edge technology
          to deliver AI, SAP, cloud, and immersive digital experiences. We build smart,
          scalable solutions that help businesses grow stronger and future-ready.
          <br /><br />
          We deliver innovative, automation-driven solutions to improve efficiency and
          customer satisfaction.
        </p>

        {/* Bullet points */}
        <div className="mt-6 sm:mt-8 space-y-4 text-gray-100">
          <div className="flex gap-3 items-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></div>
            <p className="text-xs sm:text-sm">Full-Stack Web & Mobile Development</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></div>
            <p className="text-xs sm:text-sm">AI-powered Automation & Chatbots</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></div>
            <p className="text-xs sm:text-sm">Cloud Deployments & DevOps</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></div>
            <p className="text-xs sm:text-sm">SAP CPI Integrations & Monitoring</p>
          </div>
        </div>
      </div>

    </div>
  );
}
