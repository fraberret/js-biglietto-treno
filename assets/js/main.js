//chiedere all'utente età e chilometri
let userAge = prompt("quanti anni hai?")
let userKm = prompt("quanti km vuoi percorrere?")
//calcolare prezzo
// in base ai km
let kmPrice = (userKm * 0.21)
//in base all'età
//SE utente ha < 18 anni -20%
//ALTRIMENTI SE > 65 anni -40%
//ALTRIMENTI no sconto
let prezzoBiglietto

if (userAge < 18) { //se minorenne
    console.log(userAge, userKm);
    let prezzoBiglietto = userKm * 20 / 100
    console.log(prezzoBiglietto);
} else if (userAge > 65) { //se over 65
    console.log(userAge, userKm);
    let prezzoBiglietto = userKm * 40 / 100
    console.log(prezzoBiglietto);
} else{ //se nessuno dei due
    console.log(userAge, userKm);
    prezzoBiglietto = kmPrice
    console.log(prezzoBiglietto);
}





