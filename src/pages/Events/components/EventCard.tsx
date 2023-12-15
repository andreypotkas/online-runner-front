import { Button } from "primereact/button";

import styles from "./EventCard.module.scss";

export default function EventCard() {
  return (
    <div className={styles.container_wrapper}>
      <article className={styles.container}>
        <div className="relative">
          <img
            src="https://run-connect-bucker.s3.eu-west-1.amazonaws.com/wp2719492-wallpaper-triathlon-ironman.jpg"
            alt="Image"
            className="border-round w-full"
          />
          <p
            className="absolute px-2 py-1 border-round-lg font-normal text-white mt-0 mb-0"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              top: "3%",
              left: " 3%",
            }}
          >
            Superhost
          </p>
          <p
            className="absolute px-2 py-1 border-round-lg font-normal text-white mt-0 mb-0"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              top: "3%",
              right: "3%",
            }}
          >
            {new Date().toDateString()} - {new Date().toDateString()}
          </p>
        </div>
        <div className="flex flex-column w-full gap-3">
          <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
            <p className="font-semibold text-lg mt-0 mb-0">Home in Amsterdam</p>
          </div>
          <p className="font-normal text-lg text-600 mt-0 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
            tortor eu efficitur bibendum, metus sem varius metus, vel semper
            elit arcu eget justo.
          </p>
          <div className="flex flex-wrap justify-content-between md:h-2rem mt-auto">
            <p className="text-base flex align-items-center text-900 mt-0 mb-1">
              <i className="pi pi-users mr-2"></i>
              <span className="font-medium">2792 Участников</span>
            </p>

            <p className="text-base flex align-items-center text-900 mt-0 mb-1">
              <i className="pi pi-check-circle mr-2"></i>
              <span className="font-medium">Регистрация открыта</span>
            </p>
          </div>
          <div className="flex justify-content-between align-items-center">
            <div className="flex">
              <p className="font-semibold text-4xl text-900 mt-0 mb-2 mr-2">
                $510
              </p>
              <span className="text-sm text-gray-500">$</span>
              <p className="font-semibold text-4xl text-900 mt-0 mb-2 line-through text-gray-500">
                850
              </p>
            </div>
            <Button label="Подробнее" />
          </div>
        </div>
      </article>
    </div>
  );
}
