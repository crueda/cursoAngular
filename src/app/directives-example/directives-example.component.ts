import { ColorsService } from './../colors.service';
//import { LanguageServiceService } from './../language-service.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css'],
  providers: [ColorsService]
})
export class DirectivesExampleComponent implements OnInit {

  show: boolean;
  colors: string[];
  language: string;
  // tslint:disable-next-line:no-trailing-whitespace
  
  constructor(@Inject(ColorsService) private colorsService: ColorsService/*, @Inject(LanguageServiceService) private languageService: LanguageServiceService */) { }

  ngOnInit() {
    this.show = false;
    //this.colors = ['red','blue','orange','purple']
    this.colors = this.colorsService.getColors();
//    this.language = this.languageServiceService.getLanguage();
  }

}
