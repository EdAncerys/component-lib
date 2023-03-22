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
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none" | string;
  /* Badge cursor pointer */
  isCursor?: boolean;
  /** Optional click handler */
  onClick?: (event?: React.MouseEvent<Element, MouseEvent>) => void;
}
