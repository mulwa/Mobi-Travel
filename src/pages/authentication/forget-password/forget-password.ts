/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Forget Password Component
 * File path - '../../../src/pages/authentication/forget-password/forget-password'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {

  // Forget Password Form
  forgetPasswordForm: any;

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
   * @method    formValidation    This function build a Forget Password Form with validation
   * 
   */
  formValidation() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(this.emailPattern), Validators.required])]
    });
  }

  /**
   * --------------------------------------------------------------
   * Forget Password Action
   * --------------------------------------------------------------
   * @method resetPassword    Forget Password action just redirect to your home page.
   * 
   * ** You can call any backend API into this function. **
   */
  resetPassword() {
    this.navCtrl.setRoot('HomePage');
  }

  /**
   * --------------------------------------------------------------
   * Skip Action
   * --------------------------------------------------------------
   * @method goToLandingPage    This action just redirect to your landing page.
   * 
   */
  goToLandingPage() {
    this.navCtrl.setRoot('LandingPage');
  }
}
