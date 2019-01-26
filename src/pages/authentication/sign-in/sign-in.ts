import { HomePage } from './../../home/home';
import { userAuth } from './../../../models/UserAuth';
import { AuthenticationProvider } from './../../../providers/authentication/authentication';


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController,App } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { username } from '../../../models/constants';
import { api_key } from '../../../models/constants';
import { LoadingController,AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  // Sign In Form
  signInForm: FormGroup;
  user:userAuth;

  // Email Validation Regex Patter
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public menuCtrl: MenuController,
    private loadingCtrl:LoadingController,
    private  alertCtrl:AlertController,
    private appCtrl:App,
    private  toastCtrl:ToastController,
    private authProvider:AuthenticationProvider) {
    this.menuCtrl.enable(false); // Disable SideMenu
  }

  /** Do any initialization */
  ngOnInit() {
    this.formValidation();
  }

  /***
   * --------------------------------------------------------------
   * Form Validation
   * --------------------------------------------------------------
   * @method    formValidation    This function build a Login form with validation
   * 
   */
  formValidation() {
    this.signInForm = this.formBuilder.group({
      username: username,
      api_key: api_key, 
      action:"UserLogin",           
      clerk_username: ['', Validators.compose([Validators.minLength(10), Validators.required])],
      clerk_password: ['']
    });
  }

  /**
   * --------------------------------------------------------------
   * Login Action
   * --------------------------------------------------------------
   * @method doLogin    Login action just redirect to your home page.
   * 
   * ** You can call any backend API into this function. **
   */
  doLogin() {   
    // this.navCtrl.setRoot('HomePage');   
    console.log(this.signInForm.value)    
    let loader = this.loadingCtrl.create({
      content: "Checking Credentials"      
    });
    loader.present().then(() =>{
      this.authProvider.authUser(this.signInForm.value).subscribe(result =>{
        console.log(result)
        loader.dismiss();
        let response =  result.response_code;
        const msg = result.response_message;
        if(response == 0){
          this.showToast(msg); 
          this.authProvider.storeUserCredentials(result.phone_number,result.email_address,result.first_name,result.last_name,
             result.id_number,result.postal_address,result.postal_code, result.city, result.country, result.username)         
          this.navCtrl.setRoot('HomePage');
          
        }else{
          this.showToast(msg);
        }
        console.log(result.response_code);
      },error =>{
        this.showToast(error.message)
        console.log(error)
        loader.dismiss();
      })

    })
    
  }

  /**
   * -------------------------------------------------------------
   * Go to Forget Password Page
   * -------------------------------------------------------------
   */
  goToForgetPasswordPage() {
    this.navCtrl.setRoot('ForgetPasswordPage');
  }

  /**
   * -------------------------------------------------------------
   * Go to Sign Up Page
   * -------------------------------------------------------------
   */
  goToSignUpPage() {
    this.navCtrl.setRoot('HomePage');
    // this.navCtrl.setRoot('SignUpPage');
  }
  showAlert(title:string, msg:string){
    const alert = this.alertCtrl.create({
      title:title,
      subTitle:msg,
      buttons:['Ok']
    });
    alert.present();    
  }
  showToast(msg:string){
    let toast = this.toastCtrl.create({
      message : msg,
      duration : 5000,
      position : 'bottom'
    });
    toast.present();
  }
}
