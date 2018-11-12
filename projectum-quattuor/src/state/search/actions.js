/* Data fetching helper functions*/
export const updateResultSet = (param) => {return {type:'PUSH_RESULT', payload: param}};
export const updateErrorState = (param) => { return { type: 'PUSH_ERROR', payload: param } };
export const updateLoadingState = (loading, loadingUrl) => { return { type: 'PUSH_LOADING', payload: {loading, loadingUrl} } };

// Fetches data from API
export const fetchDataThunk = (fetch_url) => {

    return function (dispatch) {
        dispatch(updateLoadingState(true, fetch_url)); // Updates loading state and informs reducer which url is being fetched

        fetch(fetch_url)
            .then(response => {
                if (response.ok) {
                    dispatch(updateLoadingState(false, fetch_url));
                    return response.json();
                }
            }, error => { // Pushes error
                dispatch(updateErrorState(error.message));
                dispatch(updateLoadingState(false, fetch_url));
            })
            .then(data => {
                if(data !== undefined){ // Prevents JSON data to be updated if data does not exist
                    dispatch(updateResultSet(data.results));
                }
            })
    }
}
