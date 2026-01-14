import Home from '../../src/app/page'

describe('Home Component', () => {
  it('renders the page with antd components', () => {
    cy.mount(<Home />)
    cy.contains('Página simples e bonita').should('be.visible')
    cy.get('button').contains('Isso é um botão').should('be.visible')
    cy.get('input').should('have.attr', 'placeholder', 'Digite algo')
  })
})
