import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ amount, isEmpty, isAmountError }) {
  const getNumberOfCoins = (rate) => {
    if (isEmpty) {
      return "0.00000000";
    }

    if (isAmountError) {
      return "n/a";
    }

    return (amount * rate).toFixed(8);
  };
  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((crypto, id) => (
            <tr key={id}>
              <td>{crypto.name}</td>
              <td>
                1 USD = {crypto.rate} {crypto.code}
              </td>
              <td>{getNumberOfCoins(crypto.rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
