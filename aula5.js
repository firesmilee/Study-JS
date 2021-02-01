/* 
Analisando o switch

A condição switch permite executar uma parte do código diferente 
de acordo com a opção especificada

Sua utilização é indicada quando os valores que irão ser analisados
tem condições pré-definidas

Ex: 

let tipoUsuario = 'Gerente'

switch (tipoUsuario) {
    case 'Admin': 
      mensagem = '*|*| Feliz Natal, chefe! |*|*'
      break
    case 'Gerente':
        mensagem = 'Boas festas, meu amigo!'
        break
    default:
        mensagem = 'Boas festas!'
}

O valor que será mostrado na mensagem será a de Gerente, por ter 
sido a escolhida pelo usuario

Ex: 

let alimento = 'Gordura'

switch (alimento) {
    case 'Proteína': 
        mensagem = 'Carne, leite, aveia, amêndoas'
        break
    case 'Carboidrato':
        mensagem = 'Banana, batata doce, feijão, pão'
        break
    default: 
        mensagem = 'Cuidado com a alimentação!'
}

A saída será a default, por não ter sido escolhida nenhuma das 
opções anteriores.

Em alguns casos, o uso do break ao final de cada case não é necessário 

Ex: 

let cargo = 'gerente'
let salario = 2000

switch (cargo) {
    case 'gerente':
        salario *= 1.15
    case 'supervisor':
        salario *= 1.10
    default:
        salario *= 1.05

}

Sem o break, o código passa por cada case do bloco de código ele atendendo a condição ou não.

Existem vezes em que a ausência do break evita a escrita de códigos desnecessãrio

Ex: 

let mes = 'Maio'

switch (mes) {
    case 'Janeiro':
    case 'Fevereiro':
    case 'Março':
        console.log('Verão!')
        break
    case 'Abril':
    case 'Maio':
    case 'Junho':
        console.log('Outono!')
    case 'Julho':
    case 'Agosto':
    case 'Setembro':
        console.log('Inverno!')
    case 'Outubro':
    case 'Novembro':
    case 'Dezembro':
        console.log('Primavera!')
} //Inverno

Com o switch também é possivel customizar mensagens
Ex:

let sexo = 'feminino'

switch (sexo) {
    case 'feminino':
        console.log('Bem-vinda!')
        break;
    case 'masculino':
        console.log('Bem-vindo!')
        break;
    default:
        console.log('Bem-vindx!')
} //Bem-vinda!

et mes = 4;
let nomeMes = ''
 
switch (mes) {
  case 1:
    nomeMes = 'Janeiro'
    break
  case 2:
    nomeMes = 'Fevereiro'
    break
  case 3:
    nomeMes = 'Março'
    break
  case 4:
    nomeMes = 'Abril'
    break
  case 5:
    nomeMes = 'Maio'
    break
  case 6:
    nomeMes = 'Junho'
    break
  case 7:
    nomeMes = 'Julho'
    break
  case 8:
    nomeMes = 'Agosto'
    break
  case 9:
    nomeMes = 'Setembro'
    break
  case 10:
    nomeMes = 'Outubro'
    break
  case 11:
    nomeMes = 'Novembro'
    break
  case 12:
    nomeMes = 'Dezembro'
    break
  default:
    nomeMes = 'Mês inexistente'
}
 
console.log(nomeMes)
*/