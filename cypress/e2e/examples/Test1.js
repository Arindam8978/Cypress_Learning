// cypress - spec in js and cypress any .js file called as spec file/ Test file both are same.

describe('My First Test Suite', function() {          // describe - is the test suite and it contains test case 
it('My First test case', function() {

    // test steps
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    // in selenium get is used to open the url in cypress it's work like findelement
    cy.get('input.search-keyword').type('ca',{delay:100});
    //cy.wait(2000);
    cy.get('.product:visible').should('have.length',4);   
    cy.get('div.products').as('productLocator') // we can use alising like this if we'll use it mutliple time same locator
    //parent child chaining - it'll go inside parent first then try to find inside all elements in child
    cy.get('@productLocator').find('.product').should('have.length',4);
    
    //click on the second element
    //cy.get('div.products').find('.product').eq(1).contains('ADD TO CART').click();

    //click the product name via searching it's name first
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const vegText = $el.find('h4.product-name').text();
        if (vegText.includes('Cashews'))
        {
            cy.wrap($el).find('button').click();  // we use cy.wrape to resolve the pomise then click method will work with find method else it's get depricated.
        }

    });
    // assert if logo text is correctly display
    cy.get('div.brand').should('have.text','GREENKART');


    //this is to print in log
    cy.get('div.brand').then(function(logoElement) {
        cy.log(logoElement.text());   // print that dom element value in log so handle that one need promise becaue .text() method is not cypress command if it'll cypress command then promise will handle by cypress automatically
    })                                // cypress is support jquery method and text is jquery method
    
    .then(function() {
        console.log('Hi');
    });    
     
    //All this are different methods to get the text
    //Option 1: Get the text using jQuery method
    cy.get().then((getTheText) => {
        const actualText = getTheText.text();
    })
    //Option 2: Assert directly using should and have.text
    cy.get().should('have.text','Hello how are you')
    //Option 3: Use invoke function to get the text
    cy.get().invoke('text').then((grabText) =>{
        cy.log(grabText);
    })
 
    
});   

// it('My Second test case', function() {

//     // test steps
// }); 

});

  //fixture - using fixture folder we can drive our test data , inside f
  //fixture we can store test releated data and we can drive it
  //plugin - are used to handle cypress event and it's work like listeners
  //support/command - inside support folder we can write reusable methods like utilitie.
 /*  cypress.config.js - configuration changes on project level is done by inside this file 
  it's work like global level property,we can set screenshot path,
   we can set a path over there for any spec file and all. */

   // download - when we'll download any file at the run time then it'll be save under download folder.

   //:visble - it'll only retrieve only the visible dom element