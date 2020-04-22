import { produce } from 'immer';

const filtersReducer = (state = [], action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'FILTERS:SET':
            Object.assign(draftState, action.payload.map((filter) => ({
                ...filter,
                active: false
            })));

            break;
        case 'FILTERS:SET_ACTIVE':
            const payLoadFilter = draftState.find((filter) => filter.id === action.payload);

            draftState.forEach((filter) => {
                filter.active = false;
            });
            payLoadFilter.active = true;

            break;
    }
});

export default filtersReducer;