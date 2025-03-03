describe('Просмотр страницы с потребностями', () => {
    it('Должно отображать список потребностей с поиском и фильтром', () => {
        // Логин студента
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[name="username"]').type('student@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('button[type="submit"]').click();

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