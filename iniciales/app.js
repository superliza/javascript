//nombre y apellido
var name = prompt("dime tu nombre y apellido");
//primera inicial
var firstInitial = name.slice(0,1);
//posición del segundo caracter
var secondInitialPosition = name.indexOf(" ") +1;
//segunda inicial
var secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);
//resultado en la web
document.write("tus iniciales son " + firstInitial.toUpperCase()+ secondInitial.toUpperCase());
