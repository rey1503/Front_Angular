//Validacion edad
window.addEventListener("load", function() {
      myForm.Age.addEventListener("keypress", soloNumeros, false);
  });
  function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }
  //Validacion telefono
  window.addEventListener("load", function() {
    myForm.Telephone.addEventListener("keypress", soloNumeros, false);
});
function soloNumeros(e){
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}


//Validacion Password
window.addEventListener("load", function() {
    myForm.Password.addEventListener("keypress", validar, false);
});
function validar(e) {
    var regex = new RegExp("^[a-zA-Z0-9 ]+$");
    var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
      e.preventDefault();
      return false;
   }
}