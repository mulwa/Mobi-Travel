/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Settings Page Component
 * File path - '../../src/pages/settings/settings'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  // Notification Status
  enableNotifications = true;

  // List of Language
  languages: any = [];

  // List of Payment Methods
  paymentMethods = ['JamboPay', 'JamboPay Wallet', 'Mpesa'];

  // List if Currencies
  currencies = ['Ksh', 'USD', 'GBP', 'CAD', 'SGD'];

  // Default Payment Method
  paymentMethod: any = 'JamboPay';

  // Default Currency
  currency: any = 'USD';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    public translateService: TranslateService,
    public platform: Platform) {
  }

  /** Do any initialization */
  ngOnInit() {
    this.getAllLanguages();
  }

  /**
   * -------------------------------------------------------------------
   * Get All Languages
   * -------------------------------------------------------------------
   * @method getAllLanguages
   */
  getAllLanguages() {
    this.http.get('assets/i18n/en.json').subscribe((languages: any) => {
      this.languages = languages.LANGUAGES;
    }, error => {
      console.error('Error: ' + error);
    });
  }

  /**
   * -------------------------------------------------------------------
   * Change Language
   * -------------------------------------------------------------------
   * @method changeLanguage
   * @param language      Selected Language
   * 
   * When language code 'ar' then the platform direction will be 'rtl' otherwise platform direction 'ltr' 
   */
  changeLanguage(language) {
    if (language === 'ar') {
      this.platform.setDir('rtl', true);
      this.translateService.setDefaultLang(language);
    } else {
      this.platform.setDir('ltr', true);
      this.translateService.setDefaultLang(language);
    }
  }

  // Logout
  logOut() {
    this.navCtrl.setRoot('LandingPage');
  }
}
