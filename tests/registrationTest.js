import { ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import loginpage from '../pages/LoginPage';
import customerpage from '../pages/CustomerPage';

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'renaldopontoh'+randomNumber+'@test.com';

fixture("Registration Fixture")
    .page(URL);

test("Asset Homepage Test", async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(homepage.subtitleHeader.exists).ok()

    
});

test('User Registration and Login Test',async t => {
    await t
        .click(homepage.RegisterLink)
        .expect(getURL()).contains('register')
        .click(registerpage.GenderOption)
        .typeText(registerpage.FirstName,'Renaldo')
        .typeText(registerpage.LastName,'Pontoh');
        await registerpage.selectDay('17');
        await registerpage.selectMonth('October');
        await registerpage.selectYear('1996');
        await t
        .typeText(registerpage.Email,userEmail)
        .typeText(registerpage.Password,'123456')
        .typeText(registerpage.ConfirmPassword,'123456')
        .click(registerpage.RegisterButton)
        .expect(registerpage.SuccessfullMessage.exists).ok()
        .click(homepage.LogoutLink) 
        .click(homepage.LoginLink)
        .expect(loginpage.accountHeader.exists).ok()
        .typeText(loginpage.emailInput,userEmail)
        .typeText(loginpage.passwordInput,'123456')
        .click(loginpage.submitButton)
        .click(homepage.MyAccountLink)
        .expect(customerpage.ordersLink.exists).ok()
        .click(customerpage.ordersLink)
        .expect(customerpage.noOrdersLabel.exists).ok()
        .takeScreenshot();
    })
