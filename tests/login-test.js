import { LoginPage } from "../pages/LOGIN.js";

const logp = new LoginPage();

await logp.openBrowser();
await logp.clickLoginLink();
await logp.enterLoginEmail("joh223451@example.com");
await logp.enterLoginPassword("Password123");
await logp.clickRememberMe();
await logp.clickLoginButton();
