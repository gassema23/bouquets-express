import React from "react";

const ModalBackdrop = ({ children, duration, state }) => {
  const defaultStyle = {
    transition: `background-color ${duration}ms ease-in-out, z-index ${duration}ms ease-in-out`,
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: -99,
  };

  const transitionStyles = {
    entering: { backgroundColor: "rgba(0, 0, 0, 0)", zIndex: -99 },
    entered: { backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 10 },
  };

  return (
    <>
      {state == "entered" && (
        <div
          className="bg-dark/50 fixed top-0 left-0 h-screen w-screen"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        ></div>
      )}
    </>
  );
};

export default ModalBackdrop;
