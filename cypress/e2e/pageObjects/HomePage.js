class HomePage {

    nameTestBox = 'div[class="form-group"]:nth-child(1)>input';
    gender = '#exampleFormControlSelect1';
    twoWaydataBinding = 'h4 input[type="text"]';
    entrepreneurRadioBtn = '#inlineRadio3';
    lengthTextBox = 'div[class="form-group"]:nth-child(1)>input';
    shpTab = 'a[href$="shop"]';


   getNameBox() {
        return cy.get(this.nameTestBox);
    }
    getGender(){
       return  cy.get(this.gender);
    }
   
    twoWayDatabindingTextBox(){
        return cy.get(this.twoWaydataBinding);
    }

    entrepreneurRadioButton() {
        return cy.get(this.entrepreneurRadioBtn);
    }

    checkLengthOfTheTextBox()
    {
        return cy.get(this.lengthTextBox);
    }

    shopTab(){
        return cy.get(this.shpTab);
    }
}

export default HomePage;