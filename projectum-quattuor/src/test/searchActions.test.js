import * as actions from '../state/search/actions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { APIQuery } from '../components/Search/Search';

describe('Search actions', () => {
    it('should create an action to add a search result', () => {
        const result = {};
        const expectedAction = {
            type: 'FETCHED_RESULTS_RECEIVED',
            payload: result,
        };
        expect(actions.updateSearchContentSet(result)).toEqual(expectedAction);
    });

    it('should create an action to save an error', () => {
        const error = {error:''};
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
            payload: { loading, loadingUrl},
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
});

const middlewares = [thunk];
const mockstore = configureMockStore(middlewares);


describe('Search async action', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('creates FETCHED_RESULTS_RECEIVED when fetching search has been successfully done', () => {
        fetchMock.getOnce(APIQuery, {
            body: { todos:'help' },
            headers: {'content-type': 'application/json'}
        });

        const expectedActions  = [
            { type: 'FETCH_CONTENT_LOADING_IN_PROGRESS', payload: { loading:true, loadingUrl:APIQuery }},
            { type: 'FETCHED_RESULTS_RECEIVED', payload: param}
        ];
        const store = mockStore({});

        return store.dispatch(actions.fetchSearchData(APIQuery)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })

    })

});