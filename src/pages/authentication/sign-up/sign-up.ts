/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Sign Up Component
 * File path - '../../../src/pages/authentication/sign-up/sign-up'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  // Registration Form
  registrationForm: any;

  // Email Validation Regex Patter
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public menuCtrl: MenuController) {
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
   * @method    formValidation    This function build a Registration form with validation
   * 
   */
  formValidation() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      email: ['', Validators.compose([Validators.pattern(this.emailPattern), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  /**
   * --------------------------------------------------------------
   * Registration Action
   * --------------------------------------------------------------
   * @method doRegistration    Registration action just redirect to your home page.
   * 
   * ** You can call any backend API into this function. **
   */
  doRegistration() {
    this.navCtrl.setRoot('HomePage');
  }

  /**
   * --------------------------------------------------------------
   * Go To Login Page
   * --------------------------------------------------------------
   * @method goToLoginPage    This action button just redirect to your login page.
   */
  goToLoginPage() {
    this.navCtrl.setRoot('SignInPage');
  }
}
