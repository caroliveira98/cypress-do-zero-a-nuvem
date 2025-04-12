Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () =>{
    cy.get('#firstName').type('Ana Carolina')
    cy.get('#lastName').type('de Oliveira da Silva')
    cy.get('#email').type('caroldasilva@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

})