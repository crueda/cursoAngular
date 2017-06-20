import { Component, OnInit, EventEmitter } from '@angular/core';
import {Input, Output} from '@angular/core';

@Component({
  selector: 'app-data-binding-child-example',
  templateUrl: './data-binding-child-example.component.html',
  styleUrls: ['./data-binding-child-example.component.css']
})
export class DataBindingChildExampleComponent implements OnInit {

  @Input() message: string
  @Output() sendMessage = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  send() {
    this.sendMessage.emit('Noooooo');
  }
}


