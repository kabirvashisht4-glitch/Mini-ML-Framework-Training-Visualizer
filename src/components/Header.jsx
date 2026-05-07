import { useSocketContext } from '../context/SocketContext'
import { useTraining } from '../hooks/useTraining'

export default function Header() {
  const { connected, statusMessage } = useSocketContext()
  const { epoch, loss, accuracy, status } = useTraining()

  return (
    <header className="hero-panel">
      <div className="hero-content">
        <div className="hero-title-row">
        <div className={`status-dot ${connected ? 'status-dot-live' : 'status-dot-idle'}`} />
        <div>
            <p className="eyebrow">Mini ML Dashboard</p>
            <h1>Training visualizer</h1>
            <p className="hero-copy">{statusMessage ?? 'Ready to connect to the training bridge.'}</p>
          </div>
        </div>

        <div className="stat-grid">
          <Stat label="Socket" value={connected ? 'Live' : 'Offline'} accent={connected ? 'good' : 'warn'} />
          <Stat label="Epoch" value={epoch ?? '—'} />
          <Stat label="Loss" value={loss != null ? loss.toFixed(4) : '—'} accent="info" />
          <Stat label="Accuracy" value={accuracy != null ? `${(accuracy * 100).toFixed(1)}%` : '—'} accent="cool" />
        </div>
      </div>

      <div className="hero-footer">
        <span>Bridge path: <span className="mono">/socket.io</span></span>
        <span className={`pill ${status === 'training' ? 'pill-live' : ''}`}>
          {status}
        </span>
      </div>
    </header>
  )
}

function Stat({ label, value, accent = '' }) {
  return (
    <div className="stat-card">
      <div className={`stat-value ${accent}`}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
