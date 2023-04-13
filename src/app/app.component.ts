import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  randomText = lorem.sentence();
  enteredText = "";

  handleUserInput(e:Event){
    const parsedData = e.target as HTMLInputElement;
    console.log(parsedData.value);
    this.enteredText = parsedData.value
  
  }

  compare(randomLetter:string,enteredLetter:string){
    if(!enteredLetter){
      return 'pending'
    }

    return randomLetter === enteredLetter ? 'green':'red';
  }

}
