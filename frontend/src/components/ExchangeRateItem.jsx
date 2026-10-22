function ExchangeRateItem({ rate, onClick }) {
  return (
    <button className="rate-item" onClick={onClick}>
      <div>
        <strong>{rate.currency}</strong>
        <span>{rate.country}</span>
      </div>

      <div>
        <span>Buy: {rate.buy}</span>
        <span>Sell: {rate.sell}</span>
      </div>
    </button>
  );
}

export default ExchangeRateItem;