package stepsCumcumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber"}, 
                 features="src/test/resources/cofre_features")
public class CofreTest {
   
    @Test
    public void hello() {
    
    }
}