import { useRef } from 'react'

export function useCanvas() {
  const canvasRef = useRef(null)

  const serialize28x28 = () => {
    return []
  }

  return {
    canvasRef,
    serialize28x28,
  }
}
