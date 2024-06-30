import React from 'react'

import Header from './Header'

import Footer from './Footer'
function layout({children}) {
  return (
    <>
   
    <Header/>
    <div>{children}</div>
    
    <Footer/>
    </>
  )
}

export default layout