import { Controller, Get, Post, Res, Put, Delete, Body, Param } from '@nestjs/common';
import { Response } from 'express';
import { Person } from './person';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {

    constructor(private personService: PersonService){}

    @Get()
    findAll(@Res() response: Response) {
        const list = this.personService.findAll();
        return response.status(200).send(list);;
    }

    @Get('/:id')
    findById(@Res() response: Response) {
        const list = this.personService.findById();
        return response.status(200).send(list);
    }

    @Post()
    create(@Body() bodyRequest: Person @Res() response: Response) {
        const personCreated = this.personService.create(bodyRequest);
        return response.status(200).send(personCreated);;
    }

    @Put('/:id')
    update(@Param('id') id: number, @Res() response: Response) {
        const personUpdated = this.personService.update(id);
        return response.status(200).send(personUpdated);;
    }

    @Delete()
    delete(@Res() response: Response) {
        const list = this.personService.delete();
        return response.status(200).send(list);;
    }
}
