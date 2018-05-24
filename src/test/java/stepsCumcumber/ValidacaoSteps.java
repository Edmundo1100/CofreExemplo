package stepsCumcumber;

import static cofre.ValidacaoHelper.*;
import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cofre.ValidacaoHelper;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 *
 * @author Edmundo
 */
public class ValidacaoSteps {

    @Quando("^digitar as senha nula \"([^\"]*)\" nao eh valida$")
    public void digitar_as_senha_nula_nao_eh_valida(String arg1) throws Exception {
        assertEquals(false, ehSenhaValida(arg1));
    }

    @Quando("^digitar as senha apenas (\\d+) nao eh valida$")
    public void digitar_as_senha_apenas_nao_eh_valida(String arg1) throws Exception {
        assertEquals(false, ehSenhaValida(arg1));
    }

    @Quando("^digitar as senha com (\\d+) nao eh valida$")
    public void digitar_as_senha_com_nao_eh_valida(String arg1) throws Exception {
        assertEquals(false, ehSenhaValida(arg1));
    }

    @Quando("^digitar a senha certa (\\d+) eh valida$")
    public void digitar_a_senha_certa_eh_valida(String arg1) throws Exception {
        assertEquals(true, ehSenhaValida(arg1));
    }

    @Quando("^digitar as senha nula \"([^\"]*)\" nao eh numero$")
    public void digitar_as_senha_nula_nao_eh_numero(String arg1) throws Exception {
        assertEquals(false, ehNumero(arg1));
    }

    @Quando("^digitar as senha apenas \"([^\"]*)\" nao eh numero$")
    public void digitar_as_senha_apenas_nao_eh_numero(String arg1) throws Exception {
        assertEquals(false, ehNumero(arg1));
    }

    @Quando("^digitar as senha com \"([^\"]*)\" nao eh numero$")
    public void digitar_as_senha_com_nao_eh_numero(String arg1) throws Exception {
        assertEquals(false, ehNumero(arg1));
    }

    @Quando("^digitar a senha certa \"([^\"]*)\" eh numero$")
    public void digitar_a_senha_certa_eh_numero(String arg1) throws Exception {
        assertEquals(true, ehNumero(arg1));
    }
}
