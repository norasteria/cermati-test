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
  align-items: center;
  justify-content: center;
  color: ${color.White};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
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
    query BannerImage {
      image: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BannerWrapper>
      <Img className="banner" fluid={bannerImage.image.childImageSharp.fluid} />
      <Mask />
      <BannerContentWrapper>
        <div>{children}</div>
      </BannerContentWrapper>
    </BannerWrapper>
  );
};

export default Banner;
