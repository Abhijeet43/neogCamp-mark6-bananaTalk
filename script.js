const translateInputEl = document.querySelector('#translate-input');
const translateBtn = document.querySelector('#translate-button');
const translateOuputEl =document.querySelector('#translate-ouput');

function constructURL(text){
  return `https://api.funtranslations.com/translate/minion.json?text=${encodeURI(text)}`;
}

function clickHandler(){
  const translateInputValue = translateInputEl.value;
  const finalURL = constructURL(translateInputValue);


  fetch(finalURL)
    .then(response => response.json())
    .then(data => {
      translateOuputEl.textContent = data.contents.translated;
      // console.log(data.contents.translated);
    })
    .catch(err => alert(`Error occured ${err}`));
}

translateBtn.addEventListener('click',clickHandler);