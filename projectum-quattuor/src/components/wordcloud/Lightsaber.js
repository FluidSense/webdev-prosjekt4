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
    color: '#FFFFFF', display: 'inline', backgroundColor: '#555555', padding: '0 20px 0 20px', borderRadius: '0 6px 6px 0',
  };
  const saberStyle = (color, glow) => ({
    color, display: 'inline', margin: '0.2em', fontSize: '20px', fontWeight: 'bold', textShadow: `0 0 8px ${glow}`,
  });

  const leftShaft = <p key="firstWordLeftShaft" style={shaftStyle}>{wordsLeft.pop()}</p>;
  const rightShaft = <p key="firstWordRightShaft" style={shaftStyle}>{wordsRight.pop()}</p>;

  const saber = (wordList, color, glow = color) => (
    [wordList.map((word, i) => <p key={`${word}+${i}`} style={saberStyle(color, glow)}>{word}</p>)]
  );

  const saberLeft = [leftShaft, ...saber(wordsLeft, 'LightSkyBlue', 'Cyan')];
  const saberRight = [rightShaft, ...saber(wordsRight, 'red')];
  const lengthOfSaber = wordsLeft.join('').length + wordsLeft.length;

  return (
    <div style={{
      minHeight: `${lengthOfSaber}em`, maxHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
    }}
    >
      <div style={{ transform: 'rotate(315deg)', display: 'inline-block', position: 'absolute' }}>{saberLeft}</div>
      <div style={{ transform: 'rotate(225deg)', display: 'inline-block', position: 'absolute' }}>{saberRight}</div>
    </div>
  );
};

export default Lightsabers;
