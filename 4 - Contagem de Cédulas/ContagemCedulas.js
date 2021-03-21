let valor = parseInt(gets())
console.log(valor)
[100, 50, 20, 10, 5, 2, 1].forEach(x => {
  let qtd=Math.floor(valor / x)
  valor -= x * qtd
  console.log(qtd + " nota(s) de R$ " + x + ",00")
})
