function getfullname(){
  var fullname = document.getElementById('fullname').value;
  var displayfullname = document.getElementById('displayfullname');
  displayfullname.textContent = fullname;
}

var getcountry = () =>{
  var country = document.getElementById('country').value;
  var displaycountry = document.getElementById('displaycountry');
  displaycountry.textContent = country;
}

function getgender(gender){
  var gen = document.getElementById(`${gender}`).value;
  var displaygen = document.getElementById('displaygender');
  displaygen.textContent = gen;
}
function getDOB(){
  var DOB = document.getElementById('DOB').value;
  var displayDOB = document.getElementById('displayDOB');
  displayDOB.textContent=DOB;
}
function getEmail(){
  var email = document.getElementById('email').value;
  var displayEmail = document.getElementById('displayEmail');
  displayEmail.textContent=email;
}
function getAddress(){
  var Address = document.getElementById('Address').value;
  var displayAddress = document.getElementById('displayAddress');
  displayAddress.textContent=Address;
}
function getState(){
  var State = document.getElementById('State').value;
  var displayState = document.getElementById('displayState');
  displayState.textContent = State;
}
