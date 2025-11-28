export default function About() {
  const aboutImage =
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&w=1200&q=80";

  return (
    <div className="relative w-full h-[700px] bg-white shadow-2xl overflow-hidden rounded-2xl mt-12">

      {/* ==== LEFT BLUE ANGLED PANEL ==== */}
      <div
        className="absolute top-0 left-0 w-[58%] h-full bg-blue-600"
        style={{
          clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
        }}
      ></div>

      {/* ==== RIGHT BLUE TINT DIAGONAL OVER IMAGE ==== */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full bg-blue-500/70"
        style={{
          clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>

      {/* ==== IMAGE ==== */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full overflow-hidden"
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

      {/* ==== MAIN TEXT BLOCK ==== */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2 w-[42%] text-white">
        <h2 className="text-4xl font-bold tracking-wide">ABOUT </h2>

        <p className="mt-6 text-lg leading-relaxed text-gray-100">
          Ameya IT Solutions blends creative intelligence with cutting-edge technology to deliver AI, SAP, cloud, and immersive digital experiences. We engineer smart, scalable solutions that tackle complex challenges and empower businesses to grow stronger, faster, and future-ready in a connected world.  
          <br />
          <br />
          We deliver innovative, scalable, automation-driven solutions that help
          businesses improve efficiency, enhance customer experience, and achieve
          long-term growth.
        </p>

        {/* Small bullet icons */}
        <div className="mt-8 space-y-4 text-gray-100">
          <div className="flex gap-3 items-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
            <p className="text-sm">Full-Stack Web & Mobile Development</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
            <p className="text-sm">AI-powered Automation & Chatbots</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
            <p className="text-sm">Cloud Deployments & DevOps</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
            <p className="text-sm">SAP CPI Integrations & Monitoring</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
