var Player = Family || {};

Player.Convoy = {};

Player.Caravan.init = function(stats){
    this.food = stats.food;
    this.water = stats.water;
    this.money = stats.money;
    this.people = stats.people;
    this.gear = stats.gear;
    this.defense = stats.defense;
    this.items = stats.items;
};

