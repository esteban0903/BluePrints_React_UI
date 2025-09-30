import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
afterEach(() => cleanup())
// ---- Canvas mock para jsdom ----
if (!HTMLCanvasElement.prototype.getContext) {
  HTMLCanvasElement.prototype.getContext = () => {
    const noop = () => {}
    return {
      canvas: {},
      fillRect: noop,
      clearRect: noop,
      beginPath: noop,
      moveTo: noop,
      lineTo: noop,
      stroke: noop,
      arc: noop,
      fill: noop,
      strokeRect: noop,
      closePath: noop,
      save: noop,
      restore: noop,
      setTransform: noop,
      translate: noop,
      scale: noop,
      rotate: noop,
      transform: noop,
      drawImage: noop,
      fillText: noop,
      measureText: () => ({ width: 0 }),
      putImageData: noop,
      createLinearGradient: () => ({ addColorStop: noop }),
      createPattern: () => ({}),
      createRadialGradient: () => ({ addColorStop: noop }),
      getImageData: () => ({}),
      getLineDash: () => [],
      setLineDash: noop,
    }
  }
}
