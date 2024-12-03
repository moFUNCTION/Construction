import React, { useRef, useState, useEffect } from "react";

export const ScrollParallaxWrapper = ({
  children,
  scrollSpeed = 0.5,
  style = {},
  className = "",
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        ...style,
      }}
      className={className}
    >
      {React.Children.map(children, (child, index) => {
        // Calculate different scroll speeds for each layer
        const translateY = scrollPosition * (scrollSpeed * (index + 1));

        return (
          <div
            style={{
              position: "absolute",
              width: "100%",
              transform: `translateY(${translateY}px)`,
              transition: "transform 0.1s ease-out",
              zIndex: -index,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};
