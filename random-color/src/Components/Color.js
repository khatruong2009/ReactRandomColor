import React from 'react';

const Color = (props) => {
  return (
    <div className="container">
      <div className="content">
        <h1>Random Color Generator</h1>
        <p>Color hex value is #{props.color}</p>
        <button onClick={props.handleClick}>New Color</button>
      </div>
    </div>
  )
}

export default Color;