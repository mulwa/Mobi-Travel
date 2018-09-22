import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'recommend-destination',
  templateUrl: 'recommend-destination.html'
})
export class RecommendDestinationComponent {

  @ViewChild('slider') slider: Slides;

  // List of Recommend Destination
  recommendDestination: any = [];

  constructor(public dataProvider: DataProvider) {
  }

  /** Do any initialization */
  ngOnInit() {
    this.getRecommendDestination();
  }

  ngAfterViewInit() {
    this.slider.freeMode = true;
  }

  getRecommendDestination() {
    this.recommendDestination = this.dataProvider.getRecommendDestination();
  }

}
