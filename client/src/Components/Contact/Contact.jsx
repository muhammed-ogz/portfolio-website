import Form from "./Form/Form";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10">
      <h1 className="font-bold text-3xl text-gray-800 mb-5 text-left w-full">
        Benim Hakkımda
      </h1>
      <div className="flex gap-16 px-5">
        <div>
          <h3 className=" font-semibold text-2xl opacity-75">
            Her şey hakkında konuşabiliriz
          </h3>
          <p className="text-xl font-semibold text-gray-500">
            Formu beğenmedin mi email gönder 👋
          </p>
          
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
