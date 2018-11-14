
const initialState = {
  resultSetJson: [],
  error: '',
  loading: false,
  searchHistory: [],
};

const searchReducer = (
  state = initialState,
  action,
) => {
  const { payload } = action;
  switch (action.type) {
    case 'FETCHED_RESULTS_RECEIVED':
      return {
        ...state,
        resultSetJson: payload,
        error: null, // Ensures that a previous error does not interfere with the new request
        loading: false,
      };
    case 'FETCH_CONTENT_ERROR_OCCURRED':
      return {
        ...state,
        resultSetJson: [], // Removes lingering data for better user experience
        error: payload,
        loading: false,
      };
    case 'FETCH_CONTENT_LOADING_IN_PROGRESS':
      return {
        ...state,
        resultSetJson: [], // Removes lingering data for better user experience
        loading: payload.loading,
        loadingUrl: payload.loadingUrl,
      };
    case 'FETCHED_HISTORY_RECEIVED':
      return {
        ...state,
        searchHistory: payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
