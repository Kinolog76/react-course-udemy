function Input({ defaultValues, handleValueChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            min="1"
            onChange={(event) => handleValueChange(event, "initialInvestment")}
            value={defaultValues.initialInvestment}
            type="number"
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            min="1"
            onChange={(event) => handleValueChange(event, "annualInvestment")}
            value={defaultValues.annualInvestment}
            type="number"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            min="1"
            onChange={(event) => handleValueChange(event, "expectedReturn")}
            value={defaultValues.expectedReturn}
            type="number"
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            min="1"
            onChange={(event) => handleValueChange(event, "duration")}
            value={defaultValues.duration}
            type="number"
          />
        </p>
      </div>
    </section>
  );
}

export default Input;
