import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";

import "./Preview.scss";

const Preview = () => {
  const navigate = useNavigate();
  const parallaxRef = useRef(null);

  const handleClickRegister = () => navigate("/auth/register");
  const handleClickEvents = () => navigate("/events");

  return (
    <div
      className="col-12 md:col-6 p-6 text-center text-left flex align-items-center preview"
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
          label="Регистрация"
          type="button"
          className="mr-3 p-button-raised"
          onClick={handleClickRegister}
        />
        <Button
          label="Посмотреть события"
          type="button"
          className="p-button-outlined"
          onClick={handleClickEvents}
        />
      </section>
    </div>
  );
};

export default Preview;
