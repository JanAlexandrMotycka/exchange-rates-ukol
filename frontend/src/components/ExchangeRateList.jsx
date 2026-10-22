import ExchangeRateItem from "./ExchangeRateItem";

function ExchangeRateList({ rates, onSelect }) {
  return (
    <div className="rate-list">
      {rates.map((rate) => (
        <ExchangeRateItem
          key={rate.id}
          rate={rate}
          onClick={() => onSelect(rate)}
        />
      ))}
    </div>
  );
}

export default ExchangeRateList;