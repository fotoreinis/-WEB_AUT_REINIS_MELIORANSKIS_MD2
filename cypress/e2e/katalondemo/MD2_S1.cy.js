describe('Scenario 1 - Make an Appointment', function() {
    it('appointment', function() {
      cy.visit('https://katalon-demo-cura.herokuapp.com/')
      cy.contains('Make Appointment').click()
      cy.get('input[placeholder="Username"]').invoke('attr', 'value').then(usernameText => {
        cy.get('#txt-username').type(usernameText);
      cy.get('input[placeholder="Password"]').invoke('attr', 'value').then(passwordText => {
        cy.get('#txt-password').type(passwordText);
      cy.get('button[type="submit"]').click();
     
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
  
      cy.get('#chk_hospotal_readmission').check()
  
      cy.get('#radio_program_medicaid').check()

      cy.get('.input-group-addon').click();

      cy.get('#txt_visit_date').click();
      cy.get('.datepicker-days').should('be.visible');

      // Izvēlieties dienu 30
      cy.contains('.day', '30').click();
  
      // Ievadiet komentāru
      cy.get('#txt_comment').type('CURA Healthcare Service')
  
      // Noklikšķiniet uz "Book Appointment"
      cy.contains('Book Appointment').click()
  
// Pārbauda, vai "Facility - Seoul CURA Healthcare Center" ir atrodams
cy.get('#facility').should('contain', 'Seoul CURA Healthcare Center');

// Pārbauda, vai "Hospital readmission - Yes" ir atrodams
cy.get('#hospital_readmission').should('contain', 'Yes');

// Pārbauda, vai "Program - Medicaid" ir atrodams
cy.get('#program').should('contain', 'Medicaid');

// Pārbauda, vai "Date - 30.03.2024" ir atrodams
cy.get('#visit_date').should('contain', '30/03/2024');

// Pārbauda, vai "Comment - CURA Healthcare Service" ir atrodams
cy.get('#comment').should('contain', 'CURA Healthcare Service');


    })
  })
})
})