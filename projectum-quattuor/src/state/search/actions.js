export const updateResultSet = (param) => {return {type:'PUSH_RESULT', payload: param}};
export const updateErrorState = (param) => { return { type: 'PUSH_ERROR', payload: param } };
export const updateLoadingState = (param) => { return { type: 'PUSH_LOADING', payload: param } };