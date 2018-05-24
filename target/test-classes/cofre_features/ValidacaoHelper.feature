#language: pt
Funcionalidade: Validação de entrada de dados

  Cenario: Quando o usuario digitar alguma senha o sistema deve validar se o que
    foi digitado possui 6 digitos

    Quando digitar as senha nula "" nao eh valida
    Quando digitar as senha apenas 1 nao eh valida
    Quando digitar as senha com 12345 nao eh valida
    Quando digitar a senha certa 123456 eh valida

  Cenario: só deve ser aceito senha numerica
    Quando digitar as senha nula "" nao eh numero
    Quando digitar as senha apenas "1*" nao eh numero
    Quando digitar as senha com "12345a" nao eh numero
    Quando digitar a senha certa "123456" eh numero
