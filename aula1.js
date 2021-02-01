//Primeiros passos com JS 

//Como declarar variável
var preco = 54.90;

//Operação com número
var desconto = preco * 0.1;

//Imprimindo um valor
console.log("O valor do desconto é: " + desconto);

//Js é indicado para pessoas que estão começando a programar, por ter uma linguagem fácil 

//Somando valores 
var soma = 40.10 + 10;

//Alterar o tipo de variavél
var idade = 18; //number
idade = "18 anos"; //string
console.log(idade);

//Criando uma função
function somandoDoisNumeros (n1, n2) {
    return n1 + n2;
}

/*Porque aprender JS 
É a única linguagem 100% fullstack;
É a única linguagem que roda nativamente em todos os browsers;
É fácil de aprender.

*/
// Existem duas formas de se declarar variáveis em JS, com let( formar recomendada ) e var 
//let permite declarar variáveis que existem apenas no escopo no qual são utilizadas
//var cria variáveis globais que podem ser acessadas em qualquer local no arquivo ou funções declaradas 

/*
Exemplo: se utilizarmos a mesma variável em locais distintos dentro do código, uma sobrescreverá a outra

var precos = [ 1200.8, 345.8, 2543.98];

var total = // total dos valores produtos no array precos

var incluirMedia = true;

if ( incluirMedia ) {
    var total = total/precos.leght;
}

Nesse código, a variável total escrita dentro do if sobrescreverá a outra que está fora, se ao invés de usarmos var, usarmos let
a variável será considerada uma nova variável dentro do código.
Porém ao apenas trocar var por let é gerado um erro no código, pois o let tem uma sintaxe própria 

Exemplos de let ->

let tipoNumber = 12
let tipoString1 = 'Texto entre aspas simples'
let tipoString2 = "Texto entre aspas duplas"
let tipoNull = null
let tipoUndefined = undefined
let tipoObject = { nome : 'José da Silva', idade : 18 }
let tipoBoolean = true || false

Existe a possibilidade de atribuir a uma váriavel o resultado de uma expressão 

let totalBruto = 5000
let desconto = 0.1

let totalLiquido = totalBruto - ( totalBruto * desconto ) //O parênteses representa a ordem de como o código realizará o calculo
fazendo primeiro o que tem no parêntes e depois com o de fora 

As variáveis declaradas dentro de blocos if ou for não podem ser acessadas de fora destes blocos

let admin = true
if ( admin ) {
    let menu = [ "home", "contato", "settings" ]
}

if(menu.includes("settings")){
    //qualquer coisa
}

Esse código trará um erro da forma
if(menu.includes("settings"))
^
ReferenceError: menu is not defined

Em um for, quando utilizamos var dentro, podemos acessar o resultado ali criado, com let, não

for(var i = 0; i < precos.length; i++) {
    total += precos[i]
}

media = total / precos.length

console.log(i) //3

Subistituindo var por let

for(let i = 0; i < precos.length; i++) {
    total += precos[i]
}

media = total / precos.length

console.log(i) // ReferenceError: i is not defined

O JS move declarações para o topo do código por padrão, ou seja, isso da a possibilidade de utilizar uma variável antes dela ser 
declarada. Isso se chama Hoisting.

Contudo, quando essa variável é do tipo let, ela não é movida para o topo

function cpfIsValido (value) {
    return /^\d.\d\.\d\-\d$/.test(value)
}

console.log(cpfIsValido(cpfComVar))
console.log(cpfIsValido(cpfComLet))

var cpfComVar = '999.999.999 - 99'
var cpfComLet = '999.999.999 - 99'

Resultado 
console.log(cpfIsValido(cpfComLet)) //'value' was used before it was defined
^
ReferenceError: cpfComLet is not defined

Trabalhando com Constantes
O seu valor não pode ser modificado. A palavra para declarar constantes em JS é const. 
Uma constante se comporta em relação ao escopo da mesma forma que uma variável let. 

Sintaxe -> const [ identificador ] = [ valor | expressão ]

const peso = 80.5
const altura = 1.80 
const imc = peso / (altura * altura)

console.log(imc)

É comum a utilização de constantes para que o valor não seja sobrescrito ao longo do código. 

Constantes são muito utilizados para a criação de funções juntamente com a sintaxe de flecha

const desconto = (preco, aliquota) => preco * aliquota

soma(560.56, 0.08)

Uma constante que é declarada sem ser iniciada com um valor gera um erro de sintaxe 

const aliquota 

console.log(aliquota)

Erro
(function(exports, require, module, __filename, __dirname)) { const aliquota
^^^^^^^^^^
SyntaxError: Missing initializer in const declaration

Assim como let, uma constante está limitada ao escopo em que foi declarada

const quantidade = 10 

if (quantidade >= 3) {
    const quantidade = 20

    console.log(quantidade) //20
}

console.log(quantidade) //10
Dentro do if a constante é declarada como uma nova variável e só pode ser mostrada dentro do próprio if

Uma constante não pode ser sobrescrita 

const produto = { id : 1, nome : 'Grampo', preco : 34.7 }

produto = null

Erro 
produto = null
   ^
TypeError: Assignment to constant variable.

Contudo, os atributos desse objeto podem ser sobrescritos 
const produto = { id : 1, nome : 'Grampo', preco : 34.7 }
produto.preco = null

Null é utilizado quando tu ainda não sabe qual o valor da variável que está utilizando, e para o código não retornar um erro, 
coloque null no valor. Ele é considerado com 0 pelo JS 





*/


