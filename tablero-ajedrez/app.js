var size = parseInt(prompt('Pon el tamaño de tu cuadrícula'));

var result='';
for (var row = 1; row <= size; row++){
  for (var column = 1; column <= size; column++){
    if ((column + row) % 2 === 0){
      result += ' ';
    } else {
      result += '#';
    }
  }
  result += '\n';
}
console.log(result);
