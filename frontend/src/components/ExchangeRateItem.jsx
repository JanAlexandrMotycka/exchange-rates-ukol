function ExchangeRateItem({ rate, onClick }) {
  return (
    <button className="rate-item" onClick={onClick}>
      <div>
        <strong>{rate.shortName}</strong>
        <span>{rate.name} - {rate.country}</span>
      </div>

      <div>
        <span>Buy: {rate.valBuy}</span>
        <span>Sell: {rate.valSell}</span>
      </div>
    </button>
  );
}

export default ExchangeRateItem;