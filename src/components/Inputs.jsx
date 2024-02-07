import React from 'react'

export default function Inputs({value, name, handleInputChange, children, step = 1, ...props}) {
  const alertColor = "rgb(164, 0, 0)";
  return (
    <p {...props}>
        <label>
            {children}
        </label>           
        <input type="number" required step={step} min="1" value={value} style={{ color: value <= 0 ? alertColor : null }} onChange={(e) => handleInputChange(name, e.target.value)}/>
    </p>
  )
}
