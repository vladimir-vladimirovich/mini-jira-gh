import { produce } from 'immer';

// eslint-disable-next-line consistent-return
// const tasksReducer = (state = [], action) => produce(state, (draftState) => {
//     switch (action.type) {
//         case 'TASKS:UPDATE_ALL':
//             return action.payload;
//         case 'TASKS:UPDATE_ITEM':
//             const updateItem = draftState.find((task) => task.id === action.payload.id);

//             Object.assign(updateItem, action.payload);

//             break;
//     }
// });

// eslint-disable-next-line consistent-return
const tasksReducer = (state = {}, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'TASKS:UPDATE_ALL':
            console.log('[TASKS] REDUCER [UPDATE:ALL] state');
            draftState.tasks = action.payload;

            break;
        case 'TASKS:UPDATE_ITEM':
            // eslint-disable-next-line no-unused-vars
            let updateItem = draftState.tasks.find((task) => task.id === action.payload.id);

            updateItem = action.payload;

            break;
        default:
            console.log('[TASKS] REDUCER [DEFAULT] state');
            draftState.tasks = [];
    }
});

export default tasksReducer;