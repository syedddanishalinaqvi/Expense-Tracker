import React from 'react'

export const List = () => {
  return (
    <>
       <h3>History</h3>
       <ul id="list" className="list">
        <li className="minus">
            Fruits<span>Rs0.00</span><button className="delete-btn">x</button>
        </li>
        </ul> 
    </>
 )
}
