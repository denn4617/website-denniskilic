import { darkModeFunc } from "./darkmode.js";
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('profileImage');
console.log(img);
var modalImg = document.getElementById("modalImg");
console.log(modalImg);
var captionText = document.getElementById("modalCaption");
console.log(captionText);
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
modal.addEventListener('click', function () {
  this.style.display = "none";
});

document.getElementById('darkmodeSwitch').onchange = darkModeFunc;