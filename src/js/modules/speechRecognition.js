module.exports = {

    speech: function () {
        recognition = new SpeechRecognition();
        recognition.onresult = function(event) {
            console.log(event);
            document.getElementById('speech-result').innerHTML = event.results[0][0].transcript;

        }
        recognition.start();
    }

};
