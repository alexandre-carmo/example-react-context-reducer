import { ActionsTypes } from "./actions";

interface StateProps {
  name: string
}

export function ComponentReducer(state: StateProps, action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_NAME:
      return action.payload.name
    case ActionsTypes.REMOVE_NAME:
      return ''
    default:
      return state;
  }
}
