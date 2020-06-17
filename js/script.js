// var nome;
// var km;
// var prezzoKilometro= 0.21;
// var opzione;

var creaBtn= document.getElementById('creabiglietto');
creaBtn.addEventListener("click", function () {
  var prezzoBiglietto;
  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var prezzoKilometro= 0.21;
  var categoria = document.getElementById('categoria').value;

  if (categoria == "Minorenne") {
    prezzoBiglietto = prezzoKilometro * km - (20/100 * prezzoKilometro * km);
  } else if (categoria == "Over65") {
    prezzoBiglietto = prezzoKilometro * km - (40/100 * prezzoKilometro * km);
  }
  else {
    prezzoBiglietto = prezzoKilometro * km;
  }
  console.log(nome, km, categoria, prezzoBiglietto);
})
