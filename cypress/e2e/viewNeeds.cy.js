describe('Просмотр страницы с потребностями', () => {
    beforeEach(() => {
        // Логин студента
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[name="username"]', { timeout: 10000 }).should('exist').type('employer@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('button[type="submit"]').click();
    });

    it('Должно отображать список потребностей с поиском и фильтром', () => {
        // Переход на страницу потребностей
        cy.visit('https://dev.profteam.su/needs');

        // Поиск потребности
        cy.get('input[name="search"]').type('IT');
        cy.get('button[type="submit"]').click();

        // Проверка результатов поиска
        cy.contains('IT').should('exist');

        // Применение фильтра
        cy.get('select[name="category"]').select('IT');
        cy.get('button[type="submit"]').click();

        // Проверка результатов фильтрации
        cy.contains('IT').should('exist');
    });
});
