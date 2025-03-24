// первое задание
const users = [
    { id: 1, name: "user1", age: 25, isOnline: true },
    { id: 2, name: "user2", age: 30, isOnline: false },
    { id: 3, name: "user3", age: 22, isOnline: true },
    { id: 4, name: "user4", age: 27, isOnline: false },
];
// #1
const filteredUsers= users.filter((user) => user.isOnline);
console.log(filteredUsers);
// #2
const statusUsers = users.map((user) => {
    let status = "Offline";
    if (user.isOnline) {
        status = "Active";
    }
    return {
        ...user,
        status
    }
});
console.log(statusUsers);
// #3
const findUser = users.find((user) => user.id === 3);
console.log(findUser?.name);
// #4
const totalAge = users.reduce((val, user) => val + user.age, 0);
const averageAge = totalAge / users.length;

console.log(`Average age of all users: ${averageAge}`);

// второе задание
const invertObject = obj => {
    const b = {};
    Object.entries(obj).forEach(([key, value]) => {
        b[value] = key;
    });
    return b;
};
const roles = { admin: "Alice", user: "Bob", guest: "Charlie" };
console.log(invertObject(roles)); // { Alice: "admin", Bob: "user", Charlie: "guest" }
//третье задание

const countOccurrences = arr => arr.reduce((val, word) => {
    val[word] = (val[word] || 0) + 1;
    return val;
}, {});

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(words)); // { apple: 3, banana: 2, orange: 1 }

