import React from "react";
import styled from "styled-components"

import Head from "./Helmet";
import color from "../global/color.json"

const Content = styled.div`
  background: ${color.SmokeGrey};
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head />
      <Content>
        {children}
      </Content>
    </>
  );
};

export default Layout;
