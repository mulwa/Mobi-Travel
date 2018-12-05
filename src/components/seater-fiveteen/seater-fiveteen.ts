import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SeaterFiveteenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'seater-fiveteen',
  templateUrl: 'seater-fiveteen.html'
})
export class SeaterFiveteenComponent { 
  seat_selected = './assets/imgs/seat/selected.png';
  seat_not_available = './assets/imgs/seat/not-available.png';
  seat_available = './assets/imgs/seat/available.png';

  first_row:any;
  second_row:any;
  third_row:any;
  fourth_row:any; 
  fifth_row:any;
  total_seats:any;
  selected_seats:string[] = [];

  @Input()
  available_seats:any[]
  @Output()
    seatSelectionEvent = new EventEmitter<number>();

  constructor() {   
    this.initializeSeater15()
  }
  initializeSeater15(){
    this.first_row = ['1','1X','0'];
    this.second_row = ['2','3','4'];
    this.third_row = ['5','6','7'];
    this.fourth_row = ['8','9','10'];
    this.fifth_row = ['11','12','13','14'];
    // combine all the 11 seater array to one
    this.total_seats = this.first_row.concat(this.second_row, this.third_row, this.fourth_row,this.fifth_row);  
    console.log(this.total_seats) 
  }

  isDriverSeat(seatPos):boolean{    
    if(seatPos == 0){      
      return true;
    }   
    return false;    
  }
  selectSeat(seat){
    console.log(`selecte seat is ${seat}`)
    let index = this.selected_seats.indexOf(seat);
    if(index !== -1){
      this.selected_seats.splice(index,1)
      this.seatSelectionEvent.emit(seat)
    }else{
      this.selected_seats.push(seat)
      this.seatSelectionEvent.emit(seat)
    }
  }
  clearSelectedSeats(){
    this.selected_seats = []
  }
  checkIfselected(seatPos){
    if(this.selected_seats){
      if(this.selected_seats.indexOf(seatPos) !== -1){
        console.log(this.seat_selected)
        return this.seat_selected;
        
      }else{
        console.log(this.seat_available)
        return this.seat_available;
      }
    }
  }
  checkIfAvailable(seatNo):boolean{
    return this.available_seats.includes(seatNo)
}
  

}
