import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="py-3 flex items-center justify-between border-b">
            <h4 className="text-lg font-semibold break-words w-3/4">
                {props.title}
            </h4>
            <div className="flex">
                <button className="w-8 h-8 bg-green-500 dark:bg-green-300 text-white dark:text-gray-900 rounded leading-4"
                onClick={() => props.handleItemComplete(props.id)}>
                    {props.completed &&
                        <i className="fas fa-check"></i>
                    }
                </button>
                <button className="w-8 h-8 ml-3 bg-red-500 dark:bg-red-400 text-white dark:text-gray-900 rounded"
                onClick={() => props.handleItemDelete(props.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}
