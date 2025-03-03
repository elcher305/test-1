describe('Создание новой потребности работодателем', () => {
    beforeEach(() => {
        // Логин работодателя
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[name="username"]', { timeout: 10000 }).should('exist').type('employer@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('button[type="submit"]').click();
    });

    it('Должно успешно создать новую потребность', () => {
        // Переход на страницу создания потребности
        cy.visit('https://dev.profteam.su/needs/create');

        // Заполнение формы
        cy.get('input[name="title"]').type('Новая потребность');
        cy.get('textarea[name="description"]').type('Описание новой потребности');
        cy.get('select[name="category"]').select('IT');
        cy.get('button[type="submit"]').click();

        // Проверка успешного создания
        cy.url().should('include', '/needs/');
        cy.contains('Новая потребность').should('exist');
    });
});