import { createStore, combineReducers } from 'redux';
import exampleReducer from './example/reducer';

const reducers = combineReducers({
  example: exampleReducer,
});

const configureStore = () => createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configureStore;
