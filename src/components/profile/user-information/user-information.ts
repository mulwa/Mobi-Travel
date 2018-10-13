import { Component } from '@angular/core';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';

@Component({
  selector: 'user-information',
  templateUrl: 'user-information.html'
})
export class UserInformationComponent {

  constructor(public authProv:AuthenticationProvider) {

   }
   getUsername(){
     return this.authProv.getUsername();
   }
   getFirstName(){
     return this.authProv.getFirstName()
   }
   getLastName(){
     return this.authProv.getLastName()
   }
   getIdNumber(){
     return this.authProv.getIdNumber()
   }
   getPostaAddress(){
     return this.authProv.getPostalAddress()
   }
   getPostalCode(){
     return this.authProv.getPostalCode()
   }
   getCity(){
     return this.authProv.getCity()
   }
   getCountry(){
     return this.authProv.getCountry()
   }
   getPhoneNumber(){
     return this.authProv.getUserPhoneNumber()
   }
   getEmail(){
     return this.authProv.getUserEmailAddress()
   }

}

