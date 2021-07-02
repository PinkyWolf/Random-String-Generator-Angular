import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';


// import { MyService } from '../services/obs'

const generator = getRandomString();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random String Generator';
  gen = generator;
  subscription!: Subscription;
  intervalId!: number;
//TODO сделать рефреш генератора и накинуть проверки на полиндром, цифры и наличие 0 в строке. при полиндроме надо красить текст в зелёный, при цифрах в синий.
  ngOnInit() {
    const source = interval(300);
    const text = generator;
    this.subscription = source.subscribe(val => this.opensnack(text));
  }

  opensnack(generator:string) {
    console.log(generator);
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
};

function getRandomString() {
  let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for ( var i = 0; i < 5; i++ ) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));    
  }
  return result
}
// function refreshString() {
//   let refresh = setInterval(getRandomString(), 1000);
//   return refresh
// }

  function palindrome(e:string) {
  var re = /[\W_]/g;
  var lowRegStr = e.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
  }
