import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Before;
import org.junit.Test;

public class TesteLogin {
	private WebDriver driver;
	
	@Before
	public void ConfigurarTeste() {
		//Abrir o chrome
		System.setProperty("webdriver.chrome.driver", "C:\\Arquivos de Programas\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:4200/");
	}
	
	@Test
	public void TestarLogin() {
		driver.findElement(By.id("campo-email")).sendKeys("felipe@email.com");
		driver.findElement(By.id("password")).sendKeys("senha123");
		driver.findElement(By.id("botao-enviar")).click();
	}
}
