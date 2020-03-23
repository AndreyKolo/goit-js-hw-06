import users from './users.js';
('use strict');

// Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender);
};

console.table(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ---------------------------------------------------------------------------------------------------
// const getUsersWithGender = users => {
//   return users.filter(genders => {
//     return genders.gender === "male";
//   });
// };
// const userGenders = getUsersWithGender(users);
// console.table(userGenders);
// ---------------------------------------------------------------------------------------------------
// const getUsersWithGender = users => users.filter((user, gender) => user.gender === "male");
// const genders = getUsersWithGender(users);
// console.table(genders);
// ---------------------------------------------------------------------------------------------------
// const getUsersWithGender = users.filter((user, gender) => { return user.gender === 'male'; });
//   console.table(getUsersWithGender);