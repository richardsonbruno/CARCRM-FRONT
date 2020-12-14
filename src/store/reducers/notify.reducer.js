import { actionTypes } from '../actions/notify.action'

const initialState = {
  open: true,
  horizontal: 'center',
  vertical: 'top',
  class: 'success',
  time: 3000,
  msg: 'Dados Atualizados'
}

function notifyReducer(state = initialState, { type, payload }) {
  switch(type) {
    case actionTypes.CHANGE:
    return { ...state, ...payload };

    default:
      return state;
  }
}

export default notifyReducer