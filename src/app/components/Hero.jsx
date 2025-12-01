export default function Cover() {
  const coverImg =
    "https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?grayscale&auto=format&w=1400&q=80";

  return (
    <div
      className="
        relative w-full 
        h-[480px] sm:h-[600px] md:h-[650px]
        bg-white overflow-hidden rounded-2xl
      "
    >
      {/* Blue left triangle - always visible */}
      <div
        className="
          absolute top-0 left-0 w-full 
          h-[220px] sm:h-[220px] md:h-[260px] 
          bg-blue-600
        "
        style={{
          clipPath: "polygon(0 0, 80% 0, 0 100%)",
        }}
      ></div>

      {/* Right blue diagonal shape - HIDE ON MOBILE */}
      <div
        className="
          hidden sm:block
          absolute top-0 right-0
          w-[60%] md:w-[55%] h-full bg-blue-500/80
        "
        style={{
          clipPath: "polygon(55% 0, 100% 0, 100% 100%, 0 70%)",
        }}
      ></div>

      {/* Right image overlay - HIDE ON MOBILE */}
      <div
        className="
          hidden sm:block
          absolute right-0 top-0 
          w-[60%] md:w-[55%] h-full overflow-hidden
        "
        style={{
          clipPath: "polygon(55% 0, 100% 0, 100% 100%, 0 70%)",
        }}
      >
        <img
          src={coverImg}
          className="w-full h-full object-cover opacity-80"
          alt="Company Cover"
        />
      </div>

      {/* LOGO & TITLE */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 text-white">
        <div className="flex items-center gap-3">

          <img
            src="/ameya_logo.png"
            alt="Ameya IT Logo"
            className="
              w-12 h-12 sm:w-16 sm:h-16 
              object-contain rounded-full bg-white p-2 shadow-xl
            "
          />

          <div>
            <h2 className="text-lg sm:text-2xl font-bold tracking-wide">
              Ameya IT Solutions
            </h2>
            <p className="text-xs sm:text-sm opacity-90">
              Your Vision and Our Innovation
            </p>
          </div>
        </div>
      </div>

      {/* COMPANY PROFILE TEXT */}
      <div className="absolute bottom-10 left-6 sm:left-12 max-w-xs sm:max-w-md">

        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
          COMPANY
        </h1>

        <h1 className="text-3xl sm:text-5xl font-bold text-blue-600 -mt-2 sm:-mt-3">
          PROFILE
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed max-w-sm">
          Ameya IT Solutions specializes in SAP Integration, Cloud Engineering,
          AI Automation, and full-stack development — helping businesses innovate
          and accelerate digital transformation.
        </p>
      </div>
    </div>
  );
}
