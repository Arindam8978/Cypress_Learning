
/* 
POST - https://gorest.co.in/public/v2/users
PUT - https://gorest.co.in/public/v2/users/${userId}
DELETE -  https://gorest.co.in/public/v2/users/${userId} */
describe('Go Rest API chainig',() =>{

    const auth_Token = 'Bearer 3e6d4e0099071f11aa213bfa5c2dac57dbfdf066a6563eaff75633c7934f1484';
    it('create, update,delete the resource', () =>{

        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            body : {
                name: "Arindam Das",
                 gender: "male",
                 email: Math.random().toString(5)+"@gmail.com",
                 status: "inactive"
                },
             headers : {
                Authorization : auth_Token
             }, 
        }).then((response) => {
            expect(response.status).to.equal(201);
            const userId = response.body.id;
            //updating user request
            cy.request({
                method : 'PUT',
                url : `https://gorest.co.in/public/v2/users/${userId}`,
                body : {
                    name: "Arindam"
                    },
                 headers : {
                    Authorization : auth_Token
                 },
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.equal("Arindam");
                //deleting user request
                cy.request({
                    method : 'DELETE',
                    url : `https://gorest.co.in/public/v2/users/${userId}`,
                    headers : {
                        Authorization : auth_Token
                     },
                }).then((response) => {
                    expect(response.status).to.equal(204);
                })
            })
        })
    })
})