import { useState } from "react"

export function useModal(
  initState: boolean = false
): [boolean, () => void, () => void, () => void] {
  const [state, setState] = useState(initState)

  function disableState() {
    setState(false)
  }

  function enableState() {
    setState(true)
  }

  function toggleState() {
    setState(!state)
  }

  return [state, enableState, disableState, toggleState]
}
