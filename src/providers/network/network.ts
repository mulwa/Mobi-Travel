import { AuthenticationProvider } from './../authentication/authentication';
import { HttpClient } from '@angular/common/http';
import { Events, ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network'

export enum ConnectionStatus {
  Online,
  Offline
}

@Injectable()
export class NetworkProvider {  
  public disconnectSubscription
  public connectSubscription

  constructor(public http: HttpClient,
              public network:Network,
              public modalCtl:ModalController,
              public authProvider:AuthenticationProvider,
              public event:Events) {
  
    
  }
  public checkOnDisconnectionStatus(){    
    this.disconnectSubscription = this.network.onDisconnect().subscribe((data) =>{
      console.log('You have no internet connection'+data)
      // this.authProvider.showToast('You Now Offline')
      this.modalCtl.create('NetworkErrorPage').present();
    }, error =>{
      console.log('an Error has occured on OnDisconnect Method'+error)
    })

  }
  public checkOnConnectionStatus(){
    this.connectSubscription = this.network.onConnect().subscribe((data)=>{
      console.log(data)
      // console.log('You have Intenet connection: '+this.network.type)
      this.authProvider.showToast('You are Now Online'+data.type)
    }, error =>{
      console.log('an error has occured on Onconnect Method')
    })

  }
  public unSubscribeNetwork(){
    this.connectSubscription.unsubscribe()
    this.disconnectSubscription.unsubscribe()
  }
  public getNetworkType(): string {
    return this.network.type
  }

}
