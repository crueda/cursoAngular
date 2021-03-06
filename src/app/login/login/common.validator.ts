import { FormControl } from '@angular/forms';

export class CommonValidator {
    static startWithNumber(control: FormControl) {
        const firstChar = control.value.charAt(0);
        if (firstChar && !isNaN(firstChar)) {
            return {'startWithNumber': true};
        } else {
            return null;
        }
    }

    static userTaken(control: FormControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                ('crueda' === control.value) ? 
                resolve({'userTaken': true}) : resolve(null);
            },2000);
        });
    }    
}