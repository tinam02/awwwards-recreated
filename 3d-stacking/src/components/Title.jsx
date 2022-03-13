import React from "react";

const Title = ({ title, i, setRotation, setI }) => {
  return (
    <div
      className="title-item"
      onMouseEnter={() => setRotation(i)}
      onMouseLeave={() => setI(-1)}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
