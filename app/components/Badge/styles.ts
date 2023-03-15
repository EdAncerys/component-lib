import styled from '@emotion/styled';
import { BadgeProps } from '.';

export const Wrapper = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: ${({ padding }) => padding || `2px 8px`};
  min-height: 15px;
  height: ${({ height }) => height || `fit-content`};
  width: fit-content;
  min-width: fit-content;
  border-radius: 12px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || '#222'};
  text-transform: ${({ textTransform }) => textTransform};
  letter-spacing: 0.5px;
  user-select: none;
  cursor: ${({ isCursor }) => isCursor && `pointer`};

  p {
    font-weight: 400;
    font-size: 9px;
    line-height: 10px;
  }

  &:hover {
    svg {
      cursor: ${({ isCursor }) => isCursor && `pointer !important`};
    }
  }
`;
