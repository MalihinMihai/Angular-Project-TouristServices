import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef, } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  }
  markers = [
    {
      position:
      {
        lat: 45.651879,
        lng:25.598016
      },
      label:
      {
        color : 'red',
        text:"Marker"
      },
      title:"Marker",
      info:"asd",

     options:
     {
      animation: google.maps.Animation.DROP
     }
},
{
  position:
      {
        lat: 45.653707,
        lng:25.599260
      },
      label:
      {
        color : 'green',
        text:"Marker"
      },
      title:"Marker",
      info:"Hellow",

     options:
     {
      animation: google.maps.Animation.DROP
     }
}

    
  ];
  infoContent;
  

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 45.651879,
        lng: 25.598016,
      }
    })
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  click(event: google.maps.MouseEvent) {
    console.log(event)
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }

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
    this.infoContent = content
    this.info.open(marker)
  }

 
}


