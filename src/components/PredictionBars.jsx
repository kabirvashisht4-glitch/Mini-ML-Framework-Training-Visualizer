export default function PredictionBars() {
  const predictions = [4, 7, 11, 8, 5, 13, 9, 18, 21, 4]

  return (
    <section className="box">
      <h2>Predictions</h2>
      <p>Digit confidence scores.</p>
      <table>
        <thead>
          <tr>
            <th>Digit</th>
            <th>Confidence</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((value, digit) => (
            <tr key={digit}>
              <td>{digit}</td>
              <td>{value}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
