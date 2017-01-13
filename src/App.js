import React, { Component } from 'react'
import {connect} from 'react-redux'
import logo from './logo.svg'
import './App.css'
import {requestGroups} from './reducers'

class App extends Component {
  render() {
    return (
      <div className="App" onClick={() => {this.props.getGroups('groups')}}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: (resolved) => {
      dispatch(requestGroups(resolved))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

