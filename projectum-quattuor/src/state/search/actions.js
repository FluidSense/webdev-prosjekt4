/* Data fetching for content helper functions */
export const updateSearchContentSet = param => ({ type: 'FETCHED_RESULTS_RECEIVED', payload: param });
export const updateSearchContentErrorState = param => ({ type: 'FETCH_CONTENT_ERROR_OCCURRED', payload: param });
export const updateSearchContentLoadingState = (loading, loadingUrl) => ({ type: 'FETCH_CONTENT_LOADING_IN_PROGRESS', payload: { loading, loadingUrl } });

/* Data fetching for search history updater */
export const updateSearchHistorySet = param => ({ type: 'FETCHED_HISTORY_RECEIVED', payload: param });

// Fetches data from API
export const fetchSearchData = fetchUrl => (dispatch) => {
  // Updates loading state and informs reducer which url is being fetched
  dispatch(updateSearchContentLoadingState(true, fetchUrl));

  return fetch(fetchUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return false;
    }, (error) => { // Pushes error
      dispatch(updateSearchContentErrorState(error.message));
      dispatch(updateSearchContentLoadingState(false, fetchUrl));
    })
    .then((data) => {
      if (data !== undefined) { // Prevents JSON data to be updated if data does not exist
        dispatch(updateSearchContentSet(data));
      }
    });
};

export const fetchSearchHistory = fetchUrl => (dispatch) => {
  return fetch(fetchUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return false;
    })
    .then((data) => {
      if (data !== undefined) { // Prevents JSON data to be updated if data does not exist
        dispatch(updateSearchHistorySet(data));
      }
    });
};
