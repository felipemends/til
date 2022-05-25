# NodeJS

O que é?
  JS Runtime Enviroment: ambiente completo que conversa com o SO e, por consequência, com o hardware

Não é um framework: "cheio de opinião"
Não é uma linguagem: no caso a linguagem usada é o JS

# V8

* interpretador de JS para linguagem de máquina
* criado em C++
* baseado nas features do JS
* focado para Chrome mas tem todo o cuidado de não quebrar o Node
* não possui a DOM, console ou File System

# Como funciona?
Vamos ver o motivo do NodeJS ser tão rápido

No Apache, cada request ocupa uma thread até o fim da tarefa, bloqueando a thread. Já o Node utiliza o Event Loop, possibilitando request assíncronas. O Node é single-threaded, non-blocking e asynchronous.

# História

* Ryan Dahl em 2009
* NPM Versão 1 em 2011 https://npmjs.org
  * compartilhamento de bibliotecas
  * grandes mudanças na anutenção e compartilhamento de códigos
* 2015 Node.JS Foundation
  * incluiu: IBM, Microsoft, PayPal e Groupon
  * passou a fazer parte do https://openjsf.org
* https://github.com/nodejs/node
* comunidade ativa!