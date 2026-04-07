import React from 'react'

const Button = (value) => {
    const divStyle =    {
        backgroundColor:'blue',
        color:'red',
        fontSize:'20px',
    
        top:'20px',
        left:'20px',
         borderRadius:'20px',
    }
  return (
    <div style={divStyle}>
        <h1>
            {value.text}
        </h1>
    </div>
  )
}

export default Button