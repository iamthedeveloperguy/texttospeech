const textEL = document.getElementById('text');
const speakEL = document.getElementById('speak');


speakEL.addEventListener('click', speakText);

function speakText(){
    window.speechSynthesis.cancel();
    const text = textEL.value;
    console.log(text);
    const utterance = new SpeechSynthesisUtterance(text);
    console.log(utterance);
    window.speechSynthesis.speak(utterance);

}