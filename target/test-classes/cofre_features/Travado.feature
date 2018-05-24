#language: pt
Funcionalidade: Quando o cofre estiver ligado e trancado e
  o usuario tentar efetuar as aberturas

  Cenario: Tentar abrir o cofre com senha menor que 6 numeros
    Quando tentar abrir o cofre com senha menor que permitida ex 1
    E confirmar com o botao ok
    Entao visualizo a mensagem o erro na tela "senha errada. Tente novamente"

  Cenario: Tentar abrir o cofre com senha errada
    Quando tentar abrir o cofre digitando uma senha errada 1 2 3 4 5 6
    E apos confirmar com o botao ok
    Entao visualizo a mensagem o erro na tela novamente de "senha errada. Tente novamente"

  Cenario: Tentar abrir o cofre com senha certa
    Quando tentar abrir o cofre digitando uma senha certa 6 5 4 3 2 1 
    E apos confirmar com o botao ok para validar
    Entao visualizo a mensagem de sucesso "senha correta. Cofre aberto"
