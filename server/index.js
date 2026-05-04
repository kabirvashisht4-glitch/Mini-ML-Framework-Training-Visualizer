import http from 'node:http'
import { Server } from 'socket.io'
import { startBridge } from './bridge.js'

const server = http.createServer()
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  socket.emit('status', { message: 'Socket connected.' })
  socket.on('disconnect', () => {
    // Connection lifecycle hook for future training cleanup.
  })
})

startBridge(io)

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Socket server listening on ${PORT}`)
})
