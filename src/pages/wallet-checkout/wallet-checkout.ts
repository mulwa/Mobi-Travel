import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-wallet-checkout',
  templateUrl: 'wallet-checkout.html',
  animations: [
    trigger('elementEntry',[
      state('void',style({
        transform: 'translateX(-100%)'
      })),
      transition('void => *', animate('500ms ease-out')),
      transition('* => void', [
        animate('500ms ease-in', style({
          transform: 'translateX(100%)'
        }))
      ])
    ]), 
  ]
})
export class WalletCheckoutPage {
  public walletForm:FormGroup;
  public checkout_msg:string;
  public navDetails:any;
  public reference_No: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authProv: AuthenticationProvider,
              public loadingCtrl: LoadingController,
              public frmBuilder: FormBuilder,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,) {
      this.initializeForm();

      // getting the message from the checkout message
      this.navDetails =  navParams.get('data');
      this.checkout_msg = this.navDetails.message;
      this.reference_No = this.checkout_msg.split(" ")[0];

      console.log('reference No:'+this.reference_No)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletCheckoutPage');
  }
  initializeForm(){
    this.walletForm = this.frmBuilder.group({
      username:['', Validators.required],
      password: ['', Validators.required]
    })
  }
  doPay(){
    let loader = this.loadingCtrl.create({
      content:"Please Wait Authorizing wallet Payment"
    });
    loader.present().then(()=>{
      this.authProv.authorizeWalletPayment(this.walletForm.get('username').value, this.walletForm.get('password').value, this.reference_No)
      .subscribe(data =>{
        loader.dismiss()
        console.log(data)
        if(data.response_code == 0){
          this.walletForm.reset();
          this.openCongratulationPage("Wallet",data.response_message)
          this.dismiss()
        }
        this.authProv.showToast(data.response_message)
      }, error =>{
        loader.dismiss();
        console.log('an error has occured'+JSON.stringify(error))
      })
    })
  }
  dismiss() {
    this.viewCtrl.dismiss();
    // this.appCtrl.getRootNav().setRoot('HomePage');
  }
  openCongratulationPage(from, message){
    let data = {
      from:from,
      message:message
    }   
    this.modalCtrl.create('CongratulationPage',{data:data}).present();
  }

}
