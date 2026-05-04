import { useEffect, useState } from 'react'

export function useSocket() {
  const [socketState, setSocketState] = useState({
    connected: false,
    socket: null,
  })

  useEffect(() => {
    // Hook scaffold for socket.io connection and cleanup.
    return () => {
      setSocketState({
        connected: false,
        socket: null,
      })
    }
  }, [])

  return socketState
}
