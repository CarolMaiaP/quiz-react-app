import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"

export function Option({ option }){
  const [quizState, dispatch] = useContext(QuizContext); 

  return(
    <div>
      <p>{option}</p>
    </div>
  )
}