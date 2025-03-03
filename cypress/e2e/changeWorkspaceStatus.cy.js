describe('Смена статуса рабочего пространства', () => {
    beforeEach(() => {
        // Логин работодателя
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[name="username"]').type('employer@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('button[type="submit"]').click();
    });

    it('Должно успешно сменить статус', () => {
        // Переход в рабочее пространство
        cy.visit('https://dev.profteam.su/workspace/1');

        // Смена статуса
        cy.get('select[name="status"]').select('В процессе');
        cy.get('button[type="submit"]').click();

        // Проверка смены статуса
        cy.contains('В процессе').should('exist');
    });
});