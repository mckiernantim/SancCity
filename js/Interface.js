var SancCity = SancCity || {}

SancCity.interface = {};


// this send s a messaage to the user
SancCity.interface.notify = function (message, type){
    console.log(message +' - ' + type);
};

//  this will refresh the stats of our convoy
 SancCity.interface.refreshConvoy = function(){
     if (this.convoy.day) { 
         console.log("Day: " + Math.round(this.convoy.day)+ " Food: " + this.convoy.food  + " Water: " + this.convoy.water)
        }
        else{
    console.log( this.convoy.food  + " Water: " + this.convoy.water)
        }
 }