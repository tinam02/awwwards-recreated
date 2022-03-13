import React, { useEffect, useState, useRef } from "react";
import Title from "../components/Title";
import Image from "../components/Image";
import Header from "../components/Header/Header";
import { pageData } from "../data";
import "../styles/home.css";
const Home = () => {
  const [rotationPosition, setRotation] = useState(
    new Array(pageData.length).fill(0)
  );
  const [activeI, setActiveI] = useState(-1);

  const handleSetRotation = (itemI) => {
    // different rotations every time you hover
    // there is a limit to how much it can rotate -7,7
    //math random to return between 0-1
    //if we get something smaller than 0.5 we get 0
    //if its bigger than 0.5 we get 1
    const newRotation =
      Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);
    const tempState = [...rotationPosition];

    tempState[itemI] = newRotation;
    setRotation(tempState);
    setActiveI(itemI);
  };
  return (
    <>
      <Header />
      <div className="main-container" id="main-container">
        <div className="title-container">
          {pageData.map(({ title }, i) => (
            <Title
              key={i}
              title={title}
              i={i}
              setRotation={handleSetRotation}
              setI={setActiveI}
            />
          ))}
        </div>
        <div className="image-container">
          {pageData.map(({ url }, i) => (
            <Image
              key={i}
              url={url}
              active={activeI === i}
              rotationPosition={rotationPosition[i]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
