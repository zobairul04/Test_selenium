import { Builder, By } from "selenium-webdriver";

console.log("Starting the test...");

class Base {
    constructor() {
        this.driver = new Builder().forBrowser("chrome").build();
       
    }       

    async openBrowser() {
        console.log("Opening browser...");
        await this.driver.get('https://demowebshop.tricentis.com/register/');
        await this.driver.manage().window().maximize(); 

    }

   

     async closeBrowser() {
         console.log("Closing browser...");
        await this.driver.quit();
    }

}

export { Base };

