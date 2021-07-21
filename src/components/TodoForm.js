import React from 'react'

export default function TodoForm(props) {
    return (        
        <div className="py-6">
            <form className="flex flex-col" onSubmit={props.handleFormSubmit}>
                <label className="mb-4">
                    <input type='text' 
                            required
                            placeholder="New ToDo..." 
                            className="input-control" 
                            onChange={props.handleNewTodoChange}
                            value={props.newTodo}
                    />
                </label>
                <button type="submit" className="btn">
                    Add New ToDo
                </button>
            </form>
        </div>
    )
}
