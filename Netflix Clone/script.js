{/* <h2>Switching the language of web page using JavaScript</h2>
   <div id = "div">Hi How are you! This is written in English.</div><br>
   <div id = "languageSwitcher">
      <button onclick = "changeLanguage('en')"> English </button>
      <button onclick = "changeLanguage('fr')"> French </button>
      <button onclick = "changeLanguage('de')"> German </button>
   </div>
   <script>
      // function to switch language of web page
      function changeLanguage(lang) {
         let element = document.getElementById("div");
         if (lang == "en") {
            element.innerHTML = "Hi How are you! This is written in English.";
         } else if (lang == "fr") {
            element.innerHTML = "Bonjour Comment allez-vous! Cela est écrit en français.";
         } else if (lang == "de") {
            element.innerHTML = "Hallo Wie geht es dir! Das ist auf Deutsch geschrieben.";
         }
      }
   </script> */}