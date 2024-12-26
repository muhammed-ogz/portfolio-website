import { FaReact, FaNodeJs } from "react-icons/fa"; // Örnek ikonlar
import { BsUnity } from "react-icons/bs";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Front-End",
      description:
        "React, Node.js (EJS), Angular (çok az) gibi frontend teknolojileriyle kullanıcı arayüzleri geliştirme.",
      icon: <FaReact className="text-6xl text-cyan-400" />,
      color: "bg-[#ddb892]",
    },
    {
      id: 2,
      title: "Back-End",
      description:
        "Node.js, Express.js, Python, Django gibi teknolojilerle sunucu tarafı uygulamalar geliştirme. Veritabanı yönetimi (MySQL, MongoDB) ve API geliştirme.",
      icon: <FaNodeJs className="text-6xl text-green-500" />,
      color: "bg-[#E9EDC9]",
    },
    {
      id: 3,
      title: "Game Development",
      description:
        "Unity, Unreal Engine gibi oyun motorlarıyla 2D ve 3D oyun geliştirme. C# diliyle tenel oyun mantığı ve grafik optimizasyonu.",
      icon: <BsUnity className="text-6xl" />,
      color: "bg-white",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6" id="services">
      <h2 className="font-bold md:text-3xl text-xl text-gray-800 md:mb-5 mb-10 text-center w-full">
        Hizmetler
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className={`${service.color} p-8 flex flex-col items-center justify-center rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Services;
