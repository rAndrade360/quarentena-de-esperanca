import React from "react"
import SEO from "../components/seo"
import './404.css';
import question from '../images/question.png'

const NotFoundPage = () => (
  <div className="pageError">
    <div className="container">
    <SEO title="404: Not found" />
    <h1>Oops! Essa página não existe!</h1>
    <img src={question} alt="Not found" />
    <p>Você acessou um caminho que não existe... que triste!</p>
    <div id="button-group">
      <a id="go-back" href="https://quarentenadeesperanca.netlify.app">Voltar ao Início</a>
      <a id="know-the-author" target="blank" href="https://github.com/rAndrade360">Conhecer o autor</a>
    </div>
    </div>
    </div>
);

export default NotFoundPage
