import React from "react"
import Card from '../components/Card';
import database from '../utils/database';
import '../components/main.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {database.map((item)=>(
          <Card data={item} key={item.id}  />
        ))}
  </Layout>
)

export default IndexPage
