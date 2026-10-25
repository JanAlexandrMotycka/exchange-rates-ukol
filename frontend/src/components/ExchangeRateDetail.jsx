function ExchangeRateDetail({ rate, onBack }) {
  return (
    <section className="rate-detail">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <h1>{rate.shortName}</h1>
      <p>{rate.name} - {rate.country}</p>

      <div className="detail-grid">
        <div>
          <span>Amount</span>
          <strong>{rate.amount}</strong>
        </div>

        <div>
          <span>Buy</span>
          <strong>{rate.valBuy}</strong>
        </div>

        <div>
          <span>Sell</span>
          <strong>{rate.valSell}</strong>
        </div>

        <div>
          <span>Middle</span>
          <strong>{rate.valMid}</strong>
        </div>

        <div>
          <span>CNB Middle</span>
          <strong>{rate.cnbMid}</strong>
        </div>

        <div>
          <span>Valid From</span>
          <strong>{rate.validFrom}</strong>
        </div>
      </div>
    </section>
  );
}

export default ExchangeRateDetail;