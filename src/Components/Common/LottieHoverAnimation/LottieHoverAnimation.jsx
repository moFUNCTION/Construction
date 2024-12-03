// LottieHoverAnimation.js
import React, { useRef } from "react";
import Lottie from "lottie-react";

export const LottieHoverAnimation = ({
  animationData,
  width = 200,
  height = 200,
  ...rest
}) => {
  const lottieRef = useRef(null);

  const handleMouseEnter = () => {
    lottieRef.current.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current.stop();
  };

  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        style={{ width: width, height: height }}
        {...rest}
      />
    </div>
  );
};
