import React from 'react'

const Discount = (message) => {
    if(message.value>0){
        return <div>Discount is {message.value}</div>
    }
   
}

export default Discount