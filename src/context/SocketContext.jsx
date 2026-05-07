/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext } from 'react'
import { useSocket } from '../hooks/useSocket'

const SocketContext = createContext({
  connected: false,
  socket: null,
  statusMessage: 'Ready to connect to the training bridge.',
})

export function SocketProvider({ children }) {
  const socketState = useSocket()

  return (
    <SocketContext.Provider value={socketState}>
      {children}
    </SocketContext.Provider>
  )
}

export function useSocketContext() {
  return useContext(SocketContext)
}
