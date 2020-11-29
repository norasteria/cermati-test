import styled, { css } from "styled-components";

import color from "../global/color.json";

interface ButtonProps {
  readonly styleType?: "orange" | "blue" | "outline-hover-white";
}

const buttonProps = {
  blue: css`
    background: ${color.Blue};
    color: ${color.White};
  `,
  orange: css`
    background: ${color.Orange};
    color: ${color.White};
  `,
  "outline-hover-white": css`
    color: ${color.White};
    background: transparent;
    ::hover {
      background: ${color.White};
      color: ${color.DarkBlue};
    }
  `,
};

export default styled.button<ButtonProps>`
  ${(props) => props.styleType && buttonProps[props.styleType]}
  border: unset;
  border-radius: 2px;
  padding: 5px 10px;
  cursor: pointer;

  :focus {
    outline: unset;
  }
`;
