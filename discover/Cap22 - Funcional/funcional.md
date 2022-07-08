# Programação Funcional

## Por que JavaScript como linguagem?
* Linguagem da WEB
* Multiparadigma
* Foco no entendimento do Paradigma

## Por que estudar programação funcional?
* Organizar uma linha de raciocínio
* Entender uma nova maneira de abordar os problenas
* Algumas tecnologias tem como requisito

## O que é Programação Funcional
É um paradigma de programação como a Orientação a Objetos, por exemplo
* Uma maneira de resolver problemas

### Funções
* Pequenas tarefas dentro de uma função
* Abstrair um problema e isolar ele dentro da função
* Não modificar os dados fora dela
* Pequenas e bem específicas no que fazem

### Características principais da função
* Um dado (ou mais) entra em uma função e um novo dado sai dessa função
* Não altera dados
* Não guarda estado [stateless]

### Linguagens funcionais
* JavaScript (multiparadigma)
* PHP (multiparadigma)
* Elixir
* Haskell

### Pontos positivos
* Fácil manutenção
* Fácil uso de testes
  * funções isoladas e consistentes
* Códigos mais confiáveis

## Princípios
* Paradigmas
  * Programação Imperativa
  * Programação Declarativa
* Dados
  * Imutabilidade
  * Stateless
* Funções
  * Independentes
  * Puras
  * Higher-order
  * First-class
  * Composição

# Programação Imperativa vs Declarativa

// impdecl.js
// Imperativa: faça da seguinte forma
let number = 2

function square() {
  return number * number
}

number = square()

// Declarativa: o que fazer e não como fazer
const square = n => n * n

## Programação Imperativa
* O código é pensado e gerado em sequência
* O código é pensado como um passo-a-passo, como uma receita de bolo
* Uma coisa depende da outra
* O estado de um dado é alterado constantemente causando mutações nas variáveis
* Orientação a Objetos é um tipo de paradigma imperativo

## Programação Declarativa
* O código é gerado para fazer algo, não importa como
* O que fazer e não como fazer
* Não há necessidade de um passo-a-passo no código
* Programação funcional é um tipo de paradigma declarativo

# Imutabilidade
* Uma variável não vai variar
* Se você precisar mudar de variável, você não muda, você cria uma nova

// imuta.js

# Stateless
* Não guarda estado
* A função só conhece dados entregues a ela
* A resposta não pode variar

// stateless.js

# Características das Funções
Vamos conhecer algumas características das funções na programação funcional
* Funções independentes
* Funções puras
* First-class functions
* Higher-order functions
* Composição de funções

## Funções Independentes
* Deverá ter ao menos 1 argumento
* Deverá retornar algo
* Nada que acontecer lá dentro afeta o mundo externo
  * dados imutáveis
  * não guardar estado
* Não faremos uso de loops ([for], [while]), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)

// independent.js

## Funções Puras
* Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
* Não deverá sofrer nenhuma interferência do mundo externo a ela
* Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
* Não terá nenhum efeito colateral no seu código
  * não irá modificar nenhum dado
  * não irá guardar nenhum estado

// pure.js

## First-class function
* Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
* A função poderá ser entendida como uma variável

// firstclass.js

## Higher-order function
* Funções que recebem funções como argumentos
* Funções que poderão retornar outras funções

// higherorder.js

## Composição de Funções
* Um encadeamento de funções
* Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorna..

// composing.js

# Conclusão
* Paradigma de Programação
* Linguagens
* Conceitos fundamentais
  * Stateless, Imutabilidade, Função pura, Higher-orders..