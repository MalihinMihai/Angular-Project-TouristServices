import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {ViewChild, ElementRef, } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  //Event pentru Logout
  @Output() Logout = new EventEmitter<void>();
  //Decorator google map
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 25,
    minZoom: 8,
  }
  //Markere
  infoContent;
  markers = [
    {
      position:
      {
        lat:  45.64864999896468,
        lng:  25.598440439147943
      },
      label:
      {
        color:"white",
        text:"Hotel Ambient"
      },
      title:"Hotel Ambient",
      info:"Nume: Hotel Ambient - Adresa: Strada Lungă 75, Brașov 500035 - Telefon: 0268 416 080 - Tip-Serviciu : Cazare",

     options:
     {
      animation: google.maps.Animation.DROP
     }
},
{
  position:
      {
        lat: 45.6490002,
        lng: 25.5827594
      },
      label:
      {
        color : 'white',
        text:"Vila Lucky"
      },
      title:"Vila Lucky",
      info:"Nume: Vila Lucky - Adresa: Strada Lungă 75, Brașov 500035 - Telefon: 0268 416 080 - Tip-Serviciu : Cazare",

     options:
     {
      animation: google.maps.Animation.DROP
     },
},

{
  position:
      {
        lat: 44.945910,
        lng: 26.033682
      },
      label:
      {
        color : 'white',
        text:"Hotel Forum Ploiesti"
      },
      title:"Hotel Forum Ploiesti",
      info:"Nume: Hotel Forum Ploiesti - Adresa: Strada Gheorghe Doja 215 A, Ploiești 100176 - Telefon: 0268 416 080 - Tip-Serviciu : Cazare",

     options:
     {
      animation: google.maps.Animation.DROP
     },

},


{
  position:
      {
        lat: 44.937033,
        lng: 26.043387
      },
      label:
      {
        color : 'white',
        text:"Hotel Club Seva"
      },
      title:"Hotel Club Seva",
      info:"Nume: Hotel Club Seva - Adresa: Strada Erupției 1, Câmpina 105600 - Telefon: 0268 416 080 - Tip-Serviciu : Cazare",

     options:
     {
      animation: google.maps.Animation.DROP
     },

}

];

  
  constructor(public toastController: ToastController, private router: Router,public firebaseService:FirebaseService) {}
  ngOnInit() {

  }
  //Functie logout
  logout()
  {
    this.firebaseService.logout();
    this.Logout.emit();
    this.router.navigateByUrl('/login');
  }



  //Obtine locatia curenta a utilizatorului daca apasa butonul
  findmyLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 45.657974,
        lng: 25.601198,
      }
    })
  }
  //Click event pentru toast
  click(event: google.maps.MouseEvent) {
    this.presentToast();
    
  }

  //Functie add markers
 addMarker() {
    this.markers.push({
      position: {
        lat: 45.651879,
        lng: 25.598016
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
}
  openInfo(marker: MapMarker, content) {
    this.infoContent=content;
    this.info.open(marker)
  }
  //Toast pentru click oriunde pe harta
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Apasa pe unul din markere-le prezente pe harta.',
      duration: 2000
    });
    toast.present();
  }

  //GoToFilters
  filters()
  {
    this.router.navigateByUrl('/filter');
  }

}


