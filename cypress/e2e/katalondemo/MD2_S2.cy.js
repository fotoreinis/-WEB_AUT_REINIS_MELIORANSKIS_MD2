describe('Scenario 2 - Appointment history empty', function() {
    it('appointment history', function() {
      cy.visit('https://katalon-demo-cura.herokuapp.com/')
      cy.contains('Make Appointment').click()
      cy.get('input[placeholder="Username"]').invoke('attr', 'value').then(usernameText => {
        cy.get('#txt-username').type(usernameText);
        cy.get('input[placeholder="Password"]').invoke('attr', 'value').then(passwordText => {
          cy.get('#txt-password').type(passwordText);
          cy.get('button[type="submit"]').click();
          cy.get('#menu-toggle').click();
          cy.get('#sidebar-wrapper').should('have.class', 'active');
          cy.contains('History').click();
          cy.contains('No appointment').should('be.visible');
        })
      })
    })
  })
  