describe('Просмотр страницы с вакансиями (с поиском и фильтром)', () => {


    it('Поиск  вакансии', () => {
        cy.visit('https://dev.profteam.su/vacancies?start_price=0&end_price=0');
        // Ввод названия вакансии
        cy.get('.form-input--text').type('IT - разработчик');

        // Выбор зарплаты "по диапазону"
        cy.get( ':nth-child(1) > .radio-component__input').click();

        // Ввод минимальной и максимальной зарплаты
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').type('10000');
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type('80000');

        // Выбор графика работы
        cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click();
        cy.get('.form-select__items > :nth-child(2)').click();

        // Выбор типа занятости
        cy.get( ':nth-child(4) > :nth-child(2) > .form-select__selected').click();
        cy.get('.form-select__items > :nth-child(2)').click();

        // Проверка, что фильтры применены
        cy.get('.form-input--text').should('have.value', 'IT - разработчик');
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').should('have.value', '10000');
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').should('have.value', '80000');
    });
});