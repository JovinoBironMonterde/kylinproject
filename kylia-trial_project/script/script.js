



// EMPTY VALIDATION
function validateForm() {
  var show = document.getElementById("show");
  // var lname = document.getElementById("fname");
  var x = document.forms["myForm"]["finame"].value;
  var n = Document.forms["myForm"]["lname"].value;
  if (x == "" || x == null) {
    show.style.display = "block";

    return false;
  } else {
    show.style.display = "none";
  }
}
// END

function closed() {
  var chk = document.getElementById("burgercheck");
  if ((chk.checked = true)) chk.checked = false;
}

function navbarscroll() {
  var myNav = document.getElementById("mynavbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 80) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
}
window.addEventListener("scroll", navbarscroll);

// FROM HOME TO FORM 1
function getData() {
  //gettting the values
  var a = document.getElementById("id1").value;
  var b = document.getElementById("id2").value;

  //saving the values in local storage
  localStorage.setItem("txtValue", a);
  localStorage.setItem("txtValue1", b);

  // localStorage.setItem("txtValue3", telephone);
}
//displaying the value from local storage to another page by their respective Ids
document.getElementById("data").value = localStorage.getItem("txtValue");
document.getElementById("data1").value = localStorage.getItem("txtValue1");


new Cleave(".input-borrow", {
  numericOnly: true,
  
});

const amount = 100000;
function ckdg() {
  var dta = document.getElementById("id1").value;
  var h = document.getElementById("div-alert");
  if (amount < dta) {
    h.style.display = "none";
  } else {
    h.style.display = "block";
    dta.style.borderStyle = "1px solid red";
    dta.active;
  }
}