
var creaBtn = document.getElementById('creabiglietto');
var annullaBtn = document.getElementById('annullabiglietto');
  var biglietto = document.getElementById('biglietto');

creaBtn.addEventListener("click", function () {

  var prezzoBiglietto;
  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var prezzoKilometro= 0.21;
  var categoria = document.getElementById('categoria').value;
  var minCarrozza = 1 ;
  var maxCarrozza = 13;
  var minTreno = 90000;
  var maxTreno = 100000;


  if (categoria == "Minorenne") {
    prezzoBiglietto = prezzoKilometro * km - (20/100 * prezzoKilometro * km);
  } else if (categoria == "Over65") {
    prezzoBiglietto = prezzoKilometro * km - (40/100 * prezzoKilometro * km);
  }
  else {
    prezzoBiglietto = prezzoKilometro * km;
  }
  console.log(nome, km, categoria, prezzoBiglietto);

  var treno = Math.floor( Math.random()* (maxTreno- minTreno + 1) )+ minTreno;
  console.log( treno );
  var carrozza = Math.floor( Math.random()* (maxCarrozza- minCarrozza + 1) )+ minCarrozza;
  console.log( carrozza );

  document.getElementById('passeggero').innerHTML = nome;
  document.getElementById('ntreno').innerHTML = treno;
  document.getElementById('ncarrozza').innerHTML = carrozza;
  document.getElementById('prezzo').innerHTML = prezzoBiglietto.toFixed(2);
  document.getElementById('fascia_eta').innerHTML = categoria;

  biglietto.className = "show";
});

annullaBtn.addEventListener("click", function () {

  document.getElementById('nome').value = "";
  document.getElementById('km').value = "";
  document.getElementById('categoria').value = "Maggiorenne";

  biglietto.className = "hidden";
});
