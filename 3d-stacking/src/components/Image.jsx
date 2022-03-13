import React from "react";
import cn from "classnames";
const Image = ({ url, rotationPosition, active }) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      className={cn({ active })}
      src={url}
      style={{
        transform: active
          ? `scale(1.1) rotate(${rotationPosition}deg)`
          : `rotate(${rotationPosition}deg)`,
      }}
    ></img>
  );
};

export default Image;
