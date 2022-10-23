import { useContext } from "react"
import { ComponentContext } from "../contexts/ComponentContext"

export function ComponentOne() {
  const { name } = useContext(ComponentContext)

  return (
    <div>
      <h1>Component One: {name}</h1>
    </div>
  )
}
