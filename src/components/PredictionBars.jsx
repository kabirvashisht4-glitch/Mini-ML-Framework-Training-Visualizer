export default function PredictionBars() {
  const predictions = [4, 7, 11, 8, 5, 13, 9, 18, 21, 4]

  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Prediction Bars</h2>
          <p>Digit confidence scores.</p>
        </div>
      </div>
      <div className="prediction-list">
        {predictions.map((value, digit) => (
          <div className="prediction-row" key={digit}>
            <span>{digit}</span>
            <div>
              <span style={{ width: `${value}%` }} />
            </div>
            <strong>{value}%</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
