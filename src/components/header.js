import PropTypes from "prop-types"
import React from "react";
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <h1>{siteTitle}</h1>
          <div className="picture">
          <img src="https://image.freepik.com/vetores-gratis/ficar-em-casa-relaxar-conceito_23-2148479286.jpg" alt="Pessoas em quarentena" />  
          </div>
          <div className="motivacao">
            <h2>Motivação</h2>
            <p>Nesse momento complicado que estamos passando, felizmente têm muitos pastores, comunidades e membros da Igreja Adventista do Sétimo Dia realizando pequenos eventos, 100% online e de graça pra galera. Por isso, criamos esse site com o objetivo de juntar todas essas iniciativas maravilhosas que estão nos ajudando a passar por essa crise de uma forma mais feliz e cheios do amor de Deus!</p>
          </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
