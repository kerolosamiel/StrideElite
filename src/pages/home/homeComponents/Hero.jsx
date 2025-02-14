import Nike from "../../../assets/hr-jordan.png";
import Lacoste from "../../../assets/hr-lacoste.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LacosteLogo from "../../../assets/lacoste-logo.png";
import NikeLogo from "../../../assets/nike-logo.png";

const Hero = () => {
  const heroData = [
    { highlightImg: NikeLogo, img: Nike, color: "#7b1e27" },
    { highlightImg: LacosteLogo, img: Lacoste, color: "#313246" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--hero-background",
      heroData[index].color
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  setTimeout(() => {
    setIndex(index + 1);

    if (index === 1) {
      setIndex(0);
    }
  }, 5000);

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
            <motion.img
              src={heroData[index].highlightImg}
              alt="Lacoste"
              key={`title2-${index}`}
              initial={{ opacity: 0, y: "-15%", x: "-50%" }}
              animate={{ opacity: 0.4, y: "-50%", x: "-50%" }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            />

            <motion.div
              className="circle"
              key={`circle-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            ></motion.div>
          </div>
        </div>

        <div className="newsbar">
          <div className="lines line1">
            <p>Nike</p>
            <p>Addidas</p>
            <p>Converse</p>
            <p>Lacoste</p>
            <p>Gucci</p>
          </div>

          <div className="lines line2">
            <p>Running</p>
            <p>Sneakers</p>
            <p>Golf</p>
            <p>Walking</p>
            <p>Soccer</p>
          </div>
        </div>

        <div className="blending"></div>
      </div>
    </section>
  );
};

export default Hero;
