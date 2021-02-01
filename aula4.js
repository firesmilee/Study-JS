/* 
Aprendendo sobre o while no JS

No while, um código ele e repete até que a condição imposta se torne verdadeira, e o retorno do laço vem de forma booleana

Ex: 
let salario = 1000

while (salario < 5000) {
    salario += 100

    console.log(`O salário ainda é $ `)
}
A execução desse while acontece até que a condição salário < 5000 seja falsa.

Existe a possibilidade de fazer com que um while execute ao menos uma vez o bloco de código com a instruçã do .. while.

Ex: 
let aumento = 500

do {
    console.log(`O valor atual do aumento é de: $ `)

    aumento += 50 
} while (aumento < 500)
Mesmo que a condição seja falsa, o bloco é executado ao menos uma vez. 

Sintaxe While 

while (expressao) {
    instrucao
}

do {
    instrucao
} while (expressao)

Ex: 

let contador = 0 

while (contador < 50){
    console.log(`repetição nr $ `)

    contador++
}

const cores = [
    'Verde',
    'Amarelo',
    'Azul',
    'Branco',
]

let index = 0

while (index < cores.length) {
    console.log(index, cores[index])
    index++
}

// 1 'Verde'
// 2 'Amarelo'

Somando valores de um Array 

const produtos = [
    {descricao: 'Resma Oficio', valor: 11.50, quantidade: 10},
    {descricao: 'Lapis preto', valor: 0.50, quantidade: 3},
    {descricao: 'Tranferidor Plastico', valor: 1.20, quantidade: 4}
]

let total = 0
let index = 0

while (index < produtos.length) {
    const { valor, quantidade } = produtos[index]

    total += valor * quantidade
    index++
}

console.log(total) //121.3

Uma lista de números

const numeros = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ]

let index = 0

while (index < numeros.length) {
    console.log('numero atual %s: ', numeros[index])
    index++
}

Soma do valor dos carros 

const carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000 },
    { id: 3, modelo: 'Gol', marca: 'Volksvagen', preco: 14000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volksvagen', preco: 20000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12000 },
]

let total = 0
let index = 0 

while (index < carros.length) {
    total += carros[index].preco
    index++
}

//converte o número para o padrão monetário
const valorFinal = Number(total).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

console.log(valorFinal) // R$ 76,000.00

*/


