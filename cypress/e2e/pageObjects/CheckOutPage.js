class CheckOutPage {

    verifyThePrice(){
        let sum =0;
        cy.get('tr td:nth-child(4)>strong').each(($el,indexe,$list) =>{
           let amount = $el.text();
           let result = amount.split(" ")
           result = result[1].trim();
           sum = Number(sum) + Number(result);
           cy.log(result);
          
        }).then(function() {
            cy.log(sum);
        });

        cy.get('td.text-right>h3>strong').then(function(element){
            let amount = element.text();
            let total = amount.split(" ")
            total = total[1].trim();
            expect(sum).to.equal(Number(total));
        });
    }

    checkOutButton(){
       return cy.get('button.btn.btn-success');
    }
 
}
export default CheckOutPage;