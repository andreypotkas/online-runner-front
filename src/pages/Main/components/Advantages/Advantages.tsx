import React from "react";
import { FaMedal, FaRunning } from "react-icons/fa";
import { GiHealing, GiPodiumWinner } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineFreeCancellation } from "react-icons/md";

function Advantages() {
  return (
    <section className="text-center surface-ground p-8">
      <div className="mb-3 font-bold text-3xl">
        <span className="text-900">Преимущества </span>
        <span className="text-primary">RunConnect</span>
      </div>
      <div className="text-700 mb-6">
        Познакомьтесь с удивительными возможностями нашего приложения Run
        Connect, созданного для максимального комфорта и эффективности в ваших
        тренировках.
      </div>
      <div className="grid">
        <article className="col-12 md:col-4">
          <div className="p-2 border-1 border-round	surface-border h-full">
            <span
              className="p-3 shadow-2 mb-3 inline-block text-primary"
              style={{ borderRadius: "10px" }}
            >
              <FaRunning size="36" />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Активный образ жизни
            </div>
            <span className="text-700 line-height-3">
              Мы создали Виртуальные Забеги, чтобы помочь людям, которые хотят
              вести активный образ жизни, сохранять интерес к занятиям спортом и
              продолжать тренироваться, несмотря на недостаток свободного
              времени.
            </span>
          </div>
        </article>
        <article className="col-12 md:col-4">
          <div className="p-2 border-1 border-round	surface-border h-full">
            <span
              className="p-3 shadow-2 mb-3 inline-block  text-primary"
              style={{ borderRadius: "10px" }}
            >
              <GiPodiumWinner size="32" />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Удобство в любом месте{" "}
            </div>
            <span className="text-700 line-height-3">
              Выбери дистанцию, пробеги её или пройди по улице, либо в закрытом
              помещении (например на беговой дорожке), в любое удобное для тебя
              время и получи уникальную медаль! Бери с собой членов семьи или
              друзей и финишируйте вместе!
            </span>
          </div>
        </article>
        <article className="col-12 md:col-4 ">
          <div className="p-2 border-1 border-round	surface-border h-full">
            <span
              className="p-3 shadow-2 mb-3 inline-block text-primary"
              style={{ borderRadius: "10px" }}
            >
              <MdOutlineFreeCancellation size="36" />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Соревнуйся с комфортом
            </div>
            <span className="text-700 line-height-3">
              Больше не нужно тратить время на получение стартового пакета,
              ждать в очереди или нервничать в день забега. Не нужно толпиться
              на старте и на финише, или испытывать дискомфорт, когда тебя
              обгоняют более быстрые участники.
            </span>
          </div>
        </article>
        <article className="col-12 md:col-4 ">
          <div className="p-2 border-1 border-round	surface-border h-full">
            <span
              className="p-3 shadow-2 mb-3 inline-block text-primary"
              style={{ borderRadius: "10px" }}
            >
              <GiHealing size="36" />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Получай удовольствие
            </div>
            <span className="text-700 line-height-3">
              Ведь суть забегов не всегда во времени. Идея в том, чтобы
              оставаться здоровым и активным, испытывать удовольствие от занятий
              и с каждым днём становиться лучшей версией себя!
            </span>
          </div>
        </article>
        <article className="col-12 md:col-4 ">
          <div className="p-2 border-1 border-round	surface-border h-full">
            <span
              className="p-3 shadow-2 mb-3 inline-block text-primary"
              style={{ borderRadius: "10px" }}
            >
              <IoTimeOutline size="32" />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Когда угодно
            </div>
            <span className="text-700 line-height-3">
              Virtual Run Ru предлагает стартовый номер и медаль, точно также
              как это бывает на традиционных забегах, но вы можете участвовать в
              своём собственном графике и со своим темпом.
            </span>
          </div>
        </article>
        <article className="col-12 md:col-4 ">
          <div className="p-2 border-1 border-round	surface-border h-full">
            <span
              className="p-3 shadow-2 mb-3 inline-block text-primary"
              style={{ borderRadius: "10px" }}
            >
              <FaMedal size="36" />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Зарабатывай награды
            </div>
            <span className="text-700 line-height-3">
              Можно финишировать Виртуальный забег в любом месте и за любое
              время в течение указанных дней пока открыто событие. Просто
              пробегите или пройдите свои 5/10/21,1км или более и получите
              уникальную медаль!
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

const MemoizedAdvantages = React.memo(Advantages);
export default MemoizedAdvantages;
