import { useEffect, useState } from "react";
import ExchangeRateList from "../components/ExchangeRateList";
import ExchangeRateDetail from "../components/ExchangeRateDetail";

const API_URL =
  "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e";

function ExchangeRatesPage() {
  const [rates, setRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRates() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to load exchange rates.");
        }

        const data = await response.json();

        setRates(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadRates();
  }, []);

  if (loading) {
    return (
      <main className="page">
        <p>Loading exchange rates...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page">
        <p>{error}</p>
      </main>
    );
  }

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
        rates={rates}
        onSelect={setSelectedRate}
      />
    </main>
  );
}

export default ExchangeRatesPage;