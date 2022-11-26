let btn = document.querySelector(".button");
let qr_code_element = document.querySelector(".qr-code");
let user_input = document.querySelector("#input_text");

btn.addEventListener("click", () => {
  if (user_input.value != "") {
    if (qr_code_element.childElementCount == 0) {
      generate(user_input);
    } else {
      qr_code_element.innerHTML = "";
      generate(user_input);
    }
  } else {
    alert("not valid input");
    qr_code_element.style = "display: none";
  }
});

function generate(user_input) {
  qr_code_element.style = "";

  var qrcode = new QRCode(qr_code_element, {
    text: `${user_input.value}`,
    width: 180, //128
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
