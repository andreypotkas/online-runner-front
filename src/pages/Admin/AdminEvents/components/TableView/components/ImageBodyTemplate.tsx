import React from "react";

import { EventRewardEntity } from "@/types/entities/eventReward.type";

type Props = {
  product: EventRewardEntity;
};
function ImageBodyTemplate({ product }: Props) {
  return (
    <img
      src={product?.image}
      alt={product?.name}
      className="w-6rem h-4rem shadow-2 border-round"
    />
  );
}

const MemoizedImageBodyTemplate = React.memo(ImageBodyTemplate);
export default MemoizedImageBodyTemplate;
