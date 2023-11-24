const { defineConfig } = require("cypress");
// const {
//   addCucumberPreprocessorPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor");
// const {
//   preprocessor,
// } = require("@badeball/cypress-cucumber-preprocessor/browserify");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", preprocessor(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
//const { config } = require("cypress/types/bluebird");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   // await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   // on("file:preprocessor", browserify.default(config));

//   // // Make sure to return the config object as it might have been modified by the plugin.
//   // return config;
//   // initPlugin(on, config);
//   // on("task", {
//   //   generateJSONFromExcel : generateJSONFromExcel
//   // });
//   // return config;

//   // module.exports = (on, config) => {
//   //   //initPlugin(on, config);
//   //   on("task", {
//   //     generateJSONFromExcel : generateJSONFromExcel
//   //   });
//   //   return config;
//   // }
// }

// module.exports = (on, config) => {
//   initPlugin(on, config);
//   on("task", {
//     generateJSONFromExcel : generateJSONFromExcel
//   });
//   return config;
// }

// Excel to json
// function generateJSONFromExcel(args)
// {
//   const wb = xlsx.readFile(args.executeFilePath, {dateNF : "mm/dd/yyyy "});
//   const ws = wb.Sheets[args.SheetName];
//   return xlsx.utils.sheet_to_json(ws, {raw: false});
// }

// const xlsx = require('xlsx');

// module.exports = (on, config) => {
//   on('task', {
//     generateJSONFromExcel({ filePath, sheetName }) {
//       const workbook = xlsx.readFile(filePath);
//       const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
//       return sheetData;
//     },
//   });
// };



module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  chromeWebSecurity : false,
  env : {   
       url : "https://rahulshettyacademy.com/angularpractice/", 
  },
  retries : {
    runMode : 1,
  },

  projectId: "2u9ptb",
  reporter: 'cypress-mochawesome-reporter',  // for html reports 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('task', {
      //   excelToJsonConverter(filepath){
      //     const result = excelToJson({
      //       source: fs.readFileSync(filepath)
      //     });
      //     return result;
      //   }
      // })
  
    },
    // baseUrl : 'https://demoblaze.com/index.html/',
    baseUrl : 'https://www.amazon.in/',

    //setupNodeEvents,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   require('cypress-mochawesome-reporter/plugin')(on);  // for html reports 
    // },

    
     //pecPattern : 'cypress/e2e/examples/*.js'

    // specPattern : 'cypress/integration/examples/*.js'
    //specPattern : 'cypress/integration/examples/APITesting/*.js'
    //specPattern : 'cypress/integration/examples/BDD/*.feature'

  },
  // "specPattern": [
  //   "Cypress_Learning\cypress\e2e\examples\Test7.cy.js",
  //   "Cypress_Learning\cypress\e2e\examples\Test8.cy.js",
  // ]

  // "testFiles": [
  //   "Test7.cy.js",
  //   "Test8.cy.js",
 
  //   ]
//"includeShadowDom" : true
  
});
