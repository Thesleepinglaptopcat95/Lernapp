let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
let randomGermanWord;

function addVocabulary() {
    dictionary[germanText.value] = englishText.value;

    germanText.value = '';
    englishText.value = '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
}

function render() {
    vocabularyList.innerHTML = '';
    for (let key in dictionary) {
        vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
    }
}

function nextVocabulary(){
    let obj_keys = Object.keys(dictionary);
    randomGermanWord = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    word.innerHTML = `${dictionary[randomGermanWord]}?`;
}
//Vergleichsfunktion und Zufallswort aus Liste wird gewählt
function compare(){
    if(germanText.value == randomGermanWord) {
        text.innerHTML = 'Richtig!!';
    } else {
        text.innerHTML = 'Falsch!!';
    }
    germanText.value = '';
    nextVocabulary();

    // Screenreader eingebunden

    function speak() { 
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1; 
        msg.rate = 1; 
        msg.pitch = 2; 
    
        msg.onend = function(e) {
             document.querySelector('#output').innerText = (event.elapsedTime/1000) + ' Sek';
        };
    
        speechSynthesis.speak(msg); }
    }
