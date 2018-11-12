import { createStore, combineReducers } from 'redux';
import exampleReducer from './example/reducer';
import { wordcloudReducer } from './wordcloud/reducer';

const reducers = combineReducers({
    example: exampleReducer,
    wordcloud: wordcloudReducer,
})

const configureStore = () => createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configureStore;
