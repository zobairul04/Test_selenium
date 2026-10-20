import { Builder, By } from "selenium-webdriver";
import { Base } from "./base.js";
console.log("Starting the test...");

class LoginPage extends Base {
    constructor() {
        
        super();

        // login locators
        this.loginlink = By.xpath("//a[@class='ico-login']");
        this.loginemail = By.id("Email");
        this.loginpassword = By.id("Password");
        this.rememberme = By.id("RememberMe");
        this.loginbutton = By.xpath("//input[@class='button-1 login-button']");
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

 

}

export { LoginPage };

