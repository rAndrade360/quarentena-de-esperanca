import React from "react"
import Card from '../components/Card';
import db from '../utils/db.json';
import '../components/main.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {db.map((item)=>(
          <Card data={item} key={item.id}  />
        ))}
  </Layout>
)

export default IndexPage
