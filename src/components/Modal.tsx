import React from "react";
import styled, { css } from "styled-components";
import moment from "moment"

import color from "../global/color.json";
import hexOpacity from "../utils/hexCodeOpacity"

/**
 * NOTIFICATION PANEL FOR COOKIE CONSENT
 */
type ModalConsentCookieProps = {
  visible: boolean;
};

type ConsentCookieContainerProps = {
  visible: boolean;
};

const ConsentCookieContainer = styled.div<ConsentCookieContainerProps>`
  background: ${color.SmokeGrey};
  position: fixed;
  transition: top 1s;
  width: calc(100vw - 20px);
  z-index: 10;
  padding: 10px;
  font-size: 13px;

  ${(props) =>
    props.visible
      ? css`
          top: 0;
        `
      : css`
          top: -100%;
        `}
`;

const CookieInfo = styled.div`
  max-width: 720px;
  display: block;
  margin: auto;
  justify-content: space-between;

  button {
    margin-top: 10px;
  }

  @media (min-width: 600px) {
    display: flex;

    button {
      margin-top: unset;
    }
  }
`;

export const ModalConsentCookie: React.FC<ModalConsentCookieProps> = (
  props
) => {
  return (
    <ConsentCookieContainer visible={props.visible}>
      <CookieInfo>{props.children}</CookieInfo>
    </ConsentCookieContainer>
  );
};

/**
 * NEWSLETTER PANEL
 */

const onNewsletterPanelClose = () => { }

type ModalNewsletterProps = {
  visible: boolean;
  title: string;
  onClose?: typeof onNewsletterPanelClose
};

type ModalContainerProps = {
  visible: boolean;
};

const NewsletterContainerProps = styled.div<ModalContainerProps>`
  background: ${color.Blue + hexOpacity(90)};
  position: fixed;
  transition: bottom 1s;
  z-index: 10;
  padding: 10px;
  font-size: 14px;
  color: ${color.White};

  ${(props) =>
    props.visible
      ? css`
          bottom: 0;
        `
      : css`
          bottom: -100%;
        `}
`;

const SubsEmailContent = styled.div`
  max-width: 640px;
  margin: 0 20px 20px;
`;

const CloseButton = styled.div`
    text-align: right;
    font-size: 22px;
    cursor: pointer;
`

export const ModalNewsletterSubs: React.FC<ModalNewsletterProps> = (props) => {
  const { closeNewsTime } = localStorage
  const diffCloseTime = moment().diff(closeNewsTime, "minute")

  if (closeNewsTime && diffCloseTime < 10) return null

  return (
    <NewsletterContainerProps visible={props.visible}>
      <CloseButton onClick={props.onClose}>&times;</CloseButton>
      <SubsEmailContent>
        <div style={{ fontSize: 18, fontWeight: "bolder" }}>{props.title}</div>
        <div style={{ marginTop: 10 }}>{props.children}</div>
      </SubsEmailContent>
    </NewsletterContainerProps>
  );
};
