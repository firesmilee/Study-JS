/* Aula 2

Aprendendo as diferenças entre == e ===, e != e !==
O JS é como sabemos, uma linguagem cujo as variáveis não são fortemente tipadas, ou seja, mesmo as variáveis possuindo tipos
esses tipos só são atribuidos em tempos de execução. Por isso, na definição de uma variável elas são todas definidas como var. 
Por exemplo, um dado tipo inteiro é dado como
var i = 0;
E uma string é dada como 
var s = 'texto';

Por esse motivo, o JS possui dois tipos de operadores de igualdade e dois de desigualdade 
são == e ===, != e !==. 
Em linguagens como C#, temos somente o primeiro deles. Nessas linguageus, o operador == verifica a igualdade entre os valores,
considerando, além do valor propriamente dito, o tipo dele.

No JS, como os tipos das variáveis nem sempre são levados em consideração, há duas opções: o operados == e !=, não levam em 
consideração o tipo de dados, e os operadores === e !== consideram os tipos de dados e afirmam que os valores são de fato iguais. 

O que difere trabalhar com == ou ===? 
== não levam o tipo em consideração
=== levam o tipo em consideração

var verdadeiro = '1' == 1;
var falso = '1' === 1; 

outros exemplos de ==

var var1 = 'true' == true;  //false
var var2 = '0' == false;   //true
var var3 = null == undefined; //true 
var var4 = false == null; //false
var var5 = null == 0;  //false
var var6 = '' == 0; //true
var var7 = '\t\n' == 0; //true
var var8 = '1' == true;  //true

Pelo que pode ser observado, existe várias discrepâncias entre o comportamento tido como normal, então se faz usual e mais confiável
a utilização dos operadores === e !==. 




*/