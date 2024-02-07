import InputGroup from "./components/InputGroup";
import ResultTable from "./components/ResultTable";
import InvalidInputAlert from "./components/InvalidInputAlert";
import {useState} from "react";


function validateInputData(inputData){
  if(inputData.duration <= 0){
    return false;
  }
  return true;
}

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  
  function handleInputChange(name, value){
    setInputData((prevData) => {
      return {...prevData,
      [name]: +value
      }
    });
  }

  let isValidInputData = validateInputData(inputData);

  return <>
    <InputGroup handleInputChange={handleInputChange} inputData={inputData} id="user-input"/>
    {!isValidInputData && <InvalidInputAlert />}
    {isValidInputData && <ResultTable id="result" inputData={inputData} className="center"/>}
  </>  
}

export default App
