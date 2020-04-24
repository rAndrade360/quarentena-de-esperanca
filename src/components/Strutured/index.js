import React from 'react';
import {Helmet} from 'react-helmet';

// import { Container } from './styles';

export default function Strutured() {
  return (
    <Helmet>
    <script type="application/ld+json">
   {`{
  "@context" : "http://schema.org",
  "@type" : "Article",
  "name" : "Quarentena de Esperança",
  "author" : {
    "@type" : "Person",
    "name" : "Renan de Andrade Correa",
    "sameAs": [
        "https://www.facebook.com/renan.andrade.79462815",
        "https://instagram.com/renancorrea360",
        "https://linkedin.com/in/renan-andrade-correa-9358b2181",
      ]
  },
  "image" : "https://image.freepik.com/vetores-gratis/ficar-em-casa-relaxar-conceito_23-2148479286.jpg",
}`}
    </script>
    </Helmet>

  );
}
