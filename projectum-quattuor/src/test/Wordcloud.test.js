import * as React from 'react';
import { shallow } from 'enzyme';
import { _WordCloud } from '../components/wordcloud/WordCloud';
import Lightsabers from '../components/wordcloud/Lightsaber';

describe('<Wordcloud>', () => {
    const doNothing = () => false;
    it('has a lightsaber wordcloud', () => {
        const wrapper = shallow(<_WordCloud searchForHistoryApi={doNothing} />);
        expect(wrapper.find(Lightsabers)).toHaveLength(1);
    });

    it('renders correctly', () => {
        const wrapper = shallow(<_WordCloud searchForHistoryApi={doNothing}/>);
        expect(wrapper).toMatchSnapshot();
    })
});

describe('<Lightsabers>', () => {
    const emptyWordList = [{search_string:''}];
    const threeWords = [{search_string:'one'},{search_string:'two'},{search_string:'three'}];
    const twoWords = [{search_string:'one'},{search_string:'two'}];
    it('does not display if no words', () => {
        const wrapper = shallow(<Lightsabers words={threeWords}/>);
        expect(wrapper.isEmptyRender()).toBeTruthy();
    })
})