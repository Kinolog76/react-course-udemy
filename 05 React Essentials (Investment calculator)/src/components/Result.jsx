import { formatter } from "../util/investment";

function Result({ logResult }) {
  const initialInvestment =
    logResult[0].valueEndOfYear - logResult[0].interest - logResult[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Interested Capital</th>
        </tr>
      </thead>
      <tbody>
        {logResult.map((item) => {
          const totalInterested =
            item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
          const totalAmountInvested = item.valueEndOfYear - totalInterested;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterested)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
