import { useContext } from 'react'
import './App.css'
import { Welcome } from './components/Welcome'
import { Question } from './components/Question'
import { QuizContext } from './contexts/QuizContext'
import { useEffect } from 'react'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //shuffle questions
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      <h3>Quiz de Programação</h3>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
    </div>
  )
}

export default App
