import React from "react";

const Footer = ({ children, styling }: any) => {
  return <footer className={`${styling}`}>{children}</footer>;
};

export default Footer;
