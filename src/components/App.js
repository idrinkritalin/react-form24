import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import Form from './Form'

class App extends Component {
  state = {
    title: 'Form24'
  }

  render() {
    const { title } = this.state
    return (
      <div className="container">
        <Header title={title}/>
        <Form/>
      </div>
    )
  }
}

export default App
