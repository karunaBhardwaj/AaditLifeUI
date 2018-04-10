import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';
import { Login } from '../login/login';
import { ResponseUtility } from '../../providers/response-utility';
import { RegisterPage } from '../users/register';
import { Config } from '../../providers/config';
import { LoginProvider } from '../../providers/login-provider';
import { Events } from 'ionic-angular';
import { ContactPage } from '../static/contact';
import { Menu } from './menus';
import { HomeEvents } from '../../providers/home-events';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements Menu {

  currentUser: any;
  registerCareHome = false;

  constructor(public navCtrl: NavController,
    public respUtility: ResponseUtility,
    public tokenService: Angular2TokenService,
    public config: Config,
    public events: Events,
    public homeEvents: HomeEvents,
    private loginProvider: LoginProvider) {

    this.homeEvents.registerMenu(this);

  }

  displayMsgs() {

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter HomePage ');
    this.currentUser = this.tokenService.currentUserData;
  }


  login() {
    this.navCtrl.push(Login);
  }


  logout() {
    this.respUtility.trackEvent("User", "Logout", "click");
    this.loginProvider.logout();
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  contact() {
    this.navCtrl.push(ContactPage);
  }

}