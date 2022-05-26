
// Kilde: W3 schools, (n.d), “How to create an Accordion”, https://www.w3schools.com/howto/howto_js_accordion.asp, (set online d. 24/05-2022)
// FAQ dropdown

var acc = document.getElementsByClassName("knap");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}