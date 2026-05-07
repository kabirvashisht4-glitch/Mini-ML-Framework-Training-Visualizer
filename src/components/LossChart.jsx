import { useTraining } from '../hooks/useTraining'

export default function LossChart() {
  const { lossHistory } = useTraining()
  const points = lossHistory.length ? lossHistory.slice(-8) : sampleLoss

  return (
    <section className="box wide">
      <h2>Loss</h2>
      <p>{lossHistory.length ? 'Live training loss.' : 'Sample values until training starts.'}</p>
      <table>
        <thead>
          <tr>
            <th>Epoch</th>
            <th>Loss</th>
          </tr>
        </thead>
        <tbody>
          {points.map((point) => (
            <tr key={point.epoch}>
              <td>{point.epoch}</td>
              <td>{point.loss.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

const sampleLoss = [
  { epoch: 1, loss: 1.42 },
  { epoch: 2, loss: 1.16 },
  { epoch: 3, loss: 0.96 },
  { epoch: 4, loss: 0.78 },
  { epoch: 5, loss: 0.63 },
  { epoch: 6, loss: 0.54 },
]
