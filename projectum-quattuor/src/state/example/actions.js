export const exampleAction = () => {return {type:'EXAMPLE_ACTION'}};
export const exampleActionWithPayload = (param) => {return {type:'EXAMPLE_ACTION_WITH_PAYLOAD',payload:param}};

export const fetchData = () => {return {type:'FETCH_DATA_REQUEST'}};
export const fetchDataSuccess = (json) => { return {type:'FETCH_DATA_SUCCESS',payload:json}};
export const fetchDataFailure = (error) => { return {type:'FETCH_DATA_ERROR',payload:error}};

export const fetchDataThunk = () => {

    return function(dispatch) {
        dispatch(fetchData());

        return fetch('https://jsonplaceholder.typicoe.com/test/fail')
            .then(response => response.json(), 
                error => console.warn('Error while fetching remote resource. ',error))
            .then(json => dispatch(fetchDataSuccess(json)))
    }
}