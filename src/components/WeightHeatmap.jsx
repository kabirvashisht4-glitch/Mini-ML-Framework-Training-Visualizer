export default function WeightHeatmap() {
  const cells = Array.from({ length: 64 }, (_, index) => index)

  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Weight Heatmap</h2>
          <p>Input layer weights preview.</p>
        </div>
      </div>
      <div className="heatmap" aria-label="Weight heatmap">
        {cells.map((cell) => (
          <span
            key={cell}
            style={{
              backgroundColor: `hsl(${210 - (cell % 8) * 18}, 80%, ${28 + (cell % 5) * 8}%)`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
