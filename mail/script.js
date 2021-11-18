const dbEmails = ['pippo@icloud.com', 'claudio@gmail.com', 'giovanni@yahoo.com'];

const inputEmail = prompt('Inserisci la tua email di accesso:').toLowerCase();

// console.log(inputEmail);
// console.log(dbEmails);

let emailCheck = false;


for( let i = 0; i < dbEmails.length; i++ ) {
    const thisEmail = dbEmails[i];
    console.log(thisEmail);

    if( thisEmail === inputEmail ) {
        emailCheck = true;
    }
}

if (emailCheck){
    alert('Welcome');
} else {
    alert('Mail not found');
}