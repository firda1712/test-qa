describe('Verify Login', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
  })

  it('Login with invalid data', () => {
    cy.get('#menu-toggle').click()
    cy.get('.sidebar-nav > :nth-child(4) > a').click()
    cy.get('#txt-username').type('Teddy Bear')
    cy.get('#txt-password').type('ThisIsPassword')
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('contain','Login failed! Please ensure the username and password are valid.')
  })

  it('Login with valid data', () => {
    cy.get('#menu-toggle').click()
    cy.get('.sidebar-nav > :nth-child(4) > a').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.url().should('include','katalon-demo-cura.herokuapp.com/#appointment')
  })

})