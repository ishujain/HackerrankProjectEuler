
const keyPressEventHandler = (e) => {
  let content = e.target.value;
  let wordsCount = content.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').trim().split(" ");
  // console.log(wordsCount.length);
  let charCount = content.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '').split("");
  // console.log(charCount.length);
  let readingTime = (wordsCount.length / 200) + "mins";
  document.querySelector('.input-character-label').innerHTML = charCount.length;
  document.querySelector('.input-word-label').innerHTML = wordsCount.length;
  document.querySelector('.input-reading-label').innerHTML = readingTime;
}


document.querySelector('.text-input-field').addEventListener('keyup', keyPressEventHandler);

// function keyPressEventHandler(e){
//   console.log('hi');
// }






