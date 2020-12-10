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

  //Markere
  info_content: any = [];
  markers: any = [
    {
        nume: "Marker 1",
        latitudine: "45.648129",
        longitudine: "25.569335"
    },
    {
      nume: "Marker 2",
      latitudine: "45.653705",
      longitudine: "25.598465"

      
    }
  ];


   constructor() {}
   ionViewDidEnter(){
   this.showMap();
    }

    //Metoda adaugare marker
    addmarker(markers) {
      for (let marker of markers) {
        let position = new google.maps.LatLng(marker.latitudine, marker.longitudine);
        let mapMarker = new google.maps.Marker({
          position: position,
          nume: marker.nume,
          latitudine: marker.latitudine,
          longitudine: marker.longitudine
        });
  
        mapMarker.setMap(this.map);
        this.info(mapMarker);
      }
    }
    //Fereastra pentru afisarea informatiilor din marker
    info(marker) {
      //Afiseaza nume,latitune,logitudine sau informatii despre locatie
      let content = '<div id="content">' +
                                '<h2 id="firstHeading" class"firstHeading">' + marker.nume + '</h2>' +
                                '<p>Latitude: ' + marker.latitudine + '</p>' +
                                '<p>Longitude: ' + marker.longitudine + '</p>' +
                              '</div>';
  
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });
      //Listener pentru click - tap pe marker
      marker.addListener('click', () => {
        this.closeAllInfoWindows();
        infoWindow.open(this.map, marker);
      });
      this.info_content.push(infoWindow);
    }
  
    closeAllInfoWindows() {
      for(let window of this.info_content) {
        window.close();
      }
    }
    
    //Metoda harta
    showMap(){
    const location = new google.maps.LatLng(45.648129, 25.569335);
    const options = {
    center: location,
    zoom: 15,
    disableDefaultUI: true
}
this.map = new google.maps.Map(this.mapRef.nativeElement,options);
//Adaugarea markerelor din lista de markere
this.addmarker(this.markers);
}


  ngOnInit() {
  }

}
