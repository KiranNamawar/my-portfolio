import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from '../components/seo';

function IndexPage() {
  return (
    <Layout pageTitle="Kiran Namawar">
      <p>Web Developer</p>
      <StaticImage alt="a group of trees covered in snow, in forest" src="../images/background.jpg" />
      <p>
        Photo by
        <a href="https://unsplash.com/@lulu09?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          拴 张
        </a>
        on
        <a href="https://unsplash.com/photos/a-group-of-trees-covered-in-snow-next-to-a-forest-cUr8oSVN3NE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </p>
    </Layout>
  );
}

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
