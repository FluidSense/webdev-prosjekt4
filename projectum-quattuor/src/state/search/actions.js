/* Data fetching helper functions*/
export const updateResultSet = (param) => {return {type:'PUSH_RESULT', payload: param}};
export const updateErrorState = (param) => { return { type: 'PUSH_ERROR', payload: param } };
export const updateLoadingState = () => { return { type: 'PUSH_LOADING' } };

// Fetches data from API
export const fetchDataThunk = (fetch_url) => {

    return function (dispatch) {
        dispatch(updateLoadingState());

        fetch(fetch_url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }, error => { // Pushes error
                dispatch(updateErrorState(error.message));
                dispatch(updateLoadingState());
            })
            .then(data => {
                if(data !== undefined){ // Prevents JSON data to be updated if data does not exist
                    dispatch(updateResultSet(data.results));
                }
            })
    }
}
