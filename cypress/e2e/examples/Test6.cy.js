/// <reference types='cypress'/>
//<reference types ="cypress-iframe" />
describe('My Fifth Test Suite',{browser:'chrome'}, function() {          // describe - is the test suite and it contains test case 
it('My Fifth test case To handle iframe', function() {
 
    // Iframe - To work on iframe first install the iframe using npm command  (npm install -D cypress-iframe )
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded('#courses-iframe');  // load that frame and give the knowledge to the object 
    cy.iframe().find('ul.navigation.clearfix>li:nth-child(5)>a').eq(0).click() // and always use cy.iframe at starting when work on frame
    cy.wait(2000);
    cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2);
    cy.get('input[value="radio1"]').should("be.visible");
    cy.get('input[value="radio1"]').check().should("be.checked");
    cy.get('input[type="radio"]').eq(2).check();
    cy.get('input[value="radio1"]').then((data) => {
        if(data.is(":visible"))
        {
            cy.log("Hi");
        }
        cy.log("Hi");
    });
    let getTheURL = cy.url();
    cy.log(getTheURL);
    cy.get("#name").clear().type("Hi");
    cy.get("#name").clear().type('{shift}{alt} Hello'); //In Cypress, how do you type Keypress
   // cy.get("#opentab").dblclick();
    cy.get("#opentab").rightclick();
    cy.log(cy.title());
    let t = cy.title();
    cy.log(t);

    // cy.get('input[value="radio1"]').then(function(data) {

    // });
    //cy.viewport();
    //cy.get('input[value="radio1"]').click();
    cy.title().should('eq', 'Practice Page');
    cy.title().should('include', 'Page');
    cy.title().then((pageTitle) => {
        
        let pageT = pageTitle;
        cy.log(pageT);
    }).then(() => {
        let browserName = Cypress.browser.name;
        console.log(browserName);
    });
    cy.scrollTo('top');
    cy.scrollTo('bottom');
    cy.scrollTo(0,500);
    cy.get("#opentab").scrollIntoView();
    cy.get(".btn-style.class1.class2").should("have.class","btn-style class1 class2");
    // cy.frameLoaded('#courses-iframe'); 
    // cy.iframe().find('ul.navigation.clearfix>li:nth-child(5)>a').eq(0).click() 
    // cy.iframe().scrollTo("bottom");
 



});

it('file upload', () => {
    const filepath = "computer.jpg";
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile(filepath);
        cy.get("#file-submit").click();
        cy.get("#uploaded-files").invoke('text').then((getOriginalText) => {
            getOriginalText = getOriginalText.trim();
            expect(getOriginalText).to.have.equal("computer.jpg");
        });
});

it('handling alert', () => {
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Hello , share this practice page and share your knowledge');
    });
    cy.get("#confirmbtn").click();
    cy.wait(5000);
    cy.on("window:confirm", (str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });
    cy.on("window:confirm", () => false);  // to cancle the alert pop up

});

it('another alert options', () =>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //cy.contains("Click for JS Prompt").click();
    cy.window().then((alertText) => {
        cy.stub(alertText,'prompt').returns("I am Arindam");
    });
});


it('Read and write into json',() =>{
    cy.writeFile('cypress/fixtures/example1.json',
    { name: 'Arindam', email: 'arindam@.com' },{flag:'a+'});

    cy.readFile('cypress/fixtures/example1.json').then((user) => {
        expect(user.name).to.have.equal("Eliza");
    });

    // cy.readFile('cypress/fixtures/example.json').then((data) => {
    //     // 'data' contains the existing JSON data
    //     // Modify 'data' by adding new data
    //     //data.myArray.push({ name: 'New Entry', value: '42' });
    //    // data.myA
      
    //     // Now, write the updated 'data' back to the file
    //     cy.writeFile('cypress/fixtures/example.json', data);
    //   });
      

    //cy.writeFile('sample.txt','Hello world');
    cy.writeFile('sample.txt','Hello world \n',{flag :'a+'});  // append into the text file
});
it('Drad And Drop',{browser:'edge'},()=>{
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    // cy.get('#column-a').as('source');
    // cy.get('#column-b').as('target');
    // cy.get('@source').drag('@target');
    if(Cypress.isBrowser('edge'))
    {
        cy.pause();
        cy.debug();
    cy.wait(3000);
    const dataTransfer = new DataTransfer();      
    cy.get('#column-a').trigger('dragstart', {
        dataTransfer
      });
   
      cy.get('#column-b').trigger('drop', {
        dataTransfer
      });
      
     cy.get('#column-b header').should('have.text','A'); 
    }
});
it('Work on iframe',()=>{
// Iframe - To work on iframe first install the iframe using npm command  (npm install -D cypress-iframe )
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.frameLoaded('#courses-iframe');  // load that frame and give the knowledge to the object 
cy.iframe().find('a[class="theme-btn"]').eq(0).click() // and always use cy.iframe at starting when work on iframe
 cy.get("#id",{timeout:1000}).should("be.visible") // wait for element to be visible 
 cy.get().check({force:true}); //click hidden element
 cy.get('button').should('have.class', 'active').and('not.be.disabled'); //chain assertations
 cy.contains();
 cy.task();
cy.exec();
})

