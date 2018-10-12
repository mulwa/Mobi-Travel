import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';



@IonicPage()
@Component({
  selector: 'page-mpesa-checkout',
  templateUrl: 'mpesa-checkout.html',
})
export class MpesaCheckoutPage {
  public mpesaFrm:FormGroup;
  public checkout_msg:any;
  public reference_No:string;
  public navDetails:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public frmBuilder:FormBuilder,
              public authProvider: AuthenticationProvider,
              public loadingCtrl:LoadingController,
              public modalCtrl:ModalController,) {            
    
    // initialize form
    this.initializeForm();
    this.navDetails =  navParams.get('data');
    console.log(this.navDetails)
    this.checkout_msg = this.navDetails.message;
    this.reference_No = this.navDetails.reference_no;
     console.log('reference no Mpesa is'+this.reference_No)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MpesaCheckoutPage');
  }

  initializeForm(){
    this.mpesaFrm = this.frmBuilder.group({
      mpesa_phone_number:['', Validators.required]
    })
  }
  doPay(){
    console.log('Reference No:' +this.reference_No)
    console.log(this.mpesaFrm.value)
    let loader = this.loadingCtrl.create({
      content:"Please Wait Procesing Payment"
    });
    loader.present().then(()=>{
      this.authProvider.mpesaPayment(this.reference_No,this.mpesaFrm.get('mpesa_phone_number').value).subscribe((data)=>{
        loader.dismiss();
        if(data.response_code == 0){
          this.mpesaFrm.reset();
          this.openCongratulationPage('Mpesa CheckOut', data.response_message);

        }else{
          this.authProvider.showToast(data.response_message)
        }

      })

    })
  }
  // end doPay
  openCongratulationPage(from, message){
    let data = {
      from:from,
      message:message
    }   
    this.modalCtrl.create('CongratulationPage',{data:data}).present();
  }

}
