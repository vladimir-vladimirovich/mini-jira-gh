import { produce } from 'immer';
import { filtersConfig } from '../../../config/filters';

const defaultState = filtersConfig;

const filtersReducer = (state = defaultState, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'FILTERS:SET':
            const filters = action.payload.map((filter) => ({ ...filter }));

            filters.forEach((filter) => filter.active = false);
            // return filters;
            Object.assign(draftState, { ...filters });

            break;
        case 'FILTERS:SET_ACTIVE':
            const filter = draftState.find((filter) => filter.id === action.payload);

            Object.assign(draftState, {
                ...draftState.forEach((filter) => filter.active = false)
            })
            filter.active = true;

            break;
        default:
            return draftState;
    }
})

export default filtersReducer;