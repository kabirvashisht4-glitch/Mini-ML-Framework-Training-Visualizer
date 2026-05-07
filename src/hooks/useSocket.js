import { useEffect, useState } from 'react'

export function useSocket() {
  const [socketState, setSocketState] = useState({
    connected: false,
    socket: null,
    statusMessage: 'Ready to connect to the training bridge.',
  })

  useEffect(() => {
    // Hook scaffold for socket.io connection and cleanup.
    return () => {
      setSocketState({
        connected: false,
        socket: null,
        statusMessage: 'Training bridge disconnected.',
      })
    }
  }, [])

  return socketState
}
