describe('API Testing', () =>{

    it.only('GET the request response',() =>{

        cy.fixture('array').then((exampleData) =>{
            const queryParameter = exampleData.result[0];
     
        cy.request({
            method : 'GET',
            url : `https://randomuser.me/api/results=${queryParameter}`
        }).then((response) =>{
            expect(response.status).to.equal(200);
        })
    })
    })

    it('Mock the API', () => {

        cy.request({
            method : 'GET',
            url : 'https://postman-echo.com/basic-auth',
            auth : {
                username : 'postman',
                password : 'password',
                method : 'degest'
            }
    })
    .then((response) =>{
        cy.log(response)
    })

    });

});
