import {Component,OnChanges, Input} from '@angular/core';
import { HttpClient } from "@angular/common/http"; 

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnChanges {
  @Input() subject:string; 
  questions:any=[];
  result:any=[];
  fileUrl:string='';
  isSubmited:boolean=false;
  constructor(private httpClient: HttpClient) {  
  }

  ngOnChanges(): void { 
    // console.log(this.subject); 
    this.fileUrl='./assets/json/'+this.subject+'.json'; 
    this.httpClient.get(this.fileUrl).subscribe(data =>{ 
      this.questions=data; 
    }) 
    for (let que = 0; que < this.questions.length; que++) {
      this.result['answer'+this.questions[que]['id']]='';
      this.result['result'+this.questions[que]['id']]='';
    }
  }   
  ionViewWillEnter(){
    console.log(this.subject); 
  }
  onSubmit(answers:any){
    
    for (let que = 0; que < this.questions.length; que++) {
      this.result['answer'+this.questions[que]['id']]=this.questions[que]['answer'];
      const quest = this.questions[que];   
      const answr = answers['answer'+quest.id]; 
      var option_text=quest['option'+answr];  
      
      if(option_text==quest.answer){ 
        var que_result='correct';
      }else{ 
        var que_result='wrong';
      }  
      this.result['result'+this.questions[que]['id']]=que_result;
      this.isSubmited=true;
    }  
    console.log(this.result); 
  }

}
