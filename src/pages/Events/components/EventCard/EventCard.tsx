import { EventEntity } from "@/types/entities/event.type";

import styles from "./EventCard.module.scss";

type Props = {
  event: EventEntity;
};
export default function EventCard({ event }: Props) {
  const {
    image,
    category,
    startDate,
    endDate,
    name,
    description,
    participants,
  } = event;
  return (
    <div className={styles.container_wrapper}>
      <article className={styles.container}>
        <div className="relative">
          <div className="overflow-hidden border-round">
            <img src={image} alt="Image" className="border-round w-full" />
          </div>{" "}
          <p
            className="absolute px-2 py-1 border-round-lg font-normal text-white mt-0 mb-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(12px)",
              top: "3%",
              left: " 3%",
            }}
          >
            {category.name}
          </p>
          <p
            className="absolute px-2 py-1 border-round-lg font-normal text-white mt-0 mb-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
              top: "3%",
              right: "3%",
            }}
          >
            {new Date(+startDate).toLocaleDateString()} -{" "}
            {new Date(+endDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex flex-column w-full gap-3">
          <div className="flex w-full justify-content-between align-items-center flex-wrap gap-3">
            <p className="font-semibold text-lg mt-0 mb-0">{name}</p>
          </div>
          <p className="font-normal text-600 mt-0 mb-0">{description}</p>
          <div className="flex flex-wrap justify-content-between md:h-2rem mt-auto">
            <p className="text-base flex align-items-center text-900 mt-0 mb-1">
              <i className="pi pi-users mr-2"></i>
              <span className="font-medium">
                {participants.length} Участников
              </span>
            </p>

            <p className="text-base flex align-items-center text-900 mt-0 mb-1 text-primary">
              <i className="pi pi-check-circle mr-2"></i>
              <span className="font-medium">Регистрация открыта</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
