import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef } from '@angular/core';


declare var google: any;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map:any;
  @ViewChild('map',{read: ElementRef, static: false}) mapRef: ElementRef;


   constructor() {}
   ionViewDidEnter(){
   this.showMap();
    }

    showMap(){
    const location = new google.maps.LatLng(45.648129, 25.569335);
    const options = {
    center: location,
    zoom: 15,
    disableDefaultUI: true
}
this.map = new google.maps.Map(this.mapRef.nativeElement,options);
}


  ngOnInit() {
  }

}
