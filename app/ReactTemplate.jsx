import React from 'react';
import ReactDOM from 'react-dom';
import timehandle from './timehandle.js'

//ES5寫法
// //建立React類別
// var Reacttimer = React.createClass ({
//   // 元件初始化設定
//   getInitialState:function(){
//     return {timenow:''}
//   },
//   // 建立自訂義函式
//   update: function(){
//     // 改變state，設定其中的timenow屬性
//     this.setState({timenow: timehandle.getTime()});
//     // 設定計時器，每一秒跑一次restate函式
//     setInterval(this.update, 1000)
//   },
//   // 元件掛載事件
//   componentDidMount: function(){
//     // 掛載後呼叫update方法
//     this.update()
//   },
//   render() {
//     // 宣告timenow變數，指向state中的timenow屬性
//     var timenow = this.state.timenow;
//     // 回傳標籤
//     return <p>{timenow}</p>;
//   }
// })
// // 繪製DOM
// ReactDOM.render(
//     <Reacttimer />,
//     document.getElementById('reacttimer")
// );


// ES6寫法
//建立React類別
class Reacttimer extends React.Component {
  // 元件初始化設定
  constructor(props){
    //必要
    super(props)
    this.state = {
        timenow:''
    }
    // 將this綁定至update的函式中，this指整個類別，於該函式便可使用this
    this.update = this.update.bind(this);
  }
  // 建立自訂義函式
  update(event){
    // 改變state，設定其中的timenow屬性
    this.setState({timenow: timehandle.getTime()})
    // 設定計時器，每一秒跑一次restate函式
    setInterval(this.update, 1000)
  }
  // 元件掛載事件
  componentDidMount(){
    // 掛載後呼叫update方法
    this.update()
  }
  onChange(state) {
    this.setState(state);
  }
  render() {
    // 宣告timenow變數，指向state中的timenow屬性
    let timenow = this.state.timenow;
    // 回傳標籤
    return <p>{timenow}</p>
  }
}
// 繪製DOM
ReactDOM.render(
    <Reacttimer />,
    document.getElementById('reacttimer')
)