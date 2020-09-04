import user from './data.js';
import users from './data.js';

// 11111

const getUserNames = users => users.map(user => user.name);
// console.log(getUserNames(users));

// 22222

const getUsersWithEyeColor = (users, color) => {
  //   return user.filter(user => user.eyeColor === color);
};
const getUsersWithEyeColor = (array, color) =>
  array.filter(({ eyeColor }) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// 33333333

const getUsersWithGender = (users, gender) => {
  const res = users.filter(user => user.gender === gender);
  return res.map(user => user.name);
};

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 444444

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};
const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// 5555555

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};
const getUserWithEmail = (array, mail) =>
  array.find(({ email }) => email === mail);

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// 6-----------------------

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age > min && age < max)
    .map(({ name, email }) => ({ name, email }));

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// 7777777777777777777777777777777

const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

const calculateTotalBalance = array =>
  array.reduce((totalBalance, { balance }) => totalBalance + balance, 0);
// console.log(calculateTotalBalance(users)); // 20916

// 8888888888888888888888888888
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};
const getUsersWithFriend = (array, friendName) =>
  array
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// 999999999999999999

const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);
};

const getNamesSortedByFriendsCount = array => {
  const newArray = [...array];

  return newArray
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(({ name }) => name);
};

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 1010101010101010

const getSortedUniqueSkills = users => {
  const skills = users.reduce((acc, user) => [...acc, ...user.skills], []);

  let array = [];
  skills.map(skill => {
    if (!array.includes(skill)) {
      array.push(skill);
    }
  });

  return array.sort();
};

const getSortedUniqueSkills = array => {
  const userSkills = array.reduce((acc, user) => [...acc, ...user.skills], []);

  const newSkills = userSkills.filter((a, b) => userSkills.indexOf(a) === b);

  return newSkills.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
