import { useEffect, useState } from 'react'
import { useSocketContext } from '../context/useSocketContext'

const HISTORY_LIMIT = 200

export function useTraining() {
  const { socket, connected, statusMessage } = useSocketContext()
  const [training, setTraining] = useState({
    epoch: null,
    loss: null,
    accuracy: null,
    status: 'idle',
    lossHistory: [],
    logEntries: [],
  })

  useEffect(() => {
    if (!socket) {
      return undefined
    }

    const handleStatus = (payload) => {
      setTraining((current) => ({
        ...current,
        status: payload?.state ?? (connected ? 'connected' : 'idle'),
        logEntries: appendEntry(current.logEntries, payload?.message ?? 'Status updated.'),
      }))
    }

    const handleTrainingUpdate = (payload = {}) => {
      setTraining((current) => {
        const nextEpoch = payload.epoch ?? current.epoch
        const nextLoss = payload.loss ?? current.loss
        const nextAccuracy = payload.accuracy ?? current.accuracy
        const nextStatus = payload.status ?? current.status ?? 'training'

        return {
          epoch: nextEpoch,
          loss: nextLoss,
          accuracy: nextAccuracy,
          status: nextStatus,
          lossHistory:
            typeof nextLoss === 'number'
              ? appendLossPoint(current.lossHistory, nextEpoch, nextLoss)
              : current.lossHistory,
          logEntries: payload.message
            ? appendEntry(current.logEntries, payload.message)
            : current.logEntries,
        }
      })
    }

    socket.on('status', handleStatus)
    socket.on('training:update', handleTrainingUpdate)

    return () => {
      socket.off('status', handleStatus)
      socket.off('training:update', handleTrainingUpdate)
    }
  }, [socket, connected])

  return {
    ...training,
    connected,
    statusMessage,
  }
}

function appendLossPoint(history, epoch, loss) {
  return [...history, { epoch: epoch ?? history.length + 1, loss }].slice(-HISTORY_LIMIT)
}

function appendEntry(entries, message) {
  return [...entries, { id: `${Date.now()}-${entries.length}`, message }].slice(-HISTORY_LIMIT)
}
