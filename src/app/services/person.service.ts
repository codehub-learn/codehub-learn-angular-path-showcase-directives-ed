import { Injectable } from '@angular/core';
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  // name, age, country

  getPersons(): Person[] {
    return [
      new Person("Ioannis", 45, "UK"),
      new Person("Manolis", 23, "USA"),
      new Person("Nikoleta", 44, "UK"),
      new Person("Menelaos", 16, "GR"),
      new Person("Anna", 78, "GR"),
    ];
  }
}
