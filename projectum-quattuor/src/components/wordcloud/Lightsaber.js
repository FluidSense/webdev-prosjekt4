import React from 'react';

const Lightsabers = (props) => {
  const queryNames = props.words.map(object => object.search_string);

  // Guarantee 10 only
  const words = queryNames.splice(0, 10);
  words.sort((a, b) => a.length < b.length);
  const wordsLeft = [];
  const wordsRight = [];
  words.map((word, i) => (i % 2 === 0 ? wordsLeft.push(word) : wordsRight.push(word)));


  const shaftStyle = {
    color: '#FFFFFF', display: 'inline', backgroundColor: '#888888', padding: '0 6px 0 6px', borderRadius: '0 6px 6px 0',
  };
  const saberStyle = color => ({
    color, display: 'inline', margin: '0.2em', fontSize: '20px', fontWeight: 'bold', textShadow: `0 0 8px ${color}`,
  });

  const leftShaft = <p key="firstWordLeftShaft" style={shaftStyle}>{wordsLeft.pop()}</p>;
  const rightShaft = <p key="firstWordRightShaft" style={shaftStyle}>{wordsRight.pop()}</p>;

  const saber = (wordList, color) => (
    [wordList.map((word, i) => <p key={`${word}+${i}`} style={saberStyle(color)}>{word}</p>)]
  );

  const saberLeft = [leftShaft, ...saber(wordsLeft, 'blue')];
  const saberRight = [rightShaft, ...saber(wordsRight, 'red')];
  const lengthOfSaber = wordsLeft.join('').length + wordsLeft.length;

  return (
    <div style={{
      minHeight: `${lengthOfSaber}em`, maxHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <div style={{ transform: 'rotate(315deg)', display: 'inline-block' }}>{saberLeft}</div>
      <div style={{ transform: 'rotate(225deg)', display: 'inline-block', position: 'absolute' }}>{saberRight}</div>
    </div>
  );
};

export default Lightsabers;
