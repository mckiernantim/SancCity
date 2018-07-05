var SancCity = {} || SancCity

SancCity.gameMaster= {};



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
        
    


    // randomeEncounter brings back a random number and combs through our array
SancCity.gameMaster.randomEncounter = function(){

    let encounterIndex = Math.floor(Math.random() * this.types.length);
    console.log(encounterIndex)
    let encounterData = this.types[encounterIndex];
    console.log(encounterData)

    if(encounterData.type === "CHANGE-STATS"){
        SancCity.gameMaster.statChange(encounterData);
        $(document).ready(function(){
            $("#myModal").modal()
           });
      
           document.getElementById('modal_text').innerText = encounterData.text + " " +encounterData.stat + ": " +encounterData.value;
           SancCity.session.pause();
           SancCity.interface.refreshConvoy();
          
        }else 
    if(encounterData.type === "ENCOUNTER"){
        $(document).ready(function(){
            $("#myModal").modal()
           })
           SancCity.session.pause();
           SancCity.interface.refreshConvoy();
    }else
    if(encounterData.type === "SHOP"){
        document.getElementById('shop_name').innerText = encounterData.name
        this.interface.showShop();
        SancCity.session.pause();
        SancCity.interface.refreshConvoy();
    }
}
 // Here we add whatever the stat is from randomEncounter to our total
SancCity.gameMaster.statChange = function(encounterData){
    if(encounterData.value + this.convoy[encounterData.stat]>=0){
        this.convoy[encounterData.stat] += encounterData.value;
        this.interface.notify(encounterData.text + " " + ( encounterData.value) + " " + encounterData.style );
        }
    }
