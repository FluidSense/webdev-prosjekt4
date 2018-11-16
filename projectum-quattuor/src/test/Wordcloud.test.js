import * as React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
/* eslint-disable react/jsx-pascal-case */
import { _WordCloud } from '../components/wordcloud/WordCloud';
import Lightsabers from '../components/wordcloud/Lightsaber';

describe('<Wordcloud>', () => {
  const doNothing = () => false;
  it('has a lightsaber wordcloud', () => {
    const wrapper = shallow(<_WordCloud searchForHistoryApi={doNothing} />);
    expect(wrapper.find(Lightsabers)).toHaveLength(1);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<_WordCloud searchForHistoryApi={doNothing} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<Lightsabers>', () => {
  const emptyWordList = [{ search_string: '' }];
  const fourWords = [{ search_string: 'one' }, { search_string: 'two' }, { search_string: 'three' }, { search_string: 'four' }];
  const twoWords = [{ search_string: 'one' }, { search_string: 'two' }];
  it('does not display if no words', () => {
    const wrapper = shallow(<Lightsabers words={emptyWordList} />);
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('does not display if just enough words for handles', () => {
    const wrapper = shallow(<Lightsabers words={twoWords} />);
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('creates lightsabers', () => {
    const wrapper = render(<Lightsabers words={fourWords} />);
    expect(wrapper.find('p')).toHaveLength(4);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Lightsabers words={fourWords} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
