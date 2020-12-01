import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import color from "../global/color.json";

const BannerWrapper = styled.div`
  position: relative;

  .banner {
    height: 65vh;
  }

  .logo {
    margin: 60px 30px;
  }
`;

const Mask = styled.div`
  background: ${color.DarkBlue};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  opacity: 0.7;
`;

const BannerContentWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const BannerTitle = styled.div`
  align-items: center;
  justify-content: center;
  color: ${color.White};
  display: flex;

  p {
    margin-block-end: 0.5em;
    margin-block-start: 0.5em;
  }

  > * {
    text-align: center;
    max-width: 420px;
  }
`;

const Banner: React.FC = ({ children }) => {
  const bannerImage = useStaticQuery(graphql`
    query Images {
      banner: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <BannerWrapper>
      <Img
        className="banner"
        fluid={bannerImage.banner.childImageSharp.fluid}
      />
      <Mask />
      <BannerContentWrapper>
        <Img className="logo" fixed={bannerImage.logo.childImageSharp.fixed} />
        <BannerTitle>
          <div>{children}</div>
        </BannerTitle>
      </BannerContentWrapper>
    </BannerWrapper>
  );
};

export default Banner;
