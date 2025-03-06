describe('Подтверждение вакансии', () => {
    beforeEach(() => {
        // Переход на страницу авторизации перед каждым тестом
        cy.visit('https://dev.profteam.su/login');
    });

    // Функция для авторизации
    const login = (username, password) => {
        cy.get('input[type=text]').type(username); // Ввод логина
        cy.get('input[type=password]').type(password); // Ввод пароля
        cy.get('button[type=submit]').eq(2).click(); // Нажатие кнопки входа
    };

    // Функция для перехода в раздел вакансий
    const goToVacanciesSection = () => {
        cy.get(':nth-child(5) > .menu-item__item-name').click(); // Переход в раздел вакансий
    };

    // Функция для выбора вакансии
    const selectVacancy = () => {
        cy.get('.infinite-loader > :nth-child(3) > .button').click(); // Выбор вакансии
    };

    // Функция для подтверждения вакансии
    const confirmVacancy = () => {
        cy.get('.status-open__buttons > :nth-child(1)').click(); // Подтверждение вакансии
    };


    // Негативный сценарий: попытка подтверждения вакансии без авторизации
    it('Пользователь не может подтвердить вакансию без авторизации', () => {
        // Переход в раздел вакансий без авторизации
        goToVacanciesSection();

        // Проверка, что раздел вакансий загружен
        cy.url().should('include', '/vacancies');

        // Попытка выбора вакансии
        selectVacancy();

        // Попытка подтверждения вакансии
        confirmVacancy();

        // Проверка, что отображается сообщение об ошибке (например, "Необходимо авторизоваться")
        cy.get('.error-message').should('be.visible').and('contain', 'Необходимо авторизоваться');
    });


});