import { createContext, ReactNode, useReducer } from "react"
import { addNameAction, removeNameAction } from "../reducers/Component/actions"
import { ComponentReducer } from "../reducers/Component/reducer"

interface ContextType {
  name: string
  addName: (name: string) => void
  removeName: () => void
}

export const ComponentContext = createContext({} as ContextType)

interface ComponentContextProviderProps {
  children: ReactNode;
}

export function ComponentContextProvider({ children }: ComponentContextProviderProps) {
  const [name, dispatch] = useReducer(
    ComponentReducer,
    [/** initial value */]
  )

  function addName(name: string) {
    dispatch(addNameAction(name))
  }

  function removeName() {
    dispatch(removeNameAction())
  }

  return (
    <ComponentContext.Provider value={{ name, addName, removeName }}>
      {children}
    </ComponentContext.Provider>
  )
}


