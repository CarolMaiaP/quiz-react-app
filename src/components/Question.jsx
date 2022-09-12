import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"

export function Question(){
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState)

  return(
    <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>Pergunta atual</h2>
      <div id="options-container">
        <p>Opções</p>
      </div>
      <button>Continuar</button>
    </div>
  )
}