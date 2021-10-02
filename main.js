//Navbarresize on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbarr").style.padding = "30px 10px";
    document.getElementById("logos").style.fontSize = "25px";
  } else {
    document.getElementById("navbarr").style.padding = "80px 10px";
    document.getElementById("logos").style.fontSize = "35px";
  }
}
