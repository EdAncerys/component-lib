import React, { FC } from "react";
import { BadgeProps } from "./interface";
import * as Styles from "./styles";

export const Badge: FC<BadgeProps> = ({
  value,
  padding,
  margin,
  height,
  backgroundColor,
  className,
  textTransform = "uppercase",
  isCursor = false,
  onClick,
  ...props
}) => {
  return (
    <Styles.Wrapper
      padding={padding}
      margin={margin}
      onClick={onClick}
      textTransform={textTransform}
      height={height}
      backgroundColor={backgroundColor}
      className={className}
      isCursor={isCursor}
      {...props}
    >
      {value}
    </Styles.Wrapper>
  );
};
