describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
  })

  it('Make appointment without input date', () => {
    cy.login('John Doe','ThisIsNotAPassword')
    cy.url().should('include','katalon-demo-cura.herokuapp.com/#appointment')
    cy.get('#chk_hospotal_readmission').click()
    cy.get('#txt_comment').type('please contact me if it is confirmed')
    cy.get('#btn-book-appointment').click()
    cy.get('thead > :nth-child(3) > :nth-child(2)').should('contain','Mo')
  })

  it('Make appointment without input date', () => {
    cy.login('John Doe','ThisIsNotAPassword')
    cy.url().should('include','katalon-demo-cura.herokuapp.com/#appointment')
    cy.get('#chk_hospotal_readmission').click()
    // cy.get('.input-group-addon').click()
    // cy.get('tbody > :nth-child(3) > :nth-child(2)').click()
    // cy.get(':nth-child(3) > .active').click()
    cy.get('#txt_visit_date').type('15/07/2024')
    cy.get('#radio_program_medicaid').click()
    cy.get('#txt_comment').type('please contact me if it is confirmed')
    cy.get('#btn-book-appointment').click()
    cy.url().should('include','katalon-demo-cura.herokuapp.com/appointment.php#summary')
  })
})