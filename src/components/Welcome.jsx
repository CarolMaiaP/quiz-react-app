import quiz from '../assets/quiz.svg'
import { WelcomeContainer } from './Welcome.styles'

export function Welcome(){
  return(
    <WelcomeContainer>
      <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button>Iniciar</button>
        <img src={quiz} alt="início do quiz" />
      </div>
    </WelcomeContainer>  
  )
}