it('multi domain test', () =>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.frameLoaded('#courses-iframe');  // load that frame and give the knowledge to the object 
cy.iframe().find('a[class="theme-btn"]').eq(0).click() // and always use cy.iframe at starting when work on iframe
cy.get().click(); 

 cy.origin("https://www.flipkart.com/", () =>{ //if after click on element other wesite has open with different domain then we can 
    cy.get().click();                          // we can switch like this and use it
    cy.its();
    expect().to.be.visible;
    cy.get().children().parent();
    cy.task();
    cy.exec();
});

});

it('How to read excel data',() =>{

    cy.parseXlsx("cypress\\fixtures\\ExcelData.xlsx").then((jsonData) =>{
        const rowLength = Cypress.$(jsonData[0].data).length;
        for (let index = 0; index < array.rowLength; index++) {
          let jsonData = jsonData[index].data;
          console.log(jsonData[index].data)
            
        }
    })

    // const excelFilePath = 'cypress\\fixtures\\ExcelData.xlsx';
    // //const excelFilePath = "C:\\CypressLearning\\cypress\\fixtures\\ExcelData.xlsx"

    // cy.readExcelFile(excelFilePath).then((workbook) => {
    //   const sheet = workbook.sheet(0); // Access the first sheet

    //   // Iterate through rows and columns to print cell values
    //   sheet.usedRange().forEach((row) => {
    //     row.forEach((cell) => {
    //       cy.log(cell.value());
    //     });
    //   });
    // });

    // cy.excel().then((data) => {
    //     // Access data from the Excel file
    //     const sheetData = data.sheets['sheet']; // Replace 'Sheet1' with the name of your sheet
        
    //     // Iterate through rows and columns to print cell values
    //     sheetData.forEach((row) => {
    //       row.forEach((cell) => {
    //         cy.log(cell.value);
    //       });
    //     });
    //   });
   


    // read-excel.js
// const xlsx = require('xlsx');
// const workbook = cy.readFile('cypress\\fixtures\\ExcelData.xlsx');
// const sheetName = workbook.Data[0].email;
// const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
// console.log(JSON.stringify(sheetData));

// cy.exec('node path/to/read-excel.js').then(({ stdout }) => {
//     const excelData = JSON.parse(stdout);
//     // Now, you can use excelData in your test
//   });

// const filePath = "C:\CypressLearning\cypress\fixtures\ExcelData.xlsx";
// const sheetName = "Data";  
// cy.task("generateJSONFromExcel", {filePath, sheetName }).then((user) => {
//     cy.log(user[0].email);
// });
//         const filepath = "cypress\\fixtures\\ExcelData.xlsx";
//         cy.task('excelToJsonConverter', filepath).then(function(result){
//             console.log(result.data[0].email);
//             cy.log(result);
//         })


 });

it("Download the file", () =>{

    cy.visit("https://the-internet.herokuapp.com/");
    cy.contains("File Download").click();
    //cy.get("#content ul li:nth-child(17)").click();
    cy.wait(3000);
    cy.get('#content a[href*="myArora"]').click();
});

it("checked and unchecked checkbox", () => {
cy.visit("https://the-internet.herokuapp.com/");
cy.contains("Checkboxes").click();
cy.get('input[type="checkbox"]').eq(1).check();
cy.get('input[type="checkbox"]').eq(1).uncheck();
cy.get('input[type="checkbox"]').eq(0).uncheck();
cy.get('input[type="checkbox"]').eq(0).check();
});

