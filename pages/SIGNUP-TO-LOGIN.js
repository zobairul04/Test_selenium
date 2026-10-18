import { Builder, By } from "selenium-webdriver";

console.log("Starting the test...");

class SignupToLoginPage {
    constructor() {
        this.driver = new Builder().forBrowser("chrome").build();
        this.registerlink = By.xpath("//a[@class='ico-register']");
        this.gender = By.id("gender-male");
        this.firstname = By.id("FirstName"); 
        this.lastname = By.id("LastName");
        this.email = By.id("Email");
        this.password = By.id("Password");
        this.confirmpassword = By.id("ConfirmPassword");
        this.registerbutton = By.id("register-button");  
        this.logoutbutton = By.className("ico-logout"); 

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

    async clickRegisterLink() {
        console.log("Clicking on the register link...");
        await this.driver.findElement(this.registerlink).click();
    }

    async selectGender() {
        console.log("Selecting gender...");
        await this.driver.findElement(this.gender).click();
    }

    async enterFirstName(firstName) {
        console.log("Entering first name...");
        await this.driver.findElement(this.firstname).sendKeys(firstName);
    }

    async enterLastName(lastName) {
        console.log("Entering last name...");
        await this.driver.findElement(this.lastname).sendKeys(lastName);
    }

    async enterEmail(email) {
        console.log("Entering email...");
        await this.driver.findElement(this.email).sendKeys(email);
    }

    async enterPassword(password) {
        console.log("Entering password...");
        await this.driver.findElement(this.password).sendKeys(password);
    }

    async confirm_password(confirmpassword) {
        console.log("Confirming password...");
        await this.driver.findElement(this.confirmpassword).sendKeys(confirmpassword);
    }

    async clickRegisterButton() {
        console.log("Clicking register button...");
        await this.driver.findElement(this.registerbutton).click();
    }

    async clicklogoutButton() {
        console.log("Clicking logout button...");
        await this.driver.findElement(this.logoutbutton).click();
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

export { SignupToLoginPage };

// sob test a sorai disi


// const base = new SignupToLoginPage();

// await base.openBrowser();
// await base.clickRegisterLink();
// await base.selectGender();
// await base.enterFirstName("John");
// await base.enterLastName("Doe");
// await base.enterEmail("joh223451@example.com");
// await base.enterPassword("Password123");
// await base.confirm_password("Password123");
// await base.clickRegisterButton();
// await base.clicklogoutButton();
// await base.clickLoginLink();
// await base.enterLoginEmail("joh223451@example.com");
// await base.enterLoginPassword("Password123");
// await base.clickRememberMe();
// await base.clickLoginButton();




// Result দেখার জন্য ৩ সেকেন্ড অপেক্ষা করবে

// await base.driver.sleep(3000);

// await base.closeBrowser();