import React from "react";
import { Helmet } from "react-helmet";

type HeadProps = {
  title?: string;
};

const Head: React.FC<HeadProps> = ({ title }) => {
  const fullTitle = title ? `${title} | CSS Learn` : `CSS Learn`;

  return (
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <meta charSet={"utf-8"} />
      <meta name={"viewport"} content={"width=device-width,initial-scale=1"} />

      <title>{fullTitle}</title>
    </Helmet>
  );
};

export default Head;
