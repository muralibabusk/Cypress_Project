// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

 /*Cypress.Commands.add('login', (email, password) => {

 })*/
 Cypress.Commands.add('LoginMAS', () => {
      /*cy.visit('/login')
      cy.get('input[name=email]').type(user.email)
      cy.get('input[name=password]').type(user.password)
      cy.get('button#login').click()
      cy.get('h1').contains(`Welcome back ${user.name}!`)*/
      cy.visit('https://mas.brandpos.de/?signup')
      cy.get('footer').scrollIntoView()
      cy.contains('Already have account').click()
      cy.contains('Email or Username')
      cy.get('#email').type('skmb1203@gmail.com', { delay: 50 })
      cy.contains('Password')
      cy.get('#password').type("BPOSMurali123#", { delay: 50 })
      cy.contains('Login').click()
      cy.get('.active > .nav-link > .nav-link-title')
        .should('be.visible')
        .log('Login is successful in MAS BrandPOS Portal')
    })
 Cypress.Commands.add('LogoutMAS', () => {
        cy.get('.breadcrumb > :nth-child(1)').click()
        cy.get('.active > .nav-link > .nav-link-title').contains('Dashboard')
        cy.get('.top_header_container > .container-xl > .navbar-nav > .nav-item.dropdown > .nav-link').click()
        cy.get('#logout_me').click()
        cy.get('#auth_container > :nth-child(1) > img')
          .should('be.visible')
          .log('Logout is done successfully')
        })
 