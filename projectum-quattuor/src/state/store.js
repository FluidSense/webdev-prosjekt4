import { exampleReducer } from './example/reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddelware from 'redux-thunk';

const reducers = combineReducers({
    example: exampleReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddelware));

export const configureStore = () => createStore(reducers, enhancer);