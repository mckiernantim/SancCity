
var SancCity = SancCity || {}

SancCity.interface = {};
SancCity.interface.status_count = 0;


// this send s a messaage to the user
SancCity.interface.notify = function (message, type){

    document.getElementById('feed').innerHTML = '<div id="update-' + SancCity.interface.status_count + '">Day '+ Math.ceil(this.convoy.day) + ': ' + message+'</div>' + document.getElementById('feed').innerHTML;
    SancCity.interface.status_count++;
    let i = SancCity.interface.status_count;
    if (i >= 10 ){
        document.getElementById("update-"+(i-10)).remove()
    }
};

//  this will refresh the stats of our convoy
 SancCity.interface.refreshConvoy = function(){
     if (this.convoy.day) { 
        document.getElementById("stat_day").innerText = "Current Day: " + Math.round(this.convoy.day);
        document.getElementById("stat_money").innerText = "Money: " + this.convoy.money;
        document.getElementById("stat_food").innerText = "Food: " + Math.round(this.convoy.food);
        document.getElementById("stat_water").innerText = "Water: " + Math.round(this.convoy.water);
        document.getElementById("stat_gas").innerText = "Gas: " + this.convoy.gas;
        document.getElementById("stat_gear").innerText = "Gear: " + this.convoy.gear;
        document.getElementById("stat_people").innerText = "People: " + this.convoy.people;
        document.getElementById("stat_distance").innerText = "Distance Traveled: " + this.convoy.distance;
        }
      
 }
 SancCity.interface.showShop = function(){

    // get a handle on a random shop
     let hiddenShop = document.getElementById("hidden-store");
     let randomIndex = (Math.floor((Math.random() * SancCity.shops.length)));
     let thisShop = SancCity.shops[randomIndex];
     console.log(thisShop)
     
    //  populate our now visible div
     hiddenShop.classList.remove("hidden");
    // set up button to resume game and leave shop
     document.getElementById("leave_btn").addEventListener('click', function(){
         hiddenShop.classList.add("hidden");
         SancCity.session.resume()

     })
   
    //  grab the items from the random table and populate the shop
     document.getElementById('item_1').innerText = thisShop[0].name;
     document.getElementById('item_1_price').innerText = thisShop[0].price;
     document.getElementById('item_1_quantity').innerText = thisShop[0].quantity;

     document.getElementById('item2').innerText = thisShop[1].name;
     document.getElementById('item2_price').innerText = thisShop[1].price;
     document.getElementById('item2_quantity').innerText = thisShop[1].quantity;

     document.getElementById('item_3').innerText = thisShop[2].name;
     document.getElementById('item_3_price').innerText = thisShop[2].price;
     document.getElementById('item_3_quantity').innerText = thisShop[2].quantity;
    
     document.getElementById("buy1").addEventListener('click', function purchaseItemOne(){
         
        
         let item = document.getElementById("item_1").innerText;
        
         let price = parseInt(document.getElementById("item_1_price").innerText, 10)
       
         let num = parseInt(document.getElementById("item_1_input").value)
       
         let total =  price * num;
         if(total > SancCity.convoy.money){
             SancCity.interface.notify("Sorry you don't have that kind of money")
         }
         else{
            
            SancCity.convoy.money -= total
            SancCity.convoy[item] += num
            document.getElementById('item_1_quantity').innerText -= num
            console.log[item]
            console.log(SancCity.convoy[item])
            SancCity.interface.refreshConvoy();
            }
        })
    document.getElementById("buy2").addEventListener('click', function purchaseItemTwo(){
         
           
            let item = document.getElementById("item2").innerText;
           
            let price = parseInt(document.getElementById("item2_price").innerText, 10)
          
            let num = parseInt(document.getElementById("item2_input").value)
          
            let total =  price * num;
            if(total > SancCity.convoy.money){
                SancCity.interface.notify("Sorry you don't have that kind of money")
            }
            else{
               
               SancCity.convoy.money -= total
               SancCity.convoy[item] += num
               document.getElementById('item2_quantity').innerText -= num
               
               SancCity.interface.refreshConvoy();
               }
           })
    document.getElementById("buy3").addEventListener('click', function purchaseItemTwo(){
         
           
            let item = document.getElementById("item_3").innerText;
           
            let price = parseInt(document.getElementById("item_3_price").innerText, 10)
          
            let num = parseInt(document.getElementById("item_3_input").value)
          
            let total =  price * num;
            if(total > SancCity.convoy.money){
                SancCity.interface.notify("Sorry you don't have that kind of money")
            }
            else{
               
               SancCity.convoy.money -= total
               SancCity.convoy[item] += num
               document.getElementById('item_3_quantity').innerText -= num
               
               SancCity.interface.refreshConvoy();
               }
           })
        }

        SancCity.interface.andreaShop = function(){
            let thisShop = SancCity.andreasShop;
            populateShop(thisShop);
            


        }

    SancCity.interface.populateShop = function(shop_object){
        for(let i=1; i<=shop_object.length;i++){
            console.log('item_'+i.toString())
            document.getElementById('item_'+i.toString()).innerText =shop_object[i]; 
            console.log(shop_object[i])
            document.getElementById('item_'+i.toString()+'_price').innerText = shop_object[i].price;
            document.getElementById('item_'+i.toString()+'_quantity').innerText = shop_object[i].quantity;
        }
         
    }
