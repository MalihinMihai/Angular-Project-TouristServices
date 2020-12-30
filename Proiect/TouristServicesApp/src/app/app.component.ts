import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  isloggedin=true;
    public selectedIndex = 0;
    public appPages = [
   
    {
      title: 'About Us',
      url: '/about',
      icon: 'paper-plane'
    },
    {
      title: 'Rate US',
      url: '/folder/RateUS',
      icon: 'star'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'heart'
    },
   
  
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
      private statusBar: StatusBar,
     //Variabila pentru setarea paginii de login ca root.
      private router: Router,
      
      
  ) {
      this.initializeApp();
     
  }

  initializeApp() {
    this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    //Setare pagina login ca Root.
    this.router.navigateByUrl('login');
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
     
  }
}
