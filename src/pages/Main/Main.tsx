import { Button } from "primereact/button";
import bg from "@/assets/images/BgRegistration.png";
import { FaMedal, FaRunning } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { GiHealing, GiPodiumWinner } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";

import skiing from "@/assets/images/skiing.webp";
import cycling from "@/assets/images/cycling.png";
import swimming from "@/assets/images/swimming.jpeg";
import running from "@/assets/images/running.jpeg";
import ParallaxSection from "./components/ParallaxSection/ParallaxSection";

export default function Main() {
  return (
    <div>
      <ParallaxSection />

      <div className="surface-ground text-center pb-8">
        <div className="mb-3 font-bold text-3xl">
          <span className="text-900">Преимущества </span>
          <span className="text-primary">Run Connect</span>
        </div>
        <div className="text-700 mb-6">
          Познакомьтесь с удивительными возможностями нашего приложения Run
          Connect, созданного для максимального комфорта и эффективности в ваших
          тренировках.
        </div>
        <div className="grid">
          <div className="col-12 md:col-4 mb-4 px-5">
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
          <div className="col-12 md:col-4 mb-4 px-5">
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
          <div className="col-12 md:col-4 mb-4 px-5">
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
          <div className="col-12 md:col-4 mb-4 px-5">
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
          <div className="col-12 md:col-4 mb-4 px-5">
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
          <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
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
        </div>
      </div>

      <div className="surface-0 py-8">
        <div className="mb-3 font-bold text-3xl text-center">
          <span className="text-900">Виды спорта </span>
          <span className="text-primary">Run Connect</span>
        </div>
        <div className="text-700 text-xl mb-6 text-center line-height-3">
          Выбирай спорт на любой вкус, соревнуйся, получай удовольствие и
          зарабатывай награды!
        </div>

        <div className="grid">
          <div className="col-12 lg:col-3">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">Running</div>
                <img
                  src={running}
                  alt="Running"
                  className="mb-3"
                  style={{
                    borderRadius: "6px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
                <div className="text-600">
                  Enjoy your runs with our tailored plans for runners of all
                  levels.
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />

                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>5K, 10K, 21K distances</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Outdoor and Indoor</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                <Button
                  label="Смотреть события"
                  className="p-3 w-full mt-auto"
                />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-3">
            {/* Skiing */}
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">Skiing</div>
                <img
                  src={skiing}
                  alt="Skiing"
                  className="mb-3"
                  style={{
                    borderRadius: "6px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
                <div className="text-600">
                  Hit the slopes with our skiing plans designed for all skiing
                  enthusiasts.
                </div>

                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Alpine and Cross-Country</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Mountain adventures</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                <Button
                  label="Смотреть события"
                  className="p-3 w-full mt-auto"
                />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-3">
            {/* Swimming */}
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">
                  Swimming
                </div>
                <img
                  src={swimming}
                  alt="Swimming"
                  className="mb-3"
                  style={{
                    borderRadius: "6px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
                <div className="text-600">
                  Dive into our swimming plans crafted for water lovers of all
                  levels.
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />

                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Pool and Open water</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Stroke improvement</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                <Button
                  label="Смотреть события"
                  className="p-3 w-full mt-auto"
                />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-3">
            {/* Cycling */}
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">Cycling</div>
                <img
                  src={cycling}
                  alt="Cycling"
                  className="mb-3"
                  style={{
                    borderRadius: "6px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
                <div className="text-600">
                  Ride the roads with our cycling plans tailored for cyclists of
                  all levels.
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />

                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Road and Mountain biking</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Group rides and Solo adventures</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                <Button
                  label="Смотреть события"
                  className="p-3 w-full mt-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="surface-ground text-700 text-center my-2 py-6">
        <div className="text-blue-600 font-bold mb-3">
          <i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD
        </div>
        <div className="text-900 font-bold text-5xl mb-3">
          Join Our Design Community
        </div>
        <div className="text-700 text-2xl mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          numquam eligendi quos.
        </div>
        <Button
          label="Смотреть события"
          icon="pi pi-discord"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />
      </div>
    </div>
  );
}
