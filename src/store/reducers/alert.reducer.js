import { actionTypes } from '../actions/alert.action'

const initialState = {
  open: false, 
  class: 'error',
  time: 3000,
  msg: 'Msg atualizados'
}

function alertReducer (state = initialState, { type, payload }) {
  switch(type) {
    case actionTypes.CHANGE:
      return { ...state, ...payload };

    default:
      return state
  }
}

export default alertReducer