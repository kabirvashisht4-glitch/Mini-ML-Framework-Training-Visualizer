import { useTraining } from '../hooks/useTraining'
import Panel from './Panel'

export default function EpochLog() {
  const { logEntries } = useTraining()
  const entries = logEntries.length
    ? [...logEntries].reverse().slice(0, 6)
    : [
        { id: 'sample-1', message: 'Waiting for training events...' },
        { id: 'sample-2', message: 'Socket status will appear here as updates stream in.' },
      ]

  return (
    <Panel title="Epoch Log" subtitle="Latest messages from the bridge and trainer.">
      <div className="space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-300">
            {entry.message}
          </div>
        ))}
      </div>
    </Panel>
  )
}
