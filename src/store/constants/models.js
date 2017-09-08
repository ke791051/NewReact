import Immutable from 'immutable'

export const ListState = Immutable.fromJS({
  'Lists': [],
  'List': {
    id: '',
    text: '',
    updatedAt: '',
    completed: false
  }
})
