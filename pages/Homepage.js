import {Selector, t} from 'testcafe';

class Homepage {
    constructor(){
        this.subtitleHeader = Selector('h2')
        .withText("Welcome to our store")
        this.registerLink = Selector('a').withText("Register")
        this.loginLink = Selector('a').withText("Log in")
        this.shoppingcartLink = Selector('a').withText("Shopping cart")
        this.currencyList = Selector ('select#customerCurrency')
        this.myAccountLink = Selector('a').withText("My account")
        this.logoutLink = Selector('a').withText("Log out");
    }

    get productSearch(){
        return Selector("input[id='small-searchterms]");
    }

    async search(product){
        await t
            .typeText(this.productSearch,product)
            .wait(3000)
            .pressKey('enter');

    }

    async changeCurrency(currency){
        await t
            .click(this.currencyList)
            .click(Selector('option', {text: currency}));
    }

}

export default new Homepage();