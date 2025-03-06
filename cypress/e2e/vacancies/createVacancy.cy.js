describe('Создание вакансии', () => {
    it('Пользователь заходит и создает вакансию', () => {

        cy.visit('https://dev.profteam.su/login'); // переход на страницу авторизации

        // авторизация пользователя
        cy.get('input[type=text]').type('testerEmployer'); // логин
        cy.get('input[type=password]').type('Password1'); // пароль
        cy.get('button[type=submit]').eq(2).click(); // нажатие кнопки

        // создание вакансии
        cy.get(':nth-child(7) > .menu-item__item-name').click(); // открытие меню вакансий
        cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click(); // тык на кнопку "создать вакансию"


        cy.get('.vacancy-add-form-wrapper > .form').should('be.visible'); // проверка формы создания

        // заполнение формы
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type('Специалист в области IT разработки', { force: true }); // название вакансии

        // зарплата
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(1)').click({ force: true }); // тип зарплаты
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').type('100', { force: true }); // мин зп
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type('50000', { force: true }); // макс зп

        // тип занятости
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(3)').click({ force: true });

        // график
        cy.get('.form-control--responsive > .form-input--text').type('работаю по 12 часов в сутки, остальное время', { force: true });

        // требования
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type('Хотя бы на пол ставки, готов работать за еду', { force: true });

        // обязанности
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type('Я правда обязятельный человек', { force: true });

        // отправка
        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({ force: true });
    });
});