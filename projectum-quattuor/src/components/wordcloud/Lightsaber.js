import React from 'react';

const Lightsabers = props => {

    const words = [...props.words].splice(0,10);
    const wordsLeft = words.splice(0,words.length/2);
    const wordsRight = words;
    wordsLeft.sort((a,b) => a.length < b.length);
    wordsRight.sort((a,b) => a.length < b.length);

    const shaftStyle = {color:'#00000',display:'inline'};
    const saberStyle = color => {return {color:color,display:'inline',margin:'0.2em', fontSize:'20px',fontWeight:'bold'}};

    const leftShaft = <p style={shaftStyle}>{wordsLeft.pop()}</p>
    const rightShaft = <p style={shaftStyle}>{wordsRight.pop()}</p>

    const saber = (words, color) => {
        return [words.map( (word,i) => <p key={i} style={saberStyle(color)}>{word}</p>)];
    }   

    const saberLeft =[leftShaft, ...saber(wordsLeft,'blue')];
    const saberRight =[rightShaft, ...saber(wordsRight,'red')];
    const lengthOfSaber = wordsLeft.join("").length;

    const overlapMargin = -110;

    return (
        <div style={{minHeight:lengthOfSaber+'em',maxHeight:'500px',display:'flex',alignItems:'center'}}>
            <div style={{transform:'rotate(315deg)',display:'inline-block'}}>{saberLeft}</div>
            <div style={{transform:'rotate(225deg)',display:'inline-block',margin:overlapMargin+'px'}}>{saberRight}</div>
        </div>
    );
};

export default Lightsabers;