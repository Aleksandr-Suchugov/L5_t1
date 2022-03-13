import Character from './character';

export default class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type = 'Zombie', health = 100, level = 1, attack = 40, defence = 10);
  }
}
