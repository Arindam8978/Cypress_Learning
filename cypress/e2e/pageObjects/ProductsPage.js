const selectors = 
{
    input : {
        chkOutButton : "a.nav-link.btn.btn-primary",
    }
}
class ProductsPage {

    checkOutButton(){
       return cy.get(selectors.input.chkOutButton);
    }
 
}

export default ProductsPage;
