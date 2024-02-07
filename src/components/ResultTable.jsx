import React from 'react';
import { RESULT_HEADERS } from '../data';
import {calculateInvestmentResults, formatter} from "../util/investment";

export default function ResultTable({inputData, ...props}) {
    console.log(inputData);
    let investmentResults = calculateInvestmentResults(inputData);
    const initialInvestment = investmentResults[0].valueEndOfYear - investmentResults[0].interest - investmentResults[0].annualInvestment;

  return (
    <>
        <table {...props}>
            <thead>
                <tr>
                    {RESULT_HEADERS.map(header => <th key={header}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {investmentResults.map((result, index) =>{
                const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                const totalAmountInvested = result.valueEndOfYear - totalInterest;

                return (<tr key={`${result.year}-${index}`}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.valueEndOfYear)}</td>
                    <td>{formatter.format(result.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>)
                } 
                )}
            </tbody>
        </table>
    </>
  )
}
