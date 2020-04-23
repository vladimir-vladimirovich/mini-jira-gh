import { produce } from 'immer';

const defaultState = {
    taskbar: [],
    tasks: [],
    filters: []
};

const boardReducer = (state = defaultState, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'TASKBAR:UPDATE_ALL':
            Object.assign(draftState, {
                taskbar: action.payload
            });

            break;
        case 'TASKS:UPDATE_ALL':
            Object.assign(draftState, {
                tasks: action.payload
            });

            break;
        case 'TASKS:UPDATE_ITEM':
            const updateItem = draftState.tasks.find((task) => task.id === action.payload.id);

            Object.assign(updateItem, action.payload);

            break;
        case 'FILTERS:SET':
            action.payload.forEach((filter) => {
                filter.active = false;
            });
            Object.assign(draftState, {
                filters: action.payload
            });

            break;
        case 'FILTERS:SET_ACTIVE':
            const payLoadFilter = draftState.filters.find((filter) => filter.id === action.payload);

            draftState.filters.forEach((filter) => {
                filter.active = false;
            });
            payLoadFilter.active = true;

            break;
    }
});

export default boardReducer;
