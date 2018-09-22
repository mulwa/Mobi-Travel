
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Language Page Component
 * File path - '../../src/pages/language/language'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {

  // List of language
  languages: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    public platform: Platform,
    public translateService: TranslateService) {
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
   * Choose Language
   * -------------------------------------------------------------------
   * @method changeLanguage
   * @param language      Selected Language
   * 
   * When language code 'ar' then the platform direction will be 'rtl' otherwise platform direction 'ltr' 
   */
  changeLanguage(language) {
    if (language.ID === 'ar') {
      this.platform.setDir('rtl', true);
      this.translateService.setDefaultLang(language.ID);
    } else {
      this.platform.setDir('ltr', true);
      this.translateService.setDefaultLang(language.ID);
    }
  }
}
