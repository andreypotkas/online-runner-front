import { Button } from "primereact/button";
import { useEffect, useRef } from "react";
import "./ParallaxSection.scss";

const ParallaxSection = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallax = parallaxRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      (parallax! as HTMLDivElement).style.backgroundPositionY = `${
        scrollPosition * 0.5
      }px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center parallax-section"
      ref={parallaxRef}
    >
      <section className="px-2">
        <span className="block text-6xl font-bold mb-1 text-white">
          Подними свою форму
        </span>
        <div className="text-6xl text-primary font-bold mb-3">
          Почувствуй азарт онлайн-спорта
        </div>
        <p
          className="mt-0 mb-4 text-700 text-white line-height-3 "
          style={{ maxWidth: "60rem" }}
        >
          Присоединяйся к нашему сообществу спортсменов и подними свою
          тренировку на новый уровень. Бег, лыжи и другие захватывающие виды
          спорта – мы предоставляем платформу, чтобы ты мог соревноваться,
          совершенствоваться и общаться с единомышленниками.
        </p>

        <Button
          label="Узнать больше"
          type="button"
          className="mr-3 p-button-raised"
        />
        <Button
          label="Прямой эфир"
          type="button"
          className="p-button-outlined"
        />
      </section>
    </div>
  );
};

export default ParallaxSection;
