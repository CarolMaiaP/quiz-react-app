import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"
import { QuestionsContainer } from "./Question.styles";
import { Option } from "./Option";

export function Question(){
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  console.log(quizState)

  const onSelectOption = (option) => {
    console.log(option);

    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option}
    })
  }

  return(
    <QuestionsContainer>
      <h2>Quiz de Programação</h2>
      <div id="question">
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
          {currentQuestion.options.map((option) => (
            <Option option={option}
             key={option}
             answer={currentQuestion.answer}
             selectOption={() => onSelectOption(option)} 
            />
          ))}
        </div>
        {quizState.answerSelected && (
          <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
        )}
      </div>
    </QuestionsContainer>
  )
}