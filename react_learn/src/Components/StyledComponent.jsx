import React from 'react'
import Button from './Button'
const StyledComponent = () => {
    const divStyle =    {
        backgroundColor:'black',
        color:'red',
        fontSize:'20px',
        padding:'20px'
    }
  return (
    <div >
        <h1 style={divStyle  }> StyledComponent</h1>
        <button>
        <Button text = "Aditya Srivastava is here" />
        </button>
    </div>
  )
}

export default StyledComponent