import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import color from "../global/color.json";

type CardProps = {
  title: string;
  desc: string;
  icon: IconDefinition;
};

const CardWrapper = styled.div`
  border: 1px solid ${color.DarkGray};
  padding: 15px;
  margin-bottom: 30px;
  min-height: 150px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Card: React.FC<CardProps> = (props) => (
  <CardWrapper>
    <TitleWrapper>
      <b style={{ fontSize: 18 }}>{props.title}</b>
      <FontAwesomeIcon icon={props.icon} size="2x" color={color.DarkGray} />
    </TitleWrapper>
    <div>{props.desc}</div>
  </CardWrapper>
);

export default Card;

export const CardGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
