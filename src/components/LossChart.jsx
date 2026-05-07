import { useTraining } from '../hooks/useTraining'

export default function LossChart() {
  const { lossHistory } = useTraining()
  const points = lossHistory.length ? lossHistory.slice(-24) : sampleLoss
  const values = points.map((point) => point.loss)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const path = points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * 100
      const y = 92 - ((point.loss - min) / range) * 76
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(' ')

  return (
    <section className="panel panel-wide">
      <div className="panel-heading">
        <div>
          <h2>Loss Chart</h2>
          <p>{lossHistory.length ? 'Live training loss' : 'Sample trend until training starts'}</p>
        </div>
        <span className="pill">{points.length} pts</span>
      </div>
      <svg className="line-chart" viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Loss chart">
        <path className="chart-grid" d="M 0 20 H 100 M 0 50 H 100 M 0 80 H 100" />
        <path className="chart-line" d={path} />
      </svg>
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
