const pcNumb = Math.floor(Math.random() * 6) + 1;
console.log(pcNumb);
const userNumb = Math.floor(Math.random() * 6) + 1;
console.log(userNumb);
let outputMessage;

if ( pcNumb > userNumb ) {
    outputMessage = `Hai perso, il tuo numero ${userNumb} era purtroppo minore di ${pcNumb}.`;
} else if (pcNumb = userNumb ) {
    outputMessage = `Pareggio! Il vostro numero era ${pcNumb}`;
} else {
    outputMessage = `Hai vinto! Il tuo numero ${userNumb} è maggiore di ${pcNumb}.`;
}

alert(outputMessage);