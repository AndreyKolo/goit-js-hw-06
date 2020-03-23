import users from './users.js';
('use strict');

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
    return users
        .filter(user => user["friends"].includes(friendName))
        .map(user => user.name)
};

console.table(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.table(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]