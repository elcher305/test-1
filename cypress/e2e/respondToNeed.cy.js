describe('Отклик на потребность студентом', () => {
    beforeEach(() => {
        // Логин студента
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[name="username"]', { timeout: 10000 }).should('exist').type('employer@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('button[type="submit"]').click();
    });

    it('Должно успешно отправить отклик', () => {
        // Переход на страницу потребности
        cy.visit('https://dev.profteam.su/needs/1');

        // Отправка отклика
        cy.get('button[type="submit"]').click();

        // Проверка успешного отклика
        cy.contains('Ваш отклик отправлен').should('exist');
    });
});