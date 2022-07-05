# Programação Orientada a Objeto

## O que é Programação Orientada a Objetos (POO)?
* Oriented Object Programming ou OOP
* Um paradigma de desenvolvimento
* Uma maneira de resolver um problema, um modo de pensar
* Não está ligado somente à uma linguagem de programação, mas a um entendimento amplo e atemporal para criação de softwares

## Utilização no mercado
* Na maioria dos sistemas atuais
* Várias linguagens (JS, TS, Java, Python, ..)
* Utilizado por Analistas de Sistemas e não somente por programadores
  * Na fase de levantamento de requisitos de sistema
  * Via gráficos, desenhos e textos

## Onde e quando utilizar?
* Linguagens
* Quando quiser aplicação Padrões de Projetos
* Quando quiser organizar seu código
* Para melhor entendimento do código, pensando nele como Objetos
* Quando precisar fazer reuso de código
* Para separar a complexidade de código, abstrair código e expor de maneira mais simples
* Para classificar as rotinas e trechos de código

## Conceitos
* Precisamos entender os conceitos e paradigma e não somente códigos
* Um boa fundamentação

## Objetos
Uma caneta é um objeto. Todo objeto possui:
* Propriedades e funcionalidades
* Estado e Comportamentos
* Atributos e métodos

## Abstratos vs Mundo Real
Trazemos a representação de algo do mundo real para Objetos
* Pessoa
* Aluno
* Produto
* Carrinhos de compras

Porém, alguns objetos na programação não são fáceis de identificar, pois são abstratos como:
* Autenticação
* Autorização

** Nem todo objeto do mundo real fará parte do seu sistema.

## Classes
As classes na orientação a objetos funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe
* Máquina de biscoito
  * Instâncias

## Classes em JavaScript

* Syntactical sugar
* Prototype

// oop.js

## Encapsulamento
Dirigir carro vs conhecer o motor do carro
* Colocar numa cápsula
* Agrupamento de funções e variáveis
* Esconder detalhes de implementação
* Camada de segurança para os atributos e métodos

## Confusão e Solução
Programação Estruturada vs Orientação a Objetos

Programação Estruturada
* Processa a entrada e manipulação dos dados, até a saída
* Uso de sequências, estruturas de repetições e condições
* Uso de uma rotina maior, ou sub-rotinas
* Não existem restrições às variáveis

Programação Orientada a Objetos
* Surge para trazer um cuidado ao uso estruturado
  * não elimina por completo o uso estruturado
* Conceitos como Objetos e Classes
* Cuidados com variáveis e rotinas (Encapsulamento)
* Melhor reuso de código (Herança)

// estrutural-poo.js

## Herança

* Pais e filhos
* Objetos podem herdar, ou estender, características bases
* Uma cópia de atributos e métodos de outra classe

// heranca.js

Saiba
* Um objeto pode estender de outro objeto e assim por diante
* Fácil reutilização de código

## Polimorfismo
Quando um objeto estende de outro (herança) talvez haja a necessidade de reescrever uma ou mais características (atributos e métodos) nesse novo objeto. Recriaremos então um método (ou mais) da classe herdada. Polimorfismo significa muitas formas.

// polimorfismo.js

## Abstração
Template ou Identidade de uma classe será construida no futuro
* Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MAS
* A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração

// abstracao.js