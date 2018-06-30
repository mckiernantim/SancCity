var SancCity = {} || SancCity

SancCity.gameMaster= {};


SancCity.gameMaster = {};


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
        type: 'CHANGE-STATS',
        style: 'negative',
        stat: 'people',
        value: -1,
        text: "A violent mob of red-hatted Americans come across your camp. You split up and flee to the desert.  When you regroup you notice someone is missing.  People: "
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
    }
    

]

SancCity.gameMaster.randomEncounter = function(){

    let gameEncounterIndex = Math.floor(Math.random() * this.types.length);
    let gameEncounterData = this.types[gameEncounterIndex];

    if(gameEncounterData.type= "CHANGE_STATS"){
        this.changeStat(gameEncounterData);
    }
};

SancCity.gameMaster.changeStat= function(gameEncounterData){
    if(gameEncounterData.value + this.convoy[gameEncounterData.stat]>=0){
        this.convoy[gameEncounterData.stat] += gameEncounterData.value;
        this.interface.notify(gameEncounterData.text + " " + ( gameEncounterData.value) + " " + gameEncounterData.style );
    }
};