// cypress - spec in js and cypress any .js file called as spec file/ Test file both are same.

describe('My Fourth Test Suite', function() {          // describe - is the test suite and it contains test case 
it('My Fourth test case', function() {

    // Alerts - cypress auto accept alert and pop up
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();

    //window:alert -  cypress also have the capability to listen to brower event and window:alert is the event which get fired on alert open, you are firing the event through cypress to get access to the alert
    cy.on('window:alert', (str) => {   //Fires when your app calls the global window.alert() method. Cypress will auto accept alerts. You cannot change this behavior.
        //mocha to compare two string
        expect(str).to.equal('Hello , share this practice page and share your knowledge');

    });    
    cy.on('window:confirm', (str) => {   //Fires when your app calls the global window.confirm() method. Cypress will auto accept confirmations. Return false from this event and the confirmation will be canceled.
        //mocha to compare two string
        expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });    
   

    });   

        it('The second test inside fourth', function() {
            //handle multiple tab
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr', 'target').click(); // because target open new tab so remove the target attribute then click so it's won't open new tab.
        //cy.get('#opentab').click();
        cy.origin("https://www.qaclickacademy.com", () => { // after click on the new tab it'll open new domain so first moved into new domain then do your work
        cy.get('.nav-item a[href*="about"]').click();
        cy.get('.section-title.mt-50 h2').should('contain','Welcome to QAClick Academy');

        }); 
        });
    
    it('The Third test inside fourth', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Handle web tables
        cy.get('#product tr td:nth-child(2)').each(($el,index,$list) => {

            const text = $el.text();
            if(text.includes('simple Python Language'))
            {
                cy.get('#product tr td:nth-child(2)').eq(index).next().then (function(price)  {   //  Get the immediately following sibling of each DOM element within a set of DOM elements.
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                });
 
            }
        });

    });


    it.only('The Fourth Mouse hover test inside fourth', function() {
        cy.visit("https://www.amazon.in/");
      /*   Handle web mouse hover - there is no direct mouse hover is support in cypress so we can handle it via jQuery functions
        mouse hover event are not supported in cypress alternatively use jquery or force click */
        //cy.get('div.mouse-hover-content').invoke('show');
        // cy.contains('Top').click({force : true}); // if there is any hidden element then we can force it to true then click.
        // cy.url().should('include','top');
        // cy.get("#mousehover").trigger('mouseover');
        // cy.wait(2000);
        // cy.get('a[href*="top"]').click({force : true}); // Click the element after hovering
        cy.get("#nav-tools>a:nth-child(2)>span").trigger('mouseover');
        cy.get('#nav-flyout-ya-signin>a span.nav-action-inner').click();

    });

    it('Switch into new window', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.get("#openwindow").click();
        const newUrl = "http://www.qaclickacademy.com/";
        cy.window().then((win) => {
            const stub =  cy.stub(win, 'open').as('windowOpen')
        });
        cy.get("#openwindow").click();
        cy.wait(10000);
        cy.get('@windowOpen').should('be.calledWith', newUrl)
        cy.window().then((win) => {
            win.location.href = newUrl
            cy.wait(1000);
            cy.get('.section-title.mt-50 h2').should('have.text','Welcome to QAClick Academy');
        });
       
        //     // You are now in the context of the new window
        //   cy.wait(10000);
        //     // Perform actions on the new window
     

        //     cy.window().then((win) => {
        //       // Use window.open to open the new window and capture a reference to it
        //       //win.open("http://www.qaclickacademy.com/");
            
        //       // After opening the new window, you can interact with it
        //       //cy.window().then((newWindow) => {
        //         // Perform actions and assertions on the new window's content
        //         // For example, checking the title
        //         cy.wait(10000);
        //         cy.get('.section-title.mt-50 h2').should('have.text','Welcome to QAClick Academy');
        //       //});
        //     });
            

// Perform actions and assertions on the new window's content.




    });
    it('Handling new Browser Window', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.window().then((win) => {
              cy.stub(win, 'open', url => {
                win.location.href = 'http://www.qaclickacademy.com/';
            }).as("popup")
        })
        cy.get("#openwindow").click();
        cy.wait(10000);  
        cy.get('@popup')
            .should("be.called")
            cy.wait(1000);
            cy.get('.section-title.mt-50 h2').should('have.text','Welcome to QAClick Academy');
    });
    
    it('Handling new Browser Window', function () {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Create an alias for the original window
        cy.window().as('originalWindow');
        
        // Click the element that opens the new window/tab
        cy.get("#openwindow").click();
        
        // Wait for a while to give the new window/tab time to open
        cy.wait(10000); // Adjust the time as needed
        
        // Switch to the new window/tab by checking its URL
        cy.window().then((newWindow) => {
          cy.get('@originalWindow').then((originalWindow) => {
            // Continue only if the URL has changed to the new window's URL
            if (newWindow.location.href !== originalWindow.location.href) {
              // Now, you are in the context of the new window/tab
              // You can interact with it and make assertions
        
              // For example, check its URL
              cy.log(newWindow.location.href);
              cy.wait(10000);
                 cy.get('.section-title.mt-50 h2').should('have.text','Welcome to QAClick Academy');
             
        
              // Perform actions in the new window/tab
            }
            cy.wait(10000);
            cy.get('.section-title.mt-50 h2').should('have.text','Welcome to QAClick Academy');
        
          });
        });
        

    });


  
});

 