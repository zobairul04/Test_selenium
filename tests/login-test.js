// import { LoginPage } from "../pages/LOGIN.js";

// const logp = new LoginPage();

// await logp.openBrowser();
// await logp.clickLoginLink();
// await logp.enterLoginEmail("joh223451@example.com");
// await logp.enterLoginPassword("Password123");
// await logp.clickRememberMe();
// await logp.clickLoginButton();


import { describe, it } from "mocha";
import { LoginPage } from "../pages/LOGIN.js";

describe("Login Test", function () {
    this.timeout(30000);

    it("should complete the login steps", async function () {
        const logp = new LoginPage();

        await logp.openBrowser();
        await logp.clickLoginLink();
        await logp.enterLoginEmail("joh223451@example.com");
        await logp.enterLoginPassword("Password123");
        await logp.clickRememberMe();
        await logp.clickLoginButton();
    });
});