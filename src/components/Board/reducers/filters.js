import { produce } from 'immer';

const defaultState = {
    filters: []
};

const filtersReducer = (state = defaultState, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'FILTERS:SET':
            action.payload.forEach((filter) => {
                filter.active = false;
            });
            // draftState.filters = action.payload;
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

export default filtersReducer;