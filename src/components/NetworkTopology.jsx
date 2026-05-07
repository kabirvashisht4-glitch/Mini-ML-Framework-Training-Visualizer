export default function NetworkTopology() {
  return (
    <section className="panel panel-wide">
      <div className="panel-heading">
        <div>
          <h2>Network Topology</h2>
          <p>Dense feed-forward network layout.</p>
        </div>
      </div>
      <div className="topology">
        {[4, 6, 4, 2].map((count, layer) => (
          <div className="topology-layer" key={layer}>
            {Array.from({ length: count }, (_, neuron) => (
              <span className="neuron" key={neuron} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
