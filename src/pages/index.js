import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>Web Developer</p>
      <StaticImage alt="skyline" src="" />
    </Layout>
  );
}

export const Head = () => <title>Portfolio | Kiran Namawar</title>;

export default IndexPage;