it("Multiple domain" , () =>{
 
 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#opentab').invoke('removeAttr', 'target').click(); // because target open new tab so remove the target attribute then click so it's won't open new tab.
    //cy.get('#opentab').click();

    // cy.origin is used to test with multiple domain
    cy.origin("https://www.qaclickacademy.com", () => { // after click on the new tab it'll open new domain so first moved into new domain then do your work
    cy.get('.nav-item a[href*="about"]').click();
    cy.get('.section-title.mt-50 h2').should('contain','Welcome to QAClick Academy');

    }); 
});


it('Handling Iframe Approach - 1', () =>{
    cy.visit("https://the-internet.herokuapp.com/");
    cy.contains("Frames").click();  
    cy.contains("iFrame").click();
    const iframe = cy.get('#mce_0_ifr')
    .its('0.contentDocument.body')
    .should("be.visible")
    .then(cy.wrap);

    iframe.clear().type("Hello {ctrl+a}");
    cy.get('button[aria-label="Bold"]').click();
   
});

it('Handling Iframe Approach - 2 (by using custom command)', () =>{
    cy.visit("https://the-internet.herokuapp.com/");
    cy.contains("Frames").click();  
    cy.contains("iFrame").click();
    cy.getIframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
    cy.get('button[aria-label="Bold"]').click();
   
});

it('Handling Iframe Approach - 3 (by using cypress-iframe plugin)', () =>{
    cy.visit("https://the-internet.herokuapp.com/");
    cy.contains("Frames").click();  
    cy.contains("iFrame").click();
    cy.frameLoaded("#mce_0_ifr"); // Load the frame
    // cy.iframe("#mce_0_ifr").find("#tinymce").clear();
    cy.iframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");       // interact with the frame
    cy.get('button[aria-label="Bold"]').click();

});
  
it('mouseover Actions', () =>{
    cy.visit("https://the-internet.herokuapp.com/jqueryui/menu");
    //cy.contains("Enabled").trigger("mouseover");
    cy.contains("Enabled").click({force:true});
    //cy.pause();
    //cy.get('div.mouse-hover-content').invoke('show');
    cy.contains("Downloads").trigger('mouseover');
   // cy.contains("Downloads").invoke('show');
    cy.contains("Downloads").click({force:true});
    // cy.wait(2000);
    cy.get('a[href*=".csv"]').should("have.text","CSV");
     cy.get('a[href*=".pdf"]').click();
     

});

it('Shadow DOM element', () =>{

         cy.visit("https://selectorshub.com/xpath-practice-page/");
 
        // 1st way 
        cy.wait(10000);
        cy.scrollTo('bottom');
        cy.get("#userName").shadow().find("#app2").shadow().find("#pizza").type("veg pizza");

           // 2nd way  -- set  includeShadowDom true as global level at configuration file.  "includeShadowDom" : true
        //    cy.get("#pizza").type("veg pizza");

        // // 3rd way  - pass "includeShadowDom" : true with get command in test steps level
        // cy.get("#pizza", {"includeShadowDom" : true}).type("veg pizza");  

       /*  cy.visit("https://the-internet.herokuapp.com/shadowdom");
        cy.get('span[slot="my-text"]', {"includeShadowDom" : true}).should("have.text", "Let's have some different text!");
        cy.get('ul[slot="my-text"] li:nth-child(1)').should("have.text", "Let's have some different text!");
        cy.get('ul[slot="my-text"] li:nth-child(2)').should("have.text","In a list!")  // for last two i set includeShadowDom" : true at global level in config file.
 */
});

