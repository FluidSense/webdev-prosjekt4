/* Data fetching helper functions */
export const updateResultSet = param => ({ type: 'FETCHED_RESULTS_RECEIVED', payload: param });
export const updateErrorState = param => ({ type: 'FETCH_ERROR_OCCURRED', payload: param });
export const updateLoadingState = (loading, loadingUrl) => ({ type: 'FETCH_LOADING_IN_PROGRESS', payload: { loading, loadingUrl } });

// Fetches data from API
export const fetchDataThunk = fetchUrl => (dispatch) => {
  // Updates loading state and informs reducer which url is being fetched
  dispatch(updateLoadingState(true, fetchUrl));

  fetch(fetchUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return false;
    }, (error) => { // Pushes error
      dispatch(updateErrorState(error.message));
      dispatch(updateLoadingState(false, fetchUrl));
    })
    .then((data) => {
      if (data !== undefined) { // Prevents JSON data to be updated if data does not exist
        dispatch(updateResultSet(data.results));
      }
    });
};
