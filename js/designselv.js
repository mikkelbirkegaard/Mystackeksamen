

// Læs mere om pallerne
var modal = document.getElementById("myModal");

// Knappen der åbner "Modal"
var btn = document.getElementById("palleBtn");

// X knappen der lukker "modal"
var span = document.getElementsByClassName("close")[0];

// button.onclick funktion der åbner "modal"
btn.onclick = function() {
  modal.style.display = "block";
}

// Når brugeren trykker på X lukker "modal"
span.onclick = function() {
  modal.style.display = "none";
}



// Læs mere om ryglæn
var modalryg = document.getElementById("rygModal");

// Knappen der åbner "Modal"
var btnen = document.getElementById("rygBtn");

// X knappen der lukker "modal"
var rygspan = document.getElementsByClassName("closeing")[0];

// button.onclick funktion der åbner "modal"
btnen.onclick = function() {
  modalryg.style.display = "block";
}

// Når brugeren trykker på X lukker "modal"
rygspan.onclick = function() {
  modalryg.style.display = "none";
}



// Læs mere om madrasserne
var modalmadras = document.getElementById("madrasModal");

// Knappen der åbner "Modal"
var btnmadras = document.getElementById("madrasBtn");

// X knappen der lukker "modal"
var madrasspan = document.getElementsByClassName("closemadras")[0];

// button.onclick funktion der åbner "modal"
btnmadras.onclick = function() {
  modalmadras.style.display = "block";
}

// Når brugeren trykker på X lukker "modal"
madrasspan.onclick = function() {
  modalmadras.style.display = "none";
}


// Læs mere om betræk
var modalbetraek = document.getElementById("betraekModal");

// Knappen der åbner "Modal"
var btnbetraek = document.getElementById("betraekBtn");

// X knappen der lukker "modal"
var betraekspan = document.getElementsByClassName("closebetraek")[0];

// button.onclick funktion der åbner "modal"
btnbetraek.onclick = function() {
  modalbetraek.style.display = "block";
}

// Når brugeren trykker på X lukker "modal"
betraekspan.onclick = function() {
  modalbetraek.style.display = "none";
}


// Læs mere om puderne
var modalpude = document.getElementById("pudeModal");

// Get the button that opens the modal
var btnpude = document.getElementById("pudeBtn");

// Get the <span> element that closes the modal
var pudespan = document.getElementsByClassName("closepude")[0];

// When the user clicks the button, open the modal 
btnpude.onclick = function() {
  modalpude.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
pudespan.onclick = function() {
  modalpude.style.display = "none";
}


// Læs mere om hjul
var modalhjul = document.getElementById("hjulModal");

// Get the button that opens the modal
var btnhjul = document.getElementById("hjulBtn");

// Get the <span> element that closes the modal
var hjulspan = document.getElementsByClassName("closehjul")[0];

// When the user clicks the button, open the modal 
btnhjul.onclick = function() {
  modalhjul.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
hjulspan.onclick = function() {
  modalhjul.style.display = "none";
}


// Valg af moduler er lavet i et array som henviser til en button.onclick
img_array= new Array('images/hvid.jpg','images/forstepalle.jpg','images/andenpalle.jpg','images/tredjepalle.jpg');
i=0;
function myForste()
{
     i++;
    document.getElementById("myImg").src=img_array[i];
    if(i==img_array.length-1) {
   i=-1;
    }
    
}

// array af ryg
provearray= new Array('images/ryg.jpg');
function myPallets()
{
    document.getElementById("myImg").src=provearray;
    
}

// array af madras
igenarray= new Array('images/grad.jpg');
function myMadras()
{
    document.getElementById("myImg").src=igenarray;
    
}

// array af betræk
betraekarray= new Array('images/sorthynde.jpg');
function myBetraek()
{
    document.getElementById("myImg").src=betraekarray;  
}

// array af rygpuder
pudearray= new Array('images/donepalle.jpg');
function myPude()
{
    document.getElementById("myImg").src=pudearray;  
}

//  https://github.com/mikkelbirkegaard/ikonerikurv
// Her er priserne på de forskellige elementer i design selv
sum = 0  


//Her er der lavet en onclick funktion det tæller op i ialt id 
  test.addEventListener('click',function(){
    bestillinger.innerHTML =
    sum = sum + 420
    ialt.innerHTML = sum;
  })

//Her er der lavet en onclick funktion det tæller op i ialt id 
  ryggen.addEventListener('click',function(){
    bestillinger.innerHTML =
    sum = sum + 1005
    ialt.innerHTML = sum;
  })

//Her er der lavet en onclick funktion det tæller op i ialt id 
  grad.addEventListener('click',function(){
    bestillinger.innerHTML =
    sum = sum + 1125
    ialt.innerHTML = sum;
  })

//Her er der lavet en onclick funktion det tæller op i ialt id 
  hyndebetraek.addEventListener('click',function(){
    bestillinger.innerHTML =
    sum = sum + 1665
    ialt.innerHTML = sum;
  })

  betal.addEventListener('click', function(){
      localStorage.setItem("liste", bestillinger.innerHTML)
    
  })





