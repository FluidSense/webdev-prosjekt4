import { exampleReducer } from './example/reducer';
import { createStore, combineReducers } from 'redux';
import { wordcloudReducer } from './wordcloud/reducer';

const reducers = combineReducers({
    example: exampleReducer,
    wordcloud: wordcloudReducer,
})

export const configureStore = () => createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());