import { Button } from "primereact/button";
import bg from "@/assets/images/BgRegistration.png";

export default function Main() {
  return (
    <div>
      <div className="grid grid-nogutter surface-0 text-800 mb-2">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              Подними свою форму
            </span>
            <div className="text-6xl text-primary font-bold mb-3">
              Почувствуй азарт онлайн-спорта
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
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
        <div className="col-12 md:col-6 overflow-hidden">
          <img
            src={bg}
            alt="hero-1"
            className="md:ml-auto block md:h-full"
            style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
          />
        </div>
      </div>

      <div className="surface-0 text-center my-2 py-6">
        <div className="mb-3 font-bold text-3xl">
          <span className="text-900">Один Продукт, </span>
          <span className="text-blue-600">Много Возможностей</span>
        </div>
        <div className="text-700 mb-6">
          Участвуй в онлайн тренировках и соревнованиях, используя наш продукт,
          который создан для твоего комфорта и эффективности.
        </div>
        <div className="grid">
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Разработано для Разработчиков
            </div>
            <span className="text-700 line-height-3">
              Создано для того, чтобы обеспечить удобство и эффективность онлайн
              тренировок и соревнований. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Полная Шифровка
            </div>
            <span className="text-700 line-height-3">
              Защищай свои данные и результаты тренировок с помощью полной
              шифровки. Risus nec feugiat in fermentum posuere urna nec. Posuere
              sollicitudin aliquam ultrices sagittis.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Прост в Использовании
            </div>
            <span className="text-700 line-height-3">
              Наслаждайся легкостью использования нашего продукта. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac
              tincidunt vitae semper.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Быстрая и Глобальная Поддержка
            </div>
            <span className="text-700 line-height-3">
              Получай поддержку в любом уголке мира. Fermentum et sollicitudin
              ac orci phasellus egestas tellus rutrum tellus.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Открытый Исходный Код
            </div>
            <span className="text-700 line-height-3">
              Исследуй и адаптируй наш продукт благодаря открытому исходному
              коду. Nec tincidunt praesent semper feugiat. Sed adipiscing diam
              donec adipiscing tristique risus nec feugiat.
            </span>
          </div>
          <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Доверенная Безопасность
            </div>
            <span className="text-700 line-height-3">
              Доверяй безопасности нашего продукта. Mattis rhoncus urna neque
              viverra justo nec ultrices. Id cursus metus aliquam eleifend.
            </span>
          </div>
        </div>
      </div>

      <div className="surface-0 text-700 text-center my-2 py-6">
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
          label="Join Now"
          icon="pi pi-discord"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />
      </div>

      <div className="surface-0 my-2 py-6">
        <div className="text-900 font-bold text-6xl mb-4 text-center">
          Pricing Plans
        </div>
        <div className="text-700 text-xl mb-6 text-center line-height-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          numquam eligendi quos.
        </div>

        <div className="grid">
          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">Basic</div>
                <div className="text-600">Plan description</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold text-2xl text-900">$9</span>
                  <span className="ml-2 font-medium text-600">per month</span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Morbi tincidunt augue</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                <Button label="Buy Now" className="p-3 w-full mt-auto" />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">Premium</div>
                <div className="text-600">Plan description</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold text-2xl text-900">$29</span>
                  <span className="ml-2 font-medium text-600">per month</span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Morbi tincidunt augue</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Duis ultricies lacus sed</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                <Button label="Buy Now" className="p-3 w-full" />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">
                  Enterprise
                </div>
                <div className="text-600">Plan description</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold text-2xl text-900">$49</span>
                  <span className="ml-2 font-medium text-600">per month</span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Morbi tincidunt augue</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Duis ultricies lacus sed</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Imperdiet proin</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Nisi scelerisque</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                <Button
                  label="Buy Now"
                  className="p-3 w-full p-button-outlined"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
