import React from 'react'

export default function ThemeSwitcher(props) {
    return (
        <button className="fixed right-8 bottom-8 z-50 bg-purple-600 text-white dark:bg-purple-400 dark:text-gray-900 p-3 w-20 rounded-full shadow-md text-left transition" onClick={props.handleThemeSwitcher}>
            <div className="text-2xl w-6 h-6 dark:transform dark:translate-x-8 transition">
              <i className="fas fa-sun block dark:hidden"></i>
              <i className="fas fa-moon hidden dark:block"></i>
            </div>
        </button>
    )
}
