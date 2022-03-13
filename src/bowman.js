import Character from './character';

export default class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type = 'Bowman', health = 100, level = 1, attack = 25, defence = 25);
  }
}
