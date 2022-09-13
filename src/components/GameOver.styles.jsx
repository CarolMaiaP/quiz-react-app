import styled from "styled-components";

export const GameOverContainer = styled.div`
  #gameover{
    max-width: 500px;
    display: flex;
    flex-direction: column;
  }

  #gameover h2, p{
    margin-bottom: 1rem;
  }

  #gameover p{
    color: #8435de
  }

  #gameover img{
    margin: 2rem;
    max-height: 200px;
  }
`