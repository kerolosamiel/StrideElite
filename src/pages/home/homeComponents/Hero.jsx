import Nike from "../../../assets/hr-jordan.png";
import Gucci from "../../../assets/hr-gucci.png";
import Lacoste from "../../../assets/hr-lacoste.png";
import { useEffect, useState } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Hero = () => {
  const heroData = [
    { title: "NIKE", img: Nike, color: "#7b1e27" },
    { title: "GUCCI", img: Gucci, color: "#a57757" },
    { title: "LACOSTE", img: Lacoste, color: "#313246" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--hero-background",
      heroData[index].color
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const increaseIndex = () => {
    if (index < 2) {
      setIndex(index + 1);
    } else if (index === 2) {
      setIndex(0);
    }
  };

  const decreaseIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) {
      setIndex(2);
    }
  };
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="slides">
          <motion.div
            className="img"
            key={`img-${index}`}
            initial={{ opacity: 0, x: "15%", rotate: 0 }}
            animate={{ opacity: 1, x: "-10%", rotate: -25 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.6 }}
          >
            <img src={heroData[index].img} alt="Nike" />
          </motion.div>

          <div className="title">
            <motion.h1
              key={`title1-${index}`}
              initial={{ opacity: 0, y: "-15%", x: "-50%" }}
              animate={{ opacity: 1, y: "-50%", x: "-50%" }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            >
              {heroData[index].title}
            </motion.h1>
            <motion.h1
              key={`title2-${index}`}
              initial={{ opacity: 0, y: "-15%", x: "-50%" }}
              animate={{ opacity: 1, y: "-50%", x: "-50%" }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            >
              {heroData[index].title}
            </motion.h1>

            <motion.div
              className="circle"
              key={`circle-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            ></motion.div>
          </div>

          <button onClick={increaseIndex} className="right">
            <RiArrowRightWideFill />
          </button>

          <button onClick={decreaseIndex} className="left">
            <RiArrowLeftWideFill />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
