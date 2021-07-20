import { useState } from 'react';

const WordCounter = () => {

  const [wordsCount, setWordsCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0.0);

  const keyPressEventHandler = (e) => {
    console.log('rukna nhi hai mickey');
    let content = e.target.value;
    let wordsCount = content.replace(/[&/\\#,+()$~%.'":*?<>{}]/g,'').trim().split(" ");
    let charCount = content.replace(/[&/\\#,+()$~%.'":*?<>{} ]/g,'').split("");
    let readingTime = (wordsCount.length / 100) + "mins";
    setWordsCount(wordsCount.length);
    setCharCount(charCount.length);
    setReadingTime(readingTime);

  }

  return (
    <section>
      <h2>Word Counter</h2>
      <textarea className="text-input-field" cols="30" rows="10" onChange={keyPressEventHandler}></textarea>
      <div className="display-form">
        <div className="input-character">
          <label htmlFor="countChr">Character count:</label>
          <label className="input-character-label" htmlFor="lblCountChr">{charCount}</label>

        </div>
        <div className="input-word">
          <label htmlFor="lblCountWord">Word count:</label>
          <label className="input-word-label" htmlFor="lblCountWord">{wordsCount}</label>
        </div>
        <div className="input-reading">
          <label htmlFor="countRead">Reading time :</label>
          <label className="input-reading-label" htmlFor="lblCountRead">{readingTime} </label>
        </div>
      </div>

    </section>
  );
}

export default WordCounter;