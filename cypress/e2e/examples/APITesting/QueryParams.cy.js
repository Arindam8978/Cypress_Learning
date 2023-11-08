describe('API Testing', () =>{

    const queryParameter = {page : 2};
    it('PAssing Query parameter', () =>{

        cy.request({
                method : 'GET',
                url : 'https://reqres.in/api/users',
               // qs : {page : 2}
                qs : queryParameter
        })
        .then((response) => {

            expect(response.status).to.eq(200);
            expect(response.status).equal(200);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).has.length(6);

            expect(response.body.data[0]).has.property('id',7);
            expect(response.body.data[0]).has.property('first_name',"Michael");
            });
    });
});