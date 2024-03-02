var buttonTwo = document.querySelector(".btn-3");
var modal = document.getElementById("myModal");
var ptag = document.getElementsByTagName("p");
var span = document.getElementsByClassName("close")[0];
var modalContent = document.querySelector('.modal-content');

function updateModalContent(name, birthday, location) {
  var ptag = document.querySelector('.modal-content p');
  ptag.innerHTML = `Hello, my name is ${name}. I am born on ${birthday} and I live in ${location}.`;
  ptag.style.backgroud = 'red';
}
  
function alertBtn() {
  modal.style.display = "block";
}

buttonTwo.addEventListener("click", alertBtn);

span.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

var hour = 10;

if (hour >= 6 &&  hour < 12) {
  console.log('Good morning');
}
else if (hour >=12 && hour <18) {
  console.log('Good Afternoon');
}
else
console.log('Good evening');
