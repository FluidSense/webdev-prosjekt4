import * as React from 'react';
import { connect } from 'react-redux';
import { getRemoteResource } from '../../state/wordcloud/actions';
import { searchedRecentlyWords } from '../../state/wordcloud/selectors';
import Lightsabers from './Lightsaber';

class _WordCloud extends React.Component {

    componentDidMount(){
        this.props.getWordList();
    }

    render(){
        return <Lightsabers words={this.props.words}/>
    }
}

const mapStateToProps = state => {
    return {
        words: searchedRecentlyWords(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWordList: (URL) => dispatch(getRemoteResource(URL)),
    }
}

const WordCloud = connect(
    mapStateToProps,
    mapDispatchToProps
)(_WordCloud);

export default WordCloud;