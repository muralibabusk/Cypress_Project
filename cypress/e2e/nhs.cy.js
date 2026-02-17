//Testsuite name
describe ('Test nhs website', () => {
//Testcase name
    it ('Login to homepage', () => {
        //Teststep to execute
        cy.visit('https://nhs-paf.com')
        cy.get('.elementor-element-4c7e0bc8 > .e-con-inner > .elementor-element > .elementor-widget-container > a > .attachment-large')
        cy.contains('Meisterliches')
    })
    it ('Menu verification', () => {
        cy.visit('https://nhs-paf.com')
        cy.get('.elementor-element-5a52ffdf > .e-con-inner > .elementor-element > .elementor-widget-container > a > .attachment-large').click()
        cy.contains('Start')
    })
    it ('Goto Start page', () => {
        cy.visit('https://nhs-paf.com')
        cy.get('.elementor-element-5a52ffdf > .e-con-inner > .elementor-element > .elementor-widget-container > a > .attachment-large').click()
        cy.get('#menu-1-8ce34cb > .current-menu-item > .elementor-item').click()
        cy.contains('Handwerk')
    })
    it ('Projekte', () => {
        cy.visit('https://nhs-paf.com')
        cy.get('.elementor-element-5a52ffdf > .e-con-inner > .elementor-element > .elementor-widget-container > a > .attachment-large').click()
        cy.get('#menu-1-8ce34cb > .current-menu-item > .elementor-item').click()
        cy.contains('Projekte')
    })
})       