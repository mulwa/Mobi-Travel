import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-jambopay-checkout',
  templateUrl: 'jambopay-checkout.html',
})
export class JambopayCheckoutPage {
  public jamboPayFrm:FormGroup;
  public checkout_msg:any;
  public reference_No:string;
  public navDetails:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authProv:AuthenticationProvider,
              public loadingCtrl: LoadingController,
              public frmBuilder:FormBuilder,
              public viewCtrl: ViewController,
              public appCtrl: App) {

    this.inializeForm();
    // getting the message from the checkout message
     
     this.navDetails =  navParams.get('data');
     this.checkout_msg = this.navDetails.message;
     this.reference_No = this.checkout_msg.split(" ")[0];

     console.log('reference no is'+this.reference_No)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JambopayCheckoutPage');
  }
  inializeForm(){
    this.jamboPayFrm = this.frmBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
    // this.appCtrl.getRootNav().setRoot('HomePage');
  }
  doPay(){
    let loader = this.loadingCtrl.create({
      content:"Please Wait Authorizing wallet Payment"
    });
    loader.present().then(()=>{
      this.authProv.authorizeJamboPayment(this.jamboPayFrm.get('username').value, this.jamboPayFrm.get('password').value,this.reference_No)
      .subscribe(data =>{
        loader.dismiss()
        console.log(data)
        if(data.response_code == 0){
          this.jamboPayFrm.reset()
        }
        this.authProv.showToast(data.response_message)
      }, error =>{
        loader.dismiss();
        console.log('an error has occured'+JSON.stringify(error))
      })
    })
  }

}
