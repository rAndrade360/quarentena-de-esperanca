import React from 'react';
import {Helmet} from 'react-helmet';
import structured from '../../utils/structured.json'

// import { Container } from './styles';

export default function Strutured() {
  return (
    <Helmet>
    <script type="application/ld+json">
        {JSON.stringify(structured)}
    </script>
    </Helmet>

  );
}
