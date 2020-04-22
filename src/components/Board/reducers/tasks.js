import { produce } from 'immer';

const tasksReducer = (state = [], action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'TASKS:UPDATE_ALL':
            return action.payload;
        case 'TASKS:UPDATE_ITEM':
            const task = draftState.find((task) => task.id === action.payload.id);

            Object.assign(task, action.payload);

            break;
        default:
            return state;
    }
})

export default tasksReducer;