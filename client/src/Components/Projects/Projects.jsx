import { useEffect, useState } from "react";
import ProjectItems from "./ProjectItems";
import { RiArrowDownWideLine } from "react-icons/ri";

const Projects = () => {
  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const apiUri = import.meta.env.VITE_GITHUB_URI;

  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const [sliceValue, setSliceValue] = useState(6);

  const handleSlice = () => {
    setSliceValue(sliceValue+3);
  };

  // Sayfa yüklendiğinde verileri çek
  useEffect(() => {
    const fetchGithubData = async () => {
      const userUrl = `${apiUri}/${username}`;
      const reposUrl = `${apiUri}/${username}/repos`;

      try {
        // Kullanıcı bilgilerini çek
        const userResponse = await fetch(userUrl, {
          method: "GET",
          headers: {
            Authorization: `token ${token}`, // Token ile kimlik doğrulama
          },
        });

        if (!userResponse.ok) {
          throw new Error("Kullanıcı verileri alınırken hata oluştu");
        }

        const users = await userResponse.json();
        setUserData(users);
        console.log("Kullanıcı Bilgileri:", users);

        // Depoları çek
        const reposResponse = await fetch(reposUrl, {
          method: "GET",
          headers: {
            Authorization: `token ${token}`,
          },
        });

        if (!reposResponse.ok) {
          throw new Error("Depolar alınırken hata oluştu");
        }

        const repos = await reposResponse.json();
        setRepoData(repos);
        console.log("Repolar:", repos);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchGithubData();
  }, [apiUri, username, token]);

  console.log(userData);

  return (
    <div className="h-auto flex flex-col items-center gap-10 p-6 ">
      <h2 className="font-bold text-3xl text-gray-800 mb-8 text-left">Repom</h2>

      {/* Eğer repoData varsa, repo bilgilerini sırasıyla listele */}
      {repoData.length > 0 ? (
        <div className="w-1/2">
          <ul className="space-y-4 flex flex-wrap justify-center items-center gap-10">
            {repoData.slice(0, sliceValue).map((repo) => (
              <ProjectItems key={repo.id} repo={repo} />
            ))}
            <button onClick={()=>handleSlice()}>
                <RiArrowDownWideLine size={48} />
            </button>
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">Henüz hiç repo bulunmamaktadır.</p>
      )}
    </div>
  );
};

export default Projects;
