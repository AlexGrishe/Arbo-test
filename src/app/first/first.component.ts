import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GoogleMap} from "@capacitor/google-maps";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement> | any;
  newMap: GoogleMap | undefined;

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
