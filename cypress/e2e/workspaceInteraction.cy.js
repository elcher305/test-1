describe('Взаимодействие внутри рабочего пространства', () => {
    beforeEach(() => {
        // Логин студента
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[name="username"]').type('student@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('button[type="submit"]').click();
    });

    it('Должно успешно отправлять сообщение в рабочем пространстве', () => {
        // Переход в рабочее пространство
        cy.visit('https://dev.profteam.su/workspace/1');

        // Отправка сообщения
        cy.get('textarea[name="message"]').type('Привет!');
        cy.get('button[type="submit"]').click();

        // Проверка отправки сообщения
        cy.contains('Привет!').should('exist');
    });
});