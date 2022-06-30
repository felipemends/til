# Estrutura de Dados

## Objetivo

* Apresentação e modelagem de estruturas
* Conceitos fundamentais
* JavaScript

## Por que JavaScript?

* Linguagem da WEB
* Linguagem de alto nível
* Foco no entendimento e não na construção

## Por que estudar estrutura de dados?

* Organizar os dados da aplicação
* Entender estruturas para melhor tomada de decisão
* Escrever melhores algoritmos
* Eficiência
* Algumas empresas usam como requisito

Alguns desafios diários de uso de dados são:
* Entendimento de como estão nossos dados na aplicação
* Criar listas (ordenadas e não ordenadas)
* Repetição ou não de dados dentro da estrutura
* Organizar os dados pelo par identificador + valor

## O que é estrutura de dados?

Uma maneira de organizar e ordenar informações como textos, números, booleanos, funções, etc e registrá-los na memória do computador.

* Organizar dados (informações)
* Como estão registrados na memória
  * Array? Object?

## Gerenciamento de dados

Estrutura de dados tem a ver com a gestão das informações da aplicação.

Para esse gerenciamento, podemos dividir em 3 etapas:
1. Modelar a estrutura
2. Dar vida à estrutura (instanciar essa estrutura)
3. Criar as funcionalidades dessa estrutura
  * Exemplo: inserir, excluir, buscar, exibir, contar..

# Array

Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação.

Uma das estruturas mais básica, simples de criar e utilizar.

## Características
* Acesso pelo index
* Respeita a ordem de inserção dos elementos
* Aceita valores duplicados
* Dependendo do tamanho do Array, para encontrar e/ou deletar um elemento, será necessário um uso maior de performance.

## Arrays no JavaScript
* São dinâmicos
* Você poderá ter dados de diferentes tipos misturados dentro de um Array. String, numbers, booleans objetos, funções e até outros arrays.
* Existem muitos métodos já implementados
  * push(), pop(), find(), filter() entre outros
  * find e splice são pouco eficientes em arrays muito grandes. Find tem que procurar em ordem pelo array e Splice tem que reorganizar a indexação

## Array no Código

Métodos fundamentais
* push(): adicionar um elemento à pilha
* pop(): remover o elemento do topo da pilha
* peek(): obter o elemento do topo da pilha
Arquivo array.js

## Matrix
Matriz ou Vetor multidimencional. Significa que é um Array, dentro de outro array. Poderemos ter muitos níveis.

# Stack
Tradução de Stack é pilha. Como uma pilha de livros.
* linear, um após o outro
* o último a entrar na pilha é o primeiro a sair
  * LIFO: Last In First Out

## Stack no código

Arquivo stack.js

# Queue

Tradução de Queue é fila. Como uma fila de uma loja ou restaurante.
* Linear
* O primeiro a entrar na fila é o primeiro a sair
  * FIFO: First In First Out
* Front (frente) é a referência do primeiro elemento a entrar na fila
* Back (fundo) é a referência do último elemento a entrar na fila

## Queue no código

Métodos fundamentais
* enqueue(): adicionar um elemento ao final da fila
* dequeue(): remover o primeiro elemento a entrar na fila

Outros métodos poderão ser implementados como size() para mostrar o tamanho da fila ou front() para mostrar qual é o primeiro elemento da fila, dentre outros.
Arquivo queue.js

# Visão Geral

* Usamos ED para gerenciar os dados, as informações da nossa aplicação
* Organizar, ordenar, buscar, são algumas funcionalidades básicas
* Melhorar a escrita de algoritmos
* Melhorar a eficiência dos nossos aplicativos
* Existem muitas estruturas a serem estudadas.

Estrutura de daos poderá ser um assunto um pouco desafiador, especialmente para quem está no começo da jornada. Mas como qualquer outra habilidade, com o passar do tempo e prática diária, através de desafios da carreira, poderemos entender cada vez melhor.