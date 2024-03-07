// Acquisizione delle variabili di input: kilometri percorsi, età del passeggero

let km=prompt('Inserire i kilometri');  // string | null
km=parseFloat(km);           //conversione di tipo: da string a numero reale
console.log('I km da percorrere sono: ', km);

let eta=prompt('Inserire l\'eta');  // string | null
eta=parseInt(eta);    //conversione di tipo: da string a numero intero
console.log('Età: ', eta);   

const prezzoUnitario=0.21; // numero: prezzo del biglietto al km in euro

let prezzoBase=km*0.21;   // numero: prezzo base
console.log('prezzoBase: ', prezzoBase);

// Se il passeggero è minorenne si applica uno sconto del 20%
// altrimenti, se il passeggero è over 65 viene applicato uno sconto del 40%
// negli altri casi (età compresa tra 18 e 65 escluso) non si applica alcun sconto sul prezzoBase

if (eta<18) {
    sconto=prezzoBase*0.2;   // numero: si applica lo sconto del 20%
     } else if (eta>=65) {
         sconto=prezzoBase*0.4;    // si applica lo sconto del 40%
    } else {
        sconto=0;   //non si applica alcuno sconto
    }

    prezzoFinale=prezzoBase-sconto;   // numero: dal prezzo di base si sottrae lo sconto
    console.log('Prezzo finale:', prezzoFinale);

    //Si arrotonda il prezzo a due cifre decimali con il metodo toFixed oppure con il metodo round
    //Il metodo toFixed converte il numero in una stringa
    prezzoCifreDec_F=prezzoFinale.toFixed(2);       // numero: prezzo arrotondato a due cifre decimali (metodo toFixed)
    console.log('Il prezzo del biglietto è: (metodo toFixed) ', prezzoCifreDec_F);

    prezzoCifreDec_R=Math.round(prezzoFinale*100)/100;       // numero: prezzo arrotondato a due cifre decimali 
    console.log('Il prezzo del biglietto è: (metodo round)', prezzoCifreDec_R); 

    //Si visualizza il prezzo finale nella pagina web con il metodo document.getElementById() oppure con il metodo document.write()
    document.getElementById("visualizzaVar").innerHTML = prezzoCifreDec_R;

    document.write("<p>");
    document.write(prezzoCifreDec_R);
    document.write("</p>");


    





