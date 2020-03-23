import users from './users.js';
('use strict');

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = users => {
    const sortByFriends = (user1, user2) =>
        user1["friends"].length - user2["friends"].length;
    return users.sort(sortByFriends);
};

console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr',
//   'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]