
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

        default:
            return state;
    }
}

export const searchReducer = (
    state = initialState,
    action,
) => {
    const { payload } = action;
    switch(action.type){
        case 'PUSH_RESULT':
            return{
                ...state,
                resultSetJson: payload
            };
        case 'PUSH_ERROR':
            return{
                ...state,
                error: payload
            }
        case 'PUSH_LOADING':
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}