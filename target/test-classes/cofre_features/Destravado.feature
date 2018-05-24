#language: pt
Funcionalidade: inicializacao
  Quando o usuario ligar o cofre o mesmo deve iniciar com a porta aberta

  Cenario: Iniciar
    Quando quando usuario ligar o cofre
    Entao visualizo a mensagem "Entre com a senha 6 digitos"
    E cofre abre

  Cenario: Limpar display
    Quando quando usuario apertar limpar
    Entao visualizo no display ""

  Cenario: Digitar algo com a porta aberta
    Quando quando usuario apertar os botoes
    Entao eu visualizo no display "Feche a porta antes de digitar a senha"

  Cenario: Digitar algo com a porta fechada
    Quando quando usuario apertar o numero 0
    Entao eu visualizo no display o numero 0

  Cenario: Digitar uma senha valida com a porta fechada
    Quando quando usuario digitar a senha com valida entre os numeros
      | 1 |
      | 2 |
      | 3 |
      | 4 |
      | 5 |
      | 6 |
    E apertar o botao ok
    Entao salva senha
    E cofre tranca
    E eu visualizo no display apos trancar "Senha salva. Cofre trancado"

  Cenario: Digitar uma senha com menos de 6 digitos com a porta fechada
    Quando quando usuario digitar a senha faltando digitos com os numeros
      | 1 |
      | 2 |
      | 3 |
      | 4 |
      | 5 |
    E apertar o botao ok para gravar
    Entao eu visualizo no display apos o erro "senha precisa de 6 digitos. Tente novamente"

  Cenario: Usuario digita uma senha valida abre o cofre e tenta digitar a senha
    novamente com  porta aberta

    Quando quando usuario digitar a senha valida
      | 1 |
      | 2 |
      | 3 |
      | 4 |
      | 5 |
      | 6 |
    E apertar o botao ok para tentar abrir
    Entao visualiza a mensagem "senha correta. Cofre aberto"
    E destrava o cofre
    Quando quando tentar digitar novamente a senha com a porta aberta
      | 1 |
      | 2 |
      | 3 |
      | 4 |
      | 5 |
      | 6 |
    Entao visualiza a mensagem de falha  "Feche a porta antes de digitar a senha"
