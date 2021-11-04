function calcula_litros(){
  var velocidade = parseFloat(txtVelocidade.value)
  var tempo = parseFloat(txtTempo.value)
  var rendimento = parseFloat(txtRendimento.value)
  if(isNaN(velocidade) || isNaN(tempo) || isNaN(rendimento)){
    txtResultado.innerHTML = "Os valores devem ser númericos"
  }else{
    var distancia = tempo/60 * velocidade
    var litrosConssumidos = distancia / rendimento
    txtResultado.innerHTML = "Foram gastos" + litrosConssumidos + "Litros."
  }
  
  
  
  
}