import React from "react";

type Props = {
  image: string;
  name: string;
};

function DropdownItemTemplate({ image, name }: Props) {
  if (!image || !name) return;

  return (
    <div className="flex align-items-center gap-2">
      <img
        className="shadow-2 border-round"
        src={image}
        alt="reward"
        width={30}
        height={30}
      />
      <span>{name}</span>
    </div>
  );
}

const MemoizedDropdownItemTemplate = React.memo(DropdownItemTemplate);
export default MemoizedDropdownItemTemplate;
