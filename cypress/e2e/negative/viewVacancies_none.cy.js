describe('Просмотр страницы с вакансиями (с поиском и фильтром)', () => {
    beforeEach(() => {
        // Переход на страницу вакансий перед каждым тестом
        cy.visit('https://dev.profteam.su/vacancies?start_price=0&end_price=0');
    });

    // Функция для ввода названия вакансии
    const enterVacancyTitle = (title) => {
        cy.get('.form-input--text').type(title); // Ввод названия вакансии
    };

    // Функция для выбора зарплаты "по диапазону"
    const selectSalaryRange = (minSalary, maxSalary) => {
        cy.get(':nth-child(1) > .radio-component__input').click(); // Выбор зарплаты "по диапазону"
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').type(minSalary); // Ввод минимальной зарплаты
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type(maxSalary); // Ввод максимальной зарплаты
    };

    // Функция для выбора графика работы
    const selectWorkSchedule = (schedule) => {
        cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click(); // Открытие выпадающего списка
        cy.get('.form-select__items > :nth-child(2)').click(); // Выбор графика работы
    };

    // Функция для выбора типа занятости
    const selectEmploymentType = (employmentType) => {
        cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click(); // Открытие выпадающего списка
        cy.get('.form-select__items > :nth-child(2)').click(); // Выбор типа занятости
    };


    // Негативный сценарий: поиск вакансии с неверными данными
    it('Пользователь не может найти вакансию с неверными данными', () => {
        // Ввод неверного названия вакансии
        enterVacancyTitle('Несуществующая вакансия');

        // Выбор зарплаты "по диапазону"
        selectSalaryRange('100000', '200000');

        // Выбор графика работы
        selectWorkSchedule('Полный день');

        // Выбор типа занятости
        selectEmploymentType('Полная занятость');

        // Проверка, что фильтры применены
        cy.get('.form-input--text').should('have.value', 'Несуществующая вакансия');
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').should('have.value', '100000');
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').should('have.value', '200000');

        // Проверка, что результаты поиска не отображаются
        cy.get('.vacancy-list').should('not.exist');
    });


});