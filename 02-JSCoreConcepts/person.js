
class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname.toUpperCase()}`;
    }
        
    get shortName() {
        return `${this.name[0]}.${this.surname[0]}`;
    }
 }
        
        const janNowak = new Person('Jan', 'Nowak');
        const jakubDuda = new Person('Jakub', 'Duda');

        console.log(janNowak.fullName);
        console.log(janNowak.shortName);
        console.log(jakubDuda.fullName);
        console.log(jakubDuda.shortName);