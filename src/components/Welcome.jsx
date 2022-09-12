import { useContext } from 'react'
import quiz from '../assets/quiz.svg'
import { QuizContext } from '../contexts/QuizContext'
import { WelcomeContainer } from './Welcome.styles'

export function Welcome(){
  const [quizState, dispatch] = useContext(QuizContext);

  const num = 0;

  return(
    <WelcomeContainer>
      <div id='welcome'>
        <h2>Quiz de Programação</h2>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={quiz} alt="início do quiz" />
      </div>
    </WelcomeContainer>  
  )
}