import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as actions from '../state/search/actions';
import { APIQuery } from '../consts';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Search actions', () => {
  const store = mockStore({});
  it('should create an action to add a search result', () => {
    const result = {};
    const expectedAction = {
      type: 'FETCHED_RESULTS_RECEIVED',
      payload: result,
    };
    expect(actions.updateSearchContentSet(result)).toEqual(expectedAction);
  });

  it('should create an action to save an error', () => {
    const error = { error: '' };
    const expectedAction = {
      type: 'FETCH_CONTENT_ERROR_OCCURRED',
      payload: error,
    };
    expect(actions.updateSearchContentErrorState(error)).toEqual(expectedAction);
  });

  it('should create an action to set loading and url', () => {
    const loading = true;
    const loadingUrl = 'url';
    const expectedAction = {
      type: 'FETCH_CONTENT_LOADING_IN_PROGRESS',
      payload: { loading, loadingUrl },
    };
    expect(actions.updateSearchContentLoadingState(loading, loadingUrl)).toEqual(expectedAction);
  });

  it('should create an action to set search history', () => {
    const history = [];
    const expectedAction = {
      type: 'FETCHED_HISTORY_RECEIVED',
      payload: history,
    };
    expect(actions.updateSearchHistorySet(history)).toEqual(expectedAction);
  });

  // Example of another way to use snapshot tests to test actions.
  it('should dispatch the correct action', () => {
    store.clearActions();
    store.dispatch(actions.updateSearchContentLoadingState(true, 'url'));
    expect(store.getActions()).toMatchSnapshot();
  });
});


describe('Search async action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCHED_RESULTS_RECEIVED when fetching search has been successfully done', () => {
    fetchMock.getOnce(APIQuery, {
      body: { count: 0, rows: [] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: 'FETCH_CONTENT_LOADING_IN_PROGRESS', payload: { loading: true, loadingUrl: APIQuery } },
      { type: 'FETCHED_RESULTS_RECEIVED', payload: { count: 0, rows: [] } },
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchSearchData(APIQuery)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCHED_HISTORY_RECEIVED when fetching history has been successfully done', () => {
    fetchMock.getOnce(`${APIQuery}/search`, {
      body: {
        id: 248,
        search_url: '/api/people?search=IG-88&limit=4&offset=0&column=id',
        search_string: 'IG-88',
        model: 'people',
        createdAt: '2018-11-16T18:04:49.656Z',
        updatedAt: '2018-11-16T18:04:49.656Z',
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: 'FETCHED_HISTORY_RECEIVED',
        payload: {
          id: 248,
          search_url: '/api/people?search=IG-88&limit=4&offset=0&column=id',
          search_string: 'IG-88',
          model: 'people',
          createdAt: '2018-11-16T18:04:49.656Z',
          updatedAt: '2018-11-16T18:04:49.656Z',
        },
      },
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchSearchHistory(`${APIQuery}/search`)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
