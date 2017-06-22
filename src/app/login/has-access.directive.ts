import { RolService } from './rol.service';
import { Directive, Input, ElementRef, OnInit} from '@angular/core';
@Directive({
  selector: '[appHasAccess]'
})
// tslint:disable-next-line:one-line
export class HasAccessDirective implements OnInit{

  @Input() rolPermitido: number;

  constructor(private el: ElementRef, private rolService: RolService) { }

  ngOnInit() {
    this.rolService.getRol().subscribe(
      rol => {
        console.log('Rol actual:' + rol);
        console.log('Rol permitido: ' + this.rolPermitido);
        if (this.rolPermitido === rol) {
          this.el.nativeElement.style.visibility = 'visible';
        } else {
          this.el.nativeElement.style.visibility = 'hidden';
        }
      }
    );
    }
}


