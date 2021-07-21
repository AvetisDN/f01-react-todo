import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: '',
            todos: [
                {
                    id: 1,
                    title: 'Learn React',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Forget VueJS',
                    completed: true
                }
            ]
        }
        this.handleNewTodoChange = this.handleNewTodoChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleItemComplete = this.handleItemComplete.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    handleNewTodoChange(e) {
        this.setState({
            newTodo: e.target.value
        })
    }
    handleFormSubmit(e) {
        e.preventDefault()
        let todoItem = {
            id: Date.now(),
            title: this.state.newTodo,
            completed: false
        }
        let tmp = this.state.todos
        tmp.push(todoItem)
        this.setState({
            todos: tmp,
            newTodo: ''
        })
    }
    handleItemComplete(id) {
        let tmp = this.state.todos
        let foundIndex = tmp.findIndex((item, index) => item.id === id)
        tmp[foundIndex].completed = !tmp[foundIndex].completed
        this.setState({
            todos: tmp,
        })
    }
    handleItemDelete(id) {
        let tmp = this.state.todos
        let foundIndex = tmp.findIndex((item, index) => item.id === id)
        tmp.splice(foundIndex, 1)
        this.setState({
            todos: tmp,
        })        
    }

    render() {
        
        return (
            <div className="max-w-md mx-auto p-6 rounded-xl shadow-lg bg-white dark:bg-gray-700">
                <h1 className="text-2xl font-bold text-center text-purple-600 dark:text-purple-300">
                    My Todo List
                </h1>
                <TodoForm newTodo={this.state.newTodo} 
                        handleNewTodoChange={this.handleNewTodoChange} 
                        handleFormSubmit={this.handleFormSubmit} 
                />
                <div className="py-6">
                    {this.state.todos.map(item => <TodoItem item={item} title={item.title} id={item.id} completed={item.completed} key={item.id} handleItemComplete={this.handleItemComplete} handleItemDelete={this.handleItemDelete} />)}
                </div>
            </div>
        )
    }
}
