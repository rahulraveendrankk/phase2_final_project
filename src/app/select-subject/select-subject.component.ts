import { Component, OnInit, Output ,EventEmitter} from '@angular/core';  

@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.component.html',
  styleUrls: ['./select-subject.component.css']
})
export class SelectSubjectComponent implements OnInit {

  @Output() testSubject=new EventEmitter<string>(); 
  title = 'online_test';
  imageUrl="./assets/logo.png"; 
  constructor(){} 
  ngOnInit(): void {
  }
  onSubmit(value: any) {   
      // console.log(value.subject);
      this.testSubject.emit(value.subject);  
  }
 

}
