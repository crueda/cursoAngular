import { CanComponentDeactivate } from './../confirm-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate } from '@angular/router';

@Component({
  selector: 'app-tutorial-detail-component',
  templateUrl: './tutorial-detail-component.component.html',
  styleUrls: ['./tutorial-detail-component.component.css']
})
export class TutorialDetailComponentComponent implements OnInit, CanComponentDeactivate {
   parametro: string
   parametro_query: string
  constructor(private activatedRoute: ActivatedRoute) { }

// tslint:disable-next-line:one-line
canDeactivate(): boolean{
  //console.log("-->canDeactivate del componente");
  return confirm('seguro?');

}

  ngOnInit() {
    this.parametro = this.activatedRoute.snapshot.params['id'];
    this.parametro_query = this.activatedRoute.snapshot.queryParams['id'];
  }

}
