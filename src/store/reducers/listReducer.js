import { handleActions } from 'redux-actions'
import { ListState } from '../constants/models'

import {
  CreatData,
  DeleteData,
  ChangeText,
} from '../constants/actionTypes'

const listReducer = handleActions({
  CreatData: (state) => {
    const Lists = state.get('Lists').push(state.get('List'))
    return state.set('Lists', Lists)
  },
  DeleteData: (state, { payload }) => (
    state.set('Lists', state.get('Lists').splice(payload.index, 1))
  ),
  ChangeText: (state, { payload }) => (
    state.merge({ 'List': payload })
  )
}, ListState);

export default listReducer
