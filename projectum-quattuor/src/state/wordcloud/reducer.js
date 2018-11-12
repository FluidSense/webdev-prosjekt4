const initialState = {
  recentWords: [],
};

const wordcloudReducer = (
  state = initialState,
  action,
) => {
  const { type } = action;
  switch (type) {
    case 'THIS_SHOULD_GET_FROM_REMOTE_IN_THE_FUTURE':
      return {
        ...state,
        recentWords: ['data'],
      };
    default:
      return state;
  }
};

export default wordcloudReducer;
