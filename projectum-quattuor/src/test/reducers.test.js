import { reducers } from '../state/store';

test('reducers', () => {
  let state;
  state = reducers({
    search: {
      resultSetJson: [], error: '', loading: false, searchHistory: [],
    },
  }, {
    type: 'FETCHED_HISTORY_RECEIVED',
    payload: [{
      id: 162, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:35.654Z', updatedAt: '2018-11-16T16:54:35.654Z',
    }, {
      id: 161, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:34.767Z', updatedAt: '2018-11-16T16:54:34.767Z',
    }, {
      id: 160, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:13.642Z', updatedAt: '2018-11-16T16:53:13.642Z',
    }, {
      id: 159, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:12.737Z', updatedAt: '2018-11-16T16:53:12.737Z',
    }, {
      id: 158, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:55.546Z', updatedAt: '2018-11-16T16:52:55.546Z',
    }, {
      id: 157, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:54.629Z', updatedAt: '2018-11-16T16:52:54.629Z',
    }, {
      id: 156, search_url: '/api/people?search=lars&limit=4&offset=0&column=id', search_string: 'lars', model: 'people', createdAt: '2018-11-16T16:52:43.534Z', updatedAt: '2018-11-16T16:52:43.534Z',
    }, {
      id: 155, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:20.889Z', updatedAt: '2018-11-16T16:50:20.889Z',
    }, {
      id: 154, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:19.936Z', updatedAt: '2018-11-16T16:50:19.936Z',
    }, {
      id: 153, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:49:56.057Z', updatedAt: '2018-11-16T16:49:56.057Z',
    }],
  });
  expect(state).toEqual({
    search: {
      resultSetJson: [],
      error: '',
      loading: false,
      searchHistory: [{
        id: 162, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:35.654Z', updatedAt: '2018-11-16T16:54:35.654Z',
      }, {
        id: 161, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:34.767Z', updatedAt: '2018-11-16T16:54:34.767Z',
      }, {
        id: 160, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:13.642Z', updatedAt: '2018-11-16T16:53:13.642Z',
      }, {
        id: 159, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:12.737Z', updatedAt: '2018-11-16T16:53:12.737Z',
      }, {
        id: 158, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:55.546Z', updatedAt: '2018-11-16T16:52:55.546Z',
      }, {
        id: 157, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:54.629Z', updatedAt: '2018-11-16T16:52:54.629Z',
      }, {
        id: 156, search_url: '/api/people?search=lars&limit=4&offset=0&column=id', search_string: 'lars', model: 'people', createdAt: '2018-11-16T16:52:43.534Z', updatedAt: '2018-11-16T16:52:43.534Z',
      }, {
        id: 155, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:20.889Z', updatedAt: '2018-11-16T16:50:20.889Z',
      }, {
        id: 154, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:19.936Z', updatedAt: '2018-11-16T16:50:19.936Z',
      }, {
        id: 153, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:49:56.057Z', updatedAt: '2018-11-16T16:49:56.057Z',
      }],
    },
  });
  state = reducers({
    search: {
      resultSetJson: [],
      error: '',
      loading: false,
      searchHistory: [{
        id: 162, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:35.654Z', updatedAt: '2018-11-16T16:54:35.654Z',
      }, {
        id: 161, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:34.767Z', updatedAt: '2018-11-16T16:54:34.767Z',
      }, {
        id: 160, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:13.642Z', updatedAt: '2018-11-16T16:53:13.642Z',
      }, {
        id: 159, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:12.737Z', updatedAt: '2018-11-16T16:53:12.737Z',
      }, {
        id: 158, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:55.546Z', updatedAt: '2018-11-16T16:52:55.546Z',
      }, {
        id: 157, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:54.629Z', updatedAt: '2018-11-16T16:52:54.629Z',
      }, {
        id: 156, search_url: '/api/people?search=lars&limit=4&offset=0&column=id', search_string: 'lars', model: 'people', createdAt: '2018-11-16T16:52:43.534Z', updatedAt: '2018-11-16T16:52:43.534Z',
      }, {
        id: 155, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:20.889Z', updatedAt: '2018-11-16T16:50:20.889Z',
      }, {
        id: 154, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:19.936Z', updatedAt: '2018-11-16T16:50:19.936Z',
      }, {
        id: 153, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:49:56.057Z', updatedAt: '2018-11-16T16:49:56.057Z',
      }],
    },
  }, { type: 'FETCH_CONTENT_LOADING_IN_PROGRESS', payload: { loading: true, loadingUrl: 'http://it2810-06.idi.ntnu.no/api/api/planets/?search=&sortBy=name&order=ASC' } });
  expect(state).toEqual({
    search: {
      resultSetJson: [],
      error: '',
      loading: true,
      searchHistory: [{
        id: 162, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:35.654Z', updatedAt: '2018-11-16T16:54:35.654Z',
      }, {
        id: 161, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:34.767Z', updatedAt: '2018-11-16T16:54:34.767Z',
      }, {
        id: 160, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:13.642Z', updatedAt: '2018-11-16T16:53:13.642Z',
      }, {
        id: 159, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:12.737Z', updatedAt: '2018-11-16T16:53:12.737Z',
      }, {
        id: 158, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:55.546Z', updatedAt: '2018-11-16T16:52:55.546Z',
      }, {
        id: 157, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:54.629Z', updatedAt: '2018-11-16T16:52:54.629Z',
      }, {
        id: 156, search_url: '/api/people?search=lars&limit=4&offset=0&column=id', search_string: 'lars', model: 'people', createdAt: '2018-11-16T16:52:43.534Z', updatedAt: '2018-11-16T16:52:43.534Z',
      }, {
        id: 155, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:20.889Z', updatedAt: '2018-11-16T16:50:20.889Z',
      }, {
        id: 154, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:19.936Z', updatedAt: '2018-11-16T16:50:19.936Z',
      }, {
        id: 153, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:49:56.057Z', updatedAt: '2018-11-16T16:49:56.057Z',
      }],
      loadingUrl: 'http://it2810-06.idi.ntnu.no/api/api/planets/?search=&sortBy=name&order=ASC',
    },
  });
  state = reducers({
    search: {
      resultSetJson: [],
      error: '',
      loading: true,
      searchHistory: [{
        id: 162, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:35.654Z', updatedAt: '2018-11-16T16:54:35.654Z',
      }, {
        id: 161, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:34.767Z', updatedAt: '2018-11-16T16:54:34.767Z',
      }, {
        id: 160, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:13.642Z', updatedAt: '2018-11-16T16:53:13.642Z',
      }, {
        id: 159, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:12.737Z', updatedAt: '2018-11-16T16:53:12.737Z',
      }, {
        id: 158, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:55.546Z', updatedAt: '2018-11-16T16:52:55.546Z',
      }, {
        id: 157, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:54.629Z', updatedAt: '2018-11-16T16:52:54.629Z',
      }, {
        id: 156, search_url: '/api/people?search=lars&limit=4&offset=0&column=id', search_string: 'lars', model: 'people', createdAt: '2018-11-16T16:52:43.534Z', updatedAt: '2018-11-16T16:52:43.534Z',
      }, {
        id: 155, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:20.889Z', updatedAt: '2018-11-16T16:50:20.889Z',
      }, {
        id: 154, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:50:19.936Z', updatedAt: '2018-11-16T16:50:19.936Z',
      }, {
        id: 153, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:49:56.057Z', updatedAt: '2018-11-16T16:49:56.057Z',
      }],
      loadingUrl: 'http://it2810-06.idi.ntnu.no/api/api/planets/?search=&sortBy=name&order=ASC',
    },
  }, {
    type: 'FETCHED_HISTORY_RECEIVED',
    payload: [{
      id: 165, search_url: '/api/people/?search=Skywalker&sortBy=name&order=ASC', search_string: 'Skywalker', model: 'people', createdAt: '2018-11-16T17:00:10.509Z', updatedAt: '2018-11-16T17:00:10.509Z',
    }, {
      id: 164, search_url: '/api/planets/?search=Tatooine&sortBy=name&order=ASC', search_string: 'Tatooine', model: 'planet', createdAt: '2018-11-16T17:00:06.509Z', updatedAt: '2018-11-16T17:00:06.509Z',
    }, {
      id: 163, search_url: '/api/people/?search=Skywalker&sortBy=name&order=ASC', search_string: 'Skywalker', model: 'people', createdAt: '2018-11-16T17:00:02.904Z', updatedAt: '2018-11-16T17:00:02.904Z',
    }, {
      id: 162, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:35.654Z', updatedAt: '2018-11-16T16:54:35.654Z',
    }, {
      id: 161, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:34.767Z', updatedAt: '2018-11-16T16:54:34.767Z',
    }, {
      id: 160, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:13.642Z', updatedAt: '2018-11-16T16:53:13.642Z',
    }, {
      id: 159, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:12.737Z', updatedAt: '2018-11-16T16:53:12.737Z',
    }, {
      id: 158, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:55.546Z', updatedAt: '2018-11-16T16:52:55.546Z',
    }, {
      id: 157, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:54.629Z', updatedAt: '2018-11-16T16:52:54.629Z',
    }, {
      id: 156, search_url: '/api/people?search=lars&limit=4&offset=0&column=id', search_string: 'lars', model: 'people', createdAt: '2018-11-16T16:52:43.534Z', updatedAt: '2018-11-16T16:52:43.534Z',
    }],
  });
  expect(state).toEqual({
    search: {
      resultSetJson: [],
      error: '',
      loading: true,
      searchHistory: [{
        id: 165, search_url: '/api/people/?search=Skywalker&sortBy=name&order=ASC', search_string: 'Skywalker', model: 'people', createdAt: '2018-11-16T17:00:10.509Z', updatedAt: '2018-11-16T17:00:10.509Z',
      }, {
        id: 164, search_url: '/api/planets/?search=Tatooine&sortBy=name&order=ASC', search_string: 'Tatooine', model: 'planet', createdAt: '2018-11-16T17:00:06.509Z', updatedAt: '2018-11-16T17:00:06.509Z',
      }, {
        id: 163, search_url: '/api/people/?search=Skywalker&sortBy=name&order=ASC', search_string: 'Skywalker', model: 'people', createdAt: '2018-11-16T17:00:02.904Z', updatedAt: '2018-11-16T17:00:02.904Z',
      }, {
        id: 162, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:35.654Z', updatedAt: '2018-11-16T16:54:35.654Z',
      }, {
        id: 161, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:34.767Z', updatedAt: '2018-11-16T16:54:34.767Z',
      }, {
        id: 160, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:13.642Z', updatedAt: '2018-11-16T16:53:13.642Z',
      }, {
        id: 159, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:12.737Z', updatedAt: '2018-11-16T16:53:12.737Z',
      }, {
        id: 158, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:55.546Z', updatedAt: '2018-11-16T16:52:55.546Z',
      }, {
        id: 157, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:54.629Z', updatedAt: '2018-11-16T16:52:54.629Z',
      }, {
        id: 156, search_url: '/api/people?search=lars&limit=4&offset=0&column=id', search_string: 'lars', model: 'people', createdAt: '2018-11-16T16:52:43.534Z', updatedAt: '2018-11-16T16:52:43.534Z',
      }],
      loadingUrl: 'http://it2810-06.idi.ntnu.no/api/api/planets/?search=&sortBy=name&order=ASC',
    },
  });
  state = reducers({
    search: {
      resultSetJson: [],
      error: '',
      loading: true,
      searchHistory: [{
        id: 165, search_url: '/api/people/?search=Skywalker&sortBy=name&order=ASC', search_string: 'Skywalker', model: 'people', createdAt: '2018-11-16T17:00:10.509Z', updatedAt: '2018-11-16T17:00:10.509Z',
      }, {
        id: 164, search_url: '/api/planets/?search=Tatooine&sortBy=name&order=ASC', search_string: 'Tatooine', model: 'planet', createdAt: '2018-11-16T17:00:06.509Z', updatedAt: '2018-11-16T17:00:06.509Z',
      }, {
        id: 163, search_url: '/api/people/?search=Skywalker&sortBy=name&order=ASC', search_string: 'Skywalker', model: 'people', createdAt: '2018-11-16T17:00:02.904Z', updatedAt: '2018-11-16T17:00:02.904Z',
      }, {
        id: 162, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:35.654Z', updatedAt: '2018-11-16T16:54:35.654Z',
      }, {
        id: 161, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:34.767Z', updatedAt: '2018-11-16T16:54:34.767Z',
      }, {
        id: 160, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:13.642Z', updatedAt: '2018-11-16T16:53:13.642Z',
      }, {
        id: 159, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:12.737Z', updatedAt: '2018-11-16T16:53:12.737Z',
      }, {
        id: 158, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:55.546Z', updatedAt: '2018-11-16T16:52:55.546Z',
      }, {
        id: 157, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:54.629Z', updatedAt: '2018-11-16T16:52:54.629Z',
      }, {
        id: 156, search_url: '/api/people?search=lars&limit=4&offset=0&column=id', search_string: 'lars', model: 'people', createdAt: '2018-11-16T16:52:43.534Z', updatedAt: '2018-11-16T16:52:43.534Z',
      }],
      loadingUrl: 'http://it2810-06.idi.ntnu.no/api/api/planets/?search=&sortBy=name&order=ASC',
    },
  }, {
    type: 'FETCHED_RESULTS_RECEIVED',
    payload: {
      count: 60,
      rows: [{
        id: 2, climate: 'temperate', surface_water: '40', name: 'Alderaan', diameter: '12500', rotation_period: '24', terrain: 'grasslands, mountains', gravity: '1 standard', orbital_period: '364', population: '2000000000', model: 'Planet',
      }, {
        id: 38, climate: 'unknown', surface_water: 'unknown', name: 'Aleen Minor', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 6, climate: 'temperate', surface_water: '0', name: 'Bespin', diameter: '118000', rotation_period: '12', terrain: 'gas giant', gravity: '1.5 (surface), 1 standard (Cloud City)', orbital_period: '5110', population: '6000000', model: 'Planet',
      }, {
        id: 26, climate: 'temperate', surface_water: '98', name: 'Bestine IV', diameter: '6400', rotation_period: '26', terrain: 'rocky islands, oceans', gravity: 'unknown', orbital_period: '680', population: '62000000', model: 'Planet',
      }, {
        id: 18, climate: 'temperate, moist', surface_water: 'unknown', name: 'Cato Neimoidia', diameter: '0', rotation_period: '25', terrain: 'mountains, fields, forests, rock arches', gravity: '1 standard', orbital_period: '278', population: '10000000', model: 'Planet',
      }, {
        id: 43, climate: 'temperate', surface_water: '20', name: 'Cerea', diameter: 'unknown', rotation_period: '27', terrain: 'verdant', gravity: '1', orbital_period: '386', population: '450000000', model: 'Planet',
      }, {
        id: 50, climate: 'temperate', surface_water: 'unknown', name: 'Champala', diameter: 'unknown', rotation_period: '27', terrain: 'oceans, rainforests, plateaus', gravity: '1', orbital_period: '318', population: '3500000000', model: 'Planet',
      }, {
        id: 32, climate: 'temperate', surface_water: '40', name: 'Chandrila', diameter: '13500', rotation_period: '20', terrain: 'plains, forests', gravity: '1', orbital_period: '368', population: '1200000000', model: 'Planet',
      }, {
        id: 53, climate: 'unknown', surface_water: 'unknown', name: 'Concord Dawn', diameter: 'unknown', rotation_period: 'unknown', terrain: 'jungles, forests, deserts', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 22, climate: 'temperate', surface_water: '70', name: 'Corellia', diameter: '11000', rotation_period: '25', terrain: 'plains, urban, hills, forests', gravity: '1 standard', orbital_period: '329', population: '3000000000', model: 'Planet',
      }, {
        id: 9, climate: 'temperate', surface_water: 'unknown', name: 'Coruscant', diameter: '12240', rotation_period: '24', terrain: 'cityscape, mountains', gravity: '1 standard', orbital_period: '368', population: '1000000000000', model: 'Planet',
      }, {
        id: 5, climate: 'murky', surface_water: '8', name: 'Dagobah', diameter: '8900', rotation_period: '23', terrain: 'swamp, jungles', gravity: 'N/A', orbital_period: '341', population: 'unknown', model: 'Planet',
      }, {
        id: 25, climate: 'temperate', surface_water: 'unknown', name: 'Dantooine', diameter: '9830', rotation_period: '25', terrain: 'oceans, savannas, mountains, grasslands', gravity: '1 standard', orbital_period: '378', population: '1000', model: 'Planet',
      }, {
        id: 36, climate: 'temperate', surface_water: 'unknown', name: 'Dathomir', diameter: '10480', rotation_period: '24', terrain: 'forests, deserts, savannas', gravity: '0.9', orbital_period: '491', population: '5200', model: 'Planet',
      }, {
        id: 49, climate: 'temperate', surface_water: 'unknown', name: 'Dorin', diameter: '13400', rotation_period: '22', terrain: 'unknown', gravity: '1', orbital_period: '409', population: 'unknown', model: 'Planet',
      }, {
        id: 7, climate: 'temperate', surface_water: '8', name: 'Endor', diameter: '4900', rotation_period: '18', terrain: 'forests, mountains, lakes', gravity: '0.85 standard', orbital_period: '402', population: '30000000', model: 'Planet',
      }, {
        id: 21, climate: 'polluted', surface_water: 'unknown', name: 'Eriadu', diameter: '13490', rotation_period: '24', terrain: 'cityscape', gravity: '1 standard', orbital_period: '360', population: '22000000000', model: 'Planet',
      }, {
        id: 17, climate: 'hot, humid', surface_water: 'unknown', name: 'Felucia', diameter: '9100', rotation_period: '34', terrain: 'fungus forests', gravity: '0.75 standard', orbital_period: '231', population: '8500000', model: 'Planet',
      }, {
        id: 11, climate: 'temperate, arid', surface_water: '5', name: 'Geonosis', diameter: '11370', rotation_period: '30', terrain: 'rock, desert, mountain, barren', gravity: '0.9 standard', orbital_period: '256', population: '100000000000', model: 'Planet',
      }, {
        id: 44, climate: 'tropical, temperate', surface_water: '80', name: 'Glee Anselm', diameter: '15600', rotation_period: '33', terrain: 'lakes, islands, swamps, seas', gravity: '1', orbital_period: '206', population: '500000000', model: 'Planet',
      }, {
        id: 42, climate: 'temperate', surface_water: 'unknown', name: 'Haruun Kal', diameter: '10120', rotation_period: '25', terrain: 'toxic cloudsea, plateaus, volcanoes', gravity: '0.98', orbital_period: '383', population: '705300', model: 'Planet',
      }, {
        id: 4, climate: 'frozen', surface_water: '100', name: 'Hoth', diameter: '7200', rotation_period: '23', terrain: 'tundra, ice caves, mountain ranges', gravity: '1.1 standard', orbital_period: '549', population: 'unknown', model: 'Planet',
      }, {
        id: 47, climate: 'arid, rocky, windy', surface_water: 'unknown', name: 'Iktotch', diameter: 'unknown', rotation_period: '22', terrain: 'rocky', gravity: '1', orbital_period: '481', population: 'unknown', model: 'Planet',
      }, {
        id: 45, climate: 'unknown', surface_water: 'unknown', name: 'Iridonia', diameter: 'unknown', rotation_period: '29', terrain: 'rocky canyons, acid pools', gravity: 'unknown', orbital_period: '413', population: 'unknown', model: 'Planet',
      }, {
        id: 59, climate: 'arid, temperate, tropical', surface_water: 'unknown', name: 'Kalee', diameter: '13850', rotation_period: '23', terrain: 'rainforests, cliffs, canyons, seas', gravity: '1', orbital_period: '378', population: '4000000000', model: 'Planet',
      }, {
        id: 10, climate: 'temperate', surface_water: '100', name: 'Kamino', diameter: '19720', rotation_period: '27', terrain: 'ocean', gravity: '1 standard', orbital_period: '463', population: '1000000000', model: 'Planet',
      }, {
        id: 14, climate: 'tropical', surface_water: '60', name: 'Kashyyyk', diameter: '12765', rotation_period: '26', terrain: 'jungle, forests, lakes, rivers', gravity: '1 standard', orbital_period: '381', population: '45000000', model: 'Planet',
      }, {
        id: 35, climate: 'arid, temperate, tropical', surface_water: 'unknown', name: 'Malastare', diameter: '18880', rotation_period: '26', terrain: 'swamps, deserts, jungles, mountains', gravity: '1.56', orbital_period: '201', population: '2000000000', model: 'Planet',
      }, {
        id: 51, climate: 'unknown', surface_water: 'unknown', name: 'Mirial', diameter: 'unknown', rotation_period: 'unknown', terrain: 'deserts', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 31, climate: 'temperate', surface_water: '100', name: 'Mon Cala', diameter: '11030', rotation_period: '21', terrain: 'oceans, reefs, islands', gravity: '1', orbital_period: '398', population: '27000000000', model: 'Planet',
      }, {
        id: 13, climate: 'hot', surface_water: '0', name: 'Mustafar', diameter: '4200', rotation_period: '36', terrain: 'volcanoes, lava rivers, mountains, caves', gravity: '1 standard', orbital_period: '412', population: '20000', model: 'Planet',
      }, {
        id: 57, climate: 'temperate', surface_water: '25', name: 'Muunilinst', diameter: '13800', rotation_period: '28', terrain: 'plains, forests, hills, mountains', gravity: '1', orbital_period: '412', population: '5000000000', model: 'Planet',
      }, {
        id: 16, climate: 'frigid', surface_water: 'unknown', name: 'Mygeeto', diameter: '10088', rotation_period: '12', terrain: 'glaciers, mountains, ice canyons', gravity: '1 standard', orbital_period: '167', population: '19000000', model: 'Planet',
      }, {
        id: 8, climate: 'temperate', surface_water: '12', name: 'Naboo', diameter: '12120', rotation_period: '26', terrain: 'grassy hills, swamps, forests, mountains', gravity: '1 standard', orbital_period: '312', population: '4500000000', model: 'Planet',
      }, {
        id: 24, climate: 'temperate', surface_water: 'unknown', name: 'Nal Hutta', diameter: '12150', rotation_period: '87', terrain: 'urban, oceans, swamps, bogs', gravity: '1 standard', orbital_period: '413', population: '7000000000', model: 'Planet',
      }, {
        id: 55, climate: 'frigid', surface_water: '100', name: 'Ojom', diameter: 'unknown', rotation_period: 'unknown', terrain: 'oceans, glaciers', gravity: 'unknown', orbital_period: 'unknown', population: '500000000', model: 'Planet',
      }, {
        id: 27, climate: 'temperate', surface_water: '10', name: 'Ord Mantell', diameter: '14050', rotation_period: '26', terrain: 'plains, seas, mesas', gravity: '1 standard', orbital_period: '334', population: '4000000000', model: 'Planet',
      }, {
        id: 15, climate: 'artificial temperate ', surface_water: '0', name: 'Polis Massa', diameter: '0', rotation_period: '24', terrain: 'airless asteroid', gravity: '0.56 standard', orbital_period: '590', population: '1000000', model: 'Planet',
      }, {
        id: 48, climate: 'unknown', surface_water: 'unknown', name: 'Quermia', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 23, climate: 'hot', surface_water: '60', name: 'Rodia', diameter: '7549', rotation_period: '29', terrain: 'jungles, oceans, urban, swamps', gravity: '1 standard', orbital_period: '305', population: '1300000000', model: 'Planet',
      }, {
        id: 37, climate: 'temperate, arid, subartic', surface_water: '5', name: 'Ryloth', diameter: '10600', rotation_period: '30', terrain: 'mountains, valleys, deserts, tundra', gravity: '1', orbital_period: '305', population: '1500000000', model: 'Planet',
      }, {
        id: 19, climate: 'hot', surface_water: 'unknown', name: 'Saleucami', diameter: '14920', rotation_period: '26', terrain: 'caves, desert, mountains, volcanoes', gravity: 'unknown', orbital_period: '392', population: '1400000000', model: 'Planet',
      }, {
        id: 52, climate: 'unknown', surface_water: 'unknown', name: 'Serenno', diameter: 'unknown', rotation_period: 'unknown', terrain: 'rainforests, rivers, mountains', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 58, climate: 'temperate', surface_water: 'unknown', name: 'Shili', diameter: 'unknown', rotation_period: 'unknown', terrain: 'cities, savannahs, seas, plains', gravity: '1', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 56, climate: 'temperate', surface_water: 'unknown', name: 'Skako', diameter: 'unknown', rotation_period: '27', terrain: 'urban, vines', gravity: '1', orbital_period: '384', population: '500000000000', model: 'Planet',
      }, {
        id: 30, climate: 'arid', surface_water: 'unknown', name: 'Socorro', diameter: '0', rotation_period: '20', terrain: 'deserts, mountains', gravity: '1 standard', orbital_period: '326', population: '300000000', model: 'Planet',
      }, {
        id: 20, climate: 'temperate', surface_water: 'unknown', name: 'Stewjon', diameter: '0', rotation_period: 'unknown', terrain: 'grass', gravity: '1 standard', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 33, climate: 'superheated', surface_water: '5', name: 'Sullust', diameter: '12780', rotation_period: '20', terrain: 'mountains, volcanoes, rocky deserts', gravity: '1', orbital_period: '263', population: '18500000000', model: 'Planet',
      }, {
        id: 1, climate: 'arid', surface_water: '1', name: 'Tatooine', diameter: '10465', rotation_period: '23', terrain: 'desert', gravity: '1 standard', orbital_period: '304', population: '200000', model: 'Planet',
      }, {
        id: 46, climate: 'unknown', surface_water: 'unknown', name: 'Tholoth', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 34, climate: 'temperate', surface_water: 'unknown', name: 'Toydaria', diameter: '7900', rotation_period: '21', terrain: 'swamps, lakes', gravity: '1', orbital_period: '184', population: '11000000', model: 'Planet',
      }, {
        id: 29, climate: 'arid', surface_water: 'unknown', name: 'Trandosha', diameter: '0', rotation_period: '25', terrain: 'mountains, seas, grasslands, deserts', gravity: '0.62 standard', orbital_period: '371', population: '42000000', model: 'Planet',
      }, {
        id: 40, climate: 'unknown', surface_water: 'unknown', name: 'Troiken', diameter: 'unknown', rotation_period: 'unknown', terrain: 'desert, tundra, rainforests, mountains', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 41, climate: 'unknown', surface_water: 'unknown', name: 'Tund', diameter: '12190', rotation_period: '48', terrain: 'barren, ash', gravity: 'unknown', orbital_period: '1770', population: '0', model: 'Planet',
      }, {
        id: 60, climate: 'unknown', surface_water: 'unknown', name: 'Umbara', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }, {
        id: 28, climate: 'unknown', surface_water: 'unknown', name: 'unknown', diameter: '0', rotation_period: '0', terrain: 'unknown', gravity: 'unknown', orbital_period: '0', population: 'unknown', model: 'Planet',
      }, {
        id: 12, climate: 'temperate, arid, windy', surface_water: '0.9', name: 'Utapau', diameter: '12900', rotation_period: '27', terrain: 'scrublands, savanna, canyons, sinkholes', gravity: '1 standard', orbital_period: '351', population: '95000000', model: 'Planet',
      }, {
        id: 39, climate: 'temperate, artic', surface_water: 'unknown', name: 'Vulpter', diameter: '14900', rotation_period: '22', terrain: 'urban, barren', gravity: '1', orbital_period: '391', population: '421000000', model: 'Planet',
      }, {
        id: 3, climate: 'temperate, tropical', surface_water: '8', name: 'Yavin IV', diameter: '10200', rotation_period: '24', terrain: 'jungle, rainforests', gravity: '1 standard', orbital_period: '4818', population: '1000', model: 'Planet',
      }, {
        id: 54, climate: 'unknown', surface_water: 'unknown', name: 'Zolan', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
      }],
    },
  });
  expect(state).toEqual({
    search: {
      resultSetJson: {
        count: 60,
        rows: [{
          id: 2, climate: 'temperate', surface_water: '40', name: 'Alderaan', diameter: '12500', rotation_period: '24', terrain: 'grasslands, mountains', gravity: '1 standard', orbital_period: '364', population: '2000000000', model: 'Planet',
        }, {
          id: 38, climate: 'unknown', surface_water: 'unknown', name: 'Aleen Minor', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 6, climate: 'temperate', surface_water: '0', name: 'Bespin', diameter: '118000', rotation_period: '12', terrain: 'gas giant', gravity: '1.5 (surface), 1 standard (Cloud City)', orbital_period: '5110', population: '6000000', model: 'Planet',
        }, {
          id: 26, climate: 'temperate', surface_water: '98', name: 'Bestine IV', diameter: '6400', rotation_period: '26', terrain: 'rocky islands, oceans', gravity: 'unknown', orbital_period: '680', population: '62000000', model: 'Planet',
        }, {
          id: 18, climate: 'temperate, moist', surface_water: 'unknown', name: 'Cato Neimoidia', diameter: '0', rotation_period: '25', terrain: 'mountains, fields, forests, rock arches', gravity: '1 standard', orbital_period: '278', population: '10000000', model: 'Planet',
        }, {
          id: 43, climate: 'temperate', surface_water: '20', name: 'Cerea', diameter: 'unknown', rotation_period: '27', terrain: 'verdant', gravity: '1', orbital_period: '386', population: '450000000', model: 'Planet',
        }, {
          id: 50, climate: 'temperate', surface_water: 'unknown', name: 'Champala', diameter: 'unknown', rotation_period: '27', terrain: 'oceans, rainforests, plateaus', gravity: '1', orbital_period: '318', population: '3500000000', model: 'Planet',
        }, {
          id: 32, climate: 'temperate', surface_water: '40', name: 'Chandrila', diameter: '13500', rotation_period: '20', terrain: 'plains, forests', gravity: '1', orbital_period: '368', population: '1200000000', model: 'Planet',
        }, {
          id: 53, climate: 'unknown', surface_water: 'unknown', name: 'Concord Dawn', diameter: 'unknown', rotation_period: 'unknown', terrain: 'jungles, forests, deserts', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 22, climate: 'temperate', surface_water: '70', name: 'Corellia', diameter: '11000', rotation_period: '25', terrain: 'plains, urban, hills, forests', gravity: '1 standard', orbital_period: '329', population: '3000000000', model: 'Planet',
        }, {
          id: 9, climate: 'temperate', surface_water: 'unknown', name: 'Coruscant', diameter: '12240', rotation_period: '24', terrain: 'cityscape, mountains', gravity: '1 standard', orbital_period: '368', population: '1000000000000', model: 'Planet',
        }, {
          id: 5, climate: 'murky', surface_water: '8', name: 'Dagobah', diameter: '8900', rotation_period: '23', terrain: 'swamp, jungles', gravity: 'N/A', orbital_period: '341', population: 'unknown', model: 'Planet',
        }, {
          id: 25, climate: 'temperate', surface_water: 'unknown', name: 'Dantooine', diameter: '9830', rotation_period: '25', terrain: 'oceans, savannas, mountains, grasslands', gravity: '1 standard', orbital_period: '378', population: '1000', model: 'Planet',
        }, {
          id: 36, climate: 'temperate', surface_water: 'unknown', name: 'Dathomir', diameter: '10480', rotation_period: '24', terrain: 'forests, deserts, savannas', gravity: '0.9', orbital_period: '491', population: '5200', model: 'Planet',
        }, {
          id: 49, climate: 'temperate', surface_water: 'unknown', name: 'Dorin', diameter: '13400', rotation_period: '22', terrain: 'unknown', gravity: '1', orbital_period: '409', population: 'unknown', model: 'Planet',
        }, {
          id: 7, climate: 'temperate', surface_water: '8', name: 'Endor', diameter: '4900', rotation_period: '18', terrain: 'forests, mountains, lakes', gravity: '0.85 standard', orbital_period: '402', population: '30000000', model: 'Planet',
        }, {
          id: 21, climate: 'polluted', surface_water: 'unknown', name: 'Eriadu', diameter: '13490', rotation_period: '24', terrain: 'cityscape', gravity: '1 standard', orbital_period: '360', population: '22000000000', model: 'Planet',
        }, {
          id: 17, climate: 'hot, humid', surface_water: 'unknown', name: 'Felucia', diameter: '9100', rotation_period: '34', terrain: 'fungus forests', gravity: '0.75 standard', orbital_period: '231', population: '8500000', model: 'Planet',
        }, {
          id: 11, climate: 'temperate, arid', surface_water: '5', name: 'Geonosis', diameter: '11370', rotation_period: '30', terrain: 'rock, desert, mountain, barren', gravity: '0.9 standard', orbital_period: '256', population: '100000000000', model: 'Planet',
        }, {
          id: 44, climate: 'tropical, temperate', surface_water: '80', name: 'Glee Anselm', diameter: '15600', rotation_period: '33', terrain: 'lakes, islands, swamps, seas', gravity: '1', orbital_period: '206', population: '500000000', model: 'Planet',
        }, {
          id: 42, climate: 'temperate', surface_water: 'unknown', name: 'Haruun Kal', diameter: '10120', rotation_period: '25', terrain: 'toxic cloudsea, plateaus, volcanoes', gravity: '0.98', orbital_period: '383', population: '705300', model: 'Planet',
        }, {
          id: 4, climate: 'frozen', surface_water: '100', name: 'Hoth', diameter: '7200', rotation_period: '23', terrain: 'tundra, ice caves, mountain ranges', gravity: '1.1 standard', orbital_period: '549', population: 'unknown', model: 'Planet',
        }, {
          id: 47, climate: 'arid, rocky, windy', surface_water: 'unknown', name: 'Iktotch', diameter: 'unknown', rotation_period: '22', terrain: 'rocky', gravity: '1', orbital_period: '481', population: 'unknown', model: 'Planet',
        }, {
          id: 45, climate: 'unknown', surface_water: 'unknown', name: 'Iridonia', diameter: 'unknown', rotation_period: '29', terrain: 'rocky canyons, acid pools', gravity: 'unknown', orbital_period: '413', population: 'unknown', model: 'Planet',
        }, {
          id: 59, climate: 'arid, temperate, tropical', surface_water: 'unknown', name: 'Kalee', diameter: '13850', rotation_period: '23', terrain: 'rainforests, cliffs, canyons, seas', gravity: '1', orbital_period: '378', population: '4000000000', model: 'Planet',
        }, {
          id: 10, climate: 'temperate', surface_water: '100', name: 'Kamino', diameter: '19720', rotation_period: '27', terrain: 'ocean', gravity: '1 standard', orbital_period: '463', population: '1000000000', model: 'Planet',
        }, {
          id: 14, climate: 'tropical', surface_water: '60', name: 'Kashyyyk', diameter: '12765', rotation_period: '26', terrain: 'jungle, forests, lakes, rivers', gravity: '1 standard', orbital_period: '381', population: '45000000', model: 'Planet',
        }, {
          id: 35, climate: 'arid, temperate, tropical', surface_water: 'unknown', name: 'Malastare', diameter: '18880', rotation_period: '26', terrain: 'swamps, deserts, jungles, mountains', gravity: '1.56', orbital_period: '201', population: '2000000000', model: 'Planet',
        }, {
          id: 51, climate: 'unknown', surface_water: 'unknown', name: 'Mirial', diameter: 'unknown', rotation_period: 'unknown', terrain: 'deserts', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 31, climate: 'temperate', surface_water: '100', name: 'Mon Cala', diameter: '11030', rotation_period: '21', terrain: 'oceans, reefs, islands', gravity: '1', orbital_period: '398', population: '27000000000', model: 'Planet',
        }, {
          id: 13, climate: 'hot', surface_water: '0', name: 'Mustafar', diameter: '4200', rotation_period: '36', terrain: 'volcanoes, lava rivers, mountains, caves', gravity: '1 standard', orbital_period: '412', population: '20000', model: 'Planet',
        }, {
          id: 57, climate: 'temperate', surface_water: '25', name: 'Muunilinst', diameter: '13800', rotation_period: '28', terrain: 'plains, forests, hills, mountains', gravity: '1', orbital_period: '412', population: '5000000000', model: 'Planet',
        }, {
          id: 16, climate: 'frigid', surface_water: 'unknown', name: 'Mygeeto', diameter: '10088', rotation_period: '12', terrain: 'glaciers, mountains, ice canyons', gravity: '1 standard', orbital_period: '167', population: '19000000', model: 'Planet',
        }, {
          id: 8, climate: 'temperate', surface_water: '12', name: 'Naboo', diameter: '12120', rotation_period: '26', terrain: 'grassy hills, swamps, forests, mountains', gravity: '1 standard', orbital_period: '312', population: '4500000000', model: 'Planet',
        }, {
          id: 24, climate: 'temperate', surface_water: 'unknown', name: 'Nal Hutta', diameter: '12150', rotation_period: '87', terrain: 'urban, oceans, swamps, bogs', gravity: '1 standard', orbital_period: '413', population: '7000000000', model: 'Planet',
        }, {
          id: 55, climate: 'frigid', surface_water: '100', name: 'Ojom', diameter: 'unknown', rotation_period: 'unknown', terrain: 'oceans, glaciers', gravity: 'unknown', orbital_period: 'unknown', population: '500000000', model: 'Planet',
        }, {
          id: 27, climate: 'temperate', surface_water: '10', name: 'Ord Mantell', diameter: '14050', rotation_period: '26', terrain: 'plains, seas, mesas', gravity: '1 standard', orbital_period: '334', population: '4000000000', model: 'Planet',
        }, {
          id: 15, climate: 'artificial temperate ', surface_water: '0', name: 'Polis Massa', diameter: '0', rotation_period: '24', terrain: 'airless asteroid', gravity: '0.56 standard', orbital_period: '590', population: '1000000', model: 'Planet',
        }, {
          id: 48, climate: 'unknown', surface_water: 'unknown', name: 'Quermia', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 23, climate: 'hot', surface_water: '60', name: 'Rodia', diameter: '7549', rotation_period: '29', terrain: 'jungles, oceans, urban, swamps', gravity: '1 standard', orbital_period: '305', population: '1300000000', model: 'Planet',
        }, {
          id: 37, climate: 'temperate, arid, subartic', surface_water: '5', name: 'Ryloth', diameter: '10600', rotation_period: '30', terrain: 'mountains, valleys, deserts, tundra', gravity: '1', orbital_period: '305', population: '1500000000', model: 'Planet',
        }, {
          id: 19, climate: 'hot', surface_water: 'unknown', name: 'Saleucami', diameter: '14920', rotation_period: '26', terrain: 'caves, desert, mountains, volcanoes', gravity: 'unknown', orbital_period: '392', population: '1400000000', model: 'Planet',
        }, {
          id: 52, climate: 'unknown', surface_water: 'unknown', name: 'Serenno', diameter: 'unknown', rotation_period: 'unknown', terrain: 'rainforests, rivers, mountains', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 58, climate: 'temperate', surface_water: 'unknown', name: 'Shili', diameter: 'unknown', rotation_period: 'unknown', terrain: 'cities, savannahs, seas, plains', gravity: '1', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 56, climate: 'temperate', surface_water: 'unknown', name: 'Skako', diameter: 'unknown', rotation_period: '27', terrain: 'urban, vines', gravity: '1', orbital_period: '384', population: '500000000000', model: 'Planet',
        }, {
          id: 30, climate: 'arid', surface_water: 'unknown', name: 'Socorro', diameter: '0', rotation_period: '20', terrain: 'deserts, mountains', gravity: '1 standard', orbital_period: '326', population: '300000000', model: 'Planet',
        }, {
          id: 20, climate: 'temperate', surface_water: 'unknown', name: 'Stewjon', diameter: '0', rotation_period: 'unknown', terrain: 'grass', gravity: '1 standard', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 33, climate: 'superheated', surface_water: '5', name: 'Sullust', diameter: '12780', rotation_period: '20', terrain: 'mountains, volcanoes, rocky deserts', gravity: '1', orbital_period: '263', population: '18500000000', model: 'Planet',
        }, {
          id: 1, climate: 'arid', surface_water: '1', name: 'Tatooine', diameter: '10465', rotation_period: '23', terrain: 'desert', gravity: '1 standard', orbital_period: '304', population: '200000', model: 'Planet',
        }, {
          id: 46, climate: 'unknown', surface_water: 'unknown', name: 'Tholoth', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 34, climate: 'temperate', surface_water: 'unknown', name: 'Toydaria', diameter: '7900', rotation_period: '21', terrain: 'swamps, lakes', gravity: '1', orbital_period: '184', population: '11000000', model: 'Planet',
        }, {
          id: 29, climate: 'arid', surface_water: 'unknown', name: 'Trandosha', diameter: '0', rotation_period: '25', terrain: 'mountains, seas, grasslands, deserts', gravity: '0.62 standard', orbital_period: '371', population: '42000000', model: 'Planet',
        }, {
          id: 40, climate: 'unknown', surface_water: 'unknown', name: 'Troiken', diameter: 'unknown', rotation_period: 'unknown', terrain: 'desert, tundra, rainforests, mountains', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 41, climate: 'unknown', surface_water: 'unknown', name: 'Tund', diameter: '12190', rotation_period: '48', terrain: 'barren, ash', gravity: 'unknown', orbital_period: '1770', population: '0', model: 'Planet',
        }, {
          id: 60, climate: 'unknown', surface_water: 'unknown', name: 'Umbara', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }, {
          id: 28, climate: 'unknown', surface_water: 'unknown', name: 'unknown', diameter: '0', rotation_period: '0', terrain: 'unknown', gravity: 'unknown', orbital_period: '0', population: 'unknown', model: 'Planet',
        }, {
          id: 12, climate: 'temperate, arid, windy', surface_water: '0.9', name: 'Utapau', diameter: '12900', rotation_period: '27', terrain: 'scrublands, savanna, canyons, sinkholes', gravity: '1 standard', orbital_period: '351', population: '95000000', model: 'Planet',
        }, {
          id: 39, climate: 'temperate, artic', surface_water: 'unknown', name: 'Vulpter', diameter: '14900', rotation_period: '22', terrain: 'urban, barren', gravity: '1', orbital_period: '391', population: '421000000', model: 'Planet',
        }, {
          id: 3, climate: 'temperate, tropical', surface_water: '8', name: 'Yavin IV', diameter: '10200', rotation_period: '24', terrain: 'jungle, rainforests', gravity: '1 standard', orbital_period: '4818', population: '1000', model: 'Planet',
        }, {
          id: 54, climate: 'unknown', surface_water: 'unknown', name: 'Zolan', diameter: 'unknown', rotation_period: 'unknown', terrain: 'unknown', gravity: 'unknown', orbital_period: 'unknown', population: 'unknown', model: 'Planet',
        }],
      },
      error: null,
      loading: false,
      searchHistory: [{
        id: 165, search_url: '/api/people/?search=Skywalker&sortBy=name&order=ASC', search_string: 'Skywalker', model: 'people', createdAt: '2018-11-16T17:00:10.509Z', updatedAt: '2018-11-16T17:00:10.509Z',
      }, {
        id: 164, search_url: '/api/planets/?search=Tatooine&sortBy=name&order=ASC', search_string: 'Tatooine', model: 'planet', createdAt: '2018-11-16T17:00:06.509Z', updatedAt: '2018-11-16T17:00:06.509Z',
      }, {
        id: 163, search_url: '/api/people/?search=Skywalker&sortBy=name&order=ASC', search_string: 'Skywalker', model: 'people', createdAt: '2018-11-16T17:00:02.904Z', updatedAt: '2018-11-16T17:00:02.904Z',
      }, {
        id: 162, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:35.654Z', updatedAt: '2018-11-16T16:54:35.654Z',
      }, {
        id: 161, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:54:34.767Z', updatedAt: '2018-11-16T16:54:34.767Z',
      }, {
        id: 160, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:13.642Z', updatedAt: '2018-11-16T16:53:13.642Z',
      }, {
        id: 159, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:53:12.737Z', updatedAt: '2018-11-16T16:53:12.737Z',
      }, {
        id: 158, search_url: '/api/people?search=Lars&exclude=male,hermaphrodite,n/a,&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:55.546Z', updatedAt: '2018-11-16T16:52:55.546Z',
      }, {
        id: 157, search_url: '/api/people?search=Lars&limit=4&offset=0&column=id', search_string: 'Lars', model: 'people', createdAt: '2018-11-16T16:52:54.629Z', updatedAt: '2018-11-16T16:52:54.629Z',
      }, {
        id: 156, search_url: '/api/people?search=lars&limit=4&offset=0&column=id', search_string: 'lars', model: 'people', createdAt: '2018-11-16T16:52:43.534Z', updatedAt: '2018-11-16T16:52:43.534Z',
      }],
      loadingUrl: 'http://it2810-06.idi.ntnu.no/api/api/planets/?search=&sortBy=name&order=ASC',
    },
  });
});
