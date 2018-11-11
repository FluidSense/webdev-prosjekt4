
const initialState = {
    resultSetJson: [],
    error: '',
    loading: false,
};

export const searchReducer = (
    state = initialState,
    action,
) => {
    const { payload } = action;
    switch(action.type){
        case 'PUSH_RESULT':
            return{
                ...state,
                resultSetJson: payload,
                error: null, // Ensures that a previous error does not interfere with the new request
                loading: false
            };
        case 'PUSH_ERROR':
            return{
                ...state,
                resultSetJson: [], // Removes lingering data for better user experience
                error: payload,
                loading: false
            }
        case 'PUSH_LOADING':
            return {
                ...state,
                resultSetJson: [], // Removes lingering data for better user experience
                loading: true
            }
        default:
            return state;
    }
}