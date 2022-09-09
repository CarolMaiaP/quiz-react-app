import { createContext } from "react";

export const QuizContext = createContext()

export function QuizProvider({children}){
  const value = {name: "quiz"}

  return(
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}