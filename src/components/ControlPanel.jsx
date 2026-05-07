export default function ControlPanel() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Control Panel</h2>
          <p>Training controls.</p>
        </div>
      </div>
      <div className="button-row">
        <button type="button">Start</button>
        <button type="button" className="secondary">Pause</button>
        <button type="button" className="secondary">Reset</button>
      </div>
      <label className="slider-label">
        Learning rate
        <input type="range" min="0" max="100" defaultValue="32" />
      </label>
    </section>
  )
}
