import React from 'react'
import './footer.css'

function Footer({Lenght}) {
  return (
    <div className='FooterMain'>
      <h2>YOU HAVE {Lenght} lIST {Lenght <= 1 ? "ITEM" : "ITEMS"}</h2>
        <h4>@ Sam mathaniha </h4>
      
    </div>
  )
}
 export default Footer
