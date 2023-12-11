import React from "react";

const Button = (props) => {
  const backgroundColorVariant = {
    primary: "bg-primary ",
    dark: "bg-dark",
    lightPink: "bg-lightPink",
    mystyRose: "bg-mystyRose",
    line: "bg-line",
    error: "bg-error",
    success: "bg-success",
    info: "bg-info",
    mute: "bg-mute",
    white: "bg-white",
  };
  const borderColorVariant = {
    primary: "border-primary ",
    dark: "border-dark",
    lightPink: "border-lightPink",
    mystyRose: "border-mystyRose",
    line: "border-line",
    error: "border-error",
    success: "border-success",
    info: "border-info",
    mute: "border-mute",
    white: "border-white",
  };
  const textColorVariant = {
    primary: "text-primary group-hover:text-white",
    dark: "text-dark group-hover:text-white",
    lightPink: "text-lightPink group-hover:text-white",
    mystyRose: "text-mystyRose group-hover:text-white",
    line: "text-line group-hover:text-white",
    error: "text-error group-hover:text-white",
    success: "text-success group-hover:text-white",
    info: "text-info group-hover:text-white",
    mute: "text-mute group-hover:text-white",
    white: "text-white group-hover:text-dark",
  };

  const onclick = props.onClick ? props.onClick : "";
  const styleType = props.styleType ? props.styleType : "dark";

  if (props.to) {
    return (
      <form action={props.to}>
        <button
          onClick={onclick}
          className={`${
            props.status && backgroundColorVariant[styleType]
          } px-3.5 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium ${
            borderColorVariant[styleType]
          } `}
          src={props.to}
        >
          <span
            className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20  ${backgroundColorVariant[styleType]} top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}
          ></span>
          <span
            className={`${
              props.status
                ? styleType === "white"
                  ? "text-black"
                  : "text-white"
                : ""
            } relative transition duration-500 ${
              textColorVariant[styleType]
            } ease`}
          >
            {props.children}
          </span>
        </button>
      </form>
    );
  }
  return (
    <button
      onClick={onclick}
      type="button"
      className={`${
        props.status && backgroundColorVariant[styleType]
      } px-3.5 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium ${
        borderColorVariant[styleType]
      } `}
    >
      <span
        className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20  ${backgroundColorVariant[styleType]} top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}
      ></span>
      <span
        className={`${
          props.status
            ? styleType === "white"
              ? "text-black"
              : "text-white"
            : ""
        } relative transition duration-500 ${textColorVariant[styleType]} ease`}
      >
        {props.children}
      </span>
    </button>
  );
};

export default Button;
