import quiz from '../assets/quiz.svg'

export function Welcome(){
  return(
      <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button>Iniciar</button>
        <img src={quiz} alt="início do quiz" />
      </div>
  )
}