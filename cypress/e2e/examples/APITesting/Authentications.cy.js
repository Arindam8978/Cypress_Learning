describe('Authentication', () =>{

    it('Basic Authentication', () =>{

        cy.request({
                method : 'GET',
                url : 'https://postman-echo.com/basic-auth',
                auth : {
                    user : 'postman',
                    pass : 'password'
                }
        })
        .then((response) =>{
            expect(response.status).to.equal(200);
            expect(response.body.authenticated).to.equal(true);
        })
    });

    it('Digest Authentication', () =>{

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
            expect(response.status).to.equal(200);
            expect(response.body.authenticated).to.equal(true);
        })
    });

    const token = "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";
    it('Bearer Token Authentication', () =>{

        cy.request({
                method : 'GET',
                url : 'https://api.github.com/user/repos',
                headers : {
                    Authorization : 'Bearer '+token
                }
        })
        .then((response) =>{
            expect(response.status).to.equal(200);
        })
    });
});