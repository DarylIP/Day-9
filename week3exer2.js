let resultDom = document.querySelector(".result");
let resultKeyDom = document.querySelector(".resultKey");
let resultCodeDom = document.querySelector(".resultCode");
// let result;

document.addEventListener("keydown", (e) => {
  console.log(e);

  // in e.key want to display 'space' but unsure how
  if (e.key === " ") {
    e.key = "(Space Bar)";
    e.preventDefault();
  }

  resultDom.innerText = e.key;
  resultKeyDom.innerText = e.code;
  resultCodeDom.innerText = e.keyCode;
});
