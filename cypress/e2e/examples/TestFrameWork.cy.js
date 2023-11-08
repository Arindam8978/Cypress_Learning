import  HomePage from '../pageObjects/HomePage';
import ProductsPage from '../pageObjects/ProductsPage';
import CheckOutPage from '../pageObjects/CheckOutPage';
import PurchasePage from '../pageObjects/PurchasePage';
describe('My Fifth Test Suite', function() {   
   before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) {   // in the data onject whole exampl.json is stored
                this.data = data;   // data variable can't access outsite this function so create a global variable using this
        });
   }); 
    
it('data drive from fixture', function() {
   const homePage = new HomePage();
   const productPage = new ProductsPage();
   const checkOutPage = new CheckOutPage();
   const purchasePage = new PurchasePage();
   
    cy.visit(Cypress.env('url'));   // access the url via global variable
    homePage.getNameBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.twoWayDatabindingTextBox().should('have.value', this.data.name);
    homePage.checkLengthOfTheTextBox().should('have.attr','minlength',2);
    homePage.entrepreneurRadioButton().should('be.disabled');
    homePage.shopTab().click();
    this.data.productName.forEach(function(element) {  // run multiple time based on the index present in the productName array in example.json file
        cy.selectProduct(element);
    });
   
    productPage.checkOutButton().click();
    checkOutPage.verifyThePrice();
    checkOutPage.checkOutButton().click();
    purchasePage.deliveryCountryBox().type('India');
   // Cypress.config('defaultCommandTimeout', 6000);  // like this also we can set wait and it'll only applicable for this specs steps
    purchasePage.selectIndiaasCountry().click();
    purchasePage.purchaseCheckBox().click({force:true});
    purchasePage.purchaseButton().click();
    cy.debug();
    purchasePage.verifySuccessMessage();
});
  
});

 