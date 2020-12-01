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
    border: 2px solid ${color.White};
    color: ${color.White};
    background: transparent;
    ::hover {
      background: ${color.White};
      color: ${color.DarkBlue};
    }
  `,
};

export default styled.button<ButtonProps>`
  border: unset;
  border-radius: 2px;
  padding: 10px 15px;
  cursor: pointer;

  :focus {
    outline: unset;
  }

  ${(props) => props.styleType && buttonProps[props.styleType]}
`;
