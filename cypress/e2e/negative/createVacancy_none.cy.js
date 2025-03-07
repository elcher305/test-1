describe('Создание вакансии', () => {


        cy.visit('https://dev.profteam.su/login');


    // Функция для авторизации
    const login = (username, password) => {
        cy.get('input[type=text]').type(username); // Ввод логина
        cy.get('input[type=password]').type(password); // Ввод пароля
        cy.get('button[type=submit]').eq(2).click(); // Нажатие кнопки входа
    };

    // Функция для перехода в раздел создания вакансии
    const goToCreateVacancy = () => {
        cy.get(':nth-child(7) > .menu-item__item-name').click(); // Открытие меню вакансий
        cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click(); // Нажатие кнопки "Создать вакансию"
    };

    // Функция для заполнения формы вакансии
    const fillVacancyForm = (data) => {
        // Название вакансии
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type(data.title, { force: true });

        // Зарплата
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(1)').click({ force: true }); // Тип зарплаты
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').type(data.minSalary, { force: true }); // Мин зп
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type(data.maxSalary, { force: true }); // Макс зп

        // Тип занятости
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(3)').click({ force: true });

        // График
        cy.get('.form-control--responsive > .form-input--text').type(data.schedule, { force: true });

        // Требования
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.requirements, { force: true });

        // Обязанности
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.responsibilities, { force: true });
    };

    // Функция для отправки формы
    const submitVacancyForm = () => {
        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({ force: true });
    };

    // Негативный сценарий: попытка создания вакансии без заполнения обязательных полей
    it('Пользователь не может создать вакансию без заполнения обязательных полей', () => {
        // Авторизация с валидными данными
        login('testerEmployer', 'Password1');

        // Переход в раздел создания вакансии
        goToCreateVacancy();

        // Проверка, что форма создания вакансии отображается
        cy.get('.vacancy-add-form-wrapper > .form').should('be.visible');

        // Попытка отправки формы без заполнения обязательных полей
        submitVacancyForm();

    });


});