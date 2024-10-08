export const ADD_PHRASE = 'ADD_PHRASE'
export const DELETE_PHRASE = 'DELETE_PHRASE'


const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PHRASE:
      if (action.phrase.length < 20) {
        alert('Não é permitido uma frase com menos de 20 caracteres')
        return state
      }
  
      if (state.includes(action.phrase)) {
        alert('Não é permitido uma frase repetida')
        return state
      }

      return [...state, action.phrase]
      
    case DELETE_PHRASE:
      return state.filter(phrase => phrase !== action.phrase)      
      
    default:
      return state
  }
}

export default reducer