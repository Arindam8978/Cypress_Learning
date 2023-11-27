import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
//import { when } from "cypress/types/jquery";

Given( "Start to type your Given step here",() =>{
    cy.visit('https://www.amazon.in/');
});
When("Start to type your When step here",()=>{
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type("dasarindam469@gmail.com");
    cy.get('#continue').click();
    cy.get('#ap_password').type("Arindam@123");
    cy.get('#signInSubmit').click();
});
Then("Start to type your Then step here",()=>{
    cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, Arindam');
});