var usDollars = 100;
 var peruvianSoles = 3.25;
 var mexicanPesos = 18;
 var chileanPesos = 660;

 //convierte dólares a soles
 var convertToSoles = usDollars*peruvianSoles;

 //convertir dólares a pesos mexicanos
 var convertToMexicanPesos = usDollars*mexicanPesos;

 //convertir dólares a pesos chilenos
 var convertToChileanPesos = usDollars*chileanPesos;

// Imprime el monto equivalente en soles
 console.log("El valor en dólares a soles es " + convertToSoles);

// Imprime el monto equivalente en pesos mexicanos
 console.log("El valor en dólares a pesos mexicanos es " + convertToMexicanPesos);

// Imprime el monto equivalente en pesos chilenos
 console.log("El valor en dólares a pesos chilenos es " + convertToChileanPesos);
