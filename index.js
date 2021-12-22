function MostrarNombreDeApp(){
  alert("¿Es Multiplo?")
}
function PedirNumero(){
 return +prompt("Digite un numero a comprobar");
}
function PedirMultiplo(){
  return +prompt("Digite el multiplo que se quiere comprobar")
}
function EsMultiplo(numero,multiplo){
  return numero % multiplo == 0;
}
function MostrarResultado(esMultiplo){
  if(esMultiplo){
    alert("Es multiplo")
  }else{
    alert("No es multiplo")
  }
}

MostrarNombreDeApp();
MostrarResultado(EsMultiplo(PedirNumero(),PedirMultiplo()))

