import React, { Component } from 'react'
import ThemeSwitcher from './components/ThemeSwitcher'
import TodoList from './components/TodoList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    this.handleThemeSwitcher = this.handleThemeSwitcher.bind(this)
  }

  componentDidMount() {
    if(localStorage.getItem('theme') === 'dark') {
      this.setState({
        theme: 'dark'
      })
    }
  }

  handleThemeSwitcher() {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark'
    }, () => {
      localStorage.setItem('theme', this.state.theme)
    })
  }

  render() {
    return (
      <div className={this.state.theme}>
        <div className="min-h-screen bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 transition py-4">
          
          <TodoList/>

          <ThemeSwitcher handleThemeSwitcher={this.handleThemeSwitcher} />
        </div>
      </div>
    )
  }
}
