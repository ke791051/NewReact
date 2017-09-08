import { handleActions } from 'redux-actions'
import { ListState } from '../constants/models'

export default handleActions({
  show: (state, { payload }) => (
    state.set('Lists', payload.List)
  ),
}, ListState)
