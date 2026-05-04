export function startBridge(io) {
  // Placeholder for reading C++ TCP output and forwarding it to React clients.
  return {
    emitTrainingUpdate(payload) {
      io.emit('training:update', payload)
    },
  }
}
