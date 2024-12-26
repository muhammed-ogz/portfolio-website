import { PiCertificateLight } from "react-icons/pi";

const Timeline = () => {
  const events = [
    {
      year: "2022",
      title: "Lise Eğitimini Tamamlama",
      description: "Lise yıllarında oyun geliştirmeye ilgi duydum ve yazılım öğrenmeye başladım.",
    },
    {
      year: "2023",
      title: "Üniversiteye Başlangıç",
      description: "Web teknolojileriyle tanıştım ve frontend geliştirme konusunda eğitim aldım.",
    },
    {
      year: "2023",
      title: "İlk Web Projemi Tamamlama",
      description: "Kendi web uygulamamı yaparak ilk projemi başarıyla tamamladım.",
    },
    {
      year: "2024",
      title: "Backend Geliştirme Deneyimi",
      description: "Backend teknolojilerini öğrenmeye başladım ve ilk API projemi geliştirdim.",
    },
    {
      year: "2024",
      title: "Fullstack Geliştirme Deneyimi",
      description: "Backend teknolojilerini ve Front-end teknolojilerini harmanlayarak proje geliştirdim.",
    },
  ];

  return (
    <div className="h-auto flex flex-col items-center gap-10 py-10 px-4">
      <h2 className="font-bold md:text-3xl text-xl text-gray-800 md:mb-5 text-center w-full">Tecrübelerim</h2>

      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex gap-5 ${index % 2 === 0 ? 'flex-row-reverse border-r-4' : 'flex-row border-l-4'} 
                border-[#D4A373] bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out`}>
              
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#CCD5AE] text-white rounded-full flex items-center justify-center transform transition duration-300 ease-in-out hover:scale-110">
                <PiCertificateLight size={28} />
              </div>

              {/* Event Information */}
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">{event.year}</span>
                <h3 className="font-semibold text-xl text-gray-800">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
