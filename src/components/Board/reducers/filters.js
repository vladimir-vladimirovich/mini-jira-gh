import { produce } from 'immer';

const filtersReducer = (state = {}, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'FILTERS:SET':
            console.log('[FILTERS] REDUCER [FILTERS:SET] state');
            action.payload.forEach((filter) => {
                filter.active = false;
            });
            draftState.filters = action.payload;

            break;
        case 'FILTERS:SET_ACTIVE':
            const payLoadFilter = draftState.filters.find((filter) => filter.id === action.payload);

            draftState.filters.forEach((filter) => {
                filter.active = false;
            });
            payLoadFilter.active = true;

            break;
        default:
            console.log('[FILTERS] REDUCER [DEFAULT] state');
            draftState.filters = [];
    }
});

export default filtersReducer;