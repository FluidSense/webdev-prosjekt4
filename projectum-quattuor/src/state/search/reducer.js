
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
  switch (action.type) {
    case 'PUSH_RESULT':
      return {
        ...state,
        resultSetJson: payload,
      };
    case 'PUSH_ERROR':
      return {
        ...state,
        error: payload,
      };
    case 'PUSH_LOADING':
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
