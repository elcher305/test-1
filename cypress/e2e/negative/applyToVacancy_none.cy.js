describe('Отклик на вакансию студентом', () => {
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

    // Функция для перехода на страницу вакансий
    const goToVacanciesPage = () => {
        cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click(); // Переход на страницу вакансий
    };

    // Функция для отклика на вакансию
    const applyForVacancy = () => {
        cy.get('.card-main__button-flag').first().click(); // Отклик на первую вакансию
    };


    // Негативный сценарий: попытка отклика на вакансию без авторизации
    it('Пользователь не может откликнуться на вакансию без авторизации', () => {
        // Переход на страницу вакансий без авторизации
        goToVacanciesPage();

        // Проверка, что страница вакансий загружена
        cy.url().should('include', '/vacancies');

        // Попытка отклика на вакансию
        applyForVacancy();

        // Проверка, что отображается сообщение об ошибке (например, "Необходимо авторизоваться")
        cy.get('.error-message').should('be.visible').and('contain', 'Необходимо авторизоваться');
    });
    
});