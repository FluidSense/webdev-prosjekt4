describe("Tests for UI elements. Checks if things are reachable, and if filters behave as expected.", function() {
   
    it('Attempts to write in the searchbar', function() {
        cy.visit('localhost:3000')
        cy.get('.search_bar')
             .type('Luke, I am your father')
             .should('have.value', 'Luke, I am your father')
    })
   
    it('Clicks filters, checks if the correct filter is placed, then removes filter. Also checks if switching from one filter to another goes seamlessly.', function() {
        cy.get('.checkbox:nth-child(1)')
            .click()
            cy.get('.search_bar')
                .should('have.value', 'planet/?search=')
            cy.get('.checkbox:nth-child(1)')
                .click()
                 .should('have.value', '')

        cy.get('.checkbox:nth-child(2)')
            .click()
            cy.get('.search_bar')
                .should('have.value', 'starships/?search=')
            cy.get('.checkbox:nth-child(2)')
                .click()
                .should('have.value', '') 

        cy.get('.checkbox:nth-child(3)')
            .click()
            cy.get('.search_bar')
                .should('have.value', 'people/?search=')
            cy.get('.checkbox:nth-child(3)')
                .click()
                .should('have.value', '')
    })
    it('Searches for Skywalker, check is result expands on click expanding', function() {
        cy.get('.checkbox:nth-child(3)')
            .click()
        cy.get('.search_bar')
            .should('have.value', 'people/?search=')
            .type('Skywalker {enter}')
            cy.get('li:nth-child(1)')
                .click()
                cy.contains('height: 172')

})
})

describe("Checks if the api is available, then does a testsearch for Skywalker.", function(){
   it('Sets a filter and searches for characters with the name "Skywalker", then checks if the document body contains the desired results.', function() {
    cy.get('.checkbox:nth-child(3)')
        .click()
    cy.get('.search_bar')
        .should('have.value', 'people/?search=')
        .type('Skywalker {enter}')
    cy.get('.search_wrapper')
        cy.contains('Luke Skywalker')
        cy.contains('Anakin Skywalker')
        cy.contains('Shmi Skywalker')
    it('Checks directly from the API if the same search yields the same response.', function() {
        cy.request('https://swapi.co/api/people/?search=Skywalker')
        .then((response) => {
            expect(response.body).to.have.property('count', 3)
            expect(response.body.results[0]).to.have.property('name', 'Luke Skywalker')
            expect(response.body.results[1]).to.have.property('name', 'Anakin Skywalker')
            expect(response.body.results[2]).to.have.property('name', 'Shmi Skywalker')
      })  
    })

   }) 
   it('Checks if an erroneous APIcall catches error.', function() {
    cy.get('.checkbox:nth-child(3)')
    .click()
    cy.get('.search_bar')
        .should('have.value', 'people/?search=')
        .type('Skywalker {enter}')
    cy.contains('.error_message')
})
})