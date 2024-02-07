import React from 'react';
import Inputs from './Inputs';

export default function InputGroup({inputData, handleInputChange, ...props}) {
  return (
    <div {...props} className="input-group">
        <Inputs value={inputData.initialInvestment} name="initialInvestment" handleInputChange={handleInputChange}>INITIAL INVESTMENT</Inputs>
        <Inputs value={inputData.annualInvestment} name="annualInvestment" handleInputChange={handleInputChange}>ANNUAL INVESTMENT</Inputs>
        <Inputs value={inputData.expectedReturn} name="expectedReturn" handleInputChange={handleInputChange} step="0.1">EXPECTED RETURN</Inputs>
        <Inputs value={inputData.duration} name="duration" handleInputChange={handleInputChange}>DURATION</Inputs>
    </div>
  )
}
