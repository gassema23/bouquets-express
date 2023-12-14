import ModalBackdrop from "./ModalBackdrop";

const Sidebar = ({ children, duration, state, position = "right" }) => {
  var classStyle = "";
  var defaultStyle = {};
  var transitionStyles = {};

  if (position === "right") {
    classStyle =
      "w-full sm:w-2/3 lg:w-1/3 h-screen fixed top-0 right-0 bg-white z-50";
    defaultStyle = {
      transition: `transform ${duration}ms ease-in-out`,
      transform: "translateX(101%)",
    };
    transitionStyles = {
      entering: { transform: "translateX(101%)" },
      entered: { transform: "translateX(0)" },
    };
  } else if (position === "top") {
    classStyle = "w-full h-3/5 max-h-fit fixed top-0 left-0 bg-white z-50";
    defaultStyle = {
      transition: `transform ${duration}ms ease-in-out`,
      transform: "translateY(-101%)",
    };
    transitionStyles = {
      entering: { transform: "translateY(-101%)" },
      entered: { transform: "translateY(0%)" },
    };
  } else {
    classStyle = "w-1/2 xl:w-1/5 h-screen fixed top-0 left-0 bg-white z-50";
    defaultStyle = {
      transition: `transform ${duration}ms ease-in-out`,
      transform: "translateX(101%)",
    };
    transitionStyles = {
      entering: { transform: "translateX(101%)" },
      entered: { transform: "translateX(0)" },
    };
  }

  return (
    <>
      <ModalBackdrop duration={0} state={state}></ModalBackdrop>
      <div
        className={classStyle}
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Sidebar;
