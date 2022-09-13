import WellDone from "../assets/welldone.svg"
import { GameOverContainer } from "./GameOver.styles"

export function GameOver(){
  return(
    <GameOverContainer>
      <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: x</p>
        <p>Você acertou y de z perguntas</p>
        <img src={WellDone} alt="Fim do quiz" />
        <button>Reiniciar</button>
      </div>
    </GameOverContainer>
  )
}