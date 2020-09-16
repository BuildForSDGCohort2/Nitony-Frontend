import App from './app.js'
import React from 'react';
import ReactDom from 'react-dom'
const root = document.getElementById('root')
const Index = () => {

  return (
        <App />

  )

}
ReactDom.render(<Index />, root)