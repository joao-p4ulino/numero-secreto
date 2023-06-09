const elementKick = document.getElementById('kick')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak (e) {

    kick = e.results[0][0].transcript
    displayKickOnScreen(kick);

}

function displayKickOnScreen (kick) {
     elementKick.innerHTML = `
     <div>Você disse</div>
     <span class="box">${kick}</span>
     `
}