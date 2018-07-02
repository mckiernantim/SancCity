import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class SlideComponent {
  title = 'slide';
}


export class UserComponent {
  first_name:string ='john';
  last_name:string = 'doe';
  age:number = 30;
  address = {
      city: "Boston",
      street: "main street",
      state: 'MA'

  }

  constructor(){
      console.log('building slide');
      this.sayHi();
      console.log(this.age);
      this.hasBirthday();
      console.log(this.age);
  }
  sayHi (){
      console.log(`hello ${this.first_name}`)
  }
  hasBirthday (){
      this.age+=1;
      
  }

}