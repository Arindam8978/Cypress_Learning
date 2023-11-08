describe('API Testing', () =>{

    let authToken = null;
    before('Creating the access token', () =>{

        cy.request({
            method: 'POST',
            url : 'https://simple-books-api.glitch.me/api-clients/',
            headers : {
                    'Content-Type': 'application/json'
            },
            body : {
                clientName: "Postman",
                clientEmail: Math.random().toString(5) +"@gmail.com"
            }
        }).then((response) => {
            authToken = response.body.accessToken;
        });
    });
    
    before('Creating new order', () =>{

        cy.request({
            method: 'POST',
            url : 'https://simple-books-api.glitch.me/orders/',
            headers : {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer '+authToken,
            },
            body : {
                    "bookId": 1,
                    "customerName": "John"
            }
        }).then((response) => {
            expect(response.status).eq(201);
            expect(response.body.created).to.eq(true);
        });
    });

    it('Fetching the orders', () =>{

        cy.request({
            method :'GET',
            url : 'https://simple-books-api.glitch.me/orders',
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+authToken,
            },
            cookies:{
                'cookiesName' : 'mycookie'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1);
        });
    });
    


});