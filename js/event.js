var SancCity = {} || SancCity

SancCity.gameMaster = {};
let enemies = [
    tikiNazi={
        cr: 1,
        name: "Tiki Nazi",
        image_path: "",
        health: 6,
        bonus: 2,
        power: 4,
        flavorText: "He has a tiki torch...he doesn't look to tough"

    },
    racistCop={
        cr: 3,
        name: "Racist Cop",
        image_path: "",
        health: 10,
        bonus: 2,
        power: 6,
        flavorText: "Drunk on power, this guy means business"

    },
    sherriffArpaio={
        cr: 5,
        name: "Sherrif Arpaio",
        image_path: "",
        health: 10,
        bonus: 5,
        power: 8,
        flavorText: "The Soverign king of Racist White Men hefts a shotgun."

    },
    scaryNazi={
        cr: 2,
        name: "Scary Nazi",
        image_path: "",
        health: 10,
        bonus: 2,
        power: 6,
        flavorText: "He weilds a baseball bat menacingly. "

    },
    borderPatrol={
        cr: 4,
        name: "Border Patrol",
        image_path: "",
        health: 8,
        bonus: 2,
        power: 6,
        flavorText: "He unfurls his baton ready to take you back across the border."

    },
    redneck={
        cr: 1,
        name: "Redneck Asshole",
        image_path: "",
        health: 4,
        bonus: 2,
        power: 4,
        flavorText: "He raises his fists in his best UFC impression."

    },
    infoWarsIdiot={
        cr: 1,
        name: "Info Wars Moron",
        image_path: "",
        health: 5,
        bonus: 2,
        power: 4,
        flavorText: "This babbling idiot screams conspiracy theories as he charges you."

    },
    pizzaGateBeliever={
        cr: 3,
        name: "Pizza Gate Believer",
        image_path: "",
        health: 12,
        bonus: 2,
        power: 6,
        flavorText: "He screams about the globalist deeps state and charges you with a knife."

    },
    coyoteSmuggler={
        cr: 1,
        name: "Coyote Smuggler",
        image_path: "",
        health: 6,
        bonus: 2,
        power: 6,
        flavorText: "The smuggler eyes you greedily and pulls a knife",

    },
    suburbanVigilante={
        cr: 1,
        name: "Suburban Vigilante",
        image_path: "",
        health: 10,
        bonus: 0,
        power: 4,
        flavorText: "This woman already spoke to the manager....now she's running at you with a hammer"

    },

]
let enemy;


