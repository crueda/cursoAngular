import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {

  show: boolean;
  colors: string[];

  constructor() { }

  ngOnInit() {
    this.show = false;
    this.colors = ['red','blue','orange','purple']
  }

}
