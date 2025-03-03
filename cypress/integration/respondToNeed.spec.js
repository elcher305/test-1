describe('Отклик на потребность студентом', () => {
    it('Должно успешно отправить отклик', () => {
        // Логин студента
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[name="username"]').type('student@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('button[type="submit"]').click();

        // Переход на страницу потребности
        cy.visit('https://dev.profteam.su/needs/1');

        // Отправка отклика
        cy.get('button[type="submit"]').click();

        // Проверка успешного отклика
        cy.contains('Ваш отклик отправлен').should('exist');
    });
});