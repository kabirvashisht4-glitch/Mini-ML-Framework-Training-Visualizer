import { useState } from 'react'

export function useTraining() {
  const [training, setTraining] = useState({
    epoch: 0,
    loss: null,
    accuracy: null,
    lossHistory: [],
    logEntries: [],
  })

  return { training, setTraining }
}
