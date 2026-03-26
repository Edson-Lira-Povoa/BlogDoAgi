// Testes de busca no Blog do Agi
describe('Pesquisa no Blog do Agi', () => {
  const url = 'https://blogdoagi.com.br/';

  beforeEach(() => {
     cy.clearCookies()
     cy.clearLocalStorage()
     cy.visit(url)
     cy.wait(2000);
  });

  it('Deve retornar artigos ao pesquisar Cartão', () => {

    cy.get('.site-header-above-section-right > .ast-builder-layout-element').click();
    cy.get('input[type="search"]').type('cartão{enter}');
    cy.get('.ast-row').should('be.visible');
  });

  it('Deve mostrar mensagem para artigo inexistente', () => {

    cy.get('.site-header-above-section-right > .ast-builder-layout-element').click();
    cy.get('input[type="search"]').type('xxxxxxxxxx {enter}');
    cy.get('.page-content > p').should('be.visible')
  });
});