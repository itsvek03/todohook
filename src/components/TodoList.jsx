import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'


export default function TodoList() {
    let todo = useSelector(state => state)
    console.log(todo)
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        todo.map((todo) => {
                            return <Todo key={todo.id} todo={todo} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
