class PurchasePage {

    deliveryCountryBox(){
       return cy.get('#country');
    }

    selectIndiaasCountry(){
        
         return cy.get('div.suggestions> ul>li>a');
    }

    purchaseCheckBox(){
        return cy.get('#checkbox2') ;
    }

    purchaseButton(){
        return cy.get('input[value="Purchase"]')
        .then(() =>{
            debugger;
        })
    }

    verifySuccessMessage(){
       // cy.get('div.alert.alert-success.alert-dismissible').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
       cy.get('div.alert.alert-success.alert-dismissible').then(function(element) {
            const actualTest = element.text();
            expect(actualTest.includes('Success')).to.be.true;
       });
    }
 
}

export default PurchasePage;