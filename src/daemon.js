import Character from './character';

export default class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type = 'Daemon', health = 100, level = 1, attack = 10, defence = 40);
  }
}
