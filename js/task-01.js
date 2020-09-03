import user from './data.js';
import users from './data.js';

// 11111

const getUserNames = users => users.map(user => user.name);
// console.log(getUserNames(users));

// 22222

const getUsersWithEyeColor = (users, color) => {
  //   return user.filter(user => user.eyeColor === color);
};

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

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// 5555555

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// 6-----------------------

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
