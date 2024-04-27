var words = ['studio blockchain e mi appassiona la tecnologia', 'uso la calma e la curiosità come super poteri, nella vita come nel lavoro', 'Ciao, sono Stefano.'];
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 3000);
function update_carousel_words(){
  word.innerHTML = words[counter];
  counter++;
  if(counter >= words.length){
    counter = 0;
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}