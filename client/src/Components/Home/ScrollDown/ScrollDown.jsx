import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ScrollDown = ({ textArray }) => {
  const [count, setCount] = useState(0); // Başlangıç değeri 0

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % textArray.length); // Döngü sağlamak için modül kullanıyoruz
    }, 3000); // 3000 ms = 3 saniye

    // Cleanup function: Component unmount edildiğinde interval'ı temizle
    return () => clearInterval(intervalId);
  }, [textArray.length]); // textArray.length bağımlılığı, array uzunluğu değişirse interval yeniden başlar

  return (
    <div>
      <h3 className="text-base md:text-xl text-gray-600 px-4">
        I`m a{" "}
        <span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5, // Başlangıç gecikmesi
              duration: 0.5, // Geçiş süresi
              ease: "easeInOut", // Geçişin yumuşak olması için 'easeInOut' kullanıyoruz
            }}
            className="text-xl"
          >
            {textArray[count]}
          </motion.span>
        </span>
        {" "}Developer
      </h3>
    </div>
  );
};

ScrollDown.propTypes = {
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired, // textArray'in bir dizi string olduğunu belirtiyoruz
};

export default ScrollDown;
