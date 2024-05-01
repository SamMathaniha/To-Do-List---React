

import React from 'react'

const Header = ({title}) => {

    const HeaderStyle = {color:"Black", backgroundColor:"White", fontSize:"40px",textAlign:"center"}
    
  return (
        <div >
             <h1 style={HeaderStyle}>{title}</h1>
        </div>
  
  )
}

Header.defaultProps ={
  title: "DefaultTitle"
}

export default Header
