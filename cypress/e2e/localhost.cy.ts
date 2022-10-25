/// <reference types="cypress" />

describe('Access homepage and test if the button is not clickable until all inputs are filled and checked', () => {
  it('Should access localhost', () => {
    cy.visit('http://localhost:8000')
  })

  it('Should check if button is disabled', () => {
    cy.get('a').should('have.class', 'disabled')
  })

  it('Should check the age input', () => {
    cy.get('[type="checkbox"]').check()
  })

  it('Should still be disabled', () => {
    cy.get('a').should('have.class', 'disabled')
  })

  it('Should uncheck the age input', () => {
    cy.get('[type="checkbox"]').uncheck()
  })

  it('Should still be disabled', () => {
    cy.get('a').should('have.class', 'disabled')
  })

  it('Should fill the form input', () => {
    cy.get('.input-text__name-input')
      .type('Fake name')
      .should('have.value', 'Fake name')
  })

  it('Should still be disabled', () => {
    cy.get('a').should('have.class', 'disabled')
  })

  it('Should check the age input', () => {
    cy.get('[type="checkbox"]').check()
  })

  it('Should enable button click', () => {
    cy.get('a').should('not.have.class', 'disabled')
  })
})

describe('Test if breweries page is accessable from homepage', () => {
  it('Should click on Enter button', () => {
    cy.get('a').click()
  })

  it('Should include breweries on URL', () => {
    cy.url().should('include', '/breweries')
  })
})

describe('Test if breweries page content is rendered', () => {
  it('Should contain the Header Component', () => {
    cy.get('.header')
  })

  it('Should contain the user name', () => {
    cy.get('.header__username').contains('Fake name')
  })

  it('Should contain the go back button', () => {
    cy.get('.header__previous-page').contains('Go back')
  })

  it('Should contain brewery cards', () => {
    cy.get('article')
  })
})

describe('Test if Brewery Card Tag works', () => {
  it('Should click new tag button', () => {
    cy.get('button').contains('Add More').click()
  })

  it('Should display new tag input', () => {
    cy.get('input').should('be.visible')
  })

  it('Should escape new tag input', () => {
    cy.get('input').type('{esc}')
  })

  it('Should write a new tag with tag1 label', () => {
    cy.get('button').contains('Add More').click()
    cy.get('input').type('tag1')
  })

  it('Should create tag1 pressing enter', () => {
    cy.get('input').type('{enter}')
  })

  it('Should check if tag1 exists', () => {
    cy.get('span').contains('tag1')
  })

  it('Should not display new tag input', () => {
    cy.get('input').should('not.exist')
  })

  it('Should write a new tag with tag2 label', () => {
    cy.get('button').contains('Add More').click()
    cy.get('input').type('tag2')
  })

  it('Should create tag2 clicking on check icon', () => {
    cy.get('.check-icon').click()
  })

  it('Should check if tag2 exists', () => {
    cy.get('span').contains('tag2')
  })

  it('Should not display new tag input', () => {
    cy.get('input').should('not.exist')
  })
})

describe('Test if Brewery Card delete button works', () => {
  it('Should exist a tag with tag1 label', () => {
    cy.get('article').contains('tag1').should('exist')
  })

  it('Should delete card with tag1', () => {
    cy.get('.trash-icon').eq(0).click()
  })

  it('Should not exist a tag with tag1 label', () => {
    cy.get('article').contains('tag1').should('not.exist')
  })
})

describe('Test if Header Go Back button works', () => {
  it('Should click on go back button', () => {
    cy.get('.header__previous-page').click()
  })

  it('Should be back at homepage', () => {
    cy.url().should('eq', 'http://localhost:8000/')
  })
})


