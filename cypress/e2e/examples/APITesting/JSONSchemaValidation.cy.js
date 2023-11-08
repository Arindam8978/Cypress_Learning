// Install ajv library
// npm install ajv - via command line interface

const AJV = require('ajv');
const ajv = new AJV();

describe('Schema validation', () =>{

    it('Schema validation against response', () =>{

        cy.request({
            method: 'GET',
            url : 'https://fakestoreapi.com/products'
        })
        .then((response) =>{

            const schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "number"
                    },
                    "title": {
                      "type": "string"
                    },
                    "price": {
                      "type": "number"
                    },
                    "description": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "image": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "object",
                      "properties": {
                        "rate": {
                          "type": "number"
                        },
                        "count": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "rate",
                        "count"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "price",
                    "description",
                    "category",
                    "image",
                    "rating"
                  ]
                }
              } //schema end
              const validate = ajv.compile(schema); //this will check the response is according to the schema or not?
              const isValid = validate(response.body);
              expect(isValid).to.be.true;
        });
    });
});


/* 
1. validate: This is a reference to a function created by the ajv.compile(schema) call earlier 
in the code. The ajv.compile function compiles the JSON schema defined in the schema variable and 
returns a validation function. This function, when called with data (in this case, the response.body), 
checks if the data conforms to the schema.

2. response.body: This is the body of the HTTP response received after making an HTTP GET request
 using cy.request. It contains the data returned by the server in response to the request.

3. isValid = validate(response.body): This line invokes the validation function validate with 
response.body as its argument. The validation function compares the structure and data in the 
response body to the JSON schema defined in the schema variable. */