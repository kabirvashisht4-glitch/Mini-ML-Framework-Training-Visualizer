export default function DigitCanvas() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Digit Canvas</h2>
          <p>Draw area placeholder.</p>
        </div>
      </div>
      <div className="digit-pad" aria-label="Digit drawing canvas">
        <span>8</span>
      </div>
      <button type="button" className="full-button">Predict</button>
    </section>
  )
}
