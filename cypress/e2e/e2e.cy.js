import enderecoPage from "../support/page_objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos/')

    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        //PRODUTO 1
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        //PRODUTO 2 
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
            .contains('Atomic Endurance Running Tee (Crew-Neck)').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        //PRODUTO 3 
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
            .contains('Augusta Pullover Jacket').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        //PRODUTO 4
        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()

        //CHECKOUT
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        //FATURAMENTO
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email,
        )
        cy.get('.woocommerce-notice').should('contain' ,'Obrigado. Seu pedido foi recebido.')
        cy.screenshot()


    });

   



 
})
