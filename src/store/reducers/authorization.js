import { produce } from 'immer';

const defaultState = {
    isLoggedIn: false
};

const authorizationReducer = (state = defaultState, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'AUTH:TOGGLE_IS_LOGGED_IN': {
            draftState.isLoggedIn = action.payload;

            break;
        }
    }
});

export default authorizationReducer;