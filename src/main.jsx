import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
// import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <GifExpertApp/>
    </Container>
  </React.StrictMode>,
)
