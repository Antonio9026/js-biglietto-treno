// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// // L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// chiedo all'utente quanti chilometri deve percorrere
let distanza = prompt("quanti km devi percorere");
// console.log(distanza);

// chiedo l'età al passeggero
let age = prompt("quanti anni hai?")
// console.log(age);

// stabilisco prezzo del biglietto senza sconti 
let ticketPrice = distanza * 0.21;
// console.log(ticketPrice.toFixed(2));


// creo condizione per sconti

if (age < 18) {
    let scontoMin = ticketPrice * 0.20;
    // console.log(scontoMin.toFixed(2));
    //  sottraggo al prezzo prezzo del biglietto intero lo sconto minorenni 
    let prezzoScontato = ticketPrice - scontoMin;
    // console.log(prezzoScontato.toFixed(2));
    document.getElementById("prezzo").innerHTML = "La tariffa minorenni è pari a " + prezzoScontato.toFixed(2) + " €";
} else if (age > 65) {
    let scontoOver65 = ticketPrice * 0.40;
    // console.log(scontoOver65.toFixed(2));
    prezzoScontato = ticketPrice - scontoOver65;
    // console.log( prezzoScontato.toFixed(2));
    document.getElementById("prezzo").innerHTML = "La tariffa over 65 è pari a " + prezzoScontato.toFixed(2) + " €";
}else{
    document.getElementById("prezzo").innerHTML = "La tariffa maggiorenni è pari " + ticketPrice.toFixed(2) + " €";
}