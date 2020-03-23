    import users from './users.js';
    ('use strict');

    // Получить массив имен всех пользователей (поле name).

    const getUserNames = users => users.map(user => user.name);
    const names = getUserNames(users);

    console.table(names);
    // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr',
    // 'Blackburn Dotson', 'Sheree Anthony' ]

    // ----------------------------------------------------------------------------------
    // const getUserNames = users.map(user => { return user.name; });
    // console.table(getUserNames);
    // ----------------------------------------------------------------------------------
    // const getUserNames = users => {return users.map(user => {return user.name;});};
    // const names = getUserNames(users);
    // console.table(names);