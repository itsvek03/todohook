import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/index'
import { v1 as uuid } from 'uuid';


export default function Inputdata() {
    let [name, setName] = useState('');
    let dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-row mt-4">
                                <div className="form-group col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Todo.."
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            dispatch(addTodo({
                                                id: uuid(),
                                                Name: name
                                            }));
                                            setName('');
                                        }}
                                    >Add</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}
