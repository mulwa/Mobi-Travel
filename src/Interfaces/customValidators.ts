import { AbstractControl } from '@angular/forms';
export class CustomValidators {
    static fullname (control:AbstractControl):{[s:string]:boolean}{
        let name = control.value;
        return null;

    }
}