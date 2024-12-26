import "./About.css";
import ExperienceItems from "./ExperienceItems";
import { AiOutlineFire } from "react-icons/ai";
import { RiCupLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import Timeline from "./Timeline/Timeline"

const About = () => {
  const experienceList = [
    {
      name: "Front-End",
      value: 75,
      color: "blue",
    },
    {
      name: "Back-End",
      value: 65,
      color: "green",
    },
    {
      name: "Game-Dev",
      value: 12,
      color: "red",
    },
  ];

  return (
    <div className="py-20 {/*h-screen*/} flex flex-col items-center gap-16" id="about">
      {/* Başlık */}
      <h1 className="font-bold text-3xl text-gray-800 mb-5 text-left w-full">
        Benim Hakkımda
      </h1>

      {/* İçerik */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-6 rounded-3xl bg-white shadow-xl">
        {/* Profil Resmi ve Buton */}
        <div className="flex flex-col items-center justify-center md:items-start gap-6">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/200" // Profil resmini buraya ekleyebilirsiniz
              alt="Özgür" // Profil adı buraya eklenebilir
              className="w-full h-full object-cover"
            />
          </div>

          <button className="bg-[#CCD5AE] text-white py-2 px-6 rounded-md hover:bg-[#E9EDC9] transition-colors duration-700">
            Download CV
          </button>
        </div>

        <div className="flex items-center justify-center gap-10">
          {/* Açıklama Metni */}
          <p className="text-center md:text-left text-gray-600 max-w-xl leading-relaxed">
            Merhabalar! Ben Özgür, lise yıllarında oyun geliştirmeye olan
            merakım ile başlayan yazılım yolculuğum, üniversite yıllarında web
            teknolojilerine olan ilgimle devam etti. Şu anda web geliştirme,
            backend ve frontend teknolojileriyle projeler üretmeye devam
            ediyorum.
          </p>

          {/* Beceriler */}
          <div className="flex flex-col">
            {experienceList.map((experience, index) => (
              <ExperienceItems experience={experience} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-12">
        {/* İlk Proje Tamamlandı */}
        <div className="flex items-center">
          <AiOutlineFire className="mr-2 text-[48px] opacity-65" />
          <div className="flex flex-col">
            <span className="text-4xl font-bold">4</span>
            <span className="text-sm font-semibold text-gray-500 opacity-75">
              Proje Tamamlandı
            </span>
          </div>
        </div>

        {/* Çay İçildi */}
        <div className="flex items-center">
          <RiCupLine className="mr-2 text-[48px] opacity-65" />
          <div className="flex flex-col">
            <span className="text-4xl font-bold">129</span>
            <span className="text-sm font-semibold text-gray-500 opacity-75">
              Çay İçildi
            </span>
          </div>
        </div>

        {/* Dördüncü Proje Tamamlandı */}
        <div className="flex items-center">
          <AiOutlineLike className="mr-2 text-[48px] opacity-65" />
          <div className="flex flex-col">
            <span className="text-4xl font-bold">4</span>
            <span className="text-sm font-semibold text-gray-500 opacity-75">
              Memnun Musteri
            </span>
          </div>
        </div>
      </div>

      <Timeline/>
    </div>
  );
};

export default About;
