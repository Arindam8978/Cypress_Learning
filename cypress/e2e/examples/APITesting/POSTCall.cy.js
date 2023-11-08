describe('API Testing', () => {

    it('Approach-1 Hard coded json object', () => {
            const requestBody = {
                tourist_name: "MSD",
                tourist_email: "INDACAP@gmail.com",
                tourist_location: "India"
            }

            cy.request({

                method : 'POST',
                url : 'http://restapi.adequateshop.com/api/Tourist',
                body : requestBody
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.tourist_name).to.eq("MSD");
                expect(response.body.tourist_email).to.eq("INDACAP@gmail.com");
                expect(response.body.tourist_location).to.eq("India");
            });
    });

    it('Approach-2 Dynamically generating json object', () => {
        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email:  Math.random().toString(5) +"@gmail.com",
            tourist_location: "India"
        }

        cy.request({

            method : 'POST',
            url : 'http://restapi.adequateshop.com/api/Tourist',
            body : requestBody
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email);
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location);
        });
    });
    it.only('Approach-3 getting JSON data from fixture file', () => {

    cy.fixture('tourist').then((fixturesData) =>{
       const requestBody = fixturesData;
    
        cy.request({

        method : 'POST',
        url : 'http://restapi.adequateshop.com/api/Tourist',
        body : requestBody
        }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.tourist_name).to.eq(requestBody.tourist_name);
        expect(response.body.tourist_email).to.eq(requestBody.tourist_email);
        expect(response.body.tourist_location).to.eq(requestBody.tourist_location);

        expect(response.body).has.property('tourist_name',requestBody.tourist_name);
        expect(response.body).to.have.property('tourist_email',requestBody.tourist_email);
    });
    });
});
});