import { Component, OnInit, EventEmitter } from '@angular/core';
import {Input, Output} from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-data-binding-child-example',
  templateUrl: './data-binding-child-example.component.html',
  styleUrls: ['./data-binding-child-example.component.css']
})
export class DataBindingChildExampleComponent implements OnInit {

  @Input() message: string
  @Output() sendMessage = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit() {
  }

  send() {
    this.sendMessage.emit('Noooooo');
  }

  navegar() {
    //this.router.navigateByUrl('/directives');
    //this.router.navigateByUrl('/detail/23');
    //this.router.navigateByUrl('/detail');
    this.router.navigate(['/detail', 23]);
  }
}


