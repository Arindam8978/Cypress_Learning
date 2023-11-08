
//<reference types ="cypress-iframe" />

describe('My Fifth Test Suite',{browser:'chrome'}, function() {          // describe - is the test suite and it contains test case 
// we can write it block with describe block also.
beforeEach(() =>{
    //Cypress.Cookies.default(session_id, 'remember_token');
    cy.login("test","test");
})

// beforeEach(() =>{
//     cy.amazonLogin("dasarindam469@gmail.com","Arindam@123");
// })
it.only("session login 1 ", () =>{   // session will store and only work on one spec file 
    //cy.visit('/');
    cy.visit("https://demoblaze.com/index.html");
    //cy.get("#logout2").should("be.visible");
    cy.get("#nameofuser").should("have.text", "Welcome test");
})


it.only("session login 2", () =>{
    //cy.visit('/');
    cy.visit("https://demoblaze.com/index.html");
    //cy.get("#logout2").should("be.visible");
    cy.get("#nameofuser").should("have.text", "Welcome test");
})


it("Amazon session login 1 ", () =>{   // session will store and only work on one spec file 
    cy.visit('/');
    cy.get("#twotabsearchtextbox").type("Mobile").type('{enter}');
})


it("Amazon session login 2", () =>{
    cy.visit('/');
    cy.get("#twotabsearchtextbox").type("Mobile").type('{enter}');
})
  
});

 