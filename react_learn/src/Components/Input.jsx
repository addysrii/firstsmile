import React from 'react'

const Input= (value) => {
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
       <input type={value.type} />
    </div>
  )
}

export default Input