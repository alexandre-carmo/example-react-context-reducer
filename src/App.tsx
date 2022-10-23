import { ComponentOne } from "./Components/ComponentOne"
import { ComponentTwo } from "./Components/ComponentTwo"
import { ComponentContextProvider } from "./contexts/ComponentContext"

export function App() {

  return (
    <ComponentContextProvider>
      <ComponentOne />
      <ComponentTwo />
    </ComponentContextProvider>
  )
}
