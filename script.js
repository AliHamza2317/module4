(function(window) {
    var speakWordHello = "Hello";
    var speakWordBye = "Goodbye";
  
    function speak(name, speakWord) {
      console.log(speakWord + " " + name);
    }
  
    function helloSpeaker(name) {
      speak(name, speakWordHello);
    }
  
    function byeSpeaker(name) {
      speak(name, speakWordBye);
    }
  
    window.helloSpeaker = helloSpeaker;
    window.byeSpeaker = byeSpeaker;
  })(window);
  