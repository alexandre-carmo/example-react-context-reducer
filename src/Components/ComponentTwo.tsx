import { useContext, useRef } from "react"
import { ComponentContext } from "../contexts/ComponentContext"

export function ComponentTwo() {
  const { addName, removeName } = useContext(ComponentContext)

  const initRef: any = null
  const inputRef = useRef(initRef)

  function onButtonAdd() {
    addName(inputRef.current.value)

    inputRef.current.value = ''
  }

  function onButtonRemove() {
    removeName()
  }

  return (
    <div>
      <input ref={inputRef} type="text" name="name" />
      <button onClick={onButtonAdd}>Add Name</button>
      <button onClick={onButtonRemove}>Remove Name</button>
    </div>
  )
}
