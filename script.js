function Calculate() {
  var nombre1 = document.getElementById('n1').value;
  var nombre2 = document.getElementById('n2').value;
  var Addition = parseInt(nombre1) + parseInt(nombre2);
  var Soustrac = parseInt(nombre1) - parseInt(nombre2);
  var Multipli = parseInt(nombre1) * parseInt(nombre2);
  var Division = parseInt(nombre1) / parseInt(nombre2);

  document.getElementById('test1').innerHTML = Addition;
  document.getElementById('test2').innerHTML = Soustrac;
  document.getElementById('test3').innerHTML = Multipli;
  document.getElementById('test4').innerHTML = Division;
}