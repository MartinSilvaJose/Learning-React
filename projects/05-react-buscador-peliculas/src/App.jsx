import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <label>
            Introduce la película que estas buscando
            <input type="text" placeholder='Jumper, Solo en casa, Jumanji..' />
          </label>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        Aquí va el contenido
      </main>
    </>
  )
}

export default App
