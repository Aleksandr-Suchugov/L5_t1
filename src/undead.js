import Character from './character';

export default class Undead extends Character {
  constructor() {
    super();
    this.type = 'Undead';
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
