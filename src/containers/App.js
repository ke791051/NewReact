import React, { Component } from 'react'
import ReactDom from 'react-dom'
import HeaderContainer from './HeaderContainer'
import ListContainer from './ListContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <ListContainer />
      </div>
    )
  }
}