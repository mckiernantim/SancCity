var SancCity =  SancCity || {}


// stock game items that will be used in other objects
SancCity.space_per_food = 0.5;
SancCity.space_per_water =0.5;
SancCity.space_per_person = 25;
SancCity.space_per_gear = 1;
SancCity.space_per_items= 1;
SancCity.game_pace = 1200;
SancCity.day_per_move = .2;
SancCity.easy_pace=10;
SancCity.hard_pace=20;
SancCity.player_win = 5000;
SancCity.event_chance=.40;
SancCity.enemy_cr= 5;
SancCity.enemy_loot_avg = 5;
SancCity.space_per_truck= 1000;
SancCity.food_per_person = .2
SancCity.water_per_person = .4
SancCity.gas_per_day = 1


SancCity.session = {};

SancCity.session.init = function(){
    
    this.interface = SancCity.interface;
    // assign the GAME MASTER - that which controls the random events
    this.gameMaster = SancCity.gameMaster;

        this.convoy = SancCity.convoy;
            
            this.convoy.init({
             day:0,
             money: 1000,
             people: 5,
             items: 10,
             water: 500,
             food: 250,
             truck: 1,
             gas: 1000,
             gear: 10


            });
        this.convoy.interface = this.interface;
        this.convoy.gameMaster = this.gameMaster;

        this.interface.session = this;
        this.interface.convoy =this.convoy
        this.interface.gameMaster= this.gameMaster


        this.gameMaster.session = this;
        this.gameMaster.convoy =this.convoy;
        this.gameMaster.interface=this.interface;

        this.startGame();
 }
 
SancCity.session.startGame = function() {
    
    this.gameRunning = true;
    this.pastTime = null;
    this.interface.notify("Sanctuary for you and your family awaits in far off Los Angeles, If only you can make it!", "positive");
   
    this.step();
};

SancCity.session.step =function(timestamp){
    if(!this.pastTime){
        this.pastTime = timestamp;
        this.refreshGame();
    }
    var progress = timestamp - this.pastTime;

    if(progress >= SancCity.game_pace){
        this.pastTime = timestamp;
        this.refreshGame();
    }
    
    if(this.gameRunning) window.requestAnimationFrame(this.step.bind((this)));

};
SancCity.session.refreshGame = function(){
    this.convoy.day_count=0;
    this.convoy.day_count+=1; 
    this.convoy.day += SancCity.day_per_move;

    this.convoy.foodConsumed();
    this.convoy.waterConsumed();
    this.convoy.gasConsumed();
    this.convoy.updateDistance();
    this.convoy.calculate_space();
   
    this.interface.refreshConvoy()

    if(this.convoy.people < 0){
        this.convoy.people = 0;
        this.interface.notify("Your family has been destroyed", "negative");
        this.gameRunning = false;
        return;

    }
    if(this.convoy.food <= 0) {
        this.convoy.food = 0;
        this.interface.notify("Your family has starved to death in the cruel post-capatlist USA")
        this.gameRunning = false;
        return;
    }
    if(this.convoy.water<=0){
        this.convoy.water = 0;
        this.interface.notify("Your family has died of thirst in the land of opportunity...")
        this.gameRunning = false;
        return;
    }
    if(this.convoy.distance >= SancCity.player_win){
        this.interface.notify("You've made it to Los Angeles! your chances of giving your children a better, safer life are far greater in this Sancutary City.  You can sleep easy, for now....", "positive")
        this.gameRunning = false;
        return;
    }
    SancCity.pause= function(){
        this.gameRunning = false;
    };
    SancCity.resume = function(){
        this.gameRunning =true;
    }
    if (Math.random()<SancCity.event_chance){
       this.gameMaster.randomEncounter()
    }
};
    
    
SancCity.session.init();

