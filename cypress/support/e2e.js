// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';   // for html report
import 'cypress-iframe';
import 'cypress-file-upload';
import 'cypress-drag-drop';
// import { config } from 'cypress/types/bluebird';
// import { promiseHooks } from 'v8';
// Alternatively you can use CommonJS syntax:
// require('./commands')

// const xlsx = require('node-xlsx').default;
// const fs = require('fs');
// const path = require('path');
// module.exports = (on,config) => {
//     on('task', { parseXlsx ({ filepath }) 
//     {
//         return new Promise((resolve,reject) =>
//         {
//             try {
//                 const jsonData = xlsx.parse(fs.readFileSync(filepath));
//                 resolve(jsonData);
//             }
//             catch (e)
//             {
//                 reject(e);
//             }});
        
//     }});}

