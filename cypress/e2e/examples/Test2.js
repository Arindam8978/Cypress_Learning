// cypress - spec in js and cypress any .js file called as spec file/ Test file both are same.

describe('My Second Test Suite', function() {          // describe - is the test suite and it contains test case 
it('My Second test case', function() {

    // test steps
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    // in selenium get is used to open the url in cypress it's work like findelement
    cy.get('input.search-keyword').type('ca');
    cy.wait(2000); 
    cy.get('div.products').as('productLocator') // we can use alising like this if we'll use it mutliple time same locator
 
    //click the product name via searching it's name first
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const vegText = $el.find('h4.product-name').text();
        if (vegText.includes('Cashews'))
        {
            cy.wrap($el).find('button').click();  // we use cy.wrape to resolve the pomise then click method will work with find method else it's get depricated.
        }

    });
    cy.get('img[alt="Cart"]').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
    //cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"]>:nth-child(14)').click()
    cy.get('div.wrapperTwo>div>select').select('India').should('have.value','India');
    cy.get('input.chkAgree').click();
    cy.contains('Proceed').click();
 
      
                              
 
    
});   


});

 