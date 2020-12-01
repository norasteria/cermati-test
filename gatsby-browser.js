const React = require("react");
const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Quicksand;
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