it('print all tables value', () =>{
    cy.visit("https://the-internet.herokuapp.com/challenging_dom");
    // cy.get('div[class="large-10 columns"] table').within(() => {
    //     cy.get('tr').first().within(() =>{
    //         cy.get('td').each((cell) =>{
    //             cy.log(cell.text());
    //         })
    //     })
    // })

    // print all the data from table
    cy.get('div[class="large-10 columns"] table').within(() => {
        // Select all rows in the table body
        cy.get('tbody > tr').each(($row) => {
          // Iterate over each cell in the row and log its text
          cy.wrap($row).find('td').each(($cell) => {
            cy.log($cell.text());
          });
        });
      });


      // print first row from the table
      cy.get('div[class="large-10 columns"] table').within(() => {
        // Iterate through specific rows (1st and 3rd)
        cy.get('tbody tr').eq(0).each(($row) => {
          // Iterate through each cell (column) in the row
          cy.get($row).find('td').each(($cell) => {
            // Log the text from the cell
            cy.log($cell.text());
          });
        });
    
        // print third rown from the table
        cy.get('tbody tr').eq(2).each(($row) => {
          // Iterate through each cell (column) in the row
          cy.get($row).find('td').each(($cell) => {
            // Log the text from the cell
            cy.log($cell.text());
          });
        });
      });

});

it('Alert handling', () =>{
    cy.visit("https://the-internet.herokuapp.com/context_menu");
    cy.get("#hot-spot").rightclick();
    cy.on('window:alert', (str) => {
        expect(str).to.equal('You selected a context menu');
    });
});

it('Handling dropdown', () =>{
    cy.visit("https://the-internet.herokuapp.com/dropdown");
    cy.get("#dropdown").select("1").should("have.value", "1");
    
    cy.get("#dropdown").select("1").invoke('text').then((getText) => {
        getText = getText.trim().split("\n");
        expect(getText[1].trim()).to.equal("Option 1");
    })
});

it('Dynamic control', () =>{
    cy.visit("https://the-internet.herokuapp.com/dynamic_controls");

    //for checkbox
    cy.get('input[type="checkbox"]').check();
    cy.get('#checkbox-example>button').click();
    cy.get('#message').should('have.text',"It's gone!");
    cy.get('#checkbox-example>button').click();
    cy.get('#message').should('have.text',"It's back!"); 

    //for Textbox
    cy.get('#input-example>input').should('be.disabled');
    cy.get('#input-example>button').click();
    cy.get('#input-example>input').should('be.enabled');
    cy.get('#message').should('have.text',"It's enabled!");
    cy.get('#input-example>button').click();
    cy.get('#message').should('have.text',"It's disabled!");

});

it('Pop up validation',() => {
   cy.visit("https://the-internet.herokuapp.com/entry_ad"); 
   cy.get("#restart-ad").eq(0).click();
   cy.get('div[class="modal-body"] p').should("have.text","It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).");
   cy.get('div[class="modal-footer"] p').click();
});

it('Verify facebook login in Multi-Domain Testing with cy.origin', () =>{
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("facebook {enter}");
    //cy.get('a[href*="login"]').click();
    //cy.contains("Log in").click()
    cy.get('h3[class="LC20lb MBeuO DKV0Md"]').eq(0).click();
    cy.wait(5000);
    cy.origin("https://www.facebook.com",() =>{
        cy.get('[data-testid="royal_email"]').type("abc");
        cy.get('input[data-testid="royal_login_button"]').invoke('text').then((getText) =>{
            cy.log(getText);
            //expect(getText).to.equal("Log in");
            
        });
        cy.get('input[data-testid="royal_login_button"]').then((getTheText) =>{
            cy.log(getTheText);
        })
        cy.get('i[class="fb_logo img sp_EP9wX8qDDvu sx_d5b062"]').then((logo) =>{
            cy.log(logo.text());
        })
        cy.get('input[type="submit"]').invoke('attr',' value').then((getTheval) =>{
            cy.log(getTheval);
        })

        cy.get('[data-testid="royal_login_button"]').contains("Log in"); //This returns element with [data-testid="royal_login_button"] class having text Log in
        cy.get("#email",{timeout:1000}).should("be.visible"); //I wait for element to be visible or enable
        //cy.contains("Log in").should("have.text","");
        //cy.contains("Log in").click();
    })
    cy.visit("https://www.google.com/");
    
    
});

it('Geolocation', () =>{
    cy.visit("https://the-internet.herokuapp.com/geolocation");
    cy.get('.example button').click();
    // cy.window().then((locationOfTheArea) =>{
    //     cy.stub(locationOfTheArea,'prompt').returns('location');
    // })
    //cy.on('window:before:load', (win) => { cy.mockGeolocation(win, lat, long) })
    
    cy.contains("Latitude:").should("have.text","Latitude: ")

    
});

