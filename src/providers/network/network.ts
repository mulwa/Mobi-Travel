import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network'

export enum ConnectionStatus {
  Online,
  Offline
}

@Injectable()
export class NetworkProvider {
  public previousStatus

  constructor(public http: HttpClient,
              public network:Network,
              public event:Events) {
  this.previousStatus = ConnectionStatus.Online
    
  }
  public initializeNetworkEvents():void {
    // checking for offline status
    this.network.onDisconnect().subscribe(() =>{
      if(this.previousStatus === ConnectionStatus.Online){
        this.event.publish('network:offline')
        this.previousStatus = ConnectionStatus.Offline
      }
    })
    // checking online status
    this.network.onConnect().subscribe(()=>{
      if(this.previousStatus == ConnectionStatus.Online){
        this.event.publish('network:online')
        this.previousStatus = ConnectionStatus.Online
      }
    })
  }
  public getNetworkType(): string {
    return this.network.type
  }

}
