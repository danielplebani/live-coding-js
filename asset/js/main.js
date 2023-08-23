/*
Chiediamo all'utente due parole in successione.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.
*/

//chiedi la prima parola
const parola_1 = prompt('scegli la prima parola');
console.log('la prima parola è '+ parola_1);

//chiedi la seconda parola
const parola_2 = prompt('scegli la seconda parola');
console.log('la seconda parola è '+ parola_2);

//verifico se la prima parola è più lunga della seconda parola 
if (parola_1.length > parola_2.length){
    console.log('la parola 1 è più lunga della parola 2');
    document.getElementById('parola').innerHTML= parola_1
}

//verifico se la seconda parola è più lunga della prima
else if (parola_1.length < parola_2.length){
    console.log('la parola 2 è più lunga della parola 1');
    document.getElementById('parola').innerHTML= parola_2
}

//verifico se le parole sono lunghe uguali
else{
    console.log('la parola 1 è lunga uguale alla parola 2');
    document.getElementById('parola').innerHTML= parola_1 + parola_2
}