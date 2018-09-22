import { Component, Input } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'header-three',
  templateUrl: 'header-three.html'
})
export class HeaderThreeComponent {

  @Input('title') title: string; // Page Title

  constructor(public viewCtrl: ViewController) { }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
