import { useContext } from "react"
import WellDone from "../assets/welldone.svg"
import { GameOverContainer } from "./GameOver.styles"
import { QuizContext } from "../contexts/QuizContext";

export function GameOver(){
  const [quizState, dispatch] = useContext(QuizContext);

  return(
    <GameOverContainer>
      <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas</p>
        <img src={WellDone} alt="Fim do quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
      </div>
    </GameOverContainer>
  )
}