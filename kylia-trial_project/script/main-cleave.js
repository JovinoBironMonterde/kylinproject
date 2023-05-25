// START FOR PHON NUMBER
new Cleave(".phonenumber", {
  numericOnly: true,
 blocks: [10],
});

// austraian phone number validitionn
function checkInput() {
  const codeNum = "04";
  const input = document.getElementById("phone");
  const inpErr = document.getElementById("inp-error");
  const firstTwo = input.value.substring(0, 2);
  console.log(firstTwo);

  if (firstTwo !== codeNum) {
    inpErr.innerHTML = "Invalid Phone Number!(Australian phone numbers only)";
        input.active;
  } else if (input > 10) {
   inpErr.innerHTML = "";
    inpErr.innerHTML = "Invalid Phone Number";
            input.active;

  } else {
     inpErr.innerHTML = "";
            
  }
}
// END FOR PHON NUMBER

// START FOR CODE
new Cleave(".pcode", {
  numericOnly: true,
  blocks: [4],
});

new Cleave(".input-borrow", {
  prefix: "$",
  numericOnly: true,
  blocks: [1, 5],
});

new Cleave("amount", {
  prefix: "$",
  numericOnly: true,
  //   delimiter: "-",
  blocks: [2, 8],
  stripLeadingZeroes: false,
  onValueChanged: function (e) {
    const maxSize = 10;
    if (e.target.rawValue.length > maxSize) {
      cardCCV.setRawValue(e.target.rawValue.substring(0, maxSize));
    }
  },
});

function checked(){
    const check = document.getElementById("checks").value;
    if(check.checked = false){
        check.style.border = "1px solid red";
        check.active;
    }else{
        check.style.border = "green";
    }
}