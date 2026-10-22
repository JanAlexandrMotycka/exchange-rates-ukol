function ExchangeRateDetail({ rate, onBack }) {
  return (
    <section className="rate-detail">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <h1>{rate.currency}</h1>
      <p>{rate.country}</p>

      <div className="detail-grid">
        <div>
          <span>Amount</span>
          <strong>{rate.amount}</strong>
        </div>

        <div>
          <span>Buy</span>
          <strong>{rate.buy}</strong>
        </div>

        <div>
          <span>Sell</span>
          <strong>{rate.sell}</strong>
        </div>
      </div>
    </section>
  );
}

export default ExchangeRateDetail;