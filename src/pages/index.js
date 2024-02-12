import * as React from 'react';
import Layout from '../components/layout'

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>Web Developer</p>
    </Layout>
  )
}

export const Head = () => <title>Portfolio | Kiran Namawar</title>

export default IndexPage;