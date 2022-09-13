import styled from "styled-components";

export const QuestionsContainer = styled.div`
  h2{
    margin-bottom: 2rem;
  }

  #question{
    max-width: 500px;
    background-color: #8435de;
    border-radius: 1rem;
    padding: 2rem;
  }

  #question h2, p{
    margin-bottom: 2rem;
  }

  #question p{
    margin-bottom: 1rem;
  }

  #question button{
    border: 2px solid #fff;
  }

  #options-container .option p{
    margin-bottom: 0px;
  }
`;