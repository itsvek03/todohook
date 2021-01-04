import React from 'react'
import TodoList from './TodoList'
import Inputdata from './Inputdata'

export default function App() {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-left">
                            <div className="card-body">
                                <Inputdata />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-12 mt-4 p-2 align-items-center">
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
