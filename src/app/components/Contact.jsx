"use client";

export default function Contact() {
  return (
    <div className="w-full flex justify-center py-20 bg-gray-100">
      <div className="w-full max-w-6xl bg-blue-600 text-white p-10 rounded-xl">

        <h2 className="text-3xl font-semibold mb-10 text-center">
          Contact Us
        </h2>

        {/* HORIZONTAL GRID OF 4 ITEMS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ADDRESS */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.97-3.7 7.5-7.39 7.5-11.25a7.5 7.5 0 10-15 0C4.5 13.61 7.03 17.3 12 21z" />
                <circle cx="12" cy="10" r="2.5" fill="white" />
              </svg>
            </div>

            <div>
              <p className="font-semibold text-lg">Address</p>
              <p className="text-sm mt-1 leading-relaxed">
                Ameya IT Solutions <br />
                3rd Floor, Plot No. 37/A <br />
                Vengal Rao Nagar, Hyderabad <br />
                Telangana 500038
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5l.982-.196a2.25 2.25 0 012.57 1.372l1.12 3.358a2.25 2.25 0 01-.516 2.258L5.1 12.75a12.06 12.06 0 006.15 6.15l1.458-1.306a2.25 2.25 0 012.258-.516l3.358 1.12a2.25 2.25 0 011.372 2.57l-.196.982A2.25 2.25 0 0117.142 23h-.392C8.514 23 2 16.486 2 8.25v-.392A2.25 2.25 0 012.25 4.5z" />
              </svg>
            </div>

            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p className="text-sm mt-1">+1 (469) 731-6804</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.5 4.5L18 8M5.25 5h13.5A2.25 2.25 0 0121 7.25v9.5A2.25 2.25 0 0118.75 19H5.25A2.25 2.25 0 013 16.75v-9.5A2.25 2.25 0 015.25 5z" />
              </svg>
            </div>

            <div>
              <p className="font-semibold text-lg">Email</p>
              <p className="text-sm mt-1">avinash.gajula@ameyait.com</p>
            </div>
          </div>

          {/* WEBSITE */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c-2.5 2.3-4 5.5-4 9s1.5 6.7 4 9m0-18c2.5 2.3 4 5.5 4 9s-1.5 6.7-4 9m-7-9h14" />
              </svg>
            </div>

            <div>
              <p className="font-semibold text-lg">Website</p>
              <p className="text-sm mt-1">www.ameyait.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
