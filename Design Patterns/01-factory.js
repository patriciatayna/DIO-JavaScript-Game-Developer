// não é uma factory

// function FakeUser() {
//     this.name: 'Fulano';
//     this.lastName: 'de Tal';
// }

// const user = new FakeUser();

// é uma factory

function User() {
    return {
        name: 'Fulana',
        lastName: 'de Tal'
    }
}
// Factory
const user = User();
console.log(user);


function AnotherUser(name) {
    return {
        name,
        lastName: 'de Tal'
    }
}
// Factory
const anotherUser = AnotherUser('Cicrano');
console.log(anotherUser);


function Pessoa(customProperties) {
    return {
        name: 'Beltrana',
        lastName: 'de Tal',
        ...customProperties
    }
}
const p = Pessoa({name: 'Custom Name', lastName: 'Custom Last Name', age: 27, job: 'programmer'});
console.log(p);
