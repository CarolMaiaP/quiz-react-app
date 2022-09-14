import styled from "styled-components";

export const OptionContainer = styled.div`
  .option{
    background-color: #3c0e70;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.4s;
  }

  .option:hover{
    opacity: 1;
  }

  .correct{
    background-color: #0bfc03;
    font-weight: bold;
  }

  .wrong{
    background-color: #3c0e70;
    opacity: 0.4;
  }
`