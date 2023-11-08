// cypress - spec in js and cypress any .js file called as spec file/ Test file both are same.

describe('My Third Test Suite', function() {          // describe - is the test suite and it contains test case 
it('My Third test case', function() {

    // check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1'); // and use for multiple should assertions for behaving we'll use be.(dot) and for comparing we'll use have.(dot)
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    cy.get('input[type="checkbox"]').check(['option2','option3']); // check method takes an argument inside array like which values i need to check.

    //static dropdown
    cy.get('#dropdown-class-example').select('option2').should('have.value','option2'); // after select verify that option2 is selected or not using it's value

    //Dynamic dropdown
    cy.get('#autocomplete').type('Ind');
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if($el.text() === "India")
        {
            cy.wrap($el).click();
        }

    });
    cy.get('#autocomplete').should('have.value','India');

    //element visible or not
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');

    //click into radio button
    //cy.get('input[type="radio"]').check();
    cy.get('input[value="radio2"]').check().should('be.checked');

    //switch into new tab
    cy.get('#opentab').click();

// Use window.open() to open a new tab and capture its reference
    cy.window().then((win) => {
    win.open('https://www.qaclickacademy.com');
    }).then((newTab) => {
    // Switch to the newly opened tab
    cy.window().then((win) => {
      win.location.href.should('eq', 'https://www.qaclickacademy.com'); // Verify that you are in the new tab
    });
    cy.wait(30000);
    cy.get('#navbarSupportedContent > ul > li:nth-child(4) > a').click();
  });
      

});   
});

 