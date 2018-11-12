/* Data fetching helper functions*/
export const updateResultSet = (param) => {return {type:'PUSH_RESULT', payload: param}};
export const updateErrorState = (param) => { return { type: 'PUSH_ERROR', payload: param } };
export const updateLoadingState = (param) => { return { type: 'PUSH_LOADING', payload: param } };

// Fetches data from API
export const fetchDataThunk = (fetch_url) => {

    return function (dispatch) {
        dispatch(updateErrorState(null));  // Ensures that a previous error does not interfere with the new request
        dispatch(updateResultSet([]));  // Removes lingering data for better user experience
        dispatch(updateLoadingState(true));

        fetch(fetch_url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                dispatch(updateResultSet(data.results));
                dispatch(updateLoadingState(false));
            })
            .catch(error => {
                dispatch(updateErrorState(error.message));
                dispatch(updateLoadingState(false));
            })
    }
}
