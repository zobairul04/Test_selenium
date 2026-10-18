import { SignupToLoginPage } from "../pages/SIGNUP-TO-LOGIN.js";

const siglog = new SignupToLoginPage();

await siglog.openBrowser();
await siglog.clickRegisterLink();
await siglog.selectGender();
await siglog.enterFirstName("John");
await siglog.enterLastName("Doe");
await siglog.enterEmail("joh22396@example.com");
await siglog.enterPassword("Password123");
await siglog.confirm_password("Password123");
await siglog.clickRegisterButton();
await siglog.clicklogoutButton();
await siglog.clickLoginLink();
await siglog.enterLoginEmail("joh223451@example.com");
await siglog.enterLoginPassword("Password123");
await siglog.clickRememberMe();
await siglog.clickLoginButton();
