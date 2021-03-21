//Usa o resto da divisão definir qual posição deve ser somada.
//Se o numero for negativo, multiplica por -1 para não tentar acessar a posição -1, inezistente.
function OP1(){
  let resultado = [0,0,0,0]
  for (let i = 0, numero = 0 i < 5 i++) {
    numero = parseInt(gets())
    resultado[(numero > 0)?numero % 2:numero % 2 * -1]++
    if(numero != 0)
      (numero > 0)?resultado[2]++:resultado[3]++
  //Mixins
  console.log(`${resultado[0]} valor(es) par(es)
${resultado[1]} valor(es) impar(es)
${resultado[2]} valor(es) positivo(s)
${resultado[3]} valor(es) negativo(s)`)
}

//Usando arrays e objetos
function OP2(){
  let resultado = ["par(es)","impar(es)","positivo(s)","negativo(s)"]
    .map(x=> {return {qtd:0,txt:x}})
  for (let i = 0, numero = 0 i < 5 i++) {
    numero = parseInt(gets())
    resultado[numero % 2 * -1].qtd++
    (numero > 0)?resultado[2].qtd++:resultado[3].qtd++
  }
  resultado.forEach(x=> console.log(x.qtd + " valor(es) " + x.txt))
}
//Jeito normazinho de resolver o problema
function OP3(){
  let n = 0, positivo = 0, negativo = 0, par = 0, impar = 0
  for (let i = 0; i <= 4; i++){
    n = parseInt(gets())
    if(n % 2 == 0)par++
    else impar++
    if(n != 0)
      if(n > 0)positivo++
      else negativo++
  }
  console.log(
    par + " valor(es) par(es)\n" +
    impar + " valor(es) impar(es)\n" +
    positivo + " valor(es) positivo(s)\n" +
    negativo + " valor(es) negativo(s)\n"
  )
}
OP1()
