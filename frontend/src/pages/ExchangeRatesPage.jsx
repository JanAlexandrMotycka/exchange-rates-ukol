import { useState } from "react";
import ExchangeRateList from "../components/ExchangeRateList";
import ExchangeRateDetail from "../components/ExchangeRateDetail";

const testRates = [
  {
    id: 1,
    currency: "EUR",
    country: "European Union",
    amount: 1,
    buy: 24.5,
    sell: 25.1,
  },
  {
    id: 2,
    currency: "USD",
    country: "United States",
    amount: 1,
    buy: 21.2,
    sell: 22.0,
  },
  {
    id: 3,
    currency: "GBP",
    country: "United Kingdom",
    amount: 1,
    buy: 28.5,
    sell: 29.4,
  },
];

function ExchangeRatesPage() {
  const [selectedRate, setSelectedRate] = useState(null);

  if (selectedRate) {
    return (
      <main className="page">
        <ExchangeRateDetail
          rate={selectedRate}
          onBack={() => setSelectedRate(null)}
        />
      </main>
    );
  }

  return (
    <main className="page">
      <h1>Exchange Rates</h1>

      <ExchangeRateList
        rates={testRates}
        onSelect={setSelectedRate}
      />
    </main>
  );
}

export default ExchangeRatesPage;