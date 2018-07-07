var SancCity = SancCity || {}

SancCity.interface = {};


// this send s a messaage to the user
SancCity.interface.notify = function (message, type){
    document.getElementById('feed').innerHTML = '<div class="update-' + type + '">Day '+ Math.ceil(this.convoy.day) + ': ' + message+'</div>' + document.getElementById('').innerHTML;
};

//  this will refresh the stats of our convoy
 SancCity.interface.refreshConvoy = function(){
     if (this.convoy.day) { 
       
        }
        else{
    console.log( Math.round(this.convoy.food)  + " Water: " + Math.round(this.convoy.food))
        }
 }

