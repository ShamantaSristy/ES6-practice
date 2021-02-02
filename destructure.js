const person = { name: 'Harry Potter', age: 17, job:"Wizard", gfName:"Ginny Weasley", address:"4,Private Drive", friends: ['Ron','Hermione']};
const {name, gfName, address} = person;

// console.log(name,gfName,address);
const friends = ['Harry', 'Hermione', 'Ron', 'Sherlock', 'John'];
const [firstFriend, ...restFriends] = friends;
// console.log(restFriends);

const complexObject = {
    name: 'Jon Snow',
    info: {
         address: 'The Wall',
         leader : 'Commander Mormond'
    }
};

const {leader} = complexObject.info;