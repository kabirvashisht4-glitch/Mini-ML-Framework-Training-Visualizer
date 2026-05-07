import { useTraining } from '../hooks/useTraining'

export default function EpochLog() {
  const { logEntries } = useTraining()
  const entries = logEntries.length
    ? [...logEntries].reverse().slice(0, 6)
    : [
        { id: 'sample-1', message: 'Waiting for training events...' },
        { id: 'sample-2', message: 'Socket status will appear here as updates stream in.' },
      ]

  return (
    <section className="box">
      <h2>Epoch Log</h2>
      <p>Latest messages from the bridge and trainer.</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
