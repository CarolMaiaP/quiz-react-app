import { useContext } from 'react'
import './App.css'
import { Welcome } from './components/Welcome'
import { Question } from './components/Question'
import { QuizContext } from './contexts/QuizContext'
import { useEffect } from 'react'
import { GameOver } from './components/GameOver'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //shuffle questions
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
