// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// const xlsx = require('xlsx-populate');

// Cypress.Commands.add('readExcelFile', (filePath) => {
//   return cy.wrap(xlsx.fromFileAsync(filePath));
// });

Cypress.Commands.add("parseXlsx",(inputFile) => {
  return cy.task('parseXlsx', {filePath: inputFile})
});

// const xlsx = require('node-xlsx').default;
// const fs = require('fs');
// const path = require('path');
// module.exports = (on,config) => {
//     on('task', { parseXlsx ({ filepath }) 
//     {
//         return new Promise((resolve,reject) =>
//         {
//             try {
//                 const jsonData = xlsx.parse(fs.readFileSync(filepath));
//                 resolve(jsonData);
//             }
//             catch (e)
//             {
//                 reject(e);
//             }});
        
//     }});}



Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title').each(($el,index,$lsit) =>{
        if( $el.text().includes(productName))
        {
         cy.get('button.btn.btn-info').eq(index).click();
        }
     });
});

// const cypress = require('cypress');
// const xlsx = require('xlsx');

// module.exports = (on, config) => {
//   on('task', {
//     generateJSONFromExcel({ filePath, sheetName }) {
//       const workbook = xlsx.readFile(filePath);
//       const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
//       return sheetData;
//     },
//   });
// };

Cypress.Commands.add("login",(username,password) =>{
  cy.session([username,password], () =>{
    //cy.visit('/');
    cy.visit('https://demoblaze.com/index.html');
    cy.get("#login2").click();
    cy.get("#loginusername").clear().type(username); 
    cy.get("#loginpassword").clear().type(password);
    cy.get('button[onclick="logIn()"]').click();
    cy.get("#logout2").should("be.visible")
  },
  {
    cacheAcrossSpecs : true   // it'll restore the session for all the specs and it won't re login again for all sepc file
  }
  );

});

Cypress.Commands.add("amazonLogin",(username,password) =>{
  cy.session([username,password], () =>{
    cy.visit('/');
    cy.contains("Account & Lists").click();
    cy.get("#ap_email").clear().type(username); 
    cy.get("#continue").click();
    cy.get("#ap_password").clear().type(password);
    cy.get("#signInSubmit").click();
  });
});


Cypress.Commands.add("getIframe", (iframe) =>{

    return cy.get(iframe)
  .its('0.contentDocument.body')
  .should("be.visible")
  .then(cy.wrap);
})

//import 'cypress-iframe';

// Register the 'iframe' command
Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) => {
  return cy.wrap($iframe).within({ timeout: 10000 }, () => {
    return cy.get('iframe').its('0.contentDocument').should('exist');
  });
});



//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })