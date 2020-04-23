import { produce } from 'immer';

const defaultState = {
    tasks: []
};

const tasksReducer = (state = defaultState, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'TASKS:UPDATE_ALL':
            // draftState.tasks = action.payload;
            Object.assign(draftState, {
                tasks: action.payload
            });

            break;
        case 'TASKS:UPDATE_ITEM':
            const updateItem = draftState.tasks.find((task) => task.id === action.payload.id);

            Object.assign(updateItem, action.payload);

            break;
    }
});

export default tasksReducer;