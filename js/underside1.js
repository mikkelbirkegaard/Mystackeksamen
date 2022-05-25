/*Her starter kurven*/ 
/*Fulgt tutorial - Sampaio, Telmo, (2020), "JavaScript Shopping Cart Tutorial - alle part", https://www.youtube.com/watch?v=B20Getj_Zk4, (set online d. 24/05/2022)
1/5:https://www.youtube.com/watch?v=B20Getj_Zk4 
2/5: https://www.youtube.com/watch?v=PoTGs38DR9E 
3/5: https://www.youtube.com/watch?v=tEAl7L62GEw 
4/5: https://www.youtube.com/watch?v=QNXQfdgIXLw 
5/5:https://www.youtube.com/watch?v=IY5UN82FZ2Q 
*/
 
// Kurv 
let carts = document.querySelectorAll('.add-cart');

//produkterne
let products = [
  {
    name: 'Lounge Modul',
    tag: 'pallesofalille',
    price: 3120,
    inCart: 0
  },
  {
    name: 'Pallesofa Mellem',
    tag: 'pallsofamellem',
    price: 4875,
    inCart: 0
  },
  {
    name: 'Pallesofa Lille',
    tag: 'bestseller3',
    price: 3540,
    inCart: 0
  }


];

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click' , () => {
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}
//For at kurven husker hvad der er lagt i kurv ved reload - Funktion virker kun hvis den kaldes
function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

// Ved klik på "læg i kurv" knap husker local storage det under "applications" key and value
 function cartNumbers(product) {
  
   let productNumbers = localStorage.getItem('cartNumbers');

   productNumbers = parseInt(productNumbers);

   // Hvis der er produkter i kurven
   if( productNumbers ) {
    localStorage.setItem('cartNumbers' , productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;    
   } else {
    localStorage.setItem('cartNumbers' , 1);
    document.querySelector('.cart span').textContent = 1; //.cart referer til den class der er ved kurvbilledet i html
   }

   setItems(product);

}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

      if(cartItems[product.tag] == undefined){
        cartItems = {
          ...cartItems,
          [product.tag]: product
        }
      }
        cartItems[product.tag].inCart += 1;  
    } else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
      }

    }
  
   
    localStorage.setItem("productsInCart" , JSON.stringify (cartItems));
}

// Nedenstående funktion er til for at regne den totale pris ud
function totalCost(product) {
    //console.log("The products price is" , product.price);
  let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost );

  if(cartCost != null) {
    cartCost = parseInt(cartCost); //konvertering fra string til tal
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
   
}


//produkter i kurven
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    let productTotal = document.querySelector(".totalen");

    console.log(cartItems);
    if(cartItems && productContainer ) {
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
 
        <div class="proveting">
        <div class="product">
        <button onclick="this.parentNode.remove();amount-='+ parseInt(price) +';sum.innerHTML=amount">
        <ion-icon name="close-outline"></ion-icon></button> 

        <img src="./images/${item.tag}.jpg" alt="productimage">
        <span>${item.name}</span>
        </div>
        <div class="price">${item.price} kr.</div>
        <div class="quantity">
           <ion-icon class="decrease" name="caret-back-circle-outline"></ion-icon>
              <span>${item.inCart}</span>
          <ion-icon class="increase" name="caret-forward-circle-outline"></ion-icon>
        </div>

        <div class="total"> 
            ${item.inCart * item.price} kr.
        </div>
        </div>
 
        `
      });

        productTotal.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Kurv Total
            </h4>  
            <h4 class="basketTotal">
              ${cartCost} kr.
            </h4>   
        </div>
      `;
    
   }
}



//her kaldes funktion for at huske hvad der er i kurv
onLoadCartNumbers(); 
displayCart()


const productContainers = [...document.querySelectorAll('.produkterne')];
const fremPil = [...document.querySelectorAll('.frempil')];
const tilbagePil = [...document.querySelectorAll('.tilbagepil')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    fremPil[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    tilbagePil[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

/*Her slutter kurven*/ 




// w3schools 
// https://www.w3schools.com/howto/howto_js_slideshow.asp
// 24/5-2022
// // Billede slides
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Dropdown med farver }

var acc = document.getElementsByClassName("dropdownknap");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activeh");
    var panel = this.nextElementSibling;
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
}