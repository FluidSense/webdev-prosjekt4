import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunkMiddelware from 'redux-thunk';
import searchReducer from './search/reducer';


export const reducers = combineReducers({
  search: searchReducer,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddelware));

const configureStore = () => createStore(reducers, enhancer);
export default configureStore;
