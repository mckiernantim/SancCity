
var SancCity =  SancCity || {}

SancCity.convoy = {};

SancCity.convoy.init = function(stats){
    this.food = stats.food;
    this.water = stats.water;
    this.money = stats.money;
    this.people = stats.people;
    this.gear = stats.gear;
    this.defense = stats.defense;
    this.items = stats.items;
    this.truck = stats.truck;
    this.day =stats.day;
    this.gas = stats.gas
};

SancCity.convoy.calculate_space = function()
{
    let droppedGear= 0;
    let droppedItems=0;
    let droppedFood=0;
    let droppedWater=0;

    this.capacity = this.people * SancCity.space_per_person + this.truck * SancCity.space_per_truck;
    this.space_used = this.water * SancCity.space_per_water + this.food * SancCity.space_per_food + this.gear * SancCity.space_per_gear;
    while(this.gas > 0 && this.capacity  <= this.space_used){
        SancCity.easy_pace = 5;
        };
        SancCity_easy_pace =10;
        
  

};
// daily travel is the speed player moves - which is the slowest you can move 
// plius the trucks empty space divided by the fastest you can travel and your total space
SancCity.convoy.updateDistance = function(){
    var diff = this.capacity - this.space_used;
    var speed = SancCity.easy_pace + diff/this.capacity * SancCity.hard_pace;
    this.distance += speed;
}

//food consumed per day

SancCity.convoy.foodConsumed = function(){
    this.food -= this.people * SancCity.food_per_person;
    if (this.food < 0){
        this.food = 0;
    }
}
// water consumed per day
SancCity.convoy.waterConsumed = function(){
    this.water -= this.people * SancCity.water_per_person;
    if (this.water < 0){
        this.water = 0;
    }
}
SancCity.convoy.gasConsumed = function (){
    this.gas -= this.truck * (SancCity.gas_per_day * SancCity.easy_pace)
    if(this.gas < 0){
        this.gas = 0;
        SancCity.easy_pace=1
    }else if(this.gas > 0){
        SancCity.easy_pace =10

    }


}


