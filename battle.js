let player = {
    name: SancCity.convoy.people[0],
    health: 10,
    bonus: 2,
}

function startFight(){
    SancCity.session.pause();
   
    var filteredEnemeis = [];
    for (i=0;i<enemies.length;i++){
        if (enemies[i].cr<= SancCity.cr){
        filteredEnemeis.push(enemies[i])
    }
}
    var enemy = filteredEnemies[Math.floor(Math.random() * filteredEnemies.length) + 1] 
    document.getElementById('enemy_name').innerText= enemy.name;
    document.getElementById('enemy_image').style.backgroundImage="url(" +enemy.image_path+ ")"
    document.getElementById("battle_feed").innerText="A"+ enemy.name+ "stands in your way. " + enemy.flavorText;
    battleMode();
}

let enemies = [
    tikiNazi={
        cr: 1,
        name: "Tiki Nazi",
        image_path:"",
        health:6,
        bonus:2,
        power:4,
        flavorText:"He has a tiki torch...he doesn't look to tough"

    },
    racistCop={
        cr: 3,
        name: "Racist Cop",
        image_path:"",
        health:10,
        bonus:2,
        power:6,
        flavorText:"Drunk on power, this guy means business"

    },
    sherriffArpaio={
        cr: 5,
        name: "Sherrif Arpaio",
        image_path:"",
        health:10,
        bonus:5,
        power:8,
        flavorText:"The Soverign king of Racist White Men hefts a shotgun."

    },
    scaryNazi={
        cr: 2,
        name: "Scary Nazi",
        image_path:"",
        health:10,
        bonus:2,
        power:6,
        flavorText:"He weilds a baseball bat menacingly. "

    },
    borderPatrol={
        cr: 4
        name: "Border Patrol",
        image_path:"",
        health:8,
        bonus:2,
        power:6,
        flavorText:"He unfurls his baton ready to take you back across the border."

    },
    redneck={
        cr: 1,
        name: "Redneck Asshole",
        image_path:"",
        health:4,
        bonus:2,
        power:4,
        flavorText:"He raises his fists in his best UFC impression."

    },
    infoWarsIdiot={
        cr: 1,
        name: "Info Wars Moron",
        image_path:"",
        health:5,
        bonus:2,
        power:4,
        flavorText:"This babbling idiot screams conspiracy theories as he charges you."

    },
    pizzaGateBeliever={
        cr: 3,
        name: "Pizza Gate Believer",
        image_path:"",
        health:12,
        bonus:2,
        power:6,
        flavorText:"He screams about the globalist deeps state and charges you with a knife."

    },
     coyoteSmuggler={
        cr: 1,
        name: "Coyote Smuggler",
        image_path:"",
        health:6,
        bonus:2,
        power:6,
        flavorText:"The smuggler eyes you greedily and pulls a knife",

    },
    suburbanVigilante={
        cr: 1,
        name: "Suburban Vigilante",
        image_path:"",
        health:10,
        bonus:0,
        power:4,
        flavorText:"This woman already spoke to the manager....now she's running at you with a hammer"

    },
    
]



let battleMode =function(){
    user = {
        health:10,
        turn: true,
        bonus: player.bonus
    }
    badGuy = {
        turn: false,
        health: enemy.health,
    }
    if (player.turn == true){
        document.getElementById('attack_button').addEventListener("click", function(){
           let playerAttack =  Math.floor(Math.random() * 20) + 1 + player.bonus;
           if (playerAttack >12)
           
           
           
           
      
           if (playerAttack > 12)
           { var damage = Math.floor(Math.random() * 6) + 1 + player.bonus;
            {document.getElementById('battle_feed').innerHTML= "<div> You hit for " + damage + "damage! </div>"}
            badGuy.health -=damage;
             //    player victory condition
            if (badGuy.health <= 0){document.getElementById('battle_feed').innerText = enemy.name+ "was defeated!"};
                document.getElementById('victory_button').classList.remove('hidden');
                 document.getElementById('victory_button').addEventListener('click', function(){
                document.getElementById('fight_container').classList.add('hidden');
                SancCity.session.resume();
            })

        })
    }
}