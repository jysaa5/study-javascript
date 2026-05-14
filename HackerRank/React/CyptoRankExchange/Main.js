import { useState } from "react";
import Table from "./Table";

function Main() {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const balance = 17042.67;

  const handleChangedInput = (e) => {
    setInput(e.target.value);
    setIsTouched(true);
  };

  const isEmpty = input === "";
  const amount = isEmpty ? 0 : Number(input);

  const isEmptyError = isTouched && isEmpty;
  const isAtLeastError = isTouched && !isEmptyError && amount < 0.01;
  const isExceedError = isTouched && !isEmptyError && balance < input;
  const hasAmountError = isAtLeastError || isExceedError;

  const errorMessage = isEmptyError ? "Amount cannot be empty" : isAtLeastError ? "Amount cannot be less than $0.01" : isExceedError ? "Amount cannot exceed the available balance" : "";

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange $ <input className="w-10" data-testid="amount-input" required type="number" placeholder="USD" value={input} onChange={handleChangedInput} /> of my $<span>{balance}</span>:
          </label>
          {errorMessage && (
            <p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">
              {errorMessage}
            </p>
          )}
        </div>
      </section>
      <Table amount={input} isEmpty={isEmpty} isAmountError={hasAmountError} />
    </div>
  );
}

export default Main;
