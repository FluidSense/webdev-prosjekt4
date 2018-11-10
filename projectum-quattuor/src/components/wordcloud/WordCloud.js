import * as React from 'react';
import TagCloud from 'react-tag-cloud';
import spiral from './curve';

const WordCloud = (props) => {
    return (
        <TagCloud
          style={{
            fontFamily: 'sans-serif',
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: () => '#FF0000',
            padding: 5,
            width: '100%',
            height: '1000px'
            }}
            spiral={spiral}
        >
        {props.words.map( word => <div>{word}</div>)}
        </TagCloud>
    );
}

export default WordCloud;