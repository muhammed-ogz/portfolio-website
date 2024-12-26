import PropTypes from "prop-types";

const ExperienceItems = ({ experience }) => {
  return (
    <div>
      <label
        htmlFor={experience.name}
        className="block text-sm font-semibold text-gray-700 mb-1"
      >
        {experience.name}
      </label>
      <div className="flex items-center justify-center gap-2">
        <input
          name={experience.name}
          type="range"
          value={experience.value}
          className="w-full h-2 rounded-lg"
          style={{
            WebkitAppearance: "none",
            appearance: "none",
            width: "100%",
            height: "8px",
            background: "#dddd",
            borderRadius: "5px",
            /* Dolan kısmı için arka plan */
            backgroundImage: `linear-gradient(to right, ${experience.color} ${experience.value}%, #dddd ${experience.value}%)`,
          }}
          readOnly
        />
        <span className="text-gray-700 text-sm">{experience.value}%</span>
      </div>
    </div>
  );
};

export default ExperienceItems;
ExperienceItems.propTypes = {
  experience: PropTypes.object,
};
