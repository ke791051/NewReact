import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import component from './../components/ListComponent.js'

import {
  deleteData,
} from './../store/actions'

const mapStateToProps = (state) => ({
  Lists: state.get('list').get('Lists')
});

// 由 Component 傳進欲刪除元素的 index
const mapDispatchToProps = (dispatch) => ({
  onDeleteData: (index) => () => (
    dispatch(deleteData({ index }))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(component)