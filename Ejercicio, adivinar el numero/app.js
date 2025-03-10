//Ejercicio juego de adivinar numero
//Variables
//Numero a adivinar
let maximo = prompt('Dime hasta que numero quieres adivinar:');
let numeroSecreto = Math.floor(Math.random()*maximo+1);
let numeroUsuario = 0;
let intentos = 1;
console.log(numeroSecreto);
//let palabraVeces = 'vez';
let maximoIntentos = prompt('Cuantos intentos deseas?');
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${maximo} por favor:`));

    console.log(numeroUsuario);

    /*Este codigo realiza 
    la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        //Condicion verdadera
        alert (`Acertaste el numero es:  ${numeroSecreto}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }else{
        if (numeroUsuario > numeroSecreto){
            alert ('El numero secreto es menor');
        }else{
            alert ('el numero secreto es mayor');
        }
        intentos = intentos + 1;
        palabraVeces = 'veces';
        console.log(intentos);
        if (intentos > maximoIntentos){
            alert (`llegaste al maximo de ${maximoIntentos} intentos`);
            break;
        }
        //Condicion falsa
        //alert ('No acertaste el numero');
    }
}

//Ejercicios varios
/*
let diaSemana;
let numero;
let puntuacion;
let saldoCuenta = 1050;
let nombre;

diaSemana = prompt ('Que dia de la semana es?');
if (diaSemana == 'Sabado' || diaSemana == 'Domingo'){
    alert ('Buen fin de semana');
}else{
    alert ('buena semana');
}

numero = prompt ('Ingresa un numero');
if (numero > 0){
    alert ('el numero es positivo');
}else if (numero <0){
    alert ('el numero es negativo');
}else{
    alert ('tu numero es 0');
}

puntuacion = prompt ('Ingresa tu puntuacion');
if (puntuacion >= 100){
    alert ('Felicidades, haz ganado');
}else if (numero <100){
    alert ('Intentalo nuevamente');
}

alert (`El saldo de tu cuenta es: ${saldoCuenta}`);

nombre = prompt ('Ingresa tu nombre:');
alert (`Bienvenido ${nombre} buenos dias`);


let numero = 0;

while(numero <= 10){
    alert (`${numero}`);
    console.log(numero);
    numero++
    
}


let numero = 10;

while(numero >= 0){
    alert (`${numero}`);
    console.log(numero);
    numero--
    
}


let numero = 0;
let numeroUsuario = 0;

numeroUsuario = prompt ('Ingrese un numero:')

while(numero <= numeroUsuario){
    console.log(`${numero}`);
    numero++;

}


let numero = 0;
let numeroUsuario = 0;

numeroUsuario = prompt ('Ingrese un numero:')

while(numeroUsuario >= numero){
    console.log(`${numeroUsuario}`);
    numeroUsuario--;

}


console.log('bienvenidos')


let nombre = 'Sebastian';

console.log(`Hola, ${nombre} bienvenido`)


let nombre = 'Sebastian';

alert(`Hola, ${nombre} bienvenido`)


let pregunta = 0;
 pregunta = prompt('cual es el lenguaje');
 console.log(pregunta);


 let valor1 = 16;
 let valor2 = 18;
 let resultado = 0;
 resultado = valor1 + valor2;
 console.log(`La suma de ${valor1} y ${valor2} es ${resultado}`);
  

 let edad = 0;
 edad = prompt('Cual es tu edad');
 if (edad >= 18){
    console.log('Eres mayor de edad');
 }else if(edad < 18){
    console.log('Eres menor de edad');
 }
 

 let numero = 0;
 while(numero <= 10){
 console.log(numero);
 numero++
 }
 

 let nota = 9;
 if (nota >= 7){
    console.log('Aprobado');
 }else if (nota < 7){
    console.log('Reprobado');
 }
 

 console.log(Math.random());


 console.log(Math.floor(Math.random()*10+1));
 

 console.log(Math.floor(Math.random()*1000+1));
 */