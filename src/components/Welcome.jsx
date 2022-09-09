import { useContext } from 'react'
import quiz from '../assets/quiz.svg'
import { QuizContext } from '../contexts/QuizContext'
import { WelcomeContainer } from './Welcome.styles'

export function Welcome(){
  const quizState = useContext(QuizContext);
  console.log(quizState)

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