it('Different mouseover actions',()=>{
    cy.visit("https://the-internet.herokuapp.com/hovers");
    cy.get('img[alt="User Avatar"]').eq(0).trigger("mouseover");
    cy.contains("name: user1").should('have.text','name: user1');

    cy.get('img[alt="User Avatar"]').eq(1).trigger("mouseover");
    cy.contains("name: user2").should('have.text','name: user2');

    cy.get('img[alt="User Avatar"]').eq(2).trigger("mouseover");
    cy.contains("name: user3").should('have.text','name: user3');
    
    // number textbox
    cy.visit("https://the-internet.herokuapp.com/inputs");
    cy.get('input[type="number"]').type(1001);

    //key pess
    cy.visit("https://the-internet.herokuapp.com/key_presses");
    cy.get("#target").type('{shift}{alt}hello');
    cy.get("#target").clear().type('hello all {enter}');

    //multiple window
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get('a[href*="new"]').invoke("removeAttr", "target").click();
    cy.contains("New Window").should("have.text","New Window");

    //redirected link
    cy.visit("https://the-internet.herokuapp.com/redirector");
    cy.contains("here").click();
    cy.contains("200").eq(0).click();
    cy.contains("This page returned a 200 status code.").invoke('text').then((getText) => {
        getText = getText.trim().split("\n");
        expect(getText[0]).to.equal("This page returned a 200 status code.");
    });

});


it('location example',() =>{
    cy.visit("https://www.facebook.com");
    cy.location('protocol').should('equal','https:');
    cy.log(cy.location('host'));
    cy.location().should(loc =>{
        expect(loc.protocol).to.equal("https:");
        expect(loc.hostname).to.eq("www.facebook.com");
    });
    //cy.get().filter() //Get the DOM elements that match a specific selector. Opposite of .not()


    
})
it('Filter the product based on price range', () =>{
    cy.visit('https://www.amazon.in/');
    cy.get('#twotabsearchtextbox').type('Mobile {enter}');
    cy.get('.a-icon.a-icon-star-medium.a-star-medium-4').eq(0).click();
    cy.get('#low-price').type('10000',{delay:1000});
    cy.get('#high-price').type('20000');
    cy.get('.a-button-input').click();
    // cy.get('div[class*="puis-price-instructions"] span[class="a-price-whole"]').each((prices) =>{
    //         const price = parseInt(prices.text().replace(/,/g,''));
    //         expect(price).to.have.gte(10000);
    //         expect(price).to.have.lte(20000);
    // })

    cy.get('div[class*="puis-price-instructions"] span[class="a-price-whole"]').each(($product) => {
        // Extract the price of each product (replace 'price-selector' with the actual selector for the price)
        const priceText = $product.text();
        // Convert the price text to a number (you may need additional parsing depending on the actual format)
        const price = parseFloat(priceText.replace('$', '').replace(',', ''));
      
        // Check if the price is within the specified range
        //cy.wrap(price).should('be.gte', 10000).and('be.lte', 20000);
        expect(price).to.be.gte(10000).and.to.be.lte(20000);

      });
    
});

