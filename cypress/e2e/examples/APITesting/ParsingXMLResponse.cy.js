//npm install xml2js - need to install this plugin to parse xml to json response

//const { resolve } = require('cypress/types/bluebird');
let xml2js = require('xml2js');
let parse = new xml2js.Parser({explicitArray:false});

describe('XML Parsing', () =>{

    const xmlPayload = "<Pet><id>0</id><Category><id>0</id><name>string</name></Category><name>doggie</name><photoUrls><photoUrl>string</photoUrl></photoUrls><tags><Tag><id>0</id><name>string</name></Tag></tags><status>available</status></Pet>";
    let petId = null;
    before('Creating pet', () =>{
        cy.request({
                method : 'POST',
                url : 'https://petstore.swagger.io/v2/pet',
                body: xmlPayload,
                headers : {
                    'Content-Type' : 'application/xml', // sending the request
                    'accept' : 'application/xml' // getting the response
                },
        }).then((response) =>{

            expect(response.status).to.eq(200);
            parse.parseString(response.body,(err,result) =>{  //convert the xml into json and store in to reslut variable and if any error will occure then it'll capture into err variable.
            petId = result.Pet.id;
            cy.log(petId);
            });
        });
    });

    it('Fetcing pet data-parsing xml response', () =>{
        cy.request({
                method : 'GET',
                url : 'https://petstore.swagger.io/v2/pet/'+petId,
                headers : {
                    'accept' : 'application/xml' // getting the response
                },
        }).then((response) =>{
            expect(response.status).to.eq(200);
            parse.parseString(response.body,(err,result) =>{  //convert the xml into json and store in to reslut variable and if any error will occure then it'll capture into err variable.
                expect(result.Pet.id).to.equal(petId);
                expect(result.Pet.name).to.equal("doggie");

            });
        });
    });

});
