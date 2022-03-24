import { Component,Output,EventEmitter} from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   
  title = 'online_test';
  imageUrl="./assets/logo.png"; 
  isOn:boolean=false; 
  selected_sub:string;
  router:Router;
  constructor(){}  
  submitted(event:string){   
    this.isOn=true;
    this.selected_sub=event;
    // console.log(this.selected_sub)  
  } 

  
  
}

