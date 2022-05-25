# Por que esse curso?

* Entender o que é um terminal, shell, bash e outros termos
* Estudar comandos utilizados para operar no seu sistema operacional
* Quando você precisar gerenciar um servidor remoto, e não tiver acesso à interface gráfica, você terá que saber alguns comandos básicos para operar o sistema
* Terá maior clareza do que fazemos ao executar comandos via terminal
* Ganhar confiança ao utilizar a telinha preta



# O que é Command Line?

* GUI
  * Graphical User Interface
  * Interface gráfica de usuário
  * Janelas, botões, menus, mouse
  * Ver vídeos, jogar, trabalhar com imagens e edição de vídeo

* CLI
  * Command Line Interface
  * Interface de linha de comando
  * Enviar comandos
  * ver resultados dos comandos
  * Shell ou interpretador é o ambiente
    * Executa os comandos
    * Conversa com o kernel
    * Bash: Bourne-again shell
      * por padrão, existe em ambientes linux

# Sintaxe

    ls -lh /sur/bin

* Command
  * programa que você está rodando
  * obrigatório
* Option(s)
  * mudar o comportamento
  * explicar ao comando como deve funcionar
  * geralmente começa com um traço
  * geralmente uma letra somente
  * a maioria dos comandos oferecem muitas opções
* Argument(s)
  * onde o comando vai operar?
  * caminho do arquivo ou diretórios



# Dicas e Truques

* Tab completion
  * command
  * arguments

* Atalhos
  * setinhas
    * up-down (comandos anteriores, próximos)
  * ctrl
    * setinhas (pula palavras)
    * A (início da linha)
    * E (final da linha)
    * U (limpa a linha)
    * K (remove do cursor até o final da linha)
    * L (clear)

* Conseguindo ajuda
  * man
    * manual de comandos
  * apropos

  pwd
* mostrar o diretório atual
  
  cd
 Change Directory
* mudar o diretório
* .
  * diretório atual
* ..
  * voltar diretórios
* -
  * voltar de onde veio

  ls
 Lista arquivos e pastas
* -l
  * mais informações
* -a
  * all
* -h
  * human
* -R
  * reecursive
* -S
  * ordenar pelo tamanho

  file
* tipo de arquivo
* informaçoes

  stat
* dono
* modificações
* tamanho

  mkdir
 Criar diretórios

  touch
* alterar registro de data e hora dos arquivos e pastas
* criar um ou mais arquivos

  cp
 copiar
* -r

  mv
 mover (renomear)

  rm
 remover (para sempre)
* -r
* -f (force)

  wildcards(curinga)
* * (qualquer e quantos caracteres que estiverem à frente)
  * 1 ou mais caracter
* ?
  * 1 caracter

  find
 encontrar arquivos ou diretórios
find <path> arg [expression]
* -type <diirectory or file>
* -name

  ver conteúdo dos arquivos
* less (arquivo aberto)
* cat (mostrar e fecha o arquivo)

  editar arquivos
* nano (editor de texto)
* vim (editar com comandos)