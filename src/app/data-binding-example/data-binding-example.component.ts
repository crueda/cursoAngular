import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.css']
})
export class DataBindingExampleComponent implements OnInit {

  //@Input() nombre: string
  texto: string


  messageFromChild: string;

  sendMessage(event){
    this.messageFromChild = event;
  }
  
  ngOnInit() {
    this.texto ='texto inicial'
  }

}
