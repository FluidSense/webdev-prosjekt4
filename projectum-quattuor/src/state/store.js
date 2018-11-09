import { exampleReducer } from './example/reducer';
import { searchReducer } from './search/reducer';
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    example: exampleReducer,
    search: searchReducer,
})

export const configureStore = () => createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());