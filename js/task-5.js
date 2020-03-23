import users from './users.js';
('use strict');

// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email)
};

console.table(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}
console.table(getUserWithEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}