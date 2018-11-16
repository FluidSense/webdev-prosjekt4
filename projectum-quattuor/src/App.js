import React from 'react';
import './App.css';

import WordCloud from './components/wordcloud/WordCloud';
import SearchContainer from './components/Search/SearchContainer';
import ResultSetContainer from './components/Results/ResultSetContainer';

const App = () => (
  <div className="App">

    <div className="content">

      {/* Search bar */}
      <SearchContainer />

      <WordCloud />

      {/* Result set */}
      <div className="result_wrapper">
        <h1>Results</h1>
        <ResultSetContainer />
      </div>

    </div>

  </div>
);

export default App;
