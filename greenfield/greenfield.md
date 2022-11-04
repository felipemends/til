<div style="width: 100%; display: flex; justify-content: center;">
  <div align="center" style="width: 125px; margin-bottom: 20px">
    <img src="https://cdn-icons-png.flaticon.com/512/809/809957.png">
  </div>
</div>

## Introdução

A Greenfield Health precisa disponibilizar um serviço para um hospital em que médicos possam
cadastrar prescrições médicas para pacientes que realizam uma consulta e necessitam de
uma receita com os devidos medicamentos. 

## Requisitos Técnicos

Na reunião técnica sobre o sistema, ficou decidido que o hospital iria se integrar com o sistema da Greenfield Health via API REST. A aplicação deve ser construída com as seguintes tecnologias:
- Backend: Java com Spring
- Frontend: JS com React
- Banco de dados: SQL com Postgres

Foram definidos os seguintes requisitos para o **backend**:

- Testes unitários com JUnit com cobertura acima de 60% sobre as funcionalidades disponibilizadas
- Documentação da API com Swagger

Foram definidos os seguintes requisitos para o **frontend**:
- Utilização de componentes baseados em função
- Utilização dos hooks useState e useEffect
- Utilização de alguma biblioteca de design (Bootstrap, PrimeFaces, MUI, Tailwind, etc)

## Requisitos Não Técnicos

Alguns requisitos não técnicos foram pré-estabelecidos, como por exemplo:

### Médico
- Deve ser possível cadastrar um médico
- Deve ser possível alterar um médico
- Deve ser possível obter todos os médicos
- Deve ser possível obter um médico
- Deve ser possível deletar um médico, e em consequência, deletar as respectivas prescrições médicas em cascata
- Dever ser possível autenticar um médico

### Paciente
- Deve ser possível cadastrar um paciente
- Deve ser possível alterar um paciente
- Deve ser possível obter todos os pacientes
- Deve ser possível obter um paciente
- Deve ser possível deletar um paciente, e em consequência, deletar as respectivas prescrições médicas em cascata

### Prescrição
- Deve ser possível cadastrar uma prescrição médica
- Deve ser possível alterar uma prescrição médica
- Deve ser possível obter todas as prescrições médicas de um médico
- Deve ser possível obter todas as prescrições médicas de um paciente
- Deve ser possível obter uma prescrição médica
- Deve ser possível deletar uma prescrição médica
- Uma prescrição médica não pode ser consultada, alterada ou deletada por um médico que não a cadastrou, apenas o médico que emitiu a receita pode realizar essas ações

## Modelagem

Com os requisitos técnicos pré-estabelecidos a Greenfield Health poderá seguir com o planejamento e desenvolvimento de acordo com o seguinte modelo de dados:

- Médico 
  - CPF
  - Email
  - Nome
  - Data de nascimento
  - CRM
  - Estado de registro do CRM
  - Sexo
  - Senha
  - Confirmação da Senha
- Paciente
  - CPF
  - Nome
  - Data de nascimento
  - Sexo
- Medicamentos
  - Descrição
  - Quantidade
  - Dosagem
  - Frequência de uso
- Prescrição médica 
  - Médico
  - Paciente
  - Medicamentos

## O Desafio

Sabendo disto, você foi contratado para que possa seguir com o desenvolvimento das funcionalidades planejadas para a primeira entrega da Greenfield Health ao hospital contratante
do serviço. 

Crie uma aplicação com os requisitos técnicos levantados pela equipe técnica do hospital. Você pode utilizar quaisquer outras bibliotecas que desejar. Use a criatividade, buscando sempre respeitar os requisitos e as melhores práticas de desenvolvimento.

Itens opcionais:
- Backend:
  - Docker
  - JWT
  - DTO
  - Lombok
  - Ciframento da senha
  - Tratamento de erros global
  - Testes de integração
  - Arquitetura Hexagonal ou DDD
  - Hospedagem da API
- Frontend:
  - useContext
  - React Hook Form
  - Biblioteca de gerencialmento de estado (Recoil, Redux, MobX, etc)
  - Vite
  - Storybook
  - Hospedagem do sistema

## Entrega

Após o término do projeto, enviar arquivo compactado para:
brunno.oliver7@gmail.com

Faça um bom teste e boa sorte!
