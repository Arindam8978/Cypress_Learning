
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
})

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
  
it.only('mouseover Actions', () =>{
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

})

it('Alert handling', () =>{
    cy.visit("https://the-internet.herokuapp.com/context_menu");
    cy.get("#hot-spot").rightclick();
    cy.on('window:alert', (str) => {
        expect(str).to.equal('You selected a context menu');
    });
})

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

})

});

 