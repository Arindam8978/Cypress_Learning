describe('Intercept Exmaple', () =>{

    it('Intercept and spy example', () =>{

        cy.visit("https://dummyapi.io/explorer");
        cy.intercept({
                path : "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"

        }).as('comments')
        cy.contains("Comments List").click();
        cy.wait("@comments").then(intercept =>{
            expect(intercept.response.body.limit).equal(10);
        });
    });

    it('Mock the response', () =>{

        cy.visit("https://dummyapi.io/explorer");
        cy.intercept('GET', "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10", {limit:20, Name:"Tesing"}).as("comments");
        cy.contains("Comments List").click();
        cy.wait("@comments").then(intercept =>{
            expect(intercept.response.body.limit).equal(20);
            expect(intercept.response.body.Name).equal("Tesing");
        });
    });

    it('Mock the response using data driven', () =>{

        cy.visit("https://dummyapi.io/explorer");
        cy.intercept('GET', "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10", {fixture:"APITestingResponse.json"}).as("comments");
        cy.contains("Comments List").click();
        cy.wait("@comments").then(intercept =>{
            expect(intercept.response.body.limit).equal(20);
            expect(intercept.response.body.userName).equal("Automation Testing");
        });
    });

    it('Amazon signin mock response',() =>{
        cy.intercept('GET', "af/feedback-link?", {feedbackLinkText: "Yes Sponsored"}).as("comments");
        cy.visit("https://www.amazon.in/");
        cy.get("#twotabsearchtextbox").type("Mobile").type('{enter}');
        cy.wait("@comments").then(intercept =>{
            expect(intercept.response.body.status).to.equal("ok");
            expect(intercept.response.body.feedbackLinkText).to.equal("Yes Sponsored");
            
        });
    });

    it.only("Amazon", () =>{
        cy.intercept('GET',"https://data.amazon.in/api/marketplaces/A21TJRUUN4KGV/taxonomies/buyback/offers-for-category?encryptedProductMerchantId=A1EWEIV3F4B24B&productSubcategory=1805560031&asin=B0BMGB2TPR&brand=Samsung&rbnHierarchyNodes=1805560031&buybackCategory=&productPrice=6528", {fixture:"AmazonRespose.json"}).as("comments")
        cy.visit("https://www.amazon.in/Samsung-Storage-MediaTek-Octa-core-Processor/dp/B0BMGB2TPR/ref=sr_1_1?crid=3QCKU8Z0EV20S&keywords=mobile&qid=1699366468&refinements=p_89%3ASamsung&rnid=3837712031&s=electronics&sprefix=mobile%2Caps%2C341&sr=1-1&th=1");
        cy.wait("@comments");   
        cy.reload();
        cy.get('#title').invoke('text').then((getText) =>{
            cy.log(getText);
        })
        
    });
});