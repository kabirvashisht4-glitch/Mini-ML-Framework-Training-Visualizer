export default function ControlPanel() {
  return (
    <section className="box">
      <h2>Controls</h2>
      <p>Training controls.</p>
      <p>
        <button type="button">Start</button>
        <button type="button">Pause</button>
        <button type="button">Reset</button>
      </p>
      <label>
        Learning rate
        <input type="range" min="0" max="100" defaultValue="32" />
      </label>
    </section>
  )
}
