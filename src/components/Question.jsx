import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"
import { QuestionsContainer } from "./Question.styles";

export function Question(){
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  console.log(quizState)

  return(
    <QuestionsContainer>
      <h2>Quiz de Programação</h2>
      <div id="question">
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
          <p>Opções</p>
        </div>
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
      </div>
    </QuestionsContainer>
  )
}