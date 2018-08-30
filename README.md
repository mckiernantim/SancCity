# Sanctuary City!  The Game!
### Using only Javascript, Bootstrap, CSS and HTML5, SanctuaryCity is a reimagining of the Oregon Trail in the era of the 45th prsident.  The player leads a team of of travelers from Nogales, Mexico to Los Angeles, a Sanctuary City where they will be safe.  Along the way, food, gas, and water stores are depleeted as the game progresses, and radom events occur - including being attacked by tiki-torch weilding zealots...


 www.Sanctuarycitygame.com



## Hows it work?

the core of the game engine is a Javascript Timestamp saved to a variable 'pastTime' 

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
  once the check is made, the game progresses draining various resources at each step and making other rolls to see if random events happen.

## Random Events!

event.js contains a number of JSON objects and fucntions that randomly determine if the player is met with a random events from combat to resources depletion to new people joining the caravan.

## Coming soon!
Currently in development are "city events" and "trade caravans".  Trade caravans will allow players to trade money for supplies with random events to help them with their jounrey.  Also, upon reaching a town checkpoint - a city event will be a multi teired random event with big reward for big risks.

