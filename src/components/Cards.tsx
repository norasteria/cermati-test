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
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
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
  column-count: 3;
  column-gap: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;
