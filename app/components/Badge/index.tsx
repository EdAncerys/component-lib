import React, { FC } from 'react';
import * as Styles from './styles';

export interface BadgeProps {
  /* Badge value */
  value?: string;
  /* Badge margin */
  margin?: string;
  /* Badge height */
  height?: string;
  /* Badge padding */
  padding?: string;
  /* Badge additional class names */
  className?: string;
  /* Badge background color */
  backgroundColor?: string;
  /* Badge text transform */
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none' | string;
  /* Badge cursor pointer */
  isCursor?: boolean;
  /** Optional click handler */
  onClick?: (event?: React.MouseEvent<Element, MouseEvent>) => void;
}

export const Badge: FC<BadgeProps> = ({
  value,
  padding,
  margin,
  height,
  backgroundColor,
  className,
  textTransform = 'uppercase',
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
