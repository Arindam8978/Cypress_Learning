describe('TestIsolation',() =>{

    it('Login into Amazon', () =>{
        cy.visit('https://www.amazon.in/');
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type('dasarindam469@gmail.com');
        cy.get('#continue').click();
        cy.get('#ap_password').type('Arindam@123');
        cy.get('#signInSubmit').click();
    });

    it('Continue from the last step from first it block', () =>{
        cy.get('#nav-link-accountList').trigger('mouseover');
        cy.get('#nav-flyout-wl-items div>a:nth-child(1)').each((value) =>{
            value = value.text().trim();
            expect(value).to.equal('Shopping List');
        }) 
        cy.get('#nav-flyout-wl-items div>a:nth-child(2)').each((value) =>{
            value = value.text().trim();
            expect(value).to.equal('Shopping List 1');
        }); 
        cy.get('#nav-flyout-wl-items div>a:nth-child(3)').each((value) =>{
            value = value.text().trim();
            expect(value).to.equal('Shopping List 2');
        }); 
        cy.get('#nav-flyout-wl-items div>a:nth-child(4)').each((value) =>{
            value = value.text().trim();
            expect(value).to.equal('Shopping List 3');
        });
    });
});