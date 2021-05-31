/*
Comentários podem ser postos assim:
// ou /*  */

/*
Exibindo mensagem no console.
console.log("Hello world");
*/
/*
É importante usar a sintexe de forma correta.
*/

//Tipos de dados em JS.

/*
Os dados podem ser divididos em dois grandes tipos: primitivos(
 Number, String, Boolean, ...) e estruturais( object e functions)
*/
/*
String é um conjunto de caracteres: "abc"
É possivel utilizar aspas simples(''),
duplas(""), ou crases(``).
*/
/*
Number são valores numéricos: (1/ 1.5/ -4 ...)
Caso você tente uma operação que não retorne um nú_
mero ele retorna um NaN(Not a Number).
console.log(NaN);
*/
/*
Boolean é composto por dois valores: True or False
Muito utilizado para testes de condição.
*/
/*
Null e Undefined são dois tipos difentes de dados:
Null: indica uma variavel vazia, sem valor nela.
Undefined: indica uma resposta indefinida.
*/
/*
Objetos são representações de entidades do mundo real.
objetos podem ser compostos de atributos e métodos.
sua sintaxe é: {propriedade: "valor"}
*/
/*
console.log({
  name: "Mayk",
  idade: 36,
  andar: function(){
    console.log("andar");
  }
});
*/

/*
Array é um tipo de lista que armazena dados.
Sua sintaxe é: ['','', ...]
*/
/*
console.log(["joao", "mateus", "douglas"])

console.log(["joao",
             "mateus",
             "douglas"])
*/

/*
Variáveis
As variáveis são identificadores de valores que o
programa possui ou pode possuir. Variáveis podem ser
declaradas com as palavras reservadas: var, let 
ou const

var nome = "João";
nome = "Marcos";
console.log(nome);

let nome = "João";
nome = "Marcos";
console.log(nome);

Não é possível modificar valor de uma variável const
uma segunda vez.

const nome = "João";
nome = "Carol";
console.log(nome);

Variáveis em JS são fracamente tipadas, ou seja,
não precisa ser especificado o tipo de uma variável
para utiliza-la.

Tipo fortemente tipado:
int nome = "...";

Tipo fracamente tipado:
nome = "..."; ou let nome = "...";

Escopo de uma variável

Uma variável pode ser local ou global, variáveis do
tipo let e const são locais e as do tipo var são
globais, no var é utilizado o conceito de hoisting,
eleva a var como undefined no topo do script, indepen
dente do local em que se encontre.
Em JS você tem os blocos de código, que possibilitam
a isolação de trechos de códigos no script.

Abaixo tem dois blocos de código que começa com {
e termina com }.

Variável local
{
  let x = 0;
  console.log(x);
}

Variável global
var x = 0;
{
  console.log(x);
}

Variáveis em JS podem ser nomeadas da seguinte forma:
-Iniciar com caracteres especiais: $ _
-Iniciar com letras
-Utilizar acentuação
-Letras maíusculas e minúsculas são diferentes

Fora dos parametros citados acima, o restante não pode
ser utilizado

O ideal é:
-Criar nomes que façam sentido e explica a variável 
-Usar camelCase, exemplo: nomeCompleto
-Usar snake_case, exemplo: nome_completo
-ESCREVER EM INGLÊS 
*/

/*
Uma variável é composta por declaration(declaração) +
assignment(atribuição).

é possivel definir cada variável por tipo ou agrupar
um conjunto de variáveis em um tipo.

Exemplo(uma declaração por vez):
let nome...
let idade...
let cpf...

Exemplo(muitas declarações por vez):
let nome, idade, cpf...
*/
