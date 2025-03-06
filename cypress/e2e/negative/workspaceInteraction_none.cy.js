describe('Общение с студентом и подтверждение вакансии', () => {
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

    // Функция для выбора статуса вакансии
    const selectVacancyStatus = (status) => {
        cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected').click(); // Открытие выпадающего списка
        cy.get('.form-select__items > :nth-child(2)').click(); // Выбор статуса вакансии
    };

    // Функция для выбора вакансии
    const selectVacancy = () => {
        cy.get('.infinite-loader > :nth-child(1) > .button').click(); // Выбор вакансии
    };

    // Функция для отправки сообщения студенту
    const sendMessageToStudent = (message) => {
        cy.get('.form-area').type(message); // Ввод сообщения
        cy.get('.comment-textarea__buttons > :nth-child(2)').click(); // Отправка сообщения
    };


    // Негативный сценарий: попытка отправки пустого сообщения
    it('Пользователь не может отправить пустое сообщение', () => {
        // Авторизация с валидными данными
        login('testerAdmin', 'Password1');

        // Переход в раздел вакансий
        goToVacanciesSection();

        // Выбор статуса вакансии
        selectVacancyStatus('Открытые');

        // Выбор вакансии
        selectVacancy();

        // Попытка отправки пустого сообщения
        cy.get('.comment-textarea__buttons > :nth-child(2)').click();

        // Проверка, что отображается сообщение об ошибке
        cy.get('.error-message').should('be.visible').and('contain', 'Сообщение не может быть пустым');
    });


});