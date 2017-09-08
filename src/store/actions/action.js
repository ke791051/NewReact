import { createAction } from 'redux-actions'
import {
  CreatData,
  DeleteData,
  ChangeText,
} from '../constants/actionTypes'

export const createData = createAction('CreatData')
export const deleteData = createAction('DeleteData')
export const changeText = createAction('ChangeText')
