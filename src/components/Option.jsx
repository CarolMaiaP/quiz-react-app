import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"
import { OptionContainer } from "./Option.styles";

export function Option({ option, selectOption, answer }){
  const [quizState, dispatch] = useContext(QuizContext); 

  return(
    <OptionContainer>
      <div className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""
      } ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
      `} onClick={() => selectOption()}>
        <p>{option}</p>
      </div>
    </OptionContainer>
  )
}