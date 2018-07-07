var SancCity = SancCity || {}


// stock game items that will be used in other objects
SancCity.space_per_food = 0.5;
SancCity.space_per_water = 0.5;
SancCity.space_per_person = 25;
SancCity.space_per_gear = 1;
SancCity.space_per_items = 1;
SancCity.game_pace = 1200;
SancCity.day_per_move = .2;
SancCity.easy_pace = 4;
SancCity.hard_pace = 20;
SancCity.player_win = 5000;
SancCity.event_chance = .12;
SancCity.enemy_cr = 5;
SancCity.enemy_loot_avg = 5;
SancCity.space_per_truck = 1000;
SancCity.food_per_person = .2;
SancCity.water_per_person = .4;
SancCity.gas_per_day = 1;
SancCity.dead_people = [];

// preset values for our random shops
SancCity.andreasShop = [
    
    water = {
        name: 'water',
        price: 1,
        quantity: 500,
    },
    food = {
        name: "food",
        price: 2,
        quantity:500
    },
     gas = {
        name: 'gas',
        price:2,
        quantity: 300
    },
     gear= {
        name: "gear",
        price: 2,
        quantity: 100,
    },
    
]
SancCity.shops = [
    [
        water = {
            name: 'water',
            price: 3,
            quantity: 100,
        },
        
        food = {
            name: 'food',
            price: 5,
            quantity: 100

        },

        gas = {
            name: 'gas',
            price: 5,
            quantity: 900
        }
    ],
    [ 
         water = {
            name: 'water',
            price: 5,
            quantity: 200,
        },

        food = {
            name: 'food',
            price: 10,
            quantity: 250

        },

        gas = {
            name: 'gas',
            price: 10,
            quantity: 200
        }

    ],

]
SancCity.checkpoints= [
    {
        name:"Tucson",
        distance: 1000,
        image_path: "images/tucson-sepia.jpeg",
    },
];
SancCity.session = {};

SancCity.session.init = function () {

    this.interface = SancCity.interface;
    // assign the GAME MASTER - that which controls the random events
    this.gameMaster = SancCity.gameMaster;

    this.convoy = SancCity.convoy;

    this.convoy.init({
        day: 1,
        money: 1800,
        people: [],
        items: 0,
        water: 100,
        food: 100,
        truck: 1,
        gas: 300,
        gear: 0,
        distance: 0,



    });
    this.convoy.interface = this.interface;
    this.convoy.gameMaster = this.gameMaster;

    this.interface.session = this;
    this.interface.convoy = this.convoy
    this.interface.gameMaster = this.gameMaster


    this.gameMaster.session = this;
    this.gameMaster.convoy = this.convoy;
    this.gameMaster.interface = this.interface;

    
}
 




SancCity.session.startGame = function () {

    this.gameRunning = true;
    this.pastTime = null;
    this.interface.notify("Sanctuary for you and your family awaits in far off Los Angeles, If only you can make it!", "positive");

    this.step();
};

SancCity.session.step = function (timestamp) {
    if (!this.pastTime) {
        this.pastTime = timestamp;
        this.refreshGame();
    }
    var progress = timestamp - this.pastTime;

    if (progress >= SancCity.game_pace && SancCity.session.gameRunning == true) {
        this.pastTime = timestamp;
        this.refreshGame();
    }

    if (this.gameRunning) window.requestAnimationFrame(this.step.bind(this));

};
SancCity.session.refreshGame = function () {
    this.convoy.day_count = 0;
    this.convoy.day_count += 1;
    this.convoy.day += SancCity.day_per_move;

    this.convoy.calculate_space();
    this.convoy.foodConsumed();
    this.convoy.waterConsumed();
    this.convoy.gasConsumed();
    this.convoy.updateDistance();


    this.interface.refreshConvoy()
    // lose conditoins
    if (this.convoy.people < 0) {
        this.convoy.people = 0;
        this.interface.notify("Your family has been destroyed", "negative");
        this.gameRunning = false;
        return;

    }
    if (this.convoy.food <= 0) {
        this.convoy.food = 0;
        this.interface.notify("Your family has starved to death in the cruel post-capatlist USA")
        this.gameRunning = false;
        return;
    }
    if (this.convoy.water <= 0) {
        this.convoy.water = 0;
        this.interface.notify("Your family has died of thirst in the land of opportunity...")
        this.gameRunning = false;
        return;
    } //winning conditions
    if (this.convoy.distance >= SancCity.player_win) {
        this.interface.notify("You've made it to Los Angeles! your chances of giving your children a better, safer life are far greater in this Sancutary City.  You can sleep easy, for now....", "positive")
        this.gameRunning = false;
        return;
    }
    // check to see if we made it to a city
    if (this.convoy.distance > SancCity.checkpoints[0].distance){
        this.showCity(SancCity.checkpoints[0])
        this.checkpoints.shift()
        SancCity.session.pause()

    }
    // random event
    if (Math.random() < SancCity.event_chance) {
        this.gameMaster.randomEncounter()
    }
};
SancCity.session.pause = function () {
    this.gameRunning = false;
};
SancCity.session.resume = function () {
    this.gameRunning = true;
    this.step();
}
// resume the game after pause or event
$(document).ready(function () {
    $("#resume_button").click(function () {
        SancCity.session.resume()
    })
});
// display city div and remove the current city from the cities array
SancCity.session.showCity = function (city){
    cityDiv = document.getElementById("cityDiv");
    cityDiv.classList.remove('hidden');
    cityDiv.style.backgroundImage ="url("+city.image_path+")";
    document.getElementById("city_headline").innerText= "Welcome to " +SancCity.checkpoints[0].name 
    

}



   // page turning functions for the start of the gamne.
    document.getElementById('page_1_continue').addEventListener('click', function(){
    document.getElementById('page_1').classList.add("hidden");
    document.getElementById('page_2').classList.remove("hidden")
});
    document.getElementById('page_2_continue').addEventListener('click', function(){
    document.getElementById('page_2').classList.add("hidden");
    document.getElementById('main_game').classList.remove("hidden");
    document.getElementById('andrea-store').classList.remove("hidden");
    
    SancCity.session.init()
    SancCity.interface.populateNames()
    document.getElementById("stat_money").innerText= 1800;
    document.getElementById("stat_food").innerText= 100;
    document.getElementById("stat_water").innerText= 100
    document.getElementById("stat_people").innerText = 5;
    SancCity.interface.populateShop(SancCity.andreasShop);
    SancCity.interface.refreshConvoy();
    SancCity.interface.notify('Better stock up on goods...')
});
    document.getElementById('start_game').addEventListener('click', function(){
    document.getElementById('page_2').classList.add("hidden");
    document.getElementById('andrea-store').classList.add('hidden')
    SancCity.session.startGame();
});


