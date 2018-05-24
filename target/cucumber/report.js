$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/cofre_features/Destravado.feature");
formatter.feature({
  "name": "inicializacao",
  "description": "  Quando o usuario ligar o cofre o mesmo deve iniciar com a porta aberta",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Iniciar",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "quando usuario ligar o cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "DestravadoSteps.quando_usuario_ligar_o_cofre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a mensagem \"Entre com a senha 6 digitos\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "DestravadoSteps.visualizo_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cofre abre",
  "keyword": "E "
});
formatter.match({
  "location": "DestravadoSteps.cofre_abre()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Limpar display",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "quando usuario apertar limpar",
  "keyword": "Quando "
});
formatter.match({
  "location": "DestravadoSteps.quando_usuario_apertar_limpar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo no display \"\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "DestravadoSteps.visualizo_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Digitar algo com a porta aberta",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "quando usuario apertar os botoes",
  "keyword": "Quando "
});
formatter.match({
  "location": "DestravadoSteps.quando_usuario_apertar_os_botoes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu visualizo no display \"Feche a porta antes de digitar a senha\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "DestravadoSteps.eu_visualizo_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Digitar algo com a porta fechada",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "quando usuario apertar o numero 0",
  "keyword": "Quando "
});
formatter.match({
  "location": "DestravadoSteps.quando_usuario_apertar_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu visualizo no display o numero 0",
  "keyword": "Entao "
});
formatter.match({
  "location": "DestravadoSteps.eu_visualizo_no_display_o_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Digitar uma senha valida com a porta fechada",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "quando usuario digitar a senha com valida entre os numeros",
  "rows": [
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    },
    {
      "cells": [
        "6"
      ]
    }
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "DestravadoSteps.quando_usuario_digitar_a_senha_com_valida_entre_os_numeros(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apertar o botao ok",
  "keyword": "E "
});
formatter.match({
  "location": "DestravadoSteps.apertar_o_botao_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salva senha",
  "keyword": "Entao "
});
formatter.match({
  "location": "DestravadoSteps.salva_senha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cofre tranca",
  "keyword": "E "
});
formatter.match({
  "location": "DestravadoSteps.cofre_tranca()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu visualizo no display apos trancar \"Senha salva. Cofre trancado\"",
  "keyword": "E "
});
formatter.match({
  "location": "DestravadoSteps.eu_visualizo_no_display_apos_trancar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Digitar uma senha com menos de 6 digitos com a porta fechada",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "quando usuario digitar a senha faltando digitos com os numeros",
  "rows": [
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    }
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "DestravadoSteps.quando_usuario_digitar_a_senha_faltando_digitos_com_os_numeros(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apertar o botao ok para gravar",
  "keyword": "E "
});
formatter.match({
  "location": "DestravadoSteps.apertar_o_botao_ok_para_gravar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu visualizo no display apos o erro \"senha precisa de 6 digitos. Tente novamente\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "DestravadoSteps.eu_visualizo_no_display_apos_o_erro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Usuario digita uma senha valida abre o cofre e tenta digitar a senha",
  "description": "    novamente com  porta aberta",
  "keyword": "Cenario"
});
formatter.step({
  "name": "quando usuario digitar a senha valida",
  "rows": [
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    },
    {
      "cells": [
        "6"
      ]
    }
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "DestravadoSteps.quando_usuario_digitar_a_senha_valida(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apertar o botao ok para tentar abrir",
  "keyword": "E "
});
formatter.match({
  "location": "DestravadoSteps.apertar_o_botao_ok_para_tentar_abrir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualiza a mensagem \"senha correta. Cofre aberto\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "DestravadoSteps.visualiza_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "destrava o cofre",
  "keyword": "E "
});
formatter.match({
  "location": "DestravadoSteps.destrava_o_cofre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "quando tentar digitar novamente a senha com a porta aberta",
  "rows": [
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    },
    {
      "cells": [
        "6"
      ]
    }
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "DestravadoSteps.quando_tentar_digitar_novamente_a_senha_com_a_porta_aberta(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualiza a mensagem de falha  \"Feche a porta antes de digitar a senha\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "DestravadoSteps.visualiza_a_mensagem_de_falha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/cofre_features/Travado.feature");
formatter.feature({
  "name": "Quando o cofre estiver ligado e trancado e",
  "description": "  o usuario tentar efetuar as aberturas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Tentar abrir o cofre com senha menor que 6 numeros",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "tentar abrir o cofre com senha menor que permitida ex 1",
  "keyword": "Quando "
});
formatter.match({
  "location": "TravadoSteps.tentar_abrir_o_cofre_com_senha_menor_que_permitida_ex(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar com o botao ok",
  "keyword": "E "
});
formatter.match({
  "location": "TravadoSteps.confirmar_com_o_botao_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a mensagem o erro na tela \"senha errada. Tente novamente\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "TravadoSteps.visualizo_a_mensagem_o_erro_na_tela(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar abrir o cofre com senha errada",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "tentar abrir o cofre digitando uma senha errada 1 2 3 4 5 6",
  "keyword": "Quando "
});
formatter.match({
  "location": "TravadoSteps.tentar_abrir_o_cofre_digitando_uma_senha_errada(int,int,int,int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apos confirmar com o botao ok",
  "keyword": "E "
});
formatter.match({
  "location": "TravadoSteps.apos_confirmar_com_o_botao_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a mensagem o erro na tela novamente de \"senha errada. Tente novamente\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "TravadoSteps.visualizo_a_mensagem_o_erro_na_tela_novamente_de(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar abrir o cofre com senha certa",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "tentar abrir o cofre digitando uma senha certa 6 5 4 3 2 1",
  "keyword": "Quando "
});
formatter.match({
  "location": "TravadoSteps.tentar_abrir_o_cofre_digitando_uma_senha_certa(int,int,int,int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apos confirmar com o botao ok para validar",
  "keyword": "E "
});
formatter.match({
  "location": "TravadoSteps.apos_confirmar_com_o_botao_ok_para_validar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a mensagem de sucesso \"senha correta. Cofre aberto\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "TravadoSteps.visualizo_a_mensagem_de_sucesso(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/cofre_features/ValidacaoHelper.feature");
formatter.feature({
  "name": "Validação de entrada de dados",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Quando o usuario digitar alguma senha o sistema deve validar se o que",
  "description": "    foi digitado possui 6 digitos",
  "keyword": "Cenario"
});
formatter.step({
  "name": "digitar as senha nula \"\" nao eh valida",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidacaoSteps.digitar_as_senha_nula_nao_eh_valida(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digitar as senha apenas 1 nao eh valida",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidacaoSteps.digitar_as_senha_apenas_nao_eh_valida(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digitar as senha com 12345 nao eh valida",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidacaoSteps.digitar_as_senha_com_nao_eh_valida(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digitar a senha certa 123456 eh valida",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidacaoSteps.digitar_a_senha_certa_eh_valida(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "só deve ser aceito senha numerica",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "digitar as senha nula \"\" nao eh numero",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidacaoSteps.digitar_as_senha_nula_nao_eh_numero(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digitar as senha apenas \"1*\" nao eh numero",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidacaoSteps.digitar_as_senha_apenas_nao_eh_numero(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digitar as senha com \"12345a\" nao eh numero",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidacaoSteps.digitar_as_senha_com_nao_eh_numero(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digitar a senha certa \"123456\" eh numero",
  "keyword": "Quando "
});
formatter.match({
  "location": "ValidacaoSteps.digitar_a_senha_certa_eh_numero(String)"
});
formatter.result({
  "status": "passed"
});
});