/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.css';

import WordCloud from './components/wordcloud/WordCloud';
import SearchbuttonContainer from './components/Search/SearchbuttonContainer';
import ResultSetContainer from './components/Results/ResultSetContainer';

const App = () => (
  <div className="App">

    <div className="content">

      <WordCloud />

      {/* Search bar */}
      <SearchbuttonContainer />

      {/* Result set */}
      <div className="result_wrapper">
        <h1>Results</h1>
        <ResultSetContainer />
      </div>

    </div>
  </div>
);

export default App;
