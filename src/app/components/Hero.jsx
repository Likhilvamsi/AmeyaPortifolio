export default function Cover() {
  const mobileImg =
    "https://tenetlaw.co.uk/wp-content/uploads/2021/07/Tenet-explains-fintech-banks.jpg";

  const desktopImg =
    "https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?auto=format&w=1400&q=80";

  return (
    <div className="w-full bg-white">

      {/* ------------------------------------------------- */}
      {/* 📱 MOBILE VIEW — with BLUE APPBAR                 */}
      {/* ------------------------------------------------- */}
      <div className="block sm:hidden w-full bg-white rounded-2xl overflow-hidden flex flex-col relative">

        {/* BLUE APPBAR */}
        <div className="w-full bg-blue-600 py-4 px-5 flex items-center gap-3 shadow-md">
          <img
            src="/ameya_logo.png"
            alt="Ameya Logo"
            className="w-10 h-10 bg-white rounded-full p-1 object-contain"
          />
          <div>
            <h2 className="text-white text-lg font-semibold leading-tight">
              Ameya IT Solutions
            </h2>
            <p className="text-white text-xs opacity-90 -mt-1">
              Your Vision and Our Innovation
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="p-6">

          {/* Company Profile Heading */}
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            COMPANY
          </h1>
          <h1 className="text-4xl font-bold text-blue-600 -mt-1">
            PROFILE
          </h1>

          {/* Company Matter */}
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            Ameya IT Solutions specializes in SAP Integration, Cloud Engineering,
            AI Automation, and full-stack development. We help businesses innovate,
            modernize operations, and accelerate digital transformation with
            scalable enterprise solutions.
          </p>

          {/* IMAGE (NEW IMAGE YOU REQUESTED) */}
          <div className="w-full h-64 mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src={mobileImg}
              alt="Company"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* ------------------------------------------------- */}
      {/* 💻 DESKTOP VIEW — your original diagonal design    */}
      {/* ------------------------------------------------- */}
      <div className="hidden sm:block">
        <div
          className="
            relative w-full 
            h-[600px] md:h-[650px]
            bg-white overflow-hidden rounded-2xl
          "
        >
          {/* BLUE LEFT TRIANGLE */}
          <div
            className="
              absolute top-0 left-0 w-full 
              h-[350px] md:h-[380px] bg-blue-600
            "
            style={{
              clipPath: "polygon(0 0, 80% 0, 0 100%)",
            }}
          ></div>

          {/* RIGHT BLUE DIAGONAL SHAPE */}
          <div
            className="
              absolute top-0 right-0
              w-[55%] h-full bg-blue-500/80
            "
            style={{
              clipPath: "polygon(55% 0, 100% 0, 100% 100%, 0 70%)",
            }}
          ></div>

          {/* RIGHT IMAGE OVERLAY */}
          <div
            className="
              absolute right-0 top-0 
              w-[55%] h-full overflow-hidden
            "
            style={{
              clipPath: "polygon(55% 0, 100% 0, 100% 100%, 0 70%)",
            }}
          >
            <img
              src={desktopImg}
              className="w-full h-full object-cover opacity-80"
              alt="Cover"
            />
          </div>

          {/* LOGO + TITLE */}
          <div className="absolute top-10 left-10 text-white">
            <div className="flex items-center gap-3">
              <img
                src="/ameya_logo.png"
                alt="Ameya IT Logo"
                className="w-16 h-16 object-contain rounded-full bg-white p-2 shadow-xl"
              />
              <div>
                <h2 className="text-2xl font-bold tracking-wide">
                  Ameya IT Solutions
                </h2>
                <p className="text-sm opacity-90">
                  Your Vision and Our Innovation
                </p>
              </div>
            </div>
          </div>

          {/* COMPANY PROFILE TEXT */}
          <div className="absolute bottom-10 left-12 max-w-md">

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              COMPANY
            </h1>

            <h1 className="text-5xl font-bold text-blue-600 -mt-3">
              PROFILE
            </h1>

            <p className="text-gray-600 text-base mt-6 leading-relaxed">
              Ameya IT Solutions specializes in SAP Integration, Cloud
              Engineering, AI Automation, and full-stack development helping
              businesses innovate and accelerate digital transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
