import { useContext } from 'react'
import './App.css'
import NoteState from './context/notes/NoteState'

function App() {

  const note = useContext(NoteState)

  return (
    <>
      <NoteState>
        <div>
          <p>hello, {note.name}</p>
        </div>
      </NoteState>
    </>
  )
}



export default App
