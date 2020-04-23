import { produce } from 'immer';

const defaultState = {
    taskbar: []
};

const taskbarReducer = (state = defaultState, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'TASKBAR:UPDATE_ALL':
            Object.assign(draftState, {
                taskbar: action.payload
            });
    }
});

export default taskbarReducer;
