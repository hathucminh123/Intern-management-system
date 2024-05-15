import clsx from "clsx";
import React from "react";

const TitleComponent = ({ title, className }) => {
  return (
    <h2 className={clsx("text-2xl font-semibold capitalize", className)}>
      {title}
    </h2>
  );
};

export default TitleComponent;