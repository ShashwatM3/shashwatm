import React from 'react'

function WaverCircle() {
  return (
    <div className="relative w-3 h-3">
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-pulse-slow"></div>
    </div>
  )
}

export default WaverCircle