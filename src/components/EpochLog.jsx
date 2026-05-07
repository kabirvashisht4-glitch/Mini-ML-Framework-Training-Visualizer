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
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Epoch Log</h2>
          <p>Latest messages from the bridge and trainer.</p>
        </div>
      </div>
      <div className="log-list">
        {entries.map((entry) => (
          <div key={entry.id} className="log-entry">
            {entry.message}
          </div>
        ))}
      </div>
    </section>
  )
}
