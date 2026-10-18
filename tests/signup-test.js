import { SignupPage } from "../pages/SIGNUP.js";

const sigp = new SignupPage();

await sigp.openBrowser();
await sigp.clickRegisterLink();
await sigp.selectGender();
await sigp.enterFirstName("John");
await sigp.enterLastName("Doe");
await sigp.enterEmail("joh223451456@example.com");
await sigp.enterPassword("Password123");
await sigp.confirm_password("Password123");
await sigp.clickRegisterButton();