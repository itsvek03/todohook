import React, { useState } from 'react';
import { deletetodo } from '../actions/index'
import { updateTodo } from '../actions/index'
import { completedtodo } from '../actions/index'

import { useDispatch } from 'react-redux';


export default function Todo({ todo }) {
    const [update, setUpdate] = useState(false);
    const [name, setName] = useState(todo.Name);
    const [complete, setComplete] = useState(false);
    let dispatch = useDispatch();
    console.log(todo)
    return (
        <>
            <div className="card mt-3 mb-2 w-100">
                <div className="card-body">
                    <ul className="list-group">
                        <div className="mr-auto w-100">
                            <li className="list-group-item">
                                {update ? <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                /> : todo.Name && complete ? <h1 style={{ textDecoration: 'line-through' }}>{todo.Name}</h1> : todo.Name
                                }


                                <div className="d-flex flex-row-reverse">
                                    <button
                                        type="button"
                                        className="btn btn-success m-2"
                                        onClick={
                                            () => {
                                                dispatch(completedtodo(todo.id))
                                                setComplete('Finished')
                                            }
                                        }
                                    >Completed</button>



                                    <button
                                        type="button"
                                        className="btn btn-danger m-2"
                                        onClick={() => dispatch(deletetodo(todo.id))}
                                    >Delete</button>

                                    <button
                                        type="button"
                                        className="btn btn-primary m-2"
                                        onClick={() => {
                                            dispatch(updateTodo(
                                                {
                                                    ...todo,
                                                    Name: name
                                                }
                                            ));
                                            if (update) {
                                                setName(todo.name)
                                            }
                                            setUpdate(!update)
                                        }
                                        }
                                    >
                                        {update ? "Update" : "Edit"}
                                    </button>



                                </div>
                            </li>
                        </div>

                    </ul>
                </div>
            </div>
        </>
    );
}
