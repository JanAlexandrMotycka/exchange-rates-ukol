import { useEffect, useState } from "react";
import ExchangeRateList from "../components/ExchangeRateList";
import ExchangeRateDetail from "../components/ExchangeRateDetail";

const BACKEND_URL =
  "http://localhost:8080/api/exchange-rates";

function ExchangeRatesPage() {
  const [rates, setRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useDb, setUseDb] = useState(false);

  async function loadRates(fromDatabase) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${BACKEND_URL}?usedb=${fromDatabase}`
      );

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

  useEffect(() => {
    loadRates(false);
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

        <button onClick={() => loadRates(false)}>
          Try again
        </button>
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
      <h1>Kurzy měn</h1>

      <div className="rate-actions">
        <button
          onClick={() => {
            setUseDb(false);
            loadRates(false);
          }}
        >
          Česká spořitelna API data
        </button>

        <button
          onClick={() => {
            setUseDb(true);
            loadRates(true);
          }}
        >
          DB data
        </button>
      </div>

      <p>
        Source: {useDb ? "Databáze" : "Česká spořitelna API"}
      </p>

      <ExchangeRateList
        rates={rates}
        onSelect={setSelectedRate}
      />
    </main>
  );
}

export default ExchangeRatesPage;