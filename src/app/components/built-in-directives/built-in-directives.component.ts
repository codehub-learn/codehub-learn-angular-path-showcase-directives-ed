import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent implements OnInit {

  persons!: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

}
