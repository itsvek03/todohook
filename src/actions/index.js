export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

export function addTodo(data) {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export function deletetodo(todoid) {
    return {
        type: DELETE_TODO,
        payload: todoid
    }
}

export function updateTodo(data) {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}

export function completedtodo(data) {
    return {
        type: COMPLETED_TODO,
        payload: data
    }
}

