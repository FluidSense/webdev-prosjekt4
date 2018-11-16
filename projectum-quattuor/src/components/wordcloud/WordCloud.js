import * as React from 'react';
import { connect } from 'react-redux';
import { searchHistorySelector } from '../../state/search/selectors';
import { fetchSearchHistory } from '../../state/search/actions';
import Lightsabers from './Lightsaber';
import { APIQuery } from '../../consts';

/*
This container gets the history when it is mounted
and passes it to the presentation Lightsaber wordcloud
*/
export class _WordCloud extends React.Component {
  componentDidMount() {
    this.props.searchForHistoryApi(`${APIQuery}search`);
  }

  render() {
    return <Lightsabers words={this.props.words} />;
  }
}

/* Gets desired props from the state store */
const mapStateToProps = state => ({
  words: searchHistorySelector(state),
});

/* Callable actions as props */
const mapDispatchToProps = dispatch => ({
  searchForHistoryApi: fetchUrl => dispatch(fetchSearchHistory(fetchUrl)),
});

const WordCloud = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_WordCloud);

export default WordCloud;
