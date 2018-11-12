const initialState = {
    recentWords: [],
}

export const wordcloudReducer = (
    state = initialState,
    action,
) => {
    const { payload, type } = action;
    switch (type) {
        case 'THIS_SHOULD_GET_FROM_REMOTE_IN_THE_FUTURE':
            return {
                ...state,
                recentWords: ['data'],
            }
        default:
            return state;
    }
}