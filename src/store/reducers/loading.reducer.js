import { actionTypes } from '../actions/loading.action'

const initialState = {
  open: false,
  msg: 'Carregando...'
}

function loadingReducer(state = initialState, { type, payload })
{
  switch(type) {
    case actionTypes.CHANGE:
      return {...state, ...payload }
    
    default: {
      return state;
    }
  }
}

export default loadingReducer;