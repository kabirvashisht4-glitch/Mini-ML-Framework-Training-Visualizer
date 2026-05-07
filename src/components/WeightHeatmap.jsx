export default function WeightHeatmap() {
  const rows = Array.from({ length: 8 }, (_, row) =>
    Array.from({ length: 8 }, (_, column) => ((row * 8 + column) / 100).toFixed(2)),
  )

  return (
    <section className="box">
      <h2>Weight Table</h2>
      <p>Input layer weights preview.</p>
      <table className="small-table">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
