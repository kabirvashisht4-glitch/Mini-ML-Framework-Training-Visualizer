export default function NetworkTopology() {
  const layers = [
    ['Input', 4],
    ['Hidden 1', 6],
    ['Hidden 2', 4],
    ['Output', 2],
  ]

  return (
    <section className="box wide">
      <h2>Network Topology</h2>
      <p>Dense feed-forward network layout.</p>
      <table>
        <thead>
          <tr>
            <th>Layer</th>
            <th>Neurons</th>
          </tr>
        </thead>
        <tbody>
          {layers.map(([name, count]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
