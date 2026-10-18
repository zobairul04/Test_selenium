import { Builder, By } from "selenium-webdriver";

console.log("Starting the test...");

class LoginPage {
    constructor() {
        this.driver = new Builder().forBrowser("chrome").build();


        // login locators
        this.loginlink = By.xpath("//a[@class='ico-login']");
        this.loginemail = By.id("Email");
        this.loginpassword = By.id("Password");
        this.rememberme = By.id("RememberMe");
        this.loginbutton = By.xpath("//input[@class='button-1 login-button']");
    }       

    async openBrowser() {
        console.log("Opening browser...");
        await this.driver.get('https://demowebshop.tricentis.com/register/');
        await this.driver.manage().window().maximize(); 

    }

   

    async clickLoginLink() {
        console.log("Clicking on the login link...");
        await this.driver.findElement(this.loginlink).click();
    }   

    async enterLoginEmail(email) {
        console.log("Entering login email...");
        await this.driver.findElement(this.loginemail).sendKeys(email);
    }

    async enterLoginPassword(password) {
        console.log("Entering login password...");
        await this.driver.findElement(this.loginpassword).sendKeys(password);
    }

    async clickRememberMe() {
        console.log("Clicking remember me checkbox...");
        await this.driver.findElement(this.rememberme).click();
    }

    async clickLoginButton() {
        console.log("Clicking login button...");
        await this.driver.findElement(this.loginbutton).click();
    }

    // async closeBrowser() {
    //     console.log("Closing browser...");
    //     await this.driver.quit();
    // }

}

export { LoginPage };

// shorai niya test a disi


// const base = new Base();
// await base.openBrowser();



// await base.clickLoginLink();
// await base.enterLoginEmail("joh223451@example.com");
// await base.enterLoginPassword("Password123");
// await base.clickRememberMe();
// await base.clickLoginButton();




// Result দেখার জন্য ৩ সেকেন্ড অপেক্ষা করবে
// await base.driver.sleep(3000);

// await base.closeBrowser();