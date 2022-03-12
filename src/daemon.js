import Character from './character';

export default class Daemon extends Character {
  constructor() {
    super();
    this.type = 'Daemon';
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
