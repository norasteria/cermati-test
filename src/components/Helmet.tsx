import React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";

import useMetadata from "../hooks/useMetadata";

const HeadHTML: React.FC<PageProps> = () => {
  const { title, iconLink } = useMetadata();

  return (
    <Helmet title={title}>
      <link rel="shortcut icon" href={iconLink} type="image/x-icon" />
    </Helmet>
  );
};

export default HeadHTML;
