describe('API Mocking', () => {
  

    it('Sending a request to see all the response', () => {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.request({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        })
        cy.get(".btn-primary").click();

    });

      it.only('Mock the API', () => {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        },
        
        {
            statusCode :200,
            body : [
                {
                    "book_name": "RestAssured with Java",   // instead of sending the real response cypress will share the mock response
                    "isbn": "BSG",
                    "aisle": "2302"
                }
            ],
        }).as('bookretrivals');  // after resolve the above promise collect it and use it as refrence variable
        cy.get(".btn-primary").click();
        cy.wait('@bookretrivals').then(({request,response}) => {  // we have to wait untill promise is resolve then cypress intercept the response and when it'll resolve the promise it'll give the resquest and response
            cy.get('tr').should('have.length',response.body.length+1);
        });
        cy.get('p').should('have.text',"Oops only 1 Book available");

    });
});