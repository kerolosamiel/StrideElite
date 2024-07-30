import Nike from "../../../assets/hr-jordan.png";
import Gucci from "../../../assets/hr-gucci.png";
import Lacoste from "../../../assets/hr-lacoste.png";
import { useEffect, useState } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

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
          <div className="img">
            <img src={heroData[index].img} alt="Nike" />
          </div>
          <div className="title">
            <h1>{heroData[index].title}</h1>
            <h1>{heroData[index].title}</h1>

            <div className="circle"></div>
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
