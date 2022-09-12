import { useContext } from 'react'
import './App.css'
import { Welcome } from './components/Welcome'
import { Question } from './components/Question'
import { QuizContext } from './contexts/QuizContext'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h3>Quiz de Programação</h3>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
    </div>
  )
}

export default App
