import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    title: "",
    comment: ""
  });

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUri = import.meta.env.VITE_MAILER_URI;
    
    try {
      const response = await fetch(`${apiUri}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // Reset form if success
      setFormData({
        name: "",
        email: "",
        title: "",
        comment: ""
      });

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Mail gönderme hatası", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl p-5">
      {/* Name and Email Fields */}
      <div className="flex gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2 w-full sm:w-1/2">
          <label htmlFor="username" className="font-semibold text-xl text-gray-700">
            İsim
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Adınızı girin"
            className="border py-4 px-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
            value={formData.name}
            onChange={handleInput}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 w-full sm:w-1/2">
          <label htmlFor="email" className="font-semibold text-xl text-gray-700">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-posta adresinizi girin"
            className="border py-4 px-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
            value={formData.email}
            onChange={handleInput}
          />
        </div>
      </div>

      {/* Title Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-semibold text-xl text-gray-700">
          Metin Başlığı
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Metin Başlığı"
          className="border py-4 px-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          value={formData.title}
          onChange={handleInput}
        />
      </div>

      {/* Comment Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="comment" className="font-semibold text-xl text-gray-700">
          Yorum
        </label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Yorumunuzu buraya yazın"
          rows="5"
          className="border py-4 px-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          value={formData.comment}
          onChange={handleInput}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-start mt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-[#CCD5AE] text-white font-semibold rounded-2xl hover:bg-[#C1845B]"
        >
          Gönder
        </button>
      </div>
    </form>
  );
};

export default Form;
