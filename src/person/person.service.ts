import { Injectable } from '@nestjs/common';
import { Person } from "./person"

class CounterIDService {
    id: number;
    constructor() {
        this.id = 5;
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
        const queryResult =  this.persons.filter((person) => person.id == id);
        return queryResult[0];
    }

    create(newPerson: Person) {
        newPerson.id = this.idService.newId();
        this.persons.push(newPerson)
    }

    update(id: number, newData: Person) {

        this.persons.forEach((person) => { 
            if(person.id == id) {
                person.name = newData.name;
            }}
        )
    }

    delete(id: number) {
        const queryResult = this.persons.findIndex((person) => person.id == id);
        this.persons.splice(queryResult, 1)
    }

}
