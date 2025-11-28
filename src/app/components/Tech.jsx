export default function Tech() {
  const techLogos = [
    { name: "React", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Angular", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },

    { name: "Python", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "FastAPI", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" },
    { name: "Node.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "Java", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },

    { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
    { name: "Google Cloud", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" },

    { name: "MySQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },

    { name: "Git", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    { name: "Docker", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
    { name: "Kubernetes", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Jenkins", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg" },

    { name: "SAP CPI", img: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "SAP ABAP", img: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "SAP UI5 / Fiori", img: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },

    { name: "NLP", img: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png" },
    { name: "GPT Models", img: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png" },
    { name: "Automation Pipelines", img: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png" },
  ];

  return (
    <section id="tech" className="py-10 px-6">

      {/* SMALLER COMPACT CARD */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative">

        {/* SMALLER TOP HEADER STRIP */}
        <div className="relative w-full h-[90px] overflow-hidden">

          {/* Light Blue */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-blue-400"
            style={{
              clipPath: "polygon(0 0, 85% 0, 55% 100%, 0 100%)",
            }}
          ></div>

          {/* Dark Blue */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-blue-900"
            style={{
              clipPath: "polygon(20% 0, 100% 0, 75% 100%, 35% 100%)",
            }}
          ></div>

          <h2 className="absolute top-5 left-8 text-white text-2xl font-bold drop-shadow-md">
            Our Technology Stack
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="px-10 text-center mt-6">
          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            We build secure, scalable and modern digital solutions using
            world-class technologies across cloud, AI, SAP, full-stack
            and DevOps environments.
          </p>
        </div>

        {/* GRID — 6 ICONS PER ROW + SMALL GAP */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-10 px-10 mt-8 pb-10 justify-items-center">
          {techLogos.map((tech, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={tech.img}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />
              <p className="mt-1 text-gray-700 text-xs font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