SancCity.gameMaster.types = [
    {
        type: 'CHANGE_STATS',
        style: 'negative',
        stat: 'food',
        value: -5,
        text: "A pack of wild Javelinas have broken into your food supply. Food: "

    },

    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: "money",
        value: -50,
        text: "Local police agree to look the other way if you make it worth their while: Money: "
    },

    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'water',
        value: -10,
        text: "Your water supplies have a leak.  Water: "
    },

    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'defense',
        value: -1,
        text: "Days on the road have taken their toll on your body. You awake stiff, feeling weaker.  Defense:  "
    },
    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'gear',
        value: -2,
        text: "Theives make off with equipment during the night.  Gear: "
    },
    {
        type: 'CHANGE-STATS-PEOPLE-BAD',
        style: 'negative',
        stat: 'people',
        value: -1,
        text: "A violent mob of red-hatted Americans come across your camp. You split up and flee to the desert.  When you regroup you notice someone is missing."
    },
    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'water',
        value: -10,
        text: "Your water supplies have a leak.  Water: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'food',
        value: -20,
        text: "Someone has broken into your supplies, things are missing.  Food: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'positive',
        stat: 'food',
        value: 10,
        text: "A group of kind Americans approach.  They are sympathetic to your cause  Food gained: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'positive',
        stat: 'money',
        value: 25,
        text: "A group of kind Americans approach.  They are sympathetic to your cause  Food gained: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'positive',
        stat: 'water',
        value: 10,
        text: "A group of kind Americans approach.  They are sympathetic to your cause  Food gained: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'food',
        value: -20,
        text: "Someone has broken into your supplies, things are missing.  Food: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'gear',
        value: -20,
        text: "Someone has broken into your supplies, things are missing.  Gear: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'water',
        value: -20,
        text: "Someone has broken into your supplies, things are missing.  Water: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'money',
        value: -20,
        text: "Someone has broken into your supplies, things are missing.  Money: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'poisitive',
        stat: 'water',
        value: 10,
        text: "You party comes across a small freshwater spring.  Water gained:  "
    },
    {
        type: 'CHANGE-STATS',
        style: 'positive',
        stat: 'gear',
        value: 2,
        text: "You come upon the remains of a migrant camp.  It looks as if they left in a hurry and in their haste left behind some supplies:  Gear gained:  Gear gaineed: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'positive',
        stat: 'people',
        value: 1,
        text: "Your convoy has come across a frail migrant woman traveling alone.  She'll die out here on her own.  Peaople gained:  "
    },
    {
        type: 'CHANGE-STATS',
        style: 'positive',
        stat: 'people',
        value: 1,
        text: "Your convoy has come across a small child seperated from his family.  He'll die out here on his own.  Peaople gained:  "
    },
    {
        type: 'CHANGE-STATS',
        style: 'positive',
        stat: 'food',
        value: 10,
        text: "You find a small cache of food left behind from another convoy.  Food gained: "
    },
    {
        type: 'CHANGE-STATS',
        style: 'positive',
        stat: 'food',
        value: 10,
        text: "A group of millenials approach.  After lamenting the state of their country, they take selfies with your family and leave a small donation. Money gained: " 
    },
    {
        type: 'ENCOUNTER',
        style: 'neutral',
        text: "The sound of engines cut through the desert night at your camp.  Trucks are coming closer.  What do you do?",
        options:  {
            option_one: { 
                choice: "Flee",
                outcome: "You're beset by the American Border patrol and scramble for safety but they manage to get some of your party",
                stat: 'people',
                value: -2, 
            },
            option_two: {
                choice: "Do nothing",
                outcome: "A squad of American Border Patrol agents rip past you quiet camp.  They fail to notice you but not everyone will be so lucky."
        },
            option_three:{
                choice: "Flag them down",
                outcome: 'The trucks you flag down are none other than United States Border Patrol.  The Sergent in charge demands a bribe',
                stat: 'money',
                value: "-300",
            }
        }
    },
    {
        type: 'FIGHT',
        style: 'negative',
        stat: 'food',
        value: 10,
        text: "A group of millenials approach.  After lamenting the state of their country, they take selfies with your family and leave a small donation. Money gained: "
    },
    {
        type: 'FIGHT',
        style: 'negative',
        stat: 'food',
        value: 10,
        text: "A group of millenials approach.  After lamenting the state of their country, they take selfies with your family and leave a small donation. Money gained: "
    },
    {
        type: 'FIGHT',
        style: 'negative',
        stat: 'food',
        value: 10,
        text: "A group of millenials approach.  After lamenting the state of their country, they take selfies with your family and leave a small donation. Money gained: "
    },
    {
        type: 'FIGHT',
        style: 'negative',
        stat: 'food',
        value: 10,
        text: "A group of millenials approach.  After lamenting the state of their country, they take selfies with your family and leave a small donation. Money gained: "
    },
    {
        type: 'FIGHT',
        style: 'negative',
        stat: 'food',
        value: 10,
        text: "A group of millenials approach.  After lamenting the state of their country, they take selfies with your family and leave a small donation. Money gained: "
    },
    {
        type: 'FIGHT',
        style: 'negative',
        stat: 'food',
        value: 10,
        text: "A group of millenials approach.  After lamenting the state of their country, they take selfies with your family and leave a small donation. Money gained: "
    },
    {
        type: 'FIGHT',
        style: 'negative',
        stat: 'food',
        value: 10,
        text: "A group of millenials approach.  After lamenting the state of their country, they take selfies with your family and leave a small donation. Money gained: "
    },

    // {
    //         type: 'SHOP',
    //         style: 'neutral',
    //         name: 'Roadside Gas Station',
    //         text: "A small gas station stands by the road.  The proprieter offers supplies.",
    // },
    // {
    //         type: 'SHOP',
    //         style: 'neutral',
    //         name: 'Smugglers ',
    //         text: "A group of smugglers flag you down offering exotic goods.",
    // },
    // {
    //         type: 'SHOP',
    //         style: 'neutral',
    //         name: 'Traveling Convoy',
    //         text: "A fellow traveler of the trail waves you down.  He offers to sell some extra supplies",
    // },
    // {
    //         type: 'SHOP',
    //         style: 'neutral',
    //         name: 'Truck Stop',
    //         text: "A sleepy truck stop.  The man behind the counter eyes you suspiciously.",
    // },

]
SancCity.gameMaster.battleMode = function () {
    document.getElementById('fight_container').classList.remove('hidden')
    document.getElementById('fight_banner').innerText="BATTLE!"
    let turn = 0;
    user = {
        health: 20,
        turn: true,
        bonus: player.bonus
    }
    badGuy = {
        turn: false,
        health: enemy.health,
        cr: enemy.cr,
        name: enemy.name,
    }

    if (user.turn === true) {   
        document.getElementById('attack_button').addEventListener("click", function () {
            turn+=1;
         
            let playerAttack = Math.floor((Math.random() * 20) + 1) +user.bonus;
            let badGuyMoney = badGuy.cr *Math.floor((Math.random() * 100) + 1)
           console.log(playerAttack + " player attack")
           console.log(user.health+ " user hp")
           console.log(badGuy.health + "bad guy hp")
          if (playerAttack > 12) {
                    var damage = Math.floor((Math.random() * 6) + 1)+ player.bonus; {
                        document.getElementById('battle_feed').innerHTML = "<div> Turn " + turn+": You hit for " + damage + "damage! </div>" + document.getElementById('battle_feed').innerHTML;
                    }
                    
                    console.log(badGuy.health + "bad guy hp");
                    console.log(damage)
                    badGuy.health -= damage;
                    console.log(badGuy.health + "bad guy hp")
                    //    player victory condition
                    if (badGuy.health <= 0) {
                        document.getElementById('battle_feed').innerHTML ="<div>" + enemy.name + "was defeated!  Your party gained " + badGuyMoney + " dollars. </div>";
                     };
                        SancCity.convoy.money += badGuyMoney;

                         document.getElementById('victory_button').classList.remove('hidden');
                         document.getElementById('fight_banner').innerText = "Victory!  You gained " +badGuyMoney+" dollars!"
                         document.getElementById('victory_button').addEventListener('click', function () {
                        document.getElementById('fight_container').classList.add('hidden');
                        document.getElementById('victory_button').classList.add('hidden')
                   
                        SancCity.session.resume();
                    })

                }  else document.getElementById('battle_feed').innerHTML = "<div> Turn " + turn+": You swing and miss </div>" + document.getElementById('battle_feed').innerHTML;
                let badGuyAttack = Math.floor((Math.random() * 20) + 1);

                
                console.log(badGuyAttack+ " bad  guy attack")
                
                    if (badGuyAttack>13 && badGuy.health >0){
                        var enemy_damage = Math.floor((Math.random() * 6) + 1); {
                            document.getElementById('battle_feed').innerHTML = "<div> Turn: " + turn+":"+ badGuy.name+ " hit for " + enemy_damage + "damage! </div>" + document.getElementById('battle_feed').innerHTML;
                            user.health -= enemy_damage;
                            if (user.health <=0){
                                SancCity.convoy.people.shift();
                                document.getElementById('victory_button').classList.remove('hidden');
                                document.getElementById('fight_banner').innerText = "You lose.  Someone died. "
                                document.getElementById('victory_button').addEventListener('click', function () {
                            document.getElementById('fight_container').classList.add('hidden');
                            document.getElementById('victory_button').classList.add('hidden')
                           
                            SancCity.session.resume();
                            }
                        )
                    }
                } 
        } else if (badGuy.health >0){document.getElementById('battle_feed').innerHTML = "<div> Turn: " + turn+": " + badGuy.name+" swings and misses </div>" + document.getElementById('battle_feed').innerHTML;}
        })
    
    
               
               
        
    }
}



