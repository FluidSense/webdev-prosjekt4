describe("Tests for UI elements. Checks if things are reachable, and if filters behave as expected.", function() {
   
    it('Attempts to write in the searchbar', function() {
        cy.visit('localhost:3000')
        cy.get('.search_bar')
             .type('Luke, I am your father')
             .should('have.value', 'Luke, I am your father')
    })
    it('Searches for Skywalker, check is result expands on click expanding', function() {
        cy.get('.check_label:nth-child(3)')
            .click()
        cy.get('.search_bar')
            .clear()
            .type('Skywalker {enter}')
            cy.wait(3000)
            cy.get('.result_set')
                .click({multiple : true})
                cy.contains('height: 172')
})
it('Checks if it is possible to remove filters by placing a filter, searching and confirming correct info, removing said info and confirming the removal of filter.', function() {
    cy.get('.check_label:nth-child(1)')
        .click()
    cy.get('.search_bar')
        .clear()
        .type('Tatooine {enter}')
        cy.wait(3000)
        cy.get('.result_list')
            .click()
            cy.contains('https://swapi.co/api/planets/1/')
  
})
})

describe("Testsearch for Skywalker through our current implementation of search, then checks if the API is available and checks if the result from both searches yield the same result. ", function(){
   it('Sets a filter and searches for characters with the name "Skywalker", then checks if the document body contains the desired results.', function() {
    cy.get('.check_label:nth-child(3)')
        .click()
    cy.get('.search_bar')
        .clear()
        .type('Skywalker {enter}')
    cy.get('.result_set')
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
   
  it('Checks if an erroneous search displays nothing.', function() {
    cy.get('.check_label:nth-child(1)')
    .click()
    cy.get('.search_bar')
        .clear()
        .type('Skywalker {enter}')
    cy.wait(3000)
    cy.get('.result_wrapper')
    cy.contains('No')
})
})