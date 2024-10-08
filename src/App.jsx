import { useReducer, useState } from 'react'
import reducer, { ADD_PHRASE, DELETE_PHRASE } from './reducer'

function App() {
  // lista de frases (estado)

  // o usuário pode adicionar novas frases, desde que:
    // a frase possua mais do que 20 caracteres
    // a frase seja única

  const [phrase, setPhrase] = useState('')
  // const [allPhrases, setPhrases] = useState([])

  const [allPhrases, dispatch] = useReducer(reducer, [])

  const savePhrase = (event) => {
    event.preventDefault()

    dispatch({
      type: ADD_PHRASE,
      phrase
    })
    // setPhrases([...allPhrases, phrase])
  }

  const deletePhrase = (deletedPhrase) => {
    dispatch({
      type: DELETE_PHRASE,
      phrase: deletedPhrase
    })
  }

  return (
    <div className='App'>
      <form onSubmit={savePhrase}>
        <textarea 
          value={phrase}
          onChange={event => setPhrase(event.target.value)}
          placeholder='Digite sua frase'
          required 
        />
        <br />
        <button>
          Salvar frase
        </button>
        
        <br />
        <br />

      </form>
      
      <div className='phrases'>
        {allPhrases.map((actualPhrase, index) => {
          return (
            <p key={index}>
              {actualPhrase}

              <br />
              <button onClick={() => deletePhrase(actualPhrase)}>Excluir</button>
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default App
