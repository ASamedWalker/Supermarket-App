import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";

const Button = (props) => {
  const {children, outline, className, ...rest} = props;
  const classes = clsx({
    "btn": true,
    "btn-outline": outline,
    "btn-default": !outline,
  }, className)
  return (
    <button className={classes}{...rest}>{children}</button>
  );

}

export default Button;