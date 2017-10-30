function fillArray (asciiCode) {
  var alphabetArray = [];
  for(var i = 0; i < 26; i++) {
    var letter = String.fromCharCode(i+asciiCode);
    alphabetArray.push(letter);
    }
    return alphabetArray;
    }
    var option = prompt('mayúsculas o minúsculas').toLowerCase();

    if(option === "mayúsculas") {
      var upperCaseAlphabet = fillArray(65);
      console.log(upperCaseAlphabet);
      } else if(option === "minúsculas") {
        var lowerCaseAlphabet = fillArray(97);
        console.log(lowerCaseAlphabet);
        } else {
          console.log("ingresa una opción válida");
          }
