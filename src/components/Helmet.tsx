import React from "react";
import { Helmet } from "react-helmet";

import useMetadata from "../utils/useMetadata";

const HeadHTML: React.FC<{}> = () => {
  const { title, iconLink } = useMetadata();

  return (
    <Helmet title={title}>
      <link rel="shortcut icon" href={iconLink} type="image/x-icon" />
    </Helmet>
  );
};

export default HeadHTML;
