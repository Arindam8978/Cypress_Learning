import 'cypress-iframe';
//<reference types ="cypress-iframe" />

describe('My Fifth Test Suite', function() {          // describe - is the test suite and it contains test case 
it('My Fifth test case To handle iframe', function() {

    // Iframe - To work on iframe first install the iframe using npm command  (npm install -D cypress-iframe )
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded('#courses-iframe');  // load that frame and give the knowledge to the object 
    cy.iframe().find('ul.navigation.clearfix>li:nth-child(5)>a').eq(0).click() // and always use cy.iframe at starting when work on frame
    cy.wait(2000);
    cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2);


    //cy.get('input[value="radio1"]').click();
 

});
it.only('Filter The products based on the prices', () =>
{   
    cy.visit(Cypress.env('url')); 
    cy.get("#ap_email").type("dasarindam469@gmail.com");
    cy.get('.a-button-inner > #continue').click();
    cy.get("#ap_password").type("Arindam@123");
    cy.get("#signInSubmit").click();
    cy.get("#twotabsearchtextbox").type("iPhone 15").type('{enter}');
    cy.get("#search h2 a").invoke('removeAttr','target').first().click();
    //cy.get("a-size-medium a-color-base a-text-normal").invoke('removeAttr','target').first().click();
    cy.get("#add-to-wishlist-button-submit").click();
    cy.get('a[href$="view_your_list"]').click();
    // Expected product name
const expectedProductName = "Apple iPhone 15 (128 GB) - Blue";

// Select the element with the given CSS selector
cy.get('#itemName_I1AWCN2E7C2ZSD').invoke('text').then((actualProductName) => {
// Use expect to compare the actual product name with the expected one
actualProductName = actualProductName.trim();
expect(actualProductName).to.equal(expectedProductName);
});

});
  
});

 