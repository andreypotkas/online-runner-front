import { Button } from "primereact/button";

import cycling from "@/assets/images/cycling.png";
import running from "@/assets/images/running.jpeg";
import skiing from "@/assets/images/skiing.webp";
import swimming from "@/assets/images/swimming.jpeg";

export default function Events() {
  return (
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
              <Button label="Смотреть события" className="p-3 w-full mt-auto" />
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
              <Button label="Смотреть события" className="p-3 w-full mt-auto" />
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
              <div className="text-900 font-medium text-xl mb-2">Swimming</div>
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
              <Button label="Смотреть события" className="p-3 w-full mt-auto" />
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
              <Button label="Смотреть события" className="p-3 w-full mt-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
