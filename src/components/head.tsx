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
      <meta name={"description"} content={"CSS練習サイトです。作成した作品を載せていきます。"} />
    </Helmet>
  );
};

export default Head;
