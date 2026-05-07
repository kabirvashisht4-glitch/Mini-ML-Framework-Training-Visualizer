import { useSocketContext } from '../context/SocketContext'
import { useTraining } from '../hooks/useTraining'

export default function Header() {
  const { connected, statusMessage } = useSocketContext()
  const { epoch, loss, accuracy, status } = useTraining()

  return (
    <header className="box">
      <p>Mini ML Dashboard</p>
      <h1>Training visualizer</h1>
      <p>{statusMessage ?? 'Ready to connect to the training bridge.'}</p>
      <table>
        <tbody>
          <tr>
            <th>Socket</th>
            <td>{connected ? 'Live' : 'Offline'}</td>
            <th>Epoch</th>
            <td>{epoch ?? '—'}</td>
          </tr>
          <tr>
            <th>Loss</th>
            <td>{loss != null ? loss.toFixed(4) : '—'}</td>
            <th>Accuracy</th>
            <td>{accuracy != null ? `${(accuracy * 100).toFixed(1)}%` : '—'}</td>
          </tr>
          <tr>
            <th>Bridge</th>
            <td>/socket.io</td>
            <th>Status</th>
            <td>{status}</td>
          </tr>
        </tbody>
      </table>
    </header>
  )
}
