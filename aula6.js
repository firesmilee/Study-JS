/* 
Aprendendo um pouco mais sobre for 

Quando o for é utilizado em um programa ele cria um ciclo, cujo 
o seu encerramento se da quando a expressão lógica retornar 
verdadeira. 

A instrução consiste em três expressões que juntas tem o papel
de controlar as repetições que serão feitas.

Ex: 

var carros = [
  { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 45000, createdAt: 1534506085621 },
  { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 120000, createdAt: 1534506085621 }
]
 
var total = 0

Para calcularmos a média do preço dos carros, primeiro calculamos
a soma do valor de todos os carros.

for(var = 0; i < carros.length; i++) {
    total += carros[i].preco
}

Essa expressão for pode ser reescrita usando um for..of 

for(const carro of carros) {
    total += carro.preco
}

Em muitos casos o uso da variável i, não será necessário, exceto
quando for acessar os itens de um array.

for..of permite alcançar um mesmo resultado acessando diretamente
os itens escolhidos, dando assim um código mais compacto.

Existe também a forma for..in que permite iterar sobre as propriedades
enumeradas de um objeto de acordo com a ordem em que foram inseridos

for(const i in carros) {
    total += carros[i].preco
}

Ex: 

const cores = [ 'Verde', 'Amarelo', 'Azul', 'Branco' ]

for (const index in cores) {
    console.log(index, cores[index])
}

Ex: 

const pessoa = {
    nome: 'Bruno',
    idade: 25
}

for(const index in pessoa) {
    console.log(`$ - ${pessoa[index]}`)
}

Soma de todos os valores 

Ex:

const produtos = [
  { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
  { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
  { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
]
 
let total = 0
 
for (const index in produtos) {
  const { valor, quantidade } = produtos[index]
 
  total += valor * quantidade
}
 
console.log(total)

Para o for..of 

Ex:

const numeros = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ]
 
for (const numero of numeros) {
  console.log(numero)
}


*/
