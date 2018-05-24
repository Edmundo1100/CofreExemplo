package stepsCumcumber;

import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 *
 * @author Edmundo
 */
public class TravadoSteps {

    SensorPorta sensorMock = mock(SensorPorta.class);
    Memoria memoriaMock = mock(Memoria.class);
    CofrePM cofrePM;

    @Quando("^tentar abrir o cofre com senha menor que permitida ex (\\d+)$")
    public void tentar_abrir_o_cofre_com_senha_menor_que_permitida_ex(int senha) throws Exception {
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.TRUE);
        when(memoriaMock.getSenha())
                .thenReturn("123456");
        cofrePM.pressButton(senha);
    }

    @Quando("^confirmar com o botao ok$")
    public void confirmar_com_o_botao_ok() throws Exception {
        cofrePM.ok();
    }

    @Entao("^visualizo a mensagem o erro na tela \"([^\"]*)\"$")
    public void visualizo_a_mensagem_o_erro_na_tela(String arg1) throws Exception {
        assertEquals("senha errada. Tente novamente", cofrePM.getDisplay());
    }

    @Quando("^tentar abrir o cofre digitando uma senha errada (\\d+) (\\d+) (\\d+) (\\d+) (\\d+) (\\d+)$")
    public void tentar_abrir_o_cofre_digitando_uma_senha_errada(int arg1, int arg2, int arg3, int arg4, int arg5, int arg6) throws Exception {
        cofrePM = new CofrePM(sensorMock, memoriaMock);
        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.TRUE);
        when(memoriaMock.getSenha())
                .thenReturn("654321");
        cofrePM.pressButton(arg1);
        cofrePM.pressButton(arg2);
        cofrePM.pressButton(arg3);
        cofrePM.pressButton(arg4);
        cofrePM.pressButton(arg5);
        cofrePM.pressButton(arg6);
    }

    @Quando("^apos confirmar com o botao ok$")
    public void apos_confirmar_com_o_botao_ok() throws Exception {
        cofrePM.ok();
    }

    @Entao("^visualizo a mensagem o erro na tela novamente de \"([^\"]*)\"$")
    public void visualizo_a_mensagem_o_erro_na_tela_novamente_de(String arg1) throws Exception {
        assertEquals("senha errada. Tente novamente", cofrePM.getDisplay());
    }
    
    @Quando("^tentar abrir o cofre digitando uma senha certa (\\d+) (\\d+) (\\d+) (\\d+) (\\d+) (\\d+)$")
public void tentar_abrir_o_cofre_digitando_uma_senha_certa(int arg1, int arg2, int arg3, int arg4, int arg5, int arg6) throws Exception {
    cofrePM = new CofrePM(sensorMock, memoriaMock);
        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.TRUE);
        when(memoriaMock.getSenha())
                .thenReturn("654321");
        cofrePM.pressButton(arg1);
        cofrePM.pressButton(arg2);
        cofrePM.pressButton(arg3);
        cofrePM.pressButton(arg4);
        cofrePM.pressButton(arg5);
        cofrePM.pressButton(arg6);
}

@Quando("^apos confirmar com o botao ok para validar$")
public void apos_confirmar_com_o_botao_ok_para_validar() throws Exception {
    cofrePM.ok();
}

@Entao("^visualizo a mensagem de sucesso \"([^\"]*)\"$")
public void visualizo_a_mensagem_de_sucesso(String arg1) throws Exception {
   assertEquals("senha correta. Cofre aberto", cofrePM.getDisplay());
}
}
