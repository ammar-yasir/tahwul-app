import type { FC } from "react";
import type { CardProps } from "./Card.types";

const Card: FC<CardProps> = ({
  widthClass,
  heightClass,
  children,
  cardBgColorClass = "bg-white",
  cardTitle,
  titleFontSizeClass = "text-lg",
  padding = "p-4",
  className = "",
}) => {
  return (
    <div
      className={`${className} ${widthClass} ${heightClass} ${cardBgColorClass} ${padding} border border-gray-100 rounded-10`}
    >
      {cardTitle && (
        <h3
          className={`${titleFontSizeClass} text-primary font-bold capitalize`}
        >
          {cardTitle}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;