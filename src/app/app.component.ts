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
  isStarted = false;
  wrong = 0;


 

  handleUserInput(e:Event){
    const parsedData = e.target as HTMLInputElement;
    console.log(parsedData.value);
    this.enteredText = parsedData.value
  
  }

  handleStartGame(){
    this.isStarted = true;
  }

  getSrc(){
    let percentage = (this.wrong/this.randomText.length) * 100;
  
    if( percentage > 50 && percentage < 75){
     
      return '/assets/silver-cup.png';
      
    }else if(percentage > 75){
      return '/assets/bronze-cup.png';
     
    }else{
      return '/assets/award.png';
    }
  }

  compare(randomLetter:string,enteredLetter:string){
    if(!enteredLetter){
      return 'pending'
    }

    if(randomLetter !==enteredLetter){
      this.wrong ++;
    }

    return randomLetter === enteredLetter ? 'green':'red';
  }

}
