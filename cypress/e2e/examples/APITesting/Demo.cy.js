describe('API Testing', () =>{

    it.only('GET the request response',() =>{

        cy.fixture('array').then((exampleData) =>{
            const queryParameter = exampleData.result[0];
     
        // cy.request({
        //     method : 'GET',
        //     url : `https://randomuser.me/api/results=${queryParameter}`
        // }).then((response) =>{
        //     cy.log(response.body);
        //     //expect(response.status).to.equal(200);
        // })
        cy.request(`https://randomuser.me/api/?results=${queryParameter}`).then((response) => {
            // Assertions or additional actions based on the response
            expect(response.status).to.eq(200);
            // Log the response (optional)
            cy.log(response.body);
            console.log(response.body);
            const firstUser = response.body.results[0];
            expect(firstUser.gender).to.be.equal("male");
            response.body.results.forEach((user, index) => {
                // Assert the gender of each user
                expect(user.gender).to.be.oneOf(['male', 'female']);
                cy.log(`User ${index + 1} Gender: ${user.gender}`);
              });
        });
    

    })
    })

    it('Create the request', () => {
        cy.fixture('userData').then((exampleData) =>{
            const fixtureData = exampleData.result;
                cy.request({
                    method : 'POST',
                    url : `https://randomuser.me/api/`,
                    body : fixtureData,
                     header : {
                        'Content-Type' : 'application/json'
                     }
                })
            })
    .then((response) =>{
        expect(response.status).to.equal(200);
        cy.log(response.body);
    })

    });

});
