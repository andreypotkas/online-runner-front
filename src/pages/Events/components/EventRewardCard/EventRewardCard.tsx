import React from "react";

import { EventRewardEntity } from "@/types/entities/eventReward.type";

type Props = {
  item: EventRewardEntity;
};

function EventRewardCard({ item }: Props) {
  const {
    name,
    description,
    price,
    // image: { path },
  } = item;
  return (
    <div className="col-12 md:col-3">
      <div className="shadow-2 p-2 surface-card border-round">
        <div className="relative">
          <span
            className="surface-card text-900 shadow-2 px-3 py-2 absolute"
            style={{ top: "1rem", right: "1rem" }}
          >
            {(price ?? 10) + " р."}
          </span>
          {/* <img src={path} className="w-full h-14rem" alt="list-4-6" /> */}
        </div>
        <div className="flex justify-content-between align-items-center">
          <span className="text-900 font-medium text-xl h-3rem text-overflow-ellipsis overflow-hidden">
            {name}
          </span>
        </div>
        <div className=" text-400 h-6rem text-overflow-ellipsis overflow-hidden">
          {description}
        </div>
      </div>
    </div>
  );
}
const MemoizedEventRewardCard = React.memo(EventRewardCard);
export default MemoizedEventRewardCard;
