import React from "react";
import { Helmet } from "react-helmet";

const Head: React.FC = () => {
  return (
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <meta charSet={"utf-8"} />
    </Helmet>
  );
};

export default Head;
