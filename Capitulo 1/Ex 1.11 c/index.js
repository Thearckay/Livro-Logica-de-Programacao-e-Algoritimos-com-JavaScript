const valorProduto = Number.parseFloat(prompt("Preço: "))
const valorComDesconto = valorProduto - (valorProduto * 0.10)
alert(`À vista: R$${valorComDesconto} \nOu 3x de R$${(valorProduto/3).toFixed(2)}`)