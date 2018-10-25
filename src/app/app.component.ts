import { Observable } from 'rxjs/Observable';
import { NetworkProvider } from './../providers/network/network';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { DataProvider } from '../providers/data/data';
import { AuthenticationProvider } from '../providers/authentication/authentication';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // Root Page of Application
  rootPage: any ;

  // Side Menu Pages
  pages: any;

  // Selected Side Menu
  selectedMenu: any;
  login_status:boolean;
  isLoggedIn : Observable<boolean>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public authProvider:AuthenticationProvider,
    public translateService: TranslateService,
    public networkProvider:NetworkProvider,
    public event:Events,
    public dataProvider: DataProvider) {
    this.initializeApp();

    this.isLoggedIn = this.authProvider.isLoggedIn()

    // Set Default Language
    // translateService.setDefaultLang('en');
    if(authProvider.showSlide()){
      this.rootPage =  'LandingPage' 
      this.authProvider.disableSlide() 
      console.log('showing slide'+this.authProvider.showSlide())    
    }else{
      this.rootPage = 'HomePage'
      console.log('not showing Slide'+this.authProvider.showSlide())
    }

    // Get List of Side Menu Data
    this.getSideMenuData();

    this.login_status = this.authProvider.isAuthenticated();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();      
      // offline event      
      
    });
  }

  /**
   * Get Menu Data from Service of `DataProvider`
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getSideMenuData() {
    this.pages = this.dataProvider.getSideMenus();
  }

  /**
   * Open Selected Page
   * @param component 
   * @param index 
   */
  openPage(component, index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (component) {
      this.nav.setRoot(component);
      this.menuCtrl.close();
    } else {
      if (this.selectedMenu) {
        this.selectedMenu = 0;
      } else {
        this.selectedMenu = index;
      }
    }
  }

  // Logout
  logout(){
    this.authProvider.logOut()
  }
  
  login(){    
    this.nav.setRoot('SignInPage')
    
  }
}
