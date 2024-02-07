import React from 'react'

export default function Inputs({value, name, handleInputChange, children, step = 1, ...props}) {
  return (
    <p {...props}>
        <label>
            {children}
        </label>           
        <input type="number" required step={step} min="1" value={value} onChange={(e) => handleInputChange(name, e.target.value)}/>
    </p>
  )
}
