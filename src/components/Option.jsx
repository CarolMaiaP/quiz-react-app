import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"
import { OptionContainer } from "./Option.styles";

export function Option({ option }){
  const [quizState, dispatch] = useContext(QuizContext); 

  return(
    <OptionContainer>
      <div className="option">
        <p>{option}</p>
      </div>
    </OptionContainer>
  )
}