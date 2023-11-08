describe('API Mocking', () => {
    it('Mock the API', () => {

        cy.request('POST',' http://216.10.245.166/Library/Addbook.php',{

        "name":"Learn Appium Automation with Java",
        "isbn":"bcerd",
        "aisle":"297",
        "author":"John foe"
        }).then(function(response) {
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(200)
        });

    });
});