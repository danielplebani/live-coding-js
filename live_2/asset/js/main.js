/* 
età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande
*/

/*
-prompt
-condition
-number
-console log
-getElementById
*/

//chiedo gli anni della prima persona e li trasformo in numeri
const eta_1 = Number(prompt('quanti anni hai?'));

//chiedo gli anni della seconda persona e li trasformo in numeri
const eta_2 = Number(prompt('quanti anni hai?'));

console.log(eta_1 , eta_2);

//verifico se l'età della prima persona è più grande della seconda e stampo il messaggio
if(eta_1 > eta_2){
    console.log("utente 1 è più grande dell'utente 2");
} else if(eta_1 < eta_2){
    //verifico se l'età della seconda persona è più grande della prima e stampo il messaggio  
    console.log("utente 2 è più grande dell'utente 1");
} else if(eta_1 === eta_2){
    //verifico se le due età sono uguali e stampo il messaggio
    console.log('hanno la stessa età');
} else{
    alert("ops! c'è un errore")
}
console.log(isNaN());