it('verify your account options in amazon website', function() {
    
    cy.visit('https://www.amazon.in/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('dasarindam469@gmail.com');
    cy.get('#continue').click();
    cy.get('#ap_password').type('Arindam@123');
    cy.get('#signInSubmit').click();
    cy.get('#nav-link-accountList').trigger('mouseover');
    cy.get('#nav-al-your-account>a:nth-child(2)').should('have.text', 'Your Account');
    cy.get('#nav-al-your-account>a:nth-child(3)').should('have.text', 'Your Orders');
    cy.get('#nav-al-your-account>a:nth-child(4)').should('have.text', 'Your Wish List');
    cy.get('#nav-al-your-account>a:nth-child(5)').should('have.text', 'Keep shopping for');
    cy.get('#nav-al-your-account>a:nth-child(6)').should('have.text', 'Your Recommendations');
    //cy.get('#nav-al-your-account>a:nth-child(7)').should('have.text', 'Your Wallet');
    cy.get('#nav-al-your-account>a:nth-child(8)').should('have.text', 'Your Prime Membership');
    cy.get('#nav-al-your-account>a:nth-child(9)').should('have.text', 'Your Prime Video');
    cy.get('#nav-al-your-account>a:nth-child(10)').should('have.text', 'Your Subscribe & Save Items');
    cy.get('#nav-al-your-account>a:nth-child(11)').should('have.text', 'Memberships & Subscriptions');
    cy.get('#nav-al-your-account>a:nth-child(12)').should('have.text', 'Your Seller Account');
    cy.get('#nav-al-your-account>a:nth-child(13)').should('have.text', 'Manage Your Content and Devices');
    cy.get('#nav-al-your-account>a:nth-child(14)').should('have.text', 'Your Free Amazon Business Account');
    cy.get('#nav-al-your-account>a:nth-child(16)').should('have.text', 'Switch Accounts');
    cy.get('#nav-al-your-account>a:nth-child(17)').should('have.text', 'Sign Out');

});

it('verify all the header options',() =>{
    cy.visit('https://www.amazon.in/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('dasarindam469@gmail.com');
    cy.get('#continue').click();
    cy.get('#ap_password').type('Arindam@123');
    cy.get('#signInSubmit').click();
    const arr = ["Today's Deals","Amazon miniTV","Sell","Gift Cards","Amazon Pay","Buy Again","Coupons",
                "Gift Ideas	","Amazon Business","Health, Household & Personal Care","AmazonBasics","Browsing History","Customer Service","Prime","Home Improvement","Books","Arindam's Amazon.in","Best Sellers","Fashion","New Releases","Grocery & Gourmet Foods","Home & Kitchen","Computers"," Electronics ","Toys & Games","Baby","Mobiles","Subscribe & Save","Sports, Fitness & Outdoors","Beauty & Personal Care","Pet Supplies","Car & Motorbike","Video Games"];
    cy.get('#nav-xshop>a').each((element,index) =>{
           cy.wrap(element).should('have.text',arr[index]);
    });
});

it('Verify your list option in amazon home page', () =>{
        
    cy.visit('https://www.amazon.in/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type('dasarindam469@gmail.com');
    cy.get('#continue').click();
    cy.get('#ap_password').type('Arindam@123');
    cy.get('#signInSubmit').click();
    cy.get('#nav-link-accountList').trigger('mouseover');
    cy.get('#nav-flyout-wl-items div>a:nth-child(1)').each((value) =>{
        value = value.text().trim();
        expect(value).to.equal('Shopping List');
    }) 
    cy.get('#nav-flyout-wl-items div>a:nth-child(2)').each((value) =>{
        value = value.text().trim();
        expect(value).to.equal('Shopping List 1');
    }); 
    cy.get('#nav-flyout-wl-items div>a:nth-child(3)').each((value) =>{
        value = value.text().trim();
        expect(value).to.equal('Shopping List 2');
    }); 
    cy.get('#nav-flyout-wl-items div>a:nth-child(4)').each((value) =>{
        value = value.text().trim();
        expect(value).to.equal('Shopping List 3');
    });
});

it("Opens URLs", () => {
    cy.visit('https://www.google.com'); 
    cy.get('[name="q"]').type('facebook{enter}');
    cy.get('a').contains('Facebook - log in or sign up').click();
    // Suppress unhandled promise rejection error
    cy.once('uncaught:exception', () => false);
    cy.origin('https://www.facebook.com/', () => {
      cy.visit('/');    
      cy.reload();
      //cy.wait(5000);
      cy.get('[data-testid="open-registration-form-button"]').should('exist');
    });
   // cy.get('[data-testid="open-registration-form-button"]').should('exist');
  //   cy.origin('https://www.facebook.com/',() => {
   // cy.get('#email').type("hi");
    //cy.get('a[data-testid="open-registration-form-button"]').should('exist');
  //   })
  });

it.only('Verify amazon login behaviour using origin',() =>{
    cy.visit('https://www.google.com'); 
    cy.get('[name="q"]').type('amazon{enter}');
    cy.get('.CCgQ5>span').click();
    cy.origin('https://www.amazon.in/', function() {
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type('dasarindam469@gmail.com');
        cy.get('#continue').click();
        cy.get('#ap_password').type('Arindam@123');
        cy.get('#signInSubmit').click();
        cy.get('#nav-search').type('Mobile');
        cy.get('nav-link-accountList-nav-line-1').invoke('text').then((ele) =>{
            cy.log(ele);
        }); 
    });

});  
});

 