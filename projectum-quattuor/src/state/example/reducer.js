
const initialState = {
    test: false,
    testString: 'startValue',
};

export const exampleReducer = (
    state = initialState,
    action,
) => {
    const { payload } = action;
    switch(action.type){
        case 'EXAMPLE_ACTION':
            return {
                ...state,
                test: !state.test
            };
        case 'EXAMPLE_ACTION_WITH_PAYLOAD':
            return {
                ...state,
                testString: payload
            };
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_DATA_FAILED':
            return {
                ...state,
                isFetching: false,
                fetchError: payload
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                isFetching: false,
                result: payload
            };
        default:
            return state;
    }
}