import { produce } from 'immer';

// eslint-disable-next-line consistent-return
const tasksReducer = (state = [], action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'TASKS:UPDATE_ALL':
            return action.payload;
        case 'TASKS:UPDATE_ITEM':
            const updateItem = draftState.find((task) => task.id === action.payload.id);

            Object.assign(updateItem, action.payload);

            break;
        default:
            return state;
    }
});

export default tasksReducer;