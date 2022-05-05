export class Contactos {
  name = "";
  lastName = "";
  completed = false;

  constructor(name, lastName, status) {
    this.name = name;
    this.lastName = lastName;
    this.completed = status;
  }
}

