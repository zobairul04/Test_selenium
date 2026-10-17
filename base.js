import { Builder, By } from "selenium-webdriver";

console.log("Starting the test...");

class Base {
    constructor() {
        this.driver = new Builder().forBrowser("chrome").build();
        this.registerlink = By.xpath("//a[@class='ico-register']");
        this.gender = By.id("gender-male");
        this.firstname = By.id("FirstName");    
    }       

    async openBrowser() {
        console.log("Opening browser...");
        await this.driver.get('https://demowebshop.tricentis.com/register/');

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

    async closeBrowser() {
        console.log("Closing browser...");
        await this.driver.quit();
    }

}

const base = new Base();

await base.openBrowser();
await base.clickRegisterLink();
await base.selectGender();
await base.enterFirstName("John");

// Result দেখার জন্য ৩ সেকেন্ড অপেক্ষা করবে
await base.driver.sleep(3000);

await base.closeBrowser();