import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const customElement=<a href='https://google.com' target='_blank' >Visit</a>
//OR
const customElementTwo=React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'Click me to visit Google'
)


createRoot(document.getElementById('root')).render(
  //customElement
  customElementTwo
)
