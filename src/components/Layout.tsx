import React from "react";
import styled from "styled-components";

import Head from "./Helmet";
import color from "../global/color.json";

const Content = styled.div`
  background: ${color.SmokeGrey};
`;

const Footer = styled.footer`
  background: ${color.BlackRussian};
  width: 100%;
  color: ${color.White};
  font-size: 14px;
  text-align: center;
  height: 60px;
  padding-top: 50px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head />
      <Content>{children}</Content>
      <Footer>
        &#169;{new Date().getFullYear()} Nora Asteria. All rights reserved.
      </Footer>
    </>
  );
};

export default Layout;
