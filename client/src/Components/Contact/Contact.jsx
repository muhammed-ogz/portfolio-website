import Form from "./Form/Form";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-10 px-6" id="contact">
      <h1 className="font-bold md:text-3xl text-xl text-gray-800 md:mb-5 text-center md:text-left w-full">
        Benimle İletişime Geç!
      </h1>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-semibold text-2xl opacity-75 mb-4">
            Her şey hakkında konuşabiliriz
          </h3>
          <p className="text-xl font-semibold text-gray-500">
            Formu beğenmedin mi email gönder 👋
          </p>
        </div>

        {/* Form Section */}
        <div className="flex-1">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
