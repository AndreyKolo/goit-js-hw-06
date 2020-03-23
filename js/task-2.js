import users from './users.js';
('use strict');

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color)
};
console.table(getUsersWithEyeColor(users, "blue"));
//[объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//-----------------------------------------------------------------------------------------------
// const getUsersWithEyeColor = users => users.filter((user, color) => user.eyeColor === "blue");
// const eyeColors = getUsersWithEyeColor(users);
// console.table(eyeColors);
//-----------------------------------------------------------------------------------------------
// const getUsersWithEyeColor = users.filter((user, color) => {return user.eyeColor === "blue";});
// console.table(getUsersWithEyeColor);