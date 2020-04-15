import { produce } from 'immer';

const tasksReducer = (state = [], action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'TASKS:UPDATE_ALL':
            return action.payload
        case 'TASKS:UPDATE_ITEM': {
            const index = draftState.findIndex((task) => task.id === action.payload.id);

            draftState[index] = {
                ...draftState[index],
                ...action.payload
            }
            break;
        }
        default:
            return state;
    }
})

export default tasksReducer;