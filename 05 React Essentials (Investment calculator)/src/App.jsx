import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

let defaultValues = { initialInvestment: 1, annualInvestment: 1, expectedReturn: 1, duration: 1 };

function App() {
  const [investmentValues, setInvestmentValues] = useState(defaultValues);
  const [investmentResult, setInvestmentResult] = useState(calculateInvestmentResults(defaultValues));

  function handleInvestmentResult(investmentValues) {
    setInvestmentResult(calculateInvestmentResults(investmentValues));
  }

  function handleValueChange(event, valueName) {
    const newValues = { ...investmentValues, [valueName]: Number(event.target.value) };
    setInvestmentValues(newValues);
    handleInvestmentResult(newValues);
  }

  return (
    <>
      <Header />
      <Input defaultValues={investmentValues} handleValueChange={handleValueChange} />
      <Result logResult={investmentResult} />
    </>
  );
}

export default App;
