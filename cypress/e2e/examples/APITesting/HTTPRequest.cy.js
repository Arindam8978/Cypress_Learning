describe('HTTP Request',()=>{

    it('GET Request',()=>{
        cy.request('GET','https://reqres.in/api/users?page=2')
        .its('status').should('equal',200);

    });

    it('POST Request',()=>{
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users?page=2',
            body : {
                
                    name: "Arindam",
                    job: "SDET"
                
            }
        }).its('status').should('equal',201);
    })

    it('PUT Request', () =>{

        cy.request({
            method : 'PUT',
            url : 'https://reqres.in/api/users/640',
            body : {
                name: "Arindam",
                job: "Senior SDET"
            }
        }).its('status').should('equal', 200);

    })

    it('DELETE Request', ()=> {
    cy.request({
        method : 'DELETE',
        url : 'https://reqres.in/api/users/640',
    }).its('status').should('equal', 204);

    });
});