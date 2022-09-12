import { useContext } from "react"
import { QuizContext } from "../contexts/QuizContext"

export function Question(){
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState)

  return(
    <div>
      <h3>Question</h3>
    </div>
  )
}