describe('Подтверждение отклика работодателем', () => {
    beforeEach(() => {
        // Логин работодателя
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[name="username"]').type('employer@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('button[type="submit"]').click();
    });

    it('Должно успешно подтвердить отклик', () => {
        // Переход на страницу откликов
        cy.visit('https://dev.profteam.su/responses');

        // Подтверждение отклика
        cy.get('button[type="submit"]').click();

        // Проверка успешного подтверждения
        cy.contains('Отклик подтвержден').should('exist');
    });
});