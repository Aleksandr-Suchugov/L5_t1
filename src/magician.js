import Character from './character';

export default class Magician extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type = 'Magician', health = 100, level = 1, attack = 10, defence = 40);
  }
}
