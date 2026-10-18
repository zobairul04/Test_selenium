import { Builder, By } from "selenium-webdriver";

console.log("Starting the test...");

class SignupPage {
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

   

}

export { SignupPage };

// shorai niya test a disi


// const base = new Base();

// await base.openBrowser();
// await base.clickRegisterLink();
// await base.selectGender();
// await base.enterFirstName("John");
// await base.enterLastName("Doe");
// await base.enterEmail("joh223451@example.com");
// await base.enterPassword("Password123");
// await base.confirm_password("Password123");
// await base.clickRegisterButton();





// Result দেখার জন্য ৩ সেকেন্ড অপেক্ষা করবে
// await base.driver.sleep(3000);

// await base.closeBrowser();