SancCity.gameMaster.startFight=function() {
    SancCity.session.pause();
    
   

    var filteredEnemeies = [];
    for (i = 0; i < enemies.length; i++) {
        if (enemies[i].cr <= SancCity.cr) {
            filteredEnemeies.push(enemies[i])
        }
    }
    let randomRoll = Math.floor(Math.random() * filteredEnemeies.length);
    console.log(randomRoll + "RANDOM ROLL FOR DETERMINING FIGHT ")
    enemy =filteredEnemeies[randomRoll];
    console.log(enemy)
    document.getElementById('enemy_name').innerText = enemy.name;
    // document.getElementById('enemy_image').style.backgroundImage = "url(" + enemy.image_path + ")"
    document.getElementById("battle_feed").innerText = "A " + enemy.name + " stands in your way. " + enemy.flavorText;
    SancCity.gameMaster.battleMode();
}







// randomeEncounter brings back a random number and combs through our array
SancCity.gameMaster.randomEncounter = function () {

    let encounterIndex = Math.floor(Math.random() * this.types.length);
    console.log(encounterIndex)
    let encounterData = this.types[encounterIndex];
    console.log(encounterData)

    if (encounterData.type === "CHANGE-STATS" && encounterData.stat === "people") {
        SancCity.convoy.people.push(" Rando person")
        $(document).ready(function () {
            $("#myModal").modal()
        });

        document.getElementById('modal_text').innerText = encounterData.text + " " + encounterData.stat + ": rando person joined";
        SancCity.session.pause();

        SancCity.interface.refreshConvoy();

    } else
    if (encounterData.type === "CHANGE-STATS") {
        SancCity.gameMaster.statChange(encounterData)
        $(document).ready(function () {
            $("#myModal").modal()
        });

        document.getElementById('modal_text').innerText = encounterData.text + " " + encounterData.stat + " " + encounterData.value;
        SancCity.session.pause();

        SancCity.interface.refreshConvoy();

    } else

    if (encounterData.type === "ENCOUNTER") {
        $(document).ready(function () {
            $("#myModal").modal()
        })
        SancCity.session.pause();
        SancCity.interface.refreshConvoy();
    } else
    if (encounterData.type === "SHOP") {
        document.getElementById('shop_name').innerText = encounterData.name
        this.interface.showShop();
        SancCity.session.pause();
        SancCity.interface.refreshConvoy();
    } else
    if (encounterData.type === "CHANGE-STATS-PEOPLE-BAD") {
        thisPoorBastard = "";
        SancCity.gameMaster.personDead();
        $(document).ready(function () {
            $("#myModal").modal()
        });

        document.getElementById('modal_text').innerText = encounterData.text + " " + thisPoorBastard + " is GONE!";
        SancCity.session.pause();
        SancCity.interface.refreshConvoy();

    } else
    if (encounterData.type === "FIGHT") {
        SancCity.gameMaster.startFight();
    }
}

// Here we add whatever the stat is from randomEncounter to our total
SancCity.gameMaster.statChange = function (encounterData) {
    if (encounterData.value + this.convoy[encounterData.stat] >= 0) {
        this.convoy[encounterData.stat] += encounterData.value;
        this.interface.notify(encounterData.text + " " + (encounterData.value) + " " + encounterData.style);
    }
}

SancCity.gameMaster.personDead = function () {
    num = Math.round(Math.random(SancCity.convoy.people.length));
    console.log(num)
    thisPoorBastard = SancCity.convoy.people[num];
    SancCity.dead_people.push(thisPoorBastard);
    SancCity.convoy.people.splice(num, 1)
};