import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { username, api_key, hash, baseUrl } from '../../models/constants';
import { BusDetails } from '../../Interfaces/BusDetails';


@Injectable()
export class BusProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BusProvider Provider');
  }
  getSchedule(from:number,to:number, travel_date:string){
    let body = {
      username: username,
      api_key: api_key,
      action:"SearchSchedule",
      hash:hash,
      travel_from:from,
      travel_to:to,      
      travel_date:travel_date,               
    }
    return this.http.post<BusDetails>(baseUrl,body);
  }

}
