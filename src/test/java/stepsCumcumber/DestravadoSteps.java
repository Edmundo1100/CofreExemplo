package stepsCumcumber;

import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.DataTable;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;
import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 *
 * @author Edmundo
 */
public class DestravadoSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM;

    @Quando("^quando usuario ligar o cofre$")
    public void quando_usuario_ligar_o_cofre() {
        cofrePM = new CofrePM(sensorMock, memoriaMock);
    }

    @Entao("^visualizo a mensagem \"([^\"]*)\"$")
    public void visualizo_a_mensagem(String arg1) {
        assertEquals("Entre com a senha 6 digitos", cofrePM.getDisplay());
    }

    @Entao("^cofre abre$")
    public void cofre_abre() throws Exception {
        verify(sensorMock).destravar();
    }

    @Quando("^quando usuario apertar limpar$")
    public void quando_usuario_apertar_limpar() {
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        cofrePM.clear();
    }

    @Entao("^visualizo no display \"([^\"]*)\"$")
    public void visualizo_no_display(String arg1) {
        assertEquals("", cofrePM.getDisplay());
    }

    @Quando("^quando usuario apertar os botoes$")
    public void quando_usuario_apertar_os_botoes() {
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        for (int botao = 0; botao <= 9; botao++) {
            cofrePM.pressButton(botao);
        }
    }

    @Entao("^eu visualizo no display \"([^\"]*)\"$")
    public void eu_visualizo_no_display(String arg1) {
        assertEquals("Feche a porta antes de digitar a senha", cofrePM.getDisplay());
    }

    @Quando("^quando usuario apertar o numero (\\d+)$")
    public void quando_usuario_apertar_o_numero(int arg1) throws Exception {
        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        cofrePM.pressButton(arg1);
    }

    @Entao("^eu visualizo no display o numero (\\d+)$")
    public void eu_visualizo_no_display_o_numero(int arg1) throws Exception {
        assertEquals("0", cofrePM.getDisplay());
    }

    @Quando("^quando usuario digitar a senha com valida entre os numeros$")
    public void quando_usuario_digitar_a_senha_com_valida_entre_os_numeros(DataTable numeros) throws Exception {
        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        for (int botao = 0; botao < 6; botao++) {
            int num = (int) numeros.asList(int.class).get(botao);
            cofrePM.pressButton(num);
        }
    }

    @Quando("^apertar o botao ok$")
    public void apertar_o_botao_ok() throws Exception {
        cofrePM.ok();
    }

    @Entao("^salva senha$")
    public void salva_senha() throws Exception {
        verify(memoriaMock).salvarSenha("123456");
    }

    @Entao("^cofre tranca$")
    public void cofre_tranca() throws Exception {
        verify(sensorMock).travar();
    }

    @Entao("^eu visualizo no display apos trancar \"([^\"]*)\"$")
    public void eu_visualizo_no_display_apos_trancar(String arg1) throws Exception {
        assertEquals("Senha salva. Cofre trancado", cofrePM.getDisplay());
    }

    @Quando("^quando usuario digitar a senha faltando digitos com os numeros$")
    public void quando_usuario_digitar_a_senha_faltando_digitos_com_os_numeros(DataTable numeros) throws Exception {
        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        for (int botao = 0; botao < 5; botao++) {
            int num = (int) numeros.asList(int.class).get(botao);
            cofrePM.pressButton(num);
        }
    }

    @Quando("^apertar o botao ok para gravar$")
    public void apertar_o_botao_ok_para_gravar() throws Exception {
        cofrePM.ok();
    }

    @Entao("^eu visualizo no display apos o erro \"([^\"]*)\"$")
    public void eu_visualizo_no_display_apos_o_erro(String arg1) throws Exception {
        assertEquals("senha precisa de 6 digitos. Tente novamente", cofrePM.getDisplay());
    }

    @Quando("^quando usuario digitar a senha valida$")
    public void quando_usuario_digitar_a_senha_valida(DataTable numeros) throws Exception {
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.TRUE);
        when(memoriaMock.getSenha())
                .thenReturn("123456");

        for (int botao = 0; botao < 6; botao++) {
            int num = (int) numeros.asList(int.class).get(botao);
            cofrePM.pressButton(num);
        }

    }

    @Quando("^apertar o botao ok para tentar abrir$")
    public void apertar_o_botao_ok_para_tentar_abrir() throws Exception {
        cofrePM.ok();
    }

    @Entao("^visualiza a mensagem \"([^\"]*)\"$")
    public void visualiza_a_mensagem(String arg1) throws Exception {
        assertEquals("senha correta. Cofre aberto", cofrePM.getDisplay());
    }

    @Entao("^destrava o cofre$")
    public void destrava_o_cofre() throws Exception {
        //verify(sensorMock).destravar();
    }

    @Quando("^quando tentar digitar novamente a senha com a porta aberta$")
    public void quando_tentar_digitar_novamente_a_senha_com_a_porta_aberta(DataTable numeros) throws Exception {
        when(sensorMock.fechada())
                .thenReturn(Boolean.FALSE);
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        for (int botao = 0; botao < 1; botao++) {
            int num = (int) numeros.asList(int.class).get(botao);
            cofrePM.pressButton(num);
        }
    }

    @Entao("^visualiza a mensagem de falha  \"([^\"]*)\"$")
    public void visualiza_a_mensagem_de_falha(String arg1) throws Exception {
        assertEquals("Feche a porta antes de digitar a senha", cofrePM.getDisplay());
    }
}
