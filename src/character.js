export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if ((name.length < 2) || (name.length > 10)) {
      throw new Error('Error: name length should be in b/w 2 and 10 bytes.');
    }
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!arr.includes(type)) {
      throw new Error('Error: type should be one of the list - Bowman, Swordsman, Magician, Daemon, Undead or Zombie.');
    }
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
