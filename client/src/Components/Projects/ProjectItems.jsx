import PropTypes from "prop-types";

const ProjectItems = ({ repo }) => {
  return (
    <li
      className="p-6 border-l-4 border-[#D4A373] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-64 min-h-[256px] bg-white flex flex-col justify-between"
    >
      {/* Repo Başlığı ve Tarih */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-medium text-blue-600 hover:text-blue-800">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
          >
            {repo.name}
          </a>
        </h3>
        <span className="text-sm text-gray-500">
          {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>

      {/* Repo Açıklaması */}
      <p className="text-gray-700 mb-4 text-lg flex-grow">
        {repo.description || "Bu repo hakkında açıklama bulunmamaktadır."}
      </p>

      {/* Repo İstatistikleri (Yıldızlar, Forklar vb.) */}
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17l-3.2-2.4a4 4 0 010-6.4L12 6m0 11v-7m0 0l3.2 2.4a4 4 0 000 6.4L12 6"
            />
          </svg>
          <span className="ml-1">{repo.stargazers_count}</span> Stars
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 9l3 3-3 3m12-6l3 3-3 3m-9 0h12"
            />
          </svg>
          <span className="ml-1">{repo.forks_count}</span> Forks
        </div>
      </div>
    </li>
  );
};

export default ProjectItems;

ProjectItems.propTypes = {
  repo: PropTypes.object.isRequired,
};
