import { exampleReducer } from './example/reducer';
import { searchReducer } from './search/reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { wordcloudReducer } from './wordcloud/reducer';
import thunkMiddelware from 'redux-thunk';


const reducers = combineReducers({
    search: searchReducer,
    example: exampleReducer,
    wordcloud: wordcloudReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddelware));

export const configureStore = () => createStore(reducers, enhancer);
