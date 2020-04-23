import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';
import {FcLike} from 'react-icons/fc';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        
      
        <main>{children}</main>
        <footer>
        <div>
          <p>Made with <FcLike />, by <br/><span className="author">Renan de Andrade Correa</span></p>
          <div className="social">
          <a href="https://github.com/rAndrade360" target="blank"><FaGithub size={25} color="#333" /></a>
         <a href="mailto:r.andrade@acad.ifma.edu.br?Subject=Oie" ><FaEnvelope size={25} color="#999" /></a>
         <a href="https://linkedin.com/in/renan-andrade-correa-9358b2181" target="blank"><FaLinkedin size={25} color="#3333ff" /></a>
          </div>
        
         
        </div>
        <p style={{color: "#999"}}>Créditos de imagem: <a style={{color: "#7159c1"}} href="https://br.freepik.com/fotos-vetores-gratis/pessoas" target="blank">Freepik</a></p>
        
      
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
