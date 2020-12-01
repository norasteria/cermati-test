import { useStaticQuery, graphql } from "gatsby";
const useMetadata: any = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          iconLink
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useMetadata;
