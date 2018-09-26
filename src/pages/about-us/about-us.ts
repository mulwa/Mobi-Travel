import { OnInit } from '@angular/core';
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent About Us Component
 * File path - '../../src/pages/about-us/about-us'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage implements OnInit {
  seater_49:any;
  first_row:any;
  second_row:any;
  third_row:any;
  fourth_row:any;
  fifth_row:any;

  seater_11:any;
  first_col:any;
  second_col:any;
  third_col:any;
  
 
  

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
      
  } 
  ngOnInit(): void {
    
      this.first_row  = ['1A','3A','5A','7A','9A','11A','13A','15A','17A','19A','21A','23A'],
      this.second_row = ['2A','4A','6A','8A','10A','12A','14A','16A','18A','20A','22A','24A'],
      this.third_row  = ['25'],
      this.fourth_row  = ['1B','3B','5B','7B','9B','11B','13B','15B','17B','19B','21B','23B'],
      this.fifth_row = ['2B','4B','6B','8B','10B','12B','14B','16B','18B','20B','22B','24B'],

      
      this.first_col = ['1','2','5','8'],
      this.second_col = ['1x','3','6','9'],
      this.third_col = ['0','4','7','10']  
      
      this.seater_11 = this.first_col.concat(this.second_col, this.third_col)
     
    
    console.log(this.seater_11)
   
  }

  
}
