describe('BrandPOS Homepage', () => {
    beforeEach(() =>{
        cy.visit('https://brandpos.de')
    })

    it ('Homepage Login', () => {
        //cy.visit('https://brandpos.de')
        cy.contains('Akzeptieren').click()
        //cy.get('.cookie-buttons > :nth-child(1)').click()
    })
    it ('Logo validation', () => {
        //cy.visit('https://brandpos.de')
        cy.contains('Akzeptieren').click()
        //cy.get('.logo_default').click()
        cy.contains('BrandPOS')
    })
    it ('Startseite validation', () => {
        //cy.visit('https://brandpos.de')
        cy.contains('Akzeptieren').click()
        cy.contains('Startseite').click()
        cy.contains('Unser SoftPOS')
        cy.contains('BrandPOS: SoftPOS – Transformieren Ihr Mobiltelefon in ein POS-Terminal')
    })
    it ('Home Login / Registrieren selection', () => {
        //cy.visit('https://brandpos.de')
        cy.contains('Akzeptieren').click()
        cy.contains('Login | Registrieren').click()
    })
})
describe('MAS BrandPOS Homepage', () => {
    beforeEach(() =>{
        cy.visit('https://mas.brandpos.de/?signup')
    })
    it ('MAS BrandPOS Signup Page', () => {
        cy.config('pageLoadTimeout', 1000)
        //cy.get('.sidebar').scrollTo('bottom')
        cy.get('.register_elements > .auth_header_text').contains('Sign up to')
        cy.get('.register_elements > .text-dark').contains('Activate Your BrandPOS Account')
    })
    it ('Registration Field Verification', () => {
        cy.config('pageLoadTimeout', 1000)
        cy.get('.align-items-center.gap-md-2 > :nth-child(1) > .form-label').contains('First name')
        cy.contains('Family name')
        cy.contains('Email')
        cy.contains('Company')
        cy.contains('Mobile')
        cy.contains('Password')
        cy.get('footer').scrollIntoView()
        //cy.get('[type="checkbox"]').uncheck()
        cy.get('.form-check-label').contains('Agree to terms and conditions')
        cy.get('#open_login_block').contains('Already have account')
    })
    it ('Existing Account link for login', () => {
        //const newItem = 'Already have account?'
        cy.get('footer').scrollIntoView()
        //cy.get('#open_login_block').click()
        cy.contains('Already have account').click()
        cy.contains('Email or Username')
        cy.contains('Password')
    })
    it ('Login with credentials', () => {
        cy.get('footer').scrollIntoView()
        cy.contains('Already have account').click()
        cy.contains('Email or Username')
        //cy.get('#email').should('have.text', 'Enter your email or username')
        cy.get('#email').type('skmb1203@gmail.com', {delay:100})
        cy.contains('Password')
        cy.get('#password').type('BPOSMurali123#', {delay:100})
        cy.contains('Login').click()
        cy.get('#cookie-banner > .btn').click()
        cy.get('.active > .nav-link > .nav-link-title').contains('Dashboard')
        cy.get('.top_header_container > .container-xl > .navbar-nav > .nav-item.dropdown > .nav-link').click()
        cy.get('#logout_me').click()
    })
})

/*function MASLogin(){
    it ('Login to MAS', () =>{
        cy.visit('https://mas.brandpos.de/?signup')
        cy.get('footer').scrollIntoView()
        cy.contains('Already have account').click()
        cy.contains('Email or Username')
        //cy.get('#email').should('have.text', 'Enter your email or username')
        cy.get('#email').type('skmb1203@gmail.com', {delay:50})
        cy.contains('Password')
        cy.get('#password').type('BPOSMurali123#', {delay:50})
        cy.contains('Login').click()
        cy.get()
    })
}

function MASLogout(){
    it ('Logout from MAS', () =>{
        cy.get('.active > .nav-link > .nav-link-title').contains('Dashboard')
        cy.get('.top_header_container > .container-xl > .navbar-nav > .nav-item.dropdown > .nav-link').click()
        cy.get('#logout_me').click()
    })
}*/