import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import component from './../components/HeaderComponent'

// 將欲使用的 actions 引入
import {
  changeText,
  createData,
} from './../store/actions/index'

const mapStateToProps = (state) => ({
  // 從 store 取得 todo state
  List: state.get('list').get('List')
});

const mapDispatchToProps = (dispatch) => ({
  // 當使用者在 input 輸入資料值即會觸發這個函數，發出 changeText action 並附上使用者輸入內容 event.target.value
  onChangeText: (event) => (
    dispatch(changeText({ text: event.target.value }))
  ),
  // 當使用者按下送出時，發出 createTodo action 並清空 input 
  onCreateData: () => {
    dispatch(createData());
    dispatch(changeText({ text: '' }));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(component)


// 舊有寫法
// class HeaderContainer extends Component {
//   static propTypes = {
//     onChangeText: PropTypes.func.isRequired,
//     onCreateData: PropTypes.func.isRequired,
//     List: PropTypes.object.isRequired
//   }

//   constructor(props) {
//     super(props)
//     this.handleChangeText = this.handleChangeText.bind(this)
//     this.handleCreateData = this.handleCreateData.bind(this)
//   }

//   handleChangeText(e) {
//     if (this.props.onChangeText) {
//       this.props.onChangeText(e)
//     }
//   }

//   handleCreateData(e) {
//     e.preventDefault()
//     if (this.props.onChangeText) {
//       this.props.onCreateData()
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Header</h1>
//         <input type="text" value={this.props.List.get('text')} onChange={this.handleChangeText} />
//         <button type="submit" onClick={this.handleCreateData}>送出</button>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => ({
//   List: state.get('list').get('List')
// });

// const mapDispatchToProps = (dispatch) => ({
//   // 當使用者在 input 輸入資料值即會觸發這個函數，發出 changeText action 並附上使用者輸入內容 event.target.value
//   onChangeText: (event) => (
//     dispatch(changeText({ text: event.target.value }))
//   ),
//   // 當使用者按下送出時，發出 createTodo action 並清空 input 
//   onCreateData: () => {
//     dispatch(createData())
//     dispatch(changeText({ text: '' }))
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(HeaderContainer)