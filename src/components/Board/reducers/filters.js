import { produce } from 'immer';
import { filtersConfig } from '../../../config/filters';

const defaultState = filtersConfig;

const filtersReducer = (state = defaultState, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'FILTERS:UPDATE':
            return action.payload;
        default:
            return draftState;
    }
})

export default filtersReducer;