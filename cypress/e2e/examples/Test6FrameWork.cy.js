describe('My Fifth Test Suite', function() {   
   before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) {   // in the data onject whole exampl.json is stored
                this.data = data;   // data variable can't access outsite this function so create a global variable using this
        });
   }); 
    
it('data drive from fixture', function() {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('div[class="form-group"]:nth-child(1)>input').type(this.data.name);
    cy.get('#exampleFormControlSelect1').select(this.data.gender);
    cy.get('h4 input[type="text"]').should('have.value', this.data.name);
    cy.get('div[class="form-group"]:nth-child(1)>input').should('have.attr','minlength',2);
    cy.get('#inlineRadio3').should('be.disabled');
    //cy.pause(); // pause the exucution and we can debug.
    cy.get('a[href$="shop"]').click();
    //cy.selectProduct('Blackberry');
    cy.selectProduct('Nokia');
    //cy.selectProduct(this.data.productName);
    // this.data.productName.forEach(function(element) {  // run multiple time based on the index present in the productName array in example.json file
    //     cy.selectProduct(element);
    // });

});
  
});

 