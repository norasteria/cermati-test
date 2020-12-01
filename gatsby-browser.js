const React = require("react");
const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Open Sans";
    }
`;

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};
