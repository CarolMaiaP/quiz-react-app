import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"
import { OptionContainer } from "./Option.styles";

export function Option({ option, selectOption, answer }){
  const [quizState, dispatch] = useContext(QuizContext); 

  return(
    <OptionContainer>
      <div className="option" onClick={() => selectOption()}>
        <p>{option}</p>
      </div>
    </OptionContainer>
  )
}