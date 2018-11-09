
export const examplePayloadSelector = (state) => state.example.testString;
export const exampleToggledSelector = (state) => state.example.test;

export const resultSetSelector = (state) => state.searchReducer.resultSetJson;
export const errorSelector = (state) => state.searchReducer.error;
export const loadingSelector = (state) => state.searchReducer.loading;