function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

(function(){
  emailjs.init("RBpJZE3p6UK_h-Npn");
})();

document.getElementById('Myform').addEventListener('submit', function(event) {
 event.preventDefault();
 var formData = {
     name: this.nome.value,
     email: this.email.value,
     message: this.messaggio.value
 };
 // Invia i dati tramite EmailJS
 emailjs.send('test_42i0ka', 'template_qc2wkkl', formData)
     .then(function(response) {
         console.log('Messaggio inviato con successo!', response);
     }, function(error) {
         console.log('Errore durante l\'invio del messaggio:', error);
     });
});