import { produce } from 'immer';

const taskbarReducer = (state = [], action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'TASKBAR:UPDATE_ALL':
            return action.payload;
        default:
            return draftState;
    }
})

export default taskbarReducer;
