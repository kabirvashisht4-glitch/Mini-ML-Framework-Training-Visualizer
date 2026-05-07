export default function ActivationViewer() {
  const activations = [68, 42, 83, 57, 31, 74, 49, 62]

  return (
    <section className="box">
      <h2>Activations</h2>
      <p>Hidden layer signal strength.</p>
      <table>
        <thead>
          <tr>
            <th>Neuron</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {activations.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
