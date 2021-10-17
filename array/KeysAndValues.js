const person = {
    firstName: 'olatoye',
    lastName: ' Daramola',
    age: 28,
    email: 'olatoyeDave@gmail.com',
    hobbies: ['music', 'sleeping', 'game'],
    address: {
        city: 'San Francisco',
        state: 'CA',
    },
    getYearOfBirth: function() {
        return 2021 - this.age;
    }
}
ama = person.getYearOfBirth();
console.log(ama);