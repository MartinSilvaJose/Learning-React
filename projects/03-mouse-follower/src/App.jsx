import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [enabled, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {

    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove',handleMove)
    }

    // cleanup: cuando el componente se desmonta y cuando cambia el estado de enabled
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (

    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: enabled ? 1 : 0,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}>

      </div>
    <h3>Proyecto 3</h3>
    <button onClick={() => setEnable(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </main>
  )
}

export default App
