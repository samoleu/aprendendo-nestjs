import { Injectable } from '@nestjs/common';
import { Person } from "./person"

class CounterIDService {
    id: number;
    constructor() {
        this.id = 0;
    }
    newId() {
        this.id++;
        return this.id;
    }
}

@Injectable()
export class PersonService {
    persons : Person[] = [
        { "id": 1, "name": "Samuel" },
        { "id": 2, "name": "Maria" },
        { "id": 3, "name": "João" },
        { "id": 4, "name": "Ana" },
        { "id": 5, "name": "Carlos" }
    ]

    private idService = new CounterIDService();

    findAll() {
        return this.persons;
    }

    findById(id: number): Person {
        const personFound =  this.persons.filter((person) => person.id === id);
        return personFound[0];
    }

    create(newPerson: Person) {
        newPerson.id = this.idService.newId();
        this.persons.push(newPerson)
    }

    update() {

    }

    delete() {

    }

}
