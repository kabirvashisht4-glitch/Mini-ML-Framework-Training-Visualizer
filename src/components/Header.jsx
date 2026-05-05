import { useSocketContext } from '../context/useSocketContext'
import { useTraining } from '../hooks/useTraining'

export default function Header() {
  const { connected, statusMessage } = useSocketContext()
  const { epoch, loss, accuracy, status } = useTraining()

  return (
    <header className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
        <div className={`mt-1 h-3 w-3 rounded-full ${connected ? 'bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]' : 'bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.7)]'}`} />
        <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">
              Mini ML Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Training visualizer
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              {statusMessage}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <Stat label="Socket" value={connected ? 'Live' : 'Offline'} accent={connected ? 'text-emerald-300' : 'text-amber-300'} />
          <Stat label="Epoch" value={epoch ?? '—'} />
          <Stat label="Loss" value={loss != null ? loss.toFixed(4) : '—'} accent="text-sky-300" />
          <Stat label="Accuracy" value={accuracy != null ? `${(accuracy * 100).toFixed(1)}%` : '—'} accent="text-cyan-300" />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-300">
        <span>Bridge path: <span className="font-mono text-slate-200">/socket.io</span></span>
        <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${
          status === 'training'
            ? 'bg-emerald-500/15 text-emerald-200'
            : 'bg-slate-800 text-slate-300'
        }`}>
          {status}
        </span>
      </div>
    </header>
  )
}

function Stat({ label, value, accent = 'text-white' }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className={`text-2xl font-semibold ${accent}`}>{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">{label}</div>
    </div>
  )
}
