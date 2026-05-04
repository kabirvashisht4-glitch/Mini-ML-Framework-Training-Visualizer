import Header from './components/Header'
import LossChart from './components/LossChart'
import WeightHeatmap from './components/WeightHeatmap'
import ActivationViewer from './components/ActivationViewer'
import NetworkTopology from './components/NetworkTopology'
import ControlPanel from './components/ControlPanel'
import EpochLog from './components/EpochLog'
import DigitCanvas from './components/DigitCanvas'
import PredictionBars from './components/PredictionBars'
import { SocketProvider } from './context/SocketContext'

export default function App() {
  return (
    <SocketProvider>
      <main className="dashboard-shell">
        <Header />
        <section className="dashboard-grid">
          <LossChart />
          <WeightHeatmap />
          <ActivationViewer />
          <NetworkTopology />
          <ControlPanel />
          <EpochLog />
          <DigitCanvas />
          <PredictionBars />
        </section>
      </main>
    </SocketProvider>
  )
}
