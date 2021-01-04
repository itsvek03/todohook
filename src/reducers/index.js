import { ADD_TODO, DELETE_TODO, UPDATE_TODO, COMPLETED_TODO } from '../actions/index'
import { todo } from '../state/index'
const reducer = (state = todo, action) => {
    let newtodos;
    switch (action.type) {
        case ADD_TODO:
            newtodos = [...state]
            newtodos.push(action.payload)
            return newtodos;

        case DELETE_TODO:
            newtodos = [...state];
            newtodos = newtodos.filter(todo => todo.id !== action.payload)
            return newtodos;

        case UPDATE_TODO:
            newtodos = [...state]
            let index = -1;
            for (let i = 0; i < newtodos.length; i++) {
                index++;
                if (newtodos[i].id === action.payload.id) {
                    break;
                }
            }
            if (index !== -1) {
                newtodos[index] = action.payload;
                return newtodos
            }
            break;
        case COMPLETED_TODO:
            newtodos = [...state];
            return newtodos;
        default:

    }
    return state;
}
export default reducer;