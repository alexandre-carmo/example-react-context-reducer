export enum ActionsTypes {
  ADD_NAME = 'ADD_NAME',
  REMOVE_NAME = 'REMOVE_NAME'
}

export function addNameAction(name: string) {
  return {
    type: ActionsTypes.ADD_NAME,
    payload: {
      name
    }
  }
}

export function removeNameAction() {
  return {
    type: ActionsTypes.REMOVE_NAME,
    payload: {
      name: ''
    }
  }
}
