import { useReducer } from "react";
import { createContext } from "react";
import questions from '../data/questions';

const STAGES = ["Start", "Playing", "End"]

const initialState = {
  gameStage: STAGES[0],
  questions,
}

function quizReducer(state, action){
  console.log(state, action);

  switch(action.type){
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      }

    default: 
      return state
  }
}

export const QuizContext = createContext()

export function QuizProvider({children}){
  const value = useReducer(quizReducer, initialState)

  return(
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}