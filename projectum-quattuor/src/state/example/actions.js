export const exampleAction = () => {return {type:'EXAMPLE_ACTION'}};
export const exampleActionWithPayload = (param) => {return {type:'EXAMPLE_ACTION_WITH_PAYLOAD',payload:param}};

export const updateResultSet = (param) => {return {type:'PUSH_RESULT', payload: param}};
export const updateErrorState = (param) => { return { type: 'PUSH_ERROR', payload: param } };
export const updateLoadingState = (param) => { return { type: 'PUSH_LOADING', payload: param } };