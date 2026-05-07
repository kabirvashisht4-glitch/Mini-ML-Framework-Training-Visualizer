export default function ActivationViewer() {
  const activations = [68, 42, 83, 57, 31, 74, 49, 62]

  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Activation Viewer</h2>
          <p>Hidden layer signal strength.</p>
        </div>
      </div>
      <div className="bar-row">
        {activations.map((value, index) => (
          <div className="activation-bar" key={index}>
            <span style={{ height: `${value}%` }} />
          </div>
        ))}
      </div>
    </section>
  )
}
