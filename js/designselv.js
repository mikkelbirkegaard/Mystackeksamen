
// Læs mere om pallerne
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("palleBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Læs mere om ryglæn
var modalryg = document.getElementById("rygModal");

// Get the button that opens the modal
var btnen = document.getElementById("rygBtn");

// Get the <span> element that closes the modal
var rygspan = document.getElementsByClassName("closeing")[0];

// When the user clicks the button, open the modal 
btnen.onclick = function() {
  modalryg.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
rygspan.onclick = function() {
  modalryg.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalryg) {
    modalryg.style.display = "none";
  }
}


// Læs mere om madrasserne
var modalmadras = document.getElementById("madrasModal");

// Get the button that opens the modal
var btnmadras = document.getElementById("madrasBtn");

// Get the <span> element that closes the modal
var madrasspan = document.getElementsByClassName("closemadras")[0];

// When the user clicks the button, open the modal 
btnmadras.onclick = function() {
  modalmadras.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
madrasspan.onclick = function() {
  modalmadras.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalmadras) {
    modalmadras.style.display = "none";
  }
}


img_array= new Array('images/hvid.png','images/forstepalle.png','images/andenpalle.png','images/tredjepalle.png');
i=0;
function myFunction()
{
     i++;
    document.getElementById("myImg").src=img_array[i];
    if(i==img_array.length-1) {
   i=-1;

    }
    
}

provearray= new Array('images/ryg.png');
function myPallets()
{
    document.getElementById("myImg").src=provearray;
    
}

igenarray= new Array('images/grad.png');
function myMadras()
{
    document.getElementById("myImg").src=igenarray;
    
}

betraekarray= new Array('images/sorthynde.png');
function myBetraek()
{
    document.getElementById("myImg").src=betraekarray;  
}

sum = 0  


  test.addEventListener('click',
  function(){
    bestillinger.innerHTML =
    sum = sum + 420
    ialt.innerHTML = sum;
  })

  ryggen.addEventListener('click',
  function(){
    bestillinger.innerHTML =
    sum = sum + 1005
    ialt.innerHTML = sum;
  })

  madrassengrad.addEventListener('click',
  function(){
    bestillinger.innerHTML =
    sum += sum + 1125
    ialt.innerHTML = sum;
  })

  hyndebetraek.addEventListener('click',
  function(){
    bestillinger.innerHTML =
    sum = sum + 1665
    ialt.innerHTML = sum;
  })

  betal.addEventListener('click', function(){
      localStorage.setItem("liste", bestillinger.innerHTML)
    
  })


  //let gem = sessionStorage.setItem("make", 23)


  //local storage gemmer sig selv i browseren. De kan få information fra andre dokumenter ved at bruge localStorage.getItem("navn")
  //localStorage.setItem("navn", "Sif")


  //provekylling.addEventListener('click',
  //function(){
    //bestillinger.innerHTML += "<p>kyllingelår</p>"
